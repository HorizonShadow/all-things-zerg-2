import { Class } from 'meteor/jagi:astronomy';
import { Unit } from './Unit';
import 'array-flat-polyfill';
export const Builds = new Mongo.Collection('builds', { idGeneration: 'MONGO' });

const Step = Class.create({
  name: "Step",
  fields: {
    time: Number,
    unit: String
  },
  helpers: {
    getUnit() {
      return Unit.findOne({ name: this.unit });
    }
  }
});

export const Build = Class.create({
  name: "Build",
  collection: Builds,
  fields: {
    name: String,
    buildOrder: [Step]
  },
  meteorMethods: {
    import(name, buildOrder) {
      this.name = name;
      this.buildOrder = [];

      buildOrder = buildOrder.trim().split("\n");
      buildOrder.forEach(s => {
        let [supply, time, ...units] = s.trim().split(/\s+/);
        units = units.join(' ');
        units = units.split(',');
        units = units.map(unit => {
          let [unitName, qty, ..._] = unit.split(/x(\d+)/);
          unitName = unitName.trim()
          if (qty) {
            const multipleUnits = [];
            for (let i = 0; i < parseInt(qty, 10); i++) {
              multipleUnits.push(unitName);
            }
            return multipleUnits;
          } else {
            return unitName;
          }
        });
        console.log("units: ", units);
        units = units.flat();
        let [minutes, seconds] = time.split(":");
        seconds = (parseInt(minutes, 10) * 60) + parseInt(seconds);
        units.forEach(unit => {
          this.buildOrder.push(new Step({
            time: (minutes * 60) + seconds,
            unit
          }))
        });
      });
      return this.save();
    }
  }
});


Build.search = function (time, selectedUnits) {
  return Build.find({
    buildOrder: {
      $elemMatch: {
        time: {
          $lt: parseInt(time, 10)
        },
        unit: {
          $all: selectedUnits
        }
      }
    }
  });
};


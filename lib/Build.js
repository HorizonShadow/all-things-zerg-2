import { Class } from 'meteor/jagi:astronomy';
import { Unit } from './Unit';
export const Builds = new Mongo.Collection('builds',  { idGeneration: 'MONGO' });

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
            const buildOrderSteps = buildOrder.split("\n");
            buildOrderSteps.map(s => {
                try {
                    const [_, supply, time, ...units] = s.split(/\s+/);
                    console.log(time);
                    let [ minutes, seconds ] = time.split(":");
                    seconds = (parseInt(minutes, 10) * 60) + parseInt(seconds);
                } catch(e) {
                    console.log("Failed to parse line: " + s);
                }
            });
            console.log(name, buildOrder);
        }
    }
});


Build.search = function(time, selectedUnits) {
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


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

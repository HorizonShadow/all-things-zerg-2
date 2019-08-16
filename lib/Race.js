import { Class } from 'meteor/jagi:astronomy';

const Races = new Mongo.Collection('races', { idGeneration: 'MONGO' });

export const Race = Class.create({
    name: "Race",
    collection: Races,
    fields: {
        name: {
            type: String,
            index: 1
        }
    }
});

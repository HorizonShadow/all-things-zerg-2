import { Class } from 'meteor/jagi:astronomy';

export const Units = new Mongo.Collection('units');

export const Unit = Class.create({
    name: 'Unit',
    collection: Units,
    fields: {
        name: {
            type: String,
            index: 1
        },
        buildTime: Number,
        race: String
    }
});

import "reflect-metadata";
import SimpleSchema from 'simpl-schema';
import { schemas, collections } from './data';
import { Mongo } from 'meteor/mongo';

export function prop(opts = {}) {
    return (target: any, key: string) => {
        console.log(target, key);
        const Type = (Reflect as any).getMetadata('design:type', target, key);
        console.log(target, key, Type);
        const name = target.constructor.name;
        const schema = schemas[name] || {};
        let property = schema[key] || {};
        property = {
          ...property,
          ...opts,
          type: Type
        }

        schema[key] = property;
        schemas[name] = schema;
    };
}

export function collection(name:string) {
    console.log(name);
    return function(constructor:any) {
        console.log(constructor);
        let collection = collections[constructor.name];
        if(!collection) {
            collection = new Mongo.Collection(name, { idGeneration: 'MONGO' });
            collection.attachSchema(new SimpleSchema(schemas[constructor.name]));
            collections[constructor.name] = collection;
        }
    }
    
}
import { prop, collection } from './utils';
import Schema from './Schema';

@collection('races')
export class RaceSchema extends Schema {
    @prop() 
    name: string
}

export const Race = RaceSchema.getModel();
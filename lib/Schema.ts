import { collections } from './data';

export default class Schema {
    static getModel() {
        return collections[this.name];
    }
}
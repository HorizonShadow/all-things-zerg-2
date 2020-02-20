import {Meteor} from 'meteor/meteor';
import {Race} from '../lib/Race';
import {Unit} from '../lib/Unit';
import {Build} from '../lib/Build';
import { Accounts } from 'meteor/accounts-base';

Meteor.publish('build', id => {
    return Build.find({ _id: id });
});

Meteor.publish('builds', (value, selectedUnits) => {
    return Build.find({});
});

Meteor.publish('races', () => {
    return Race.find({});
});

Meteor.publish('units', () => {
    return Unit.find({});
});

Meteor.startup(() => {
    Race.upsert({name: "Protoss" }, { name: "Protoss" });
    Race.upsert({name: "Zerg"}, { name: "Zerg" });
    Race.upsert({name: "Terran"}, { name: "Terran" });

    Unit.upsert({name: "Pylon"}, {$set: {race: "Protoss", buildTime: 18}});
    Unit.upsert({name: "Gateway"}, {$set: {race: "Protoss", buildTime: 46}});
    Unit.upsert({name: "Assimilator"}, {$set: {race: "Protoss", buildTime: 21}});
    Unit.upsert({name: "Nexus"}, {$set: {race: "Protoss", buildTime: 71}});
    Unit.upsert({name: "Stargate"}, {$set: {race: "Protoss", buildTime: 43}});

    if(Meteor.users.find({}).fetch().length === 0) {
      Accounts.createUser({
        email: 'admin@allthingszerg.com',
        password: Meteor.settings['admin_password']
      })
    }
});

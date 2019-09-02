import {Meteor} from 'meteor/meteor';
import {Race} from '../lib/Race';
import {Unit} from '../lib/Unit';
import {Build} from '../lib/Build';

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

    Build.remove({});
    Build.insert({
        name: "Test",
        race: "Protoss",
        buildOrder: [
            {time: 17, unit: "Pylon"},
            {time: 43, unit: "Gateway"},
            {time: 44, unit: "Assimilator"},
            {time: 91, unit: "Nexus"},
            {time: 98, unit: "Cybernetics Core"},
            {time: 109, unit: "Assimilator"},
            {time: 117, unit: "Pylon"},
            {time: 171, unit: "Stargate"},
            {time: 189, unit: "Gateway"},
            {time: 214, unit: "Gateway"},
            {time: 230, unit: "Pylon"}
        ]
    });
});

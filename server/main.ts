import { Meteor } from 'meteor/meteor';
import { Race } from '/lib/Race';
import { schemas } from '/lib/data';

Meteor.startup(() => {
  console.log(schemas);
  if(!Race.findOne({ name: "Protoss"})) {
    Race.insert({ name: "Protoss" });
  }
  // code to run on server at startup
});

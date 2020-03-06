import {Meteor} from 'meteor/meteor';
import {Race} from '../imports/Race';
import {Unit} from '../imports/Unit';
import {Build} from '../imports/Build';
import { Accounts } from 'meteor/accounts-base';
import express from 'express';
import path from 'path';
import multer from 'multer';
import { exec } from 'child_process';

const uploads = multer({ dest: path.resolve(__dirname, "./uploads/") });
const api = express();

api.post('/upload', uploads.array('replays'), (req, res, next) => {

    req.files.forEach(file => {
        const path = file.path;
        exec(`s2prot -gameevts ${path}`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    });
    console.log("Uploading", req.files[0].path);
    next();
});

WebApp.connectHandlers.use(api);

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

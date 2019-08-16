import { Meteor } from 'meteor/meteor';
import App from '/client/ui/App';

Meteor.startup(() => {
  new App({
    target: document.querySelector('main')
  })
});
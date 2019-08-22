import { Meteor } from 'meteor/meteor';
import 'bulma/css/bulma.css';
import 'bulma-badge/dist/css/bulma-badge.min.css';
import App from '/client/ui/App';

Meteor.startup(() => {
  new App({
    target: document.querySelector('main')
  })
});
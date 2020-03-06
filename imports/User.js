import { Class } from 'meteor/jagi:astronomy';

const UserProfile = Class.create({
  name: 'UserProfile',
  fields: {
    nickname: String
    /* Any other fields you want to be published to the client */
  }
});

const User = Class.create({
  name: 'User',
  collection: Meteor.users,
  fields: {
    createdAt: Date,
    emails: {
      type: [Object],
      default: function() {
        return [];
      }
    },
    profile: {
      type: UserProfile,
      default: function() {
        return {};
      }
    }
  }
});

if (Meteor.isServer) {
  User.extend({
    fields: {
      services: Object
    }
  });
}
var Messages = {

  // create storage to store all messages
  _data: {},

  // create a method to use _.chain
  items: function() {
    return _.chain(Messages._data);
  },

  // method to add a new message from formView
  // setup a default callback in case one is not passed in
  add: function(message, callback = () => {}) {
    Messages._data[message.objectId] = message;
    callback(Messages.items());
  },

  // method to update MessageView when the Messages array changes
  // setup a default callback in case one is not passed in
  update: function(messages, callback = () => {}) {
    var length = Object.keys(Messages._data).length;

    for (var message of messages) {
      // each message will be stored in the data object where key is the objectId and value is equal to the message
      Messages._data[message.objectId] = Messages._conform(message);
    }


  },

  _conform: function(message) {
    // catch properties that are undefined
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }



};
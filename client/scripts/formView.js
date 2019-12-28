var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var message = {
      roomname: Rooms.selected || 'lobby',
      text: FormView.$form.find('input[name="message"]').val(),
      username: App.username,
    };

    // for the callback, use extend to copy properties from data object to message object, add the message to Messages
    Parse.create(message, (data) => {
      // Parse.create message will have objectId and createdAt properties. Copy those properties over to the message object, which currently has only roomname, text, username
      _.extend(message, data);
      // add a method to Messages model to add new messages
      // pass in callback to render messages
      Messages.add(message, MessagesView.render
      );
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
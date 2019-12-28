var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function() {
    MessagesView.$chats.html('');

    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      // iterate through the Messages array
      .each((message) => {
        // render each message using MessageView.renderMessage(message)
        MessagesView.renderMessage(message);
      });
  },

  renderMessage: function(message) {
    // render individual message
    var $message = MessageView.render(message);
    // prepend individual message to the DOM
    MessagesView.$chats.prepend($message);
  },

  handleClick: function(event) {
    var username = $(event.target).data('username');
    if (username === undefined) {
      return;
    }

    Friends.toggleStatus(username, MessagesView.render);
  }

};
var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();


    var messageContainer = {};
    console.log('USERNAME:', App.username);
    messageContainer.username = App.username;
    messageContainer.roomname = '';
    // var message = FormView.$form.find('input[name="message"]').val();
    var message = $('#message').val();
    messageContainer.text = message;
    Parse.create(messageContainer, (data) => {
      console.log('data', data);
      console.log('Message posted');
    });

    MessagesView.render();

    // call parse.create();
    // console.log('event', event);
    // console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
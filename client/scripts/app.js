var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    // Maybe we need restrict characters here i.e. '> <'
    App.username = window.location.search.substr(10);
    // Makes our views happen
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    // Once we have messages spinner should stop?
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // add an update method to Rooms
      Rooms.update(data.result, RoomsView.render);
      // add an update method to Messages to update the view each time new messages are added
      // pass in callbck to render messages with MessagesView.render();
      Messages.update(data.results, MessagesView.render);

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

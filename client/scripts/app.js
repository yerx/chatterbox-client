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
      // examine the response from the server request:
      // console.log(data.results);
      // var results = data;
      // let Messages.data = data.results;
      Messages.data = data.results;
      // console.log(Messages.data);
      var dataArray = data.results;
      Rooms.roomnames = [];
      RoomsView.roomnames = Rooms.roomnames;
      for (var i = 0; i < dataArray.length; i++) {
        var currentData = dataArray[i];
        if (currentData.roomname !== '' && currentData.roomname !== undefined) {
          Rooms.roomnames.push(dataArray[i].roomname);
        }
      }
      callback();
      // return results;
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

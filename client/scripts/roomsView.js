var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
    // when a room is selected and btn is clicked, change the room
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {

    RoomsView.$select.html('');

    Rooms
      .items()
      // iterate through the rooms
      .each(RoomsView.renderRoom);

    RoomsView.$select.val(Rooms.selected);

  },

  renderRoom: function(roomname) {
    var $option = $('<option>').val(roomname).text(roomname);
    RoomsView.$select.append($option);
  },

  handleChange: function(event) {
    // set selected room
    Rooms.selected = RoomsView.$select.val();
    // call MessagesView.render() to display messages from selected room
    MessagesView.render();
  },

  handleClick: function(event) {
    var roomname = prompt('Enter room name');
    if (roomname) {
      Rooms.add(roomname, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
  }

};

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  // create a helper function
  // when user adds a room, delete characters to prevent XSS attacks
  // deleting/disallow following characters[<, >, # ]
  filteredRoomList: [],

  initialize: function() {
    for (var i = 1; i < Rooms.length; i++) {
      if (!RoomsView.filteredRoomList.includes(Rooms[i].roomname)) {
        if (Rooms[i].roomname) { RoomsView.filteredRoomList.push(Rooms[i].roomname); }
      }
    }
  },

  render: function() {
    // setRoom
    for (var i = 0; i < RoomsView.filteredRoomList.length; i++) {
      RoomsView.$button.append(RoomsView.filteredRoomList[i]);
    }
    // populate the drop drop menu with the romm you are on
    // getMessages for that room and display them in MessagesView
  }

};

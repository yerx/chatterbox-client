var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  // create a helper function
  // when user adds a room, delete characters to prevent XSS attacks
  // deleting/disallow following characters[<, >, # ]

  initialize: function() {
    // App.initialize

    // create a filtered array
    // var filteredArray = [];
    // var roomsList = Rooms.roomnames;
    // for (let i = 0; i < roomsList.length; i++) {
    //   var currentRoom = roomsList[i];
    //   if (!filteredArray.includes(currentRoom)) {
    //     filteredArray.push(currentRoom);
    //   }
    // }
    // console.log(filteredArray);
    // iterate through our rooms
      // if the room does not exist in our filtered array
        // put it in there
      // otherwise
        // continue


    // onClick of $button,
    // get existing rooms, populate the drop down menu
    // onClick of add room button
    // get the selected room pass it into render
  },

  render: function() {
    // setRoom
    // populate the drop drop menu with the romm you are on
    // getMessages for that room and display them in MessagesView
  }

};

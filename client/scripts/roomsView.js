var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  // create a helper function
  // when user adds a room, delete characters to prevent XSS attacks
  // deleting/disallow following characters[<, >, # ]

  initialize: function() {
    // onClick of $button,
    // get existing rooms, populate the drop down menu
    // onClick of add room button
    // get the selected room pass it into render()
  },

  render: function() {
    // setRoom
    // populate the drop drop menu with the romm you are on
    // getMessages for that room and display them in MessagesView
  }

};

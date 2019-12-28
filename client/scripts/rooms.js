var Rooms = {
  // make the storage object a set to store unique values
  _data: new Set,

  // set default of selected room to 'lobby'
  selected: 'lobby',

  items: function() {
    return _.chain([...Rooms._data]);
  },

  isSelected: function(roomname) {
    // roomname will equal the selected room or if there is no roomname, set it to lobby
    return roomname === Rooms.selected || !roomname && Rooms.selected === 'lobby';
  },

  update: function(messages, callback = () => {}) {
    var length = Rooms._data.size;

    _.chain(messages)
      // pluck the roomname property out, which will create an array of roomnames
      .pluck('roomname')
      // return the unique roomnames
      .uniq()
      // iterate through the roomnames array and add the room to the set
      .each(room => Rooms._data.add(room));

    if (Rooms.selected === null) {
      // set the first room to be the default selected room
      Rooms.selected = Rooms._data.values().next().value;
    }

    if (Rooms._data.size !== length) {
      callback(Rooms.items());
    }
  },

  add: function(room, callback = () => {}) {
    Rooms._data.add(room);
    Rooms.selected = room;
    callback(Rooms.items());
  }

};
var MessageView = {

  // prevent xss attacks with <div><%- text %></div>

  render: _.template(`
      <div class="chat">
        <div
          class="username <%= Friends.isFriend(username) ? 'friend' : '' %>"
          data-username="<%- username %>">
        <%- username %>
        </div>
        <div class="messageText"><%- text %></div>
      </div>
  `)
};
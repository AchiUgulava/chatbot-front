document.addEventListener('DOMContentLoaded', function() {
  var chatMessages = document.getElementById('chat-messages');
  var userInput = document.getElementById('user-input');
  var sendButton = document.getElementById('send-button');

  sendButton.addEventListener('click', sendMessage);
  userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  });

  function sendMessage() {
    var message = userInput.value;
    if (message.trim() !== '') {
      addMessage('user', message);
      processUserMessage(message);
      userInput.value = '';
    }
  }
  function addMessage(sender, message) {
    var messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');
  
    var messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender);
    messageElement.textContent = message;
  
    messageContainer.appendChild(messageElement);
    chatMessages.appendChild(messageContainer);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
    function processUserMessage(recievedMessage) {
      // Process the user message and generate a response

      //probly some api call to retrieve the message
      //
      //some recieved messa
      var message = "lorem ipsum"
      // Example response for testing purposes
      var response = 'bot: ' + message;
  
      // Add a delay to simulate the response time
      setTimeout(function() {
        addMessage('chatbot', response);
      }, 1000);
    }
  });
  
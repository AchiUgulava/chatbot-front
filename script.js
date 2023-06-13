// some ui stuff

document.addEventListener('DOMContentLoaded', function() {
  var dropdownToggle = document.querySelector('.dropdown-toggle');
  var dropdownMenu = document.querySelector('.dropdown-menu');

  dropdownMenu.addEventListener('click', function(event) {
    var selectedOption = event.target.textContent;
    dropdownToggle.textContent = selectedOption;
  });
});

//end of ui stuff

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
    if(sender=="chatbot"){
      var typewriter = new Typewriter(messageElement, {
        delay: 50, // Delay between each character
        deleteSpeed: 20, // Speed of deleting characters
      });
      
      typewriter.typeString(message).start();
    }
    else{
      messageElement.textContent = message;
    }

    messageContainer.appendChild(messageElement);
    chatMessages.appendChild(messageContainer);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function processUserMessage(recievedMessage) {
    // Process the user message and generate a response

    // Probable API call to retrieve the message
    //
    // Some received message
    var message = 'lorem ipsum';
    // Example response for testing purposes
    var response = 'bot: ' + message;

    // Add a delay to simulate the response time
    setTimeout(function() {
      addMessage('chatbot', response);
    }, 1000);
    // addMessage('chatbot', response);
  }
});

// some ui stuff

document.addEventListener("DOMContentLoaded", function () {
  var dropdownToggle = document.querySelector(".dropdown-toggle");
  var dropdownMenu = document.querySelector(".dropdown-menu");

  dropdownMenu.addEventListener("click", function (event) {
    var selectedOption = event.target.textContent;
    dropdownToggle.textContent = selectedOption;
  });
});
//end of ui stuff

document.addEventListener("DOMContentLoaded", function () {
  var chatMessages = document.getElementById("chat-messages");
  var userInput = document.getElementById("user-input");
  var sendButton = document.getElementById("send-button");
  var sendIcon = document.querySelector(".send-icon");

  sendButton.addEventListener("click", sendMessage);
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  function sendMessage() {
    var message = userInput.value;
    var sendIcon = document.querySelector(".send-icon");
    if (message.trim() !== "") {
      addMessage("user", message);
      processUserMessage(message);
      userInput.value = "";
    }
    sendIcon.classList.add("clicked");
    setTimeout(function () {
      sendIcon.classList.remove("clicked");
    }, 100);
  }

  function addMessage(sender, message) {
    var messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");

    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(sender);

    if (sender === "chatbot") {
      var typewriter = new Typewriter(messageElement, {
        delay: 30, // Delay between each character
        deleteSpeed: 20, // Speed of deleting characters
        onComplete: function () {
          // Remove cursor when typing is complete
          var cursorElement = messageElement.querySelector(
            ".Typewriter__cursor"
          );
          if (cursorElement) {
            cursorElement.style.display = "none";
          }
        },
      });

      typewriter.typeString(message).start();
    } else {
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
    var message = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."';
    // Example response for testing purposes
    var response = "Bot: " + message;

    // Add a delay to simulate the response time
    setTimeout(function () {
      addMessage("chatbot", response);
    }, 1000);
    // addMessage('chatbot', response);
  }
});

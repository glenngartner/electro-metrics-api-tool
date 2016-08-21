// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var btn1 = document.getElementById("api_btn")

btn1.addEventListener('click', launchAPI);

function launchAPI() {
    console.log("Button Clicked!");
    blocmetrics.report();
}
var blocmetrics = {};

blocmetrics.report = function(eventName) {
    var event = {
        event: {
            name: 'electron-foobar'
        }
    };
    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/api/events", true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(event));
    console.log("Message Sent!")
}

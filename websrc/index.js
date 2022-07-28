import 'bootstrap';
import './index.scss';

var input = document.getElementById("countdown");
var output = document.getElementById("output");
var socket = new WebSocket("ws://127.0.0.1:5050/ws");
var countdown = 0

socket.onopen = function () {
	console.log("Status: Connected\n");
};

socket.onmessage = function (e) {
	console.log("\nServer: " + e.data + "\n");

	var count = e.data
	var percentage = (((countdown - e.data)/countdown) * 100)

	$("#output").text(e.data);
	$("#progress-bar").css("width", percentage + "%")

	console.log(countdown)
	console.log(count)
	console.log(percentage)

};

export function send() {
	countdown = input.value;
  socket.send(countdown);
  input.value = "";
}
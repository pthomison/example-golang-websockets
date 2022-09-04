<script>
export default {
	data() {
		return {
			countstart: 0,
			countdown: 0,
			socket: new WebSocket("ws://127.0.0.1:5050/ws"),
		}
	},
	methods: {
		start(countstart) {
			this.countstart = countstart
			this.countdown = countstart

			console.log("starting countdown at " + this.countstart)

			this.socket.send(this.countstart)
		},
	},
	computed: {
		percentage() {
			return (((this.countstart - this.countdown)/this.countstart) * 100)
		}
	},
	mounted() {
		var component = this

		this.socket.onopen = function () {
			console.log("Status: Connected\n");
		};

		this.socket.onmessage = function (msg) {
			console.log("\nServer: " + msg.data + "\n");
			component.countdown = parseInt(msg.data)
		};

	}
}
</script>

<template>

	<h1>Golang Webforms</h1>

	<hr/>

	<count-submitter @start-countdown="start"></count-submitter>

	<hr/>

	<h1 id="output">{{ countdown }}</h1>
	<progress-bar :percentage="percentage" ></progress-bar>

</template>

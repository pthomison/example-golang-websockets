import * as Vue from 'Vue';
import CountSubmitter from './count-submitter.vue';
import ProgressBar from './progress-bar.vue';
import App from './app.vue';

import 'bootstrap';
import './index.scss';

// const app = Vue.createApp({
// 	data() {
// 		return {
// 			countstart: 0,
// 			countdown: 0,
// 			socket: new WebSocket("ws://127.0.0.1:5050/ws"),
// 		}
// 	},
// 	methods: {
// 		start(countstart) {
// 			this.countstart = countstart
// 			this.countdown = countstart

// 			console.log("starting countdown at " + this.countstart)

// 			this.socket.send(this.countstart)
// 		},
// 	},
// 	computed: {
// 		percentage() {
// 			return (((this.countstart - this.countdown)/this.countstart) * 100)
// 		}
// 	},
// 	mounted() {
// 		var component = this

// 		this.socket.onopen = function () {
// 			console.log("Status: Connected\n");
// 		};

// 		this.socket.onmessage = function (msg) {
// 			console.log("\nServer: " + msg.data + "\n");
// 			component.countdown = parseInt(msg.data)
// 		};

// 	}
// })

const root = Vue.createApp({})

root.component('app', App)
root.component('count-submitter', CountSubmitter)
root.component('progress-bar', ProgressBar)
const vm = root.mount('#app')

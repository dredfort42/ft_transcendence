<template>
	<div class="main">
		<div class = "site-line"></div>
		<span class="heading-page"> Welcome to Pong GAME</span>
		<div class="main_container">
			<div class="line_hexagon unselectable">
				<div class="hexagon-item" @click="$router.push('/profile')">
					<div class="hex-item"><div></div><div></div><div></div></div>
					<div class="hex-item"><div></div><div></div><div></div></div>
					<a class="hex-content">
						<span class="hex-content-inner">
							<span class="icon">
								<i class="bi bi-universal-access-circle"></i>
							</span>
							<span class="title">Profile</span>
						</span>
						<svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
					</a>
				</div>
				<div class="hexagon-item" @click="$router.push('/users')">
					<div class="hex-item"><div></div><div></div><div></div></div>
					<div class="hex-item"><div></div><div></div><div></div></div>
					<a class="hex-content">
						<span class="hex-content-inner">
							<span class="icon">
								<i class="bi bi-people-fill"></i>
							</span>
							<span class="title">Users</span>
						</span>
						<svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
					</a>
				</div>
			</div>
			<div class="line_hexagon unselectable">
				<div class="hexagon-item" @click="$router.push('/chat')">
					<div class="hex-item"><div></div><div></div><div></div></div>
					<div class="hex-item"><div></div><div></div><div></div></div>
					<a class="hex-content">
						<span class="hex-content-inner">
							<span class="icon">
								<i class="bi bi-wechat"></i>
							</span>
							<span class="title">Chat</span>
						</span>
						<svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
					</a>
				</div>
				<div class="hexagon-item" @click="$router.push('/game')">
					<div class="hex-item"><div></div><div></div><div></div></div>
					<div class="hex-item"><div></div><div></div><div></div></div>
					<a class="hex-content">
						<span class="hex-content-inner">
							<span class="icon">
								<i class="bi bi-joystick"></i>
							</span>
							<span class="title">Game</span>
						</span>
						<svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
					</a>
				</div>
				<div class="hexagon-item" @click="$router.push('/instruction')">
					<div class="hex-item"><div></div><div></div><div></div></div>
					<div class="hex-item"><div></div><div></div><div></div></div>
					<a class="hex-content">
						<span class="hex-content-inner">
							<span class="icon">
								<i class="bi bi-file-text"></i>
							</span>
							<span class="title">Instruction</span>
						</span>
						<svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
					</a>
				</div>
			</div>
			<div class="line_hexagon unselectable">
				<div class="hexagon-item" @click="$router.push('/records')">
					<div class="hex-item"><div></div><div></div><div></div></div>
					<div class="hex-item"><div></div><div></div><div></div></div>
					<a class="hex-content">
						<span class="hex-content-inner">
							<span class="icon">
								<i class="bi bi-trophy-fill"></i>
							</span>
							<span class="title">Records</span>
						</span>
						<svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
					</a>
				</div>
				<div class="hexagon-item" @click="sing_click">
					<div class="hex-item"><div></div><div></div><div></div></div>
					<div class="hex-item"><div></div><div></div><div></div></div>
					<a class="hex-content">
						<span v-if="$store.getters.getId === null" class="hex-content-inner">
							<span class="icon">
								<i class="bi bi-box-arrow-in-left"></i>
							</span>
							<span class="title">sign&nbsp;in</span>
						</span>
						<span v-else class="hex-content-inner">
							<span class="icon">
								<i class="bi bi-box-arrow-right"></i>
							</span>
							<span class="title">sign&nbsp;out</span>
						</span>
						<svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import signMixin from "@/mixins/user/signMixin";
	
	export default defineComponent({
		mixins: [signMixin]
	});
</script>

<style scoped>
	.site-line {
		height: 5px;
		background-color: #ff0037;
		width: 100%;
		position: absolute;
		top: 0px;
	}
	.unselectable {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none;   /* Chrome/Safari/Opera */
		-khtml-user-select: none;    /* Konqueror */
		-moz-user-select: none;      /* Firefox */
		-ms-user-select: none;       /* Internet Explorer/Edge */
		user-select: none;           /* Non-prefixed version, currently*/
	}
	.main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 100%;
		width: 100%;
		background-color: rgb(15,17,24);
		position: absolute;
		top: 0px;
		left: 0px;
	}
	.main_container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 520px;
		width: 600px;
	}
	.line_hexagon {
		height: 147px;
		width: 600px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.hexagon-item:first-child {
		margin-left: 0;
	}
	.hexagon-item {
	cursor: pointer;
	width: 200px;
	height: 173.20508px;
	float: left;
	margin-left: -29px;
	z-index: 0;
	position: relative;
	-webkit-transform: rotate(30deg);
	-moz-transform: rotate(30deg);
	-ms-transform: rotate(30deg);
	-o-transform: rotate(30deg);
	transform: rotate(30deg); }
	.hexagon-item:first-child {
		margin-left: 0; }
	.hexagon-item:hover {
		z-index: 1; }
		.hexagon-item:hover .hex-item:last-child {
		opacity: 1;
		-webkit-transform: scale(1.3);
		-moz-transform: scale(1.3);
		-ms-transform: scale(1.3);
		-o-transform: scale(1.3);
		transform: scale(1.3); }
		.hexagon-item:hover .hex-item:first-child {
		opacity: 1;
		-webkit-transform: scale(1.2);
		-moz-transform: scale(1.2);
		-ms-transform: scale(1.2);
		-o-transform: scale(1.2);
		transform: scale(1.2); }
		.hexagon-item:hover .hex-item:first-child div:before,
		.hexagon-item:hover .hex-item:first-child div:after {
			height: 5px; }
		.hexagon-item:hover .hex-item div::before,
		.hexagon-item:hover .hex-item div::after {
		background-color: #ff0037; }
		.hexagon-item:hover .hex-content svg {
		-webkit-transform: scale(0.97);
		-moz-transform: scale(0.97);
		-ms-transform: scale(0.97);
		-o-transform: scale(0.97);
		transform: scale(0.97); }
	.hex-item {
	position: absolute;
	top: 0;
	left: 50px;
	width: 100px;
	height: 173.20508px; }
	.hex-item:first-child {
		z-index: 0;
		-webkit-transform: scale(0.9);
		-moz-transform: scale(0.9);
		-ms-transform: scale(0.9);
		-o-transform: scale(0.9);
		transform: scale(0.9);
		-webkit-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
		-moz-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
		-o-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
		transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); }
	.hex-item:last-child {
		transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
		z-index: 1; }
	.hex-item div {
		box-sizing: border-box;
		position: absolute;
		top: 0;
		width: 100px;
		height: 173.20508px;
		-webkit-transform-origin: center center;
		-moz-transform-origin: center center;
		-ms-transform-origin: center center;
		-o-transform-origin: center center;
		transform-origin: center center; }
		.hex-item div::before, .hex-item div::after {
		background-color: #1e2530;
		content: "";
		position: absolute;
		width: 100%;
		height: 3px;
		-webkit-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
		-moz-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
		-o-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
		transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s; }
		.hex-item div:before {
		top: 0; }
		.hex-item div:after {
		bottom: 0; }
		.hex-item div:nth-child(1) {
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg); }
		.hex-item div:nth-child(2) {
		-webkit-transform: rotate(60deg);
		-moz-transform: rotate(60deg);
		-ms-transform: rotate(60deg);
		-o-transform: rotate(60deg);
		transform: rotate(60deg); }
		.hex-item div:nth-child(3) {
		-webkit-transform: rotate(120deg);
		-moz-transform: rotate(120deg);
		-ms-transform: rotate(120deg);
		-o-transform: rotate(120deg);
		transform: rotate(120deg); }
	.hex-content {
	color: rgb(171, 171, 171);
	display: block;
	height: 180px;
	margin: 0 auto;
	position: relative;
	text-align: center;
	transform: rotate(-30deg);
	width: 156px; }
	.hex-content .hex-content-inner {
		left: 50%;
		margin: -3px 0 0 2px;
		position: absolute;
		top: 50%;
		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%); }
	.hex-content .icon {
		display: block;
		font-size: 36px;
		line-height: 30px;
		margin-bottom: 11px; }
	.hex-content .title {
		display: block;
		font-family: "Open Sans", sans-serif;
		font-size: 14px;
		letter-spacing: 1px;
		line-height: 24px;
		text-transform: uppercase; }
	.hex-content svg {
		left: -7px;
		position: absolute;
		top: -13px;
		transform: scale(0.87);
		z-index: -1;
		-webkit-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
		-moz-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
		-o-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
		transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s; }
	.hex-content:hover {
		color: #fff; }
	.heading-page
	{
		text-transform: uppercase;
		font-size: 43px;
		font-weight: bolder;
		letter-spacing: 2px;
		color: white;
		display: block;
		height: 100px;
		width: 600px;
		text-align: center;
	}
	.hexagon-item:first-child {
		margin-left: 0;
	}
	.hexagon-item:hover .icon i
	{
	color:#ff0037;
	transition:0.6s;
	}
	.hexagon-item:hover .title
	{
	-webkit-animation: focus-in-contract 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
				animation: focus-in-contract 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
	@-webkit-keyframes focus-in-contract {
	0% {
		letter-spacing: 1em;
		-webkit-filter: blur(12px);
				filter: blur(12px);
		opacity: 0;
	}
	100% {
		-webkit-filter: blur(0px);
				filter: blur(0px);
		opacity: 1;
	}
	}
	@keyframes focus-in-contract {
	0% {
		letter-spacing: 1em;
		-webkit-filter: blur(12px);
				filter: blur(12px);
		opacity: 0;
	}
	100% {
		-webkit-filter: blur(0px);
				filter: blur(0px);
		opacity: 1;
	}
	}
</style>

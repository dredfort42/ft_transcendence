<template>
	<div>
		<div class="menu">
			<a style="width: 100%;display: block;text-align: center;padding-top: 10px;padding-bottom: 10px;" @click="$router.push('/')">
				<i class="bi bi-house-fill"></i>
			</a>			
			<div class="flex flex-col items-center border-t border-gray-700">
				<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700" v-bind:class="{'bg-gray-700': (index_active == 1)}"  @click="$router.push('/profile')">
					<i class="bi bi-universal-access-circle"></i>					
				</a>
				<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700" v-bind:class="{'bg-gray-700': (index_active == 2)}" @click="$router.push('/users')">
					<i class="bi bi-people-fill"></i>					
				</a>
				<a style="position:relative;" class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700" v-bind:class="{'bg-gray-700': (index_active == 3)}" @click="$router.push('/chat')">
					<i class="bi bi-wechat"></i>
					<span v-if="$store.getters.getMessagesFlag" class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
				</a>
				<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700" v-bind:class="{'bg-gray-700': (index_active == 4)}" @click="$router.push('/game')">
					<i class="bi bi-joystick"></i>
				</a>
				<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700" v-bind:class="{'bg-gray-700': (index_active == 5)}" @click="$router.push('/instruction')">
					<i class="bi bi-file-text"></i>
				</a>
				<a class="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700" v-bind:class="{'bg-gray-700': (index_active == 6)}" @click="$router.push('/records')">
					<i class="bi bi-trophy-fill"></i>
				</a>
			</div>
			<a class="flex items-center justify-center w-16 h-16 mt-auto bg-gray-800 hover:bg-gray-700" style="position: absolute;bottom: 0px;"
			@click="sing_click">
				<i v-if="$store.getters.getId === null" class="bi bi-box-arrow-in-left"></i>
				<i v-else class="bi bi-box-arrow-right"></i>
			</a>
		</div>
		<div v-if="title_show === true" class="title">
			<div style="height:58px; padding-top:10px;">{{title}}</div>
			<div class="border-b" style="margin-left: 10px;margin-right: 10px;"></div>
		</div>
		<div v-if="title_show === true" class="main main_padding-top">
			<slot></slot>
		</div>
		<div v-if="title_show === false" class="main">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import signMixin from "@/mixins/user/signMixin";
	
	export default defineComponent({
		props: {
			title: {type: String, default: ""},
			title_show: {type: Boolean, default: true},
			index_active: {type: Number, default: null},
		},
		mixins: [signMixin]
	})
</script>

<style scoped>
	.main {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		min-height: 100%;
		background-color: rgb(250, 250, 250);
		padding-left: 64px;
	}
	.main_padding-top {
		padding-top: 64px;
	}
	.menu {
		width: 64px;
		height: 100%;
		background-color: rgb(17, 24, 39);
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 100;
		font-size: 25px;
	}
	.menu a {
		color: rgb(156, 163, 175);
		cursor: pointer;
	}
	.menu a:hover {
		color: white;
	}
	.title {
		font-family: "Open Sans", sans-serif;
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 50;
		width: 100%;
		height: 62px;
		background-color: rgb(250, 250, 250);
		color: black;
		text-align: center;
		padding-left: 64px;
		font-size: 30px;
		letter-spacing: 2px;
		white-space: nowrap;
	}
</style>
<template>
	<div v-if="show === true" class="main">
		<div class="text">
			PLEASE WAIT...
		</div>
		<img class="fon" src="./assets/fon.gif"/>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		props: {
			show: {type: Boolean, default: false}
		}		
	})
</script>

<style scoped>
	.main {
		top:0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		background: rgba(228, 210, 196, 0.8);
		position: fixed;
		display: flex;
		z-index: 99999;
		align-items: center;
		justify-content: center;		
	}
	.fon {
		width: 500px;
		height: 500px;
	}
	.text {
		position: fixed;
		font-size: 35px;
		width: 262px;
		font-weight: bold;
	}
</style>
<template>
	<div>
		<wait-comp :show="$store.getters.getWait"/>
		<nav-bar/>
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import NavBar from "@/components/NavBar.vue";
	import WaitComp from "@/components/wait/WaitComp.vue";

	export default defineComponent({
		components: {NavBar, WaitComp}
	});
</script>

<style>

</style>
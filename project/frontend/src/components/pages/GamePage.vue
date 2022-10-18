<template>
	<nav-bar :title_show="false" :index_active="4">
		<div style="margin-left:40px;margin-top:20px;">
			<p>Здесь будет сама игра</p>
			<p>Данная страница будет доступна после авторизации.</p>
		</div>
	</nav-bar>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import redirectMixin from "@/mixins/user/redirectMixin";
	
	export default defineComponent({
		mixins: [redirectMixin]
	});
</script>

<style scoped>
</style>
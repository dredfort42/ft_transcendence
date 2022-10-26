<template>
	<div  v-if="posts.length > 0">
		<h3>Список пользователей</h3>
		<post-item v-for="post in posts" v-bind:post="post" v-bind:key="post.id" v-on:remove="$emit('remove', post)"/>
	</div>
	<h3 v-else-if="posts.length == 0">CПИСОК ПУСТ</h3>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import PostItem from "@/components/PostItem.vue";
	
	export default defineComponent({
		components: { PostItem },
		props: {
			posts: {
				type: Array,
				required: true
			}
		}
	})
</script>

<style>

</style>
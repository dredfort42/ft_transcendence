<template>
	<div class="post">
		<div>
			<p><strong>Название: </strong>{{ post.title }}</p>
			<p><strong>Содержание: </strong>{{ post.body }}</p>
		</div>
		<div class="post_btn">
			<my-button @click="$router.push(`/posts/${post.id}`)" style="margin-right:10px;">Открыть</my-button>
			<my-button v-on:click="$emit('remove', post)">Удалить</my-button>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		props: {
			post: {
				type: Object,
				required: true
			}
		}
	})

</script>

<style scoped>
	.post {
		border: 2px solid green;
		padding: 0px 15px 0px 15px;
		margin-bottom: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.post_btn {
		width: 465px;
		text-align: right;
	}
</style>
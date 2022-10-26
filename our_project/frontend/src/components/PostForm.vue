<template>
	<div class="input_post_form">
		<form @submit.prevent>
			<h2>Создание поста</h2>
			<my-input v-focus v-model="post.title" type="text" placeholder="Название"/>
			<my-input v-model="post.body" type="text" placeholder="Описание"/>
			<my-button v-on:click="createPost" class="btn">Создать</my-button>
		</form>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		data() {
			return {
				post: {
					title: '',
					body: '',
					id: 0
				}
			}
		},
		methods: {
			createPost() {
				this.post.id = Date.now();
				this.$emit('create', this.post);
				this.post = {
					title: '',
					body: '',
					id: 0
				}
			}
		}
	})
</script>

<style>
	.input_post_form>form {
		display: flex;
		flex-direction: column;
	}
	.btn {
		align-self: flex-end;
		width: 200px;
	}
</style>
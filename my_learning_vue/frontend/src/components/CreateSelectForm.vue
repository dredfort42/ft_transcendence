<template>
	<div class="component">
		<my-button @click="fetchPosts">Получить посты</my-button>
		<my-button v-on:click="showDialog">Создать пост</my-button>
		<my-select v-model="selectedSort" :options="sortOptions"/>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		data() {
			return {
				selectedSort: '',
				sortOptions: [
					{value:'title', name:'Заголовок поста'},
					{value:'body', name:'Тело поста'},
				]
			}
		},
		methods: {
			fetchPosts ()
			{
				this.$emit('fetchPosts', undefined);
			},
			showDialog() {
				this.$emit('showDialog', undefined);
			},
		},
		watch: {
			selectedSort: {
				handler(newValue) {
					this.$emit('selectedSort', newValue);
				},
				deep: true
			}
		}
	})
</script>

<style scoped>
	.component {
		display: flex;
		justify-content: space-between;
	}
</style>
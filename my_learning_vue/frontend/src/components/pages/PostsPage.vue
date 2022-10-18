<template>
	<div style="margin-top:20px;">
		<test-link-form/>
		<p>Кол-во лайков: <strong>{{ likes }}</strong></p>
		<p>Кол-во дизлайков: <strong>{{ dislikes }}</strong></p>
		<p><button v-on:click="addLike">like</button></p>
		<p><button @click="addDislike">addDislike</button></p>
		<h1>Cтраница с постами</h1>
		<div style="display:flex"><my-input v-focus v-model="SearchQuery" type="text" placeholder="Введите строку поиска" style="width:100%"/></div>
		<create-select-form v-on:fetchPosts="fetchPosts" v-on:showDialog="showDialog" @selectedSort="selectedSort"/>
		<my-dialog v-model:show="dialogVisible">
			<post-form v-on:create="createPost"/>
		</my-dialog>
		<post-list v-bind:posts="sortedAndSearchPosts" v-on:remove="removePost" v-if="!isPostsLoading"/>
		<div v-else style="padding:10px">Идёт загрузка ...</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import PostForm from '@/components/PostForm.vue';
	import PostList from '@/components/PostList.vue';
	import CreateSelectForm from '@/components/CreateSelectForm.vue';
	import TestLinkForm from '@/components/TestLink/MainForm.vue';
	import axios from 'axios';

	type Post = {id: number; title: string; body: string;};

	export default defineComponent({
		components: { PostForm, PostList, CreateSelectForm, TestLinkForm},
		data() {
			return {
				likes: 0,
				dislikes: 0,
				posts: new Array<Post>(),
				dialogVisible: false,
				isPostsLoading: true,
				selectedSort_v: '' as keyof Post,
				SearchQuery: '' as string
			}
		},
		methods: {
			addLike() {
				this.likes = this.likes + 1;
			},
			addDislike() {
				this.dislikes = this.dislikes + 1;
			},
			createPost(post:Post) {
				this.posts.push(post);
				this.dialogVisible = false;
			},
			removePost(post:Post) {
				this.posts = this.posts.filter(p => p.id != post.id);
			},
			showDialog()
			{
				this.dialogVisible = true;
			},
			async fetchPosts() {
				this.$store.commit('setWait', true);
				try {
					const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
					this.posts = response.data;
				} catch (e)
				{
					alert('Error');
				}
				finally {
					this.isPostsLoading = false;
					this.$store.commit('setWait', false);
				}
			},
			selectedSort (value: keyof Post)
			{
				this.selectedSort_v = value;
			}
/*			selectedSort <KeyType extends keyof Post> (value: KeyType) {
				console.log(value);
				this.posts.sort((post1, post2) => {
					return post1[value]?.toString().localeCompare(post2[value].toString());
				})
			}*/
		},
		mounted() {
			this.fetchPosts();
		},
		computed: {
			sortedPosts():Array<Post> {
				return [...this.posts].sort((post1, post2) => {
					return post1[this.selectedSort_v]?.toString().localeCompare(post2[this.selectedSort_v].toString());
				});
			},
			sortedAndSearchPosts():Array<Post> {
				return this.sortedPosts.filter((post: Post) => post.title.toLocaleLowerCase().includes(this.SearchQuery.toLocaleLowerCase()))
			}
		}
	});
</script>

<style>

</style>

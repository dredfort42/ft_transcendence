<template>
	<div>
		<div class="navbar">
			<img @click="$router.push('/')" style="height: 100%;" alt="Vue3" src="@/assets/logo.png"/>
			<div>
				<my-button @click="$router.push('/bootstrap')" class="nav_btn" style="margin-right:20px">Bootstrap</my-button>
				<my-button @click="$router.push('/composition')" class="nav_btn" style="margin-right:20px">Тест Composition API</my-button>
				<my-button @click="$router.push('/store')" class="nav_btn" style="margin-right:20px">Тест VUEX</my-button>
				<my-button @click="$router.push('/posts/100')" class="nav_btn" style="margin-right:20px">Тест</my-button>
				<my-button @click="$router.push('/posts')" class="nav_btn">Cписок постов</my-button>
			</div>		
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
	});
</script>

<style scoped>
	.navbar {
		height: 100px;
		background: lightgrey;
		box-shadow: 2px 2px 4px gray;
		display: flex;
		padding: 15px;
		align-items: center;
	}
	.navbar>div {
		margin-left: auto;
	}
	.navbar>img {
		cursor: pointer;
	}
	.nav_btn {
		width: 200px;
	}
</style>
<template>
	<nav-bar :title="title_name" :index_active="1">
		<div style="margin-left:40px;">
			<p>Здесь будет страница регистрации/авторизации или профиль пользователя</p>
			<div v-if="$store.getters.getId === null">
				<button @click="$store.commit('setId', 1)" class="btn btn-primary">
					авторизоваться
				</button>
			</div>
			<div v-else>
					Вы авторизованы !!!
			</div>
		</div>
	</nav-bar>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	
	export default defineComponent({
		computed: {
			title_name: function(){
				return (this.$store.getters.getId === null) ? 'Autorization/Registration' : 'Profile'
			}
		}
	});
</script>

<style scoped>
</style>
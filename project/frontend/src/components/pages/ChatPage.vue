<template>
	<nav-bar :title="'Chat'" :index_active="3">
		<div style="margin-left:40px;">
			<p>Здесь будет страница с чатом:<br>
				1. администрирование чатов (создание и редактирование каналов, назначение администаторов канала, установка бана или отключение пользователя, запросы на добовление в канал)<br>
				2. сам чат (информация о наличии сообщений в каналах, общение в чате)<br>
				3. личные сообщения (информация о наличии личных сообщений, общение 1 на 1)<br>
				<br>
				Данная страница будет доступна после авторизации.
			</p>
			<button @click="$store.commit('setMessagesFlag', true)" class="btn btn-primary">
				установить непрочитанные сообщения
			</button><br><br>
			<button @click="$store.commit('setMessagesFlag', false)" class="btn btn-primary">
				прочитать все сообщения
			</button>
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
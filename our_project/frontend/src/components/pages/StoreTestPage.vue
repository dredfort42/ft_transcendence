<template>
	<div>
		<h1>Это страница тестирования STORE (VUEX)</h1>
		<input :value="$store.state.var1" @input="$store.commit('set_var1', $event.target.value)/*console.log($event.target.value)*//*(e) => console.log(e.target.value)*//*(e) => my_func(e)*//*my_func*/"/>
		<p>{{ $store.state.var1 }}</p>
		<p>{{ $store.getters.e_var1 }}</p>
		<my-button @click="SetVal1Click/*SetVal1Click3('ABC')*/">Установить значение</my-button>
		<br><br><my-button @click="$store.dispatch('actionC')">Тест асинхронности 1 (паралельное выполнение)</my-button>
		<br><br><my-button @click="$store.dispatch('actionD')">Тест асинхронности 2 (последовательное выполнение)</my-button>
		<br><br><input :value="$store.getters.getVar2"  @input="$store.commit('setVar2', $event.target.value)"/>
		<br><input :value="$store.getters.getVar2"  @input="$store.commit('setVar2', $event.target.value)"/>
		<p>{{ $store.getters.getVar2 }}</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import { mapActions } from 'vuex';

	export default defineComponent({
		methods: {
			my_func(e: Event) {
				const target = e.target as HTMLInputElement;
				this.$store.commit('set_var1', target.value);
			},
			SetVal1Click() {
				const D = new Date(Date.now());
				this.$store.dispatch('set_var1_action', D.toString());
			},
			...mapActions(
				{SetVal1Click2: 'set_var1_action'},
			),
			...mapActions(
				{SetVal1Click3: 'set_var1_action'},
			)
		},
		computed: {
			console: () => console
		}
	});
</script>

<style scoped>

</style>
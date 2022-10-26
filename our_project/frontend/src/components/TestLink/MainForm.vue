<template>
	<div>
		<!--<input @input="changeValue" :value="any_text"/>--><input v-model="any_text"/>
		<button @click="clickBtn1">{{ btn_name }}</button>
		<p>{{ any_text }}</p>
		<MyTimer :TimerComand="btn_name" @onTick="timerEvent"/>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import MyTimer from '@/components/TestLink/MyTimer.vue';

	export default defineComponent({
		components: {MyTimer},
		data() {return {
			any_text: '' as string,
			btn_name: 'Start' as string
		}},
		methods: {
/*			changeValue(e: Event) {
				const target = e.target as HTMLInputElement;
				this.any_text = target.value;				
			},*/
			clickBtn1() {
				this.btn_name = (this.btn_name == 'Start') ? 'Stop': 'Start';
			},
			timerEvent(v: number)
			{
				this.any_text = v.toString();
			}
		}
	});
</script>

<style scoped>
	
</style>
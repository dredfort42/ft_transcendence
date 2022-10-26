<template>
	<input v-bind:value="modelValue" v-on:input="updateInput" class="input"/>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	
	export default defineComponent({
		name: 'my-input',
		props: {
			modelValue: [String, Number]
		},
		methods: {
			updateInput(e:Event) {
				const target = e.target as HTMLInputElement;
				this.$emit('update:modelValue', target.value);
			}
		}
	});
</script>

<style scoped>
	.input {
		border: 1px solid teal;
		padding: 10px 15px;
		margin-bottom: 10px;
	}
</style>
<template>
	<select v-bind:value="modelValue" v-on:change="changeOption">
		<option disabled value="">Выберите из списка</option>
		<option v-for="option in options" v-bind:key="option.value" v-bind:value="option.value">{{ option.name }}</option>
	</select>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: 'my-select',
		props: {
			modelValue: {
				type: String
			},
			options: {
				type: Array,
				default: () => []
			}
		},
		methods: {
			changeOption(e: Event) {
				const target = e.target as HTMLInputElement;
				this.$emit('update:modelValue', target.value);				
			}
		}
	})
</script>

<style scoped>

</style>
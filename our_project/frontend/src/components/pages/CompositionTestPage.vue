<template>
	<div>
		<h1>Это страница тестирования Composition API</h1>
		<input :value="str"  @input="editStr($event.target.value)"/><br><br>
		<input :value="str"  @input="editStr($event.target.value)"/>
		<p>{{ str }}</p>
		<p>{{ get1Str }}</p>
		<p>{{ get2Str }}</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import { myHook } from "@/hooks/myHook";

	export default defineComponent({
		setup(props) {
			const {str, editStr, get1Str, get2Str} = myHook('TEST');
			return {
				str,
				editStr,
				get1Str,
				get2Str,
			}
		}
	})

</script>

<style scoped>

</style>
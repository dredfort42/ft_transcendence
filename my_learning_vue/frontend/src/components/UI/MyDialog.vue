<template>
	<div class="dialog" v-if="show === true" v-on:click.stop="hideDialog">
		<div v-on:click.stop class="dialog_content">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
	import toggleMixin from "@/mixins/toggleMixin";
	import { defineComponent } from "vue";

	export default defineComponent({
		name: 'my-dialog',
		mixins: [toggleMixin]
/*		props: {
			show: {type: Boolean, default: false}
		},
		methods: {
			hideDialog() {
				this.$emit("update:show", false);
			}
		}*/
	})
</script>

<style scoped>
	.dialog {
		top:0px;
		bottom: 0px;
		left: 0px;
		right: 0px;
		background: rgba(0, 0, 0, 0.5);
		position: fixed;
		display: flex;
	}
	.dialog_content {
		margin: auto;
		background: white;
		border-radius: 12px;
		min-height: 50px;
		min-width: 400px;
		padding: 20px;
	}
</style>
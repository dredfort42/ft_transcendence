import { defineComponent } from "vue";

export default defineComponent({
	props: {
		show: {type: Boolean, default: false}
	},
	methods: {
		hideDialog() {
			this.$emit("update:show", false);
		}
	}
});
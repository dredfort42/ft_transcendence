import { defineComponent } from "vue";
	
export default defineComponent({
	watch: {
		'$store.getters.getId': function () {
			if (this.$store.getters.getId === null)
				this.$router.push('/profile');
		}
	},
	created() {
		if (this.$store.getters.getId === null)
			this.$router.push('/profile');
	},
});

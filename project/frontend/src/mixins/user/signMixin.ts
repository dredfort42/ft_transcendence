import { defineComponent } from "vue";
	
export default defineComponent({
	methods: {
		sing_click() {
			if (this.$store.getters.getId === null)
				this.$router.push('/profile');
			else {
				this.$store.commit('setId', null);
				this.$store.commit('setMessagesFlag', false);
				this.$router.push('/');
			}
		}
	}
});

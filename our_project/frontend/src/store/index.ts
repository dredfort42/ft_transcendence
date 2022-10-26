import { createStore } from 'vuex'
import { myModule } from '@/store/myModule'

export default createStore({
	state: {
		var1: '' as string,
		waitF: false as boolean
	},
	getters: {
		e_var1(state) {
			return state.var1+'!!!';
		},
		getWait(state) {
			return state.waitF;
		}
	},
	mutations: {
		set_var1(state, str) {
			state.var1 = str;
		},
		setWait(state, val) {
			state.waitF = val;
		}
	},
	actions: {
		set_var1_action({ commit }, data) {
			commit('set_var1', data);
		},
		async actionA({commit}) {
			await new Promise((resolve) => setTimeout(resolve, 5000));
			commit('set_var1', 'A - DONE');
		},
		async actionB({commit}) {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			commit('set_var1', 'B - DONE');
		},
		async actionC({dispatch, commit}) {
			await Promise.all([
				dispatch('actionA'),
				dispatch('actionB')
			]);
			commit('set_var1', 'DONE');
		},
		async actionD({dispatch, commit}) {
			await dispatch('actionA');
			await dispatch('actionB');
			commit('set_var1', 'DONE');
		}
	},
	modules: {
		module: myModule
	}
})

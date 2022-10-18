export const myModule = {
	state: () => { return {
		var2: '' as string,
	}},
	getters: {
		getVar2(state: any) {
			return state.var2;
		}
	},
	mutations: {
		setVar2(state: any, payload: string) {
			state.var2 = payload;
		}
	},
}

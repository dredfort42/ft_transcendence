type state_t = {id: number|null; login: string; new_messages: boolean};

export const userData = {
	state: () => { return {
		id: null as number|null,
		login: '' as string,
		new_messages: false as boolean,
	}},
	getters: {
		getId(state: state_t) {
			return state.id;
		},
		getLogin(state: state_t) {
			return state.login;
		},
		getMessagesFlag(state: state_t) {
			return state.new_messages;
		},
	},
	mutations: {
		setId(state: state_t, payload: number|null) {
			state.id = payload;
		},
		setMessagesFlag(state: state_t, payload:boolean) {
			state.new_messages = payload;
		}
	},	
}

import { createStore } from 'vuex'
import { userData } from '@/store/userData'

export default createStore({
	modules: {
		module: userData
	}
})

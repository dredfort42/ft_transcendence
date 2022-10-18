import {ref, computed} from 'vue'

export function myHook(initStr: string) {
	const str = ref(initStr);
	const editStr:any = (newStr: string) => {
		str.value = newStr;
	}
	const get1Str = computed(() => {
		return str.value + '!!!';
	})
	const get2Str = computed(() => {
		return str.value + '###';
	})
	return {str, editStr, get1Str, get2Str}
}
<template>
	<div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		data() {return {
			timerID: undefined as unknown as number,
			timerCount: 0 as number
		}},
		props: {
			TimerComand: {type: String, default: 'Start'}
		},
		watch: {
			TimerComand(newValue: string) {
				if (newValue == 'Stop')
					this.timerID = setTimeout(function tick(self: any) {
						self.$emit('onTick', self.timerCount);
						self.timerCount++;
						self.timerID = setTimeout(tick, 1000, self);}
					, 1000, this);
				else if (newValue == 'Start')
				{
					clearTimeout(this.timerID);
					this.timerCount = 0;
				}
			}
		}
	});
</script>
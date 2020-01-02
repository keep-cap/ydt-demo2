<template>
	<div class="heading">
		<headMessage></headMessage>
		<tabMessage></tabMessage>
	</div>
</template>

<script>
import HeadMessage from "./header/HeadMessage"
import TabMessage from "./header/TabMessage"
export default {
	  name: 'Heading',
	  components: {
		HeadMessage,
		TabMessage
  	},
	data() {
		return {
			
		}
	}
	
}
</script>

<style>
	.heading {
		margin-top: 10px;
	}
</style>

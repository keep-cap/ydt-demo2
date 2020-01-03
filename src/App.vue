<template>
  <div id="app">
    	<Heading />
		<Bodying />
		<Footer />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
  </div>
</template>

<script>
import Heading from './components/Heading.vue'
import Bodying from './components/Bodying.vue'
import Footer from './components/Footer.vue'

export default {
  	name: 'app',
  	components: {
		Heading,
		Bodying,
		Footer
  	}
}
</script>

<style lang="scss">
#app {
	margin: 0 auto;
}
</style>

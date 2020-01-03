<template>
  <div id="app">
    	<Header />
		<Body />
		<Footer />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'

export default {
  	name: 'app',
  	components: {
		Header,
		Body,
		Footer
  	}
}
</script>

<style lang="scss">
#app {
	margin: 0 auto;
}
</style>

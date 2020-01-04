<template>
  <div id="app">
		<Body />
    <Footer />
  </div>
</template>

<script>
// import Header from './components/Header.vue'
import Body from '../components/Body.vue'
import Footer from '../components/Footer.vue'

export default {
  	name: 'app',
  	components: {
    Body,
    Footer
  	},

}
</script>

<style lang="scss">

</style>



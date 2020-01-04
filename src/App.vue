<template>
  <div id="app">
    	 <Header />
		<!-- <Body />
		<Footer /> -->
    <!-- <div id="nav">
      <router-link to="/">一样</router-link> |
      <router-link to="/about">About</router-link> | 
	  <router-link to="/you">you</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import Body from './components/Body.vue'
// import Footer from './components/Footer.vue'

export default {
  	name: 'app',
  	components: {
		Header,
		// Body,
		// Footer
  	},
	// methods:{
	// 	around() {
	// 		this.$router.push('/about');
	// 	},
	// }
}
</script>

<style lang="scss">
#app {
	margin: 0 auto;
}
.nav router-link{
	color: black;
}
</style>

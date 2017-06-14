<template>
  <div id="app">
    <div id="wallpaper" v-lazy-load-bg='wallpaper' />
    <router-link to='/'>
      <Logo ref="logo" />
    </router-link>
    <div id="container">
      <router-view />

      <footer>
        <router-link to='/about'>about</router-link>
        © 2017 <a href="https://koehr.in">koehr</a>
        —
        Background image "Berlin Skyline Sunset" © 2014 <a href="http://sumfinity.com/">Nico Trinkhaus</a>
      </footer>
    </div>
  </div>
</template>

<script>
import wallpaper from './assets/wallpaper.jpg'
import Logo from './Logo.vue'

export default {
  name: 'app',
  components: { Logo },
  data () {
    return { wallpaper, scrollTop: 0 }
  },
  mounted () {
    const logoElement = this.$refs.logo.$el
    const height = window.innerHeight
    const topPos = logoElement.getBoundingClientRect().top
    const transform = () => {
      const scale = 1.0 - parseFloat(window.scrollY) / height
      return `scale(${scale > 0.3 ? scale : 0.3}) translate(0,-${(topPos - topPos * scale) * 4.8}px)`
    }

    logoElement.style.transform = transform()
    window.addEventListener('scroll', evt => {
      logoElement.style.transform = transform()
    })
  }
}
</script>

<style>
body, #app {
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
}

#wallpaper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  display: block;
  width: 100vw;
  height: 100vh;
  transition: opacity .5s ease-in;
  opacity: .5;
  background: grey url('./assets/wallpaper-preview.jpg') center no-repeat;
  background-size: cover;
}
#wallpaper.lazy-load-progress { filter: blur(5px) saturate(25%); }
#wallpaper.lazy-load-success { opacity: 1; }

#container {
  position: relative;
  z-index: 0;
  width: 90rem;
  height: calc(90vh - 10rem);
  margin: 100vh auto 5vh;
  padding: 10rem 2rem 0;
  background: white;
}
#container > footer {
  position: absolute;
  bottom: 1em;
  display: block;
  width: 100%;
  text-align: center;
}
#logo {
  position: fixed;
  top: 0;
  z-index: 1;
  display: block;
  width: 100vw;
  height: 40vh;
  margin-top: 30vh;
  transform: scale(1.0) translate(0, 0);
}

h1, h2 { font-weight: normal; text-align: center; }
ul { list-style-type: none; padding: 0; }
li { display: inline-block; margin: 0 10px; }
a { color: #42b983; text-decoration: none; font-variant: small-caps; }
p { font-size: 2rem; margin: .5em; }
</style>

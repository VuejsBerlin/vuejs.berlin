<template>
  <div id="app">
    <div id="wallpaper" v-lazy-load-bg='wallpaper' />
    <div id="container">
      <Logo />
      <Frontpage />
    </div>
  </div>
</template>

<script>
import wallpaper from './assets/wallpaper.jpg'
import Logo from './Logo.vue'
import Frontpage from './FrontPage.vue'

export default {
  name: 'app',
  components: { Frontpage, Logo },
  data () {
    return { wallpaper }
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
  width: 96rem;
  margin: auto;
  margin-top: 30vh;
}
#logo {
  display: block;
  width: 40rem;
  margin: auto;
}

h1, h2 { font-weight: normal; }
ul { list-style-type: none; padding: 0; }
li { display: inline-block; margin: 0 10px; }
a { color: #42b983; }
</style>

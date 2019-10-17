<template>
    <div id="app">
        <router-view></router-view>
        <footer-guide></footer-guide>
    </div>
</template>

<script>
// import FooterGuide from './components/footerGuide/FooterGuide.vue'
// import Msite from './pages/miste/Msite.vue'
import requireComponents from './utils/requireComponents.js'

const modules1 = requireComponents(require.context('./components/footerGuide/', true, /\.vue$/))
const modules2 = requireComponents(require.context('./pages/', true, /\.vue$/))
const modules = {...modules1, ...modules2}
export default {
  // components: {
  //   FooterGuide,
  //   Msite
  // }
  components: modules
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #fee
</style>

<template>
    <div id="app">
        <router-view></router-view>
        <footer-guide></footer-guide>
    </div>
</template>

<script>
import FooterGuide from './components/footerGuid/FooterGuid.vue'

export default {
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #fee
</style>

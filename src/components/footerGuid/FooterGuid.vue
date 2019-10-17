<template>
    <footer class="footer_guide border-1px">
    <div class="guide_item" @click="goto('/msite')" :class="{on: isCurrent('/msite')}">
    <span class="item_icon">
    <i class="iconfont icon-food"></i>
    </span>
    <span>首页</span>
    </div>
    <div class="guide_item" @click="goto('/search')" :class="{on: isCurrent('/search')}">
    <span class="item_icon">
    <i class="iconfont icon-sousuo"></i>
    </span>
    <span>搜索</span>
    </div>
    <div class="guide_item" @click="goto('/order')" :class="{on: isCurrent('/order')}">
    <span class="item_icon">
    <i class="iconfont icon-icon-test"></i>
    </span>
    <span>订单</span>
    </div>
    <div class="guide_item" @click="goto('/profile')" :class="{on: isCurrent('/profile')}">
    <span class="item_icon">
    <i class="iconfont icon-wode2"></i>
    </span>
    <span>我的</span>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    gotoPage (path) {
      // 路由跳转
      this.router.replace(path)
    },
    isCurrent (path) {
      // 判断path是否为当前路由
      return this.$route.path === path
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

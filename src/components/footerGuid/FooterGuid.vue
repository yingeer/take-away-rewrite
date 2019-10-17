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
    <!-- <a-button type="primary">Button</a-button> -->
  </footer>
</template>

<script>
import { Button } from 'ant-design-vue'

export default {
  methods: {
    goto (path) {
      // 路由跳转
      this.$router.replace(path)
    },
    isCurrent (path) {
      // 判断path是否为当前路由
      return this.$route.path === path
    }
  },
  components: {
    AButton: Button
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../assets/stylus/mixin.styl'
$backgroundColor = #FFF
.footer_guide
  /*顶部有白色的边框, 并且是1像素的*/
  top-border-1px(#e4e4e4)
  position fixed
  z-index 0
  left 0
  right 0
  bottom 0
  background-color $backgroundColor
  width auto
  height 50px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999
    &.on
      color #02a774
    span
      font-size 14px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>

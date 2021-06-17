<template>
  <c-box-skin class="c-foot-nav" type="top">
    <c-row style="height: 100%">
      <c-col v-for="item in list" :key="item" :span="24 / list['length']">
        <router-link :to="item['path']">
          <c-box-center
            class="c-foot-nav__text"
            :class="{ 'c-foot-nav__text--active': item['active'] }"
            >{{ item["text"] }}</c-box-center
          >
        </router-link>
      </c-col>
    </c-row>
  </c-box-skin>
</template>

<script>
export default {
  name: "CFootNav",
  props: {
    list: {
      type: Object,
      default: function() {
        return []
      },
    },
  },
  // mounted() {
  //   console.log(this.$props.list[0].active)
  // },
}
</script>

<style lang="scss" scoped>
@include b(c-foot-nav) {
  @include e(text) {
    color: $color-text-primary;
    @include m(active) {
      color: $color-text-quaternary;
    }
  }
}
</style>

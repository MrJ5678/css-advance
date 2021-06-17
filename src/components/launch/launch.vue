<template>
  <c-box-skin type="bottom">
    <c-single-center class="c-launch">
      <img
        class="c-launch__logo"
        src="https://s10.mogucdn.com/mlcdn/c45406/190219_4ii32ja6gi9hdeb56k2487ce7eh24_60x60.png"
        ml15
        mr20
      />
      <div class="c-launch__download">
        <span style="color: #000" mb10>蘑菇街 总有高手帮你挑</span>
        <c-single-center>
          <c-svg-star
            size="10"
            :colors="['#f3ad4a', '#f3ad4a']"
            mr3
          ></c-svg-star>
          <c-svg-star
            size="10"
            :colors="['#f3ad4a', '#f3ad4a']"
            mr3
          ></c-svg-star>
          <c-svg-star
            size="10"
            :colors="['#f3ad4a', '#f3ad4a']"
            mr3
          ></c-svg-star>
          <c-svg-star
            size="10"
            :colors="['#f3ad4a', '#f3ad4a']"
            mr3
          ></c-svg-star>
          <c-svg-star size="10" :colors="['#f3ad4a', '#f3ad4a']"></c-svg-star>
          <span style="color: #8e8e92" ml10>超过2亿用户已下载</span>
        </c-single-center>
      </div>
      <c-box-center class="c-launch__button" radius4>打开APP</c-box-center>
    </c-single-center>
  </c-box-skin>
</template>
<script>
export default {
  name: "CLaunch",
  setup() {},
}
</script>
<style lang="scss" scoped>
@include b(c-launch) {
  height: 54px;
  @include e(logo) {
    @include dimensions(40px);
  }

  @include e(download) {
    @include grid($flex-direction: column);
  }

  @include e(button) {
    @include dimensions(75px, 25px);
    // @include t-color-primary("background");
    background-color: $color-primary;
    margin-left: 20px;
  }
}
</style>

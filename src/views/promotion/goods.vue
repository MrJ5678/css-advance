<template>
  <c-box-skin v-for="(item, index) in list" :key="index" mh24 mb18 radius6>
    <c-single-center class="store">
      <c-magazine class="store__image" :image="item['image']"></c-magazine>
      <div class="store__box" pv12 ph9>
        <div class="store__title" pb15 ellipsis1>{{ item["title"] }}</div>
        <c-single-center>
          <div class="store__progress" mr10></div>
          <span>剩余{{ item["progress"] }}件</span>
        </c-single-center>
        <c-single-center>
          <div>
            <div class="store__price" pb4 pt10>
              <b>¥</b>
              {{ item["price"] }}
              <span>¥{{ item["oldprice"] }}</span>
            </div>
            <div style="color: #999">{{ item["tips"] }}</div>
          </div>
          <c-box-center class="store__buy">立即购买</c-box-center>
        </c-single-center>
      </div>
    </c-single-center>
  </c-box-skin>
</template>
<script>
export default {
  name: "CGoods",
  props: {
    list: Array,
  },
}
</script>
<style lang="scss" scoped>
@include b(store) {
  align-items: stretch;
  @include e(image) {
    @include dimensions(123px);
  }

  @include e(box) {
    flex: 1;
  }

  @include e(title) {
    font-size: 14px;
  }

  @include e(progress) {
    @include dimensions(140px, 14px);
    border-radius: (28px/2);
    background-color: #ffd9de;
  }

  @include e(buy) {
    @include dimensions(91px, 27px);
    border-radius: (54px/2);
    background-color: #e95160;
  }

  @include e(price) {
    width: 125px;
    font-size: 20px;
    color: #ed2c48;
    b,
    span {
      font-size: 13px;
    }
    span {
      color: #999;
    }
  }
}
</style>

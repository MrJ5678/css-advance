<template>
  <c-layout>
    <c-header>
      <c-launch></c-launch>
      <c-box-skin type="bottom">
        <c-single-center>
          <hamburger-button
            theme="multi-color"
            size="28"
            :fill="['#a3a399', '#cf981a', '#fff', '#43ccf8']"
            :strokeWidth="2"
            ml15
            mr10
          />

          <c-single-center class="search" mt8 mb8 mr10 bor-base radius4>
            <search
              theme="multi-color"
              size="20"
              :fill="['#a3a399', '#fff', '#a3a399', '#43ccf8']"
              :strokeWidth="2"
              ml10
              mr5
            />
            <span>睡衣</span>
          </c-single-center>

          <more-two
            mr15
            ml2
            theme="multi-color"
            size="24"
            :fill="['#a3a399', '#fff', '#a3a399', '#43ccf8']"
            :strokeWidth="2"
          />
        </c-single-center>
      </c-box-skin>
    </c-header>
    <c-main>
      <!-- 轮播图 -->
      <div class="swiper">
        <div
          class="swiper__item"
          v-for="(item, index) in swipeList"
          :key="index"
        >
          <img :src="item['image']" />
        </div>
      </div>

      <!-- 分类 -->
      <c-box-skin>
        <c-row class="row" pb6>
          <c-col
            class="nav__col"
            v-for="(item, index) in categoryList"
            :key="index"
          >
            <c-single-center class="nav__item" pv5>
              <img class="nav__img" :src="item['image']" />
              <span class="nav__span">{{ item["title"] }}</span>
            </c-single-center>
          </c-col>
        </c-row>
      </c-box-skin>

      <!-- 商品列表 -->
      <c-row class="good" gutter="6" pa6>
        <c-col span="12">
          <c-box-skin
            v-for="(item, index) in brandList[0]['list']"
            :key="index"
            class="good__item"
            mb12
            radius4
          >
            <img class="good__img" :src="item['image']" />
            <div class="good__box" pv24 ph12>
              <p class="good__des" mb10>
                {{ item["des"] }}
              </p>
              <c-single-center>
                <img
                  class="good__avatar"
                  :src="item['avatarImage']"
                  mr5
                  circle
                />
                <span ellipsis1>{{ item["avatarDes"] }}</span>
              </c-single-center>
            </div>
          </c-box-skin>
        </c-col>
        <c-col span="12">
          <c-box-skin
            v-for="(item, index) in brandList[1]['list']"
            :key="index"
            class="good__item"
            mb12
            radius4
          >
            <img class="good__img" :src="item['image']" />
            <div class="good__box" pv24 ph12>
              <p class="good__des" mb10>
                {{ item["des"] }}
              </p>
              <c-single-center>
                <img
                  class="good__avatar"
                  :src="item['avatarImage']"
                  mr5
                  circle
                />
                <span ellipsis1>{{ item["avatarDes"] }}</span>
              </c-single-center>
            </div>
          </c-box-skin>
        </c-col>
      </c-row>

      <!-- menu -->
      <c-box-center class="menu" bga7 circle>快捷<br />导航</c-box-center>
    </c-main>

    <!-- tab栏 -->
    <c-footer>
      <c-foot-nav class="footer" :list="list" fz16></c-foot-nav>
    </c-footer>
  </c-layout>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue"
import {
  getRecommendatoryCategorys,
  getBanners,
  getBrandVideos,
} from "@/api/mall"
import { HamburgerButton, MoreTwo, Search } from "@icon-park/vue-next"
export default {
  components: {
    HamburgerButton,
    MoreTwo,
    Search,
  },
  setup() {
    const data = reactive({
      isShow: false,
      categoryList: [],
      swipeList: [],
      brandList: [{ list: [] }, { list: [] }],
    })

    onMounted(() => {
      // Toast.loading({
      // 	message: '加载中...',
      // 	forbidClick: true
      // });

      getRecommendatoryCategorys().then(res => {
        data.categoryList = res.data
      })

      getBanners().then(res => {
        console.log(res)
        data.swipeList = res.data
      })

      getBrandVideos().then(res => {
        console.log(res)
        data.brandList = res.data
      })
    })

    const list = [
      {
        path: "/mall/home",
        text: "首页",
        active: true,
      },
      {
        path: "/mall/store",
        text: "商城",
      },
      {
        path: "/live/home",
        text: "直播",
      },
      {
        path: "/me/me",
        text: "我",
      },
    ]

    return {
      ...toRefs(data),
      list,
    }
  },
}
</script>

<style lang="scss" scoped>
@include b(search) {
  @include dimensions(265px, 30px);
  box-shadow: 0 0 2px #ff5777;
}

@include b(swiper) {
  overflow: auto;
  white-space: nowrap;
  scroll-snap-type: x mandatory;
  @include e(item) {
    display: inline-block;
    width: 100%;
    scroll-snap-align: center;
  }
}

@include b(nav) {
  @include e(col) {
    width: 20%;
  }
  @include e(item) {
    flex-direction: column;
  }
  @include e(img) {
    @include dimensions(50px);
  }
}

@include b(good) {
  @include e(avatar) {
    @include dimensions(25px);
  }
}

@include b(footer) {
  & ::v-deep .c-foot-nav__text {
    height: 50px;
  }
}

@include b(menu) {
  @include position(fixed, bottom 60px right 10px);
  @include dimensions(50px);
}
</style>

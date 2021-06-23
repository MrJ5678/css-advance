<template>
  <c-layout>
    <c-main>
      <div class="header" pa24>
        <c-magazine
          image="https://s10.mogucdn.com/mlcdn/c45406/201015_45l80j09ebiaki64i8d5309j1hg83_702x426.png"
          ph6
          pv10
          radius6
        >
          <c-single-center pb10>
            <span mr7 font-tertiary fz20 font-feichi>今日必抢</span>
            <c-box-center class="header__tips">一件也是批发价</c-box-center>
          </c-single-center>

          <c-row class="good" gutter="6">
            <c-col span="8" v-for="(item, index) in hotGoodList" :key="index">
              <c-box-skin radius4>
                <c-magazine class="good__image" :image="item['image']">
                  <div class="good__number" pv2 ph5 bga5 font-tertiary>
                    {{ item["sell"] }}
                  </div>
                </c-magazine>
                <div pa4 ellipsis1>{{ item["des"] }}</div>
                <c-single-center pb10>
                  <div>
                    <div class="good__price" pl2>
                      <b>{{ item["price"] }}</b>
                    </div>
                    <div class="good__oldprice" pl2>
                      {{ item["oldprice"] }}
                    </div>
                  </div>
                  <c-box-center class="good__buy" font-teriary circle
                    >抢</c-box-center
                  >
                </c-single-center>
              </c-box-skin>
            </c-col>
          </c-row>
        </c-magazine>
      </div>

      <c-magazine
        image="https://s10.mogucdn.com/mlcdn/c45406/201104_872b0le054e822e6hh4fcjf95fl92_750x117.png"
      >
        <c-single-center class="time">
          <c-box-center
            class="time__container"
            v-for="(item, i) in time"
            :key="i"
          >
            <b fz17>{{ item["t"] }}</b>
            <c-box-center
              class="time__status"
              :class="{ 'time__status--active': i === active }"
              @click="changeTime(i, item['t'])"
            >
              {{ item["status"] }}
            </c-box-center>
          </c-box-center>
        </c-single-center>
      </c-magazine>

      <c-box-center class="count">
        <span pr4>——</span>
        <span pr4>距离本场活动开始还有</span>
        <c-box-center class="count__time" bga10 radius2>{{
          hour
        }}</c-box-center>
        <span ph4>:</span>
        <c-box-center class="count__time" bga10 radius2>{{ min }}</c-box-center>
        <span ph4>:</span>
        <c-box-center class="count__time" bga10 radius2>{{
          second
        }}</c-box-center>
        <span pl9>——</span>
      </c-box-center>

      <c-goods :list="fastBuyGoods"></c-goods>
    </c-main>
    <c-footer>
      <c-foot-nav class="footer" :list="footerList" fz13></c-foot-nav>
    </c-footer>
  </c-layout>
</template>

<script>
import { getHotGoods, getFastBuyGoods } from "@/api/promotion"
import { onMounted, reactive, toRefs } from "vue"
import CGoods from "./goods"

export default {
  components: {
    CGoods,
  },
  setup() {
    const data = reactive({
      hotGoodList: [],
      hour: "",
      min: "",
      second: "",
      time: 10000000,
      active: 0,
      fastBuyGoods: [],
    })

    let t = ""

    const timeDown = () => {
      const nowTime = new Date()
      const endTime = new Date()
      let leftTime = parseInt(
        (endTime.getTime() + data.time - nowTime.getTime()) / 1000
      )
      let d = parseInt(leftTime / (24 * 60 * 60))
      let h = formate(parseInt((leftTime / (60 * 60)) % 24))
      let m = formate(parseInt((leftTime / 60) % 60))
      let s = formate(parseInt(leftTime % 60))
      data.hour = h
      data.min = m
      data.second = s
    }

    const formate = time => {
      if (time >= 10) {
        return time
      } else {
        return `0${time}`
      }
    }

    const changeTime = (i, t) => {
      data.active = i
      restart()
      getFastBuyGoods({ time: t }).then(res => {
        data.fastBuyGoods = res.data
      })
    }

    const restart = () => {
      data.time = 10000000
      clearInterval(t)
      start()
    }

    const start = () => {
      timeDown()
      t = setInterval(() => {
        data.time -= 1000
        timeDown()
      }, 1000)
    }

    onMounted(() => {
      start()
      getHotGoods().then(res => {
        data.hotGoodList = res.data
      })

      getFastBuyGoods({ time: "00:00" }).then(res => {
        data.fastBuyGoods = res.data
      })
    })

    const time = [
      {
        t: "00:00",
        status: "未开抢",
        active: true,
      },
      {
        t: "03:00",
        status: "未开抢",
      },
      {
        t: "06:00",
        status: "未开抢",
      },
      {
        t: "09:00",
        status: "未开抢",
      },
      {
        t: "12:00",
        status: "未开抢",
      },
      {
        t: "15:00",
        status: "未开抢",
      },
      {
        t: "18:00",
        status: "未开抢",
      },
      {
        t: "21:00",
        status: "未开抢",
      },
      {
        t: "24:00",
        status: "未开抢",
      },
    ]

    const footerList = [
      {
        path: "/promotion/fast-buy",
        text: "限时快抢",
        active: true,
      },
      {
        path: "/promotion/last-crazy",
        text: "即将售罄",
      },
      {
        path: "/promotion/my-reminder",
        text: "我的快抢",
      },
    ]

    return {
      ...toRefs(data),
      changeTime,
      time,
      footerList,
    }
  },
}
</script>

<style lang="scss" scoped>
@include b(header) {
  background: url("https://s10.mogucdn.com/mlcdn/c45406/201103_154d6c9b491c6d29af5l9a5487h6i_750x225.png")
    no-repeat top center / contain;
  @include e(tips) {
    @include dimensions(100px, 17px);
    border-radius: 15px 8px 8px 0 / 15px 8px 8px 0;
    background-color: #fff;
    color: #ff5777;
  }
}

@include b(good) {
  @include e(image) {
    height: 107px;
  }

  @include e(number) {
    @include position(absolute, bottom 5px left 0);
    border-radius: 0 6px 6px 0 / 0 6px 6px 0;
  }

  @include e(price) {
    color: #ed2c48;
  }

  @include e(oldprice) {
    color: #999;
    text-decoration: line-through;
  }

  @include e(buy) {
    margin-left: 30px;
    @include dimensions(22px);
    background-image: linear-gradient(-77deg, #ff5d74, #ed2c48);
  }
}

@include b(time) {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  @include e(container) {
    flex-direction: column;
    flex-shrink: 0;
    @include dimensions(80px, 55px);
    scroll-snap-align: center;
  }

  @include e(status) {
    @include dimensions(60px, 18px);
    border-radius: 18px;
    @include m(active) {
      opacity: 1;
      background-image: linear-gradient(-126deg, #f7e6d4 7%, #fdd09f);
      color: #cd2123;
    }
  }
}

@include b(count) {
  height: 43px;
  color: #999;
  @include e(time) {
    @include dimensions(20px);
  }
}

@include b(footer) {
  & :deep .c-foot-nav__text {
    height: 50px;
  }
}
</style>

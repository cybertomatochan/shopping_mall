<template>
  <div>
    <div
      class="jumbotron d-flex justify-content-center align-items-center"
    >
      <div
        class="jumboLayer text-center py-4"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h1 class="mb-3 font-weight-bolder">巷弄美味輕鬆到家</h1>
        <p class="h3 mb-3 font-weight-bolder">
          CoMa<i class="fas fa-utensils"></i>，你想得到的店家都在這裡
        </p>
        <router-link to="/hot" class="btn btn-primary btn-lg my-3 font-weight-bolder">
          開始選購
        </router-link>
      </div>
    </div>

    <!-- 最新消息 -->
    <div class="py-5">
      <div class="container">
        <h3
          class="text-center my-3 font-weight-bolder"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          最新消息
        </h3>
        <div class="row">
          <div class="col-md-4 my-3" data-aos="fade-right" data-aos-duration="500">
            <div
              class="news-img d-flex align-items-center kitchen"
            >
              <div class="px-3 mx-3 news-text">
                <h3 class="text-primary font-weight-bolder">【親子廚房】</h3>
                <p>110/02</p>
                <p class="font-weight-bolder">
                  營養師和廚師同台教學，挑食過敏沒問題，大家都愛吃的手工水餃食譜。
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-md-4 my-3"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            <div
              class="news-img d-flex align-items-center exotic">
              <div class="px-3 mx-3 news-text">
                <h3 class="text-primary font-weight-bolder">【異國食堂】</h3>
                <p>109/12</p>
                <p class="font-weight-bolder">
                  年末回饋，邀請白金會員至五星級飯店 BUFFET，享受溫馨平安夜。
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-md-4 my-3"
            data-aos="fade-right"
            data-aos-delay="1000"
            data-aos-duration="500"
          >
            <div
              class="news-img d-flex align-items-center tour">
              <div class="px-3 mx-3 news-text">
                <h3 class="text-primary font-weight-bolder">【名人導覽】</h3>
                <p>109/10</p>
                <p class="font-weight-bolder">
                  想體驗米其林主廚的童年回憶嗎？那就參加周日的早市導覽吧。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 網站服務簡單介紹 -->
    <div class="bg-dark py-5">
      <div
        class="container text-light text-center"
        data-aos="fade"
        data-aos-duration="2000"
      >
        <h3 class="my-3">CoMa<i class="fas fa-utensils"></i> 三大保證</h3>
        <div class="row mb-3">
          <div class="col-md-4">
            <i class="fas fa-store-alt intro-img my-3 text-primary"></i>
            <h3>店家現點現做</h3>
          </div>
          <div class="col-md-4">
            <i class="fas fa-phone-square intro-img my-3 text-primary"></i>
            <h3>24小時專人客服</h3>
          </div>
          <div class="col-md-4">
            <i class="fas fa-truck intro-img my-3 text-primary"></i>
            <h3>48小時宅配到府</h3>
          </div>
        </div>
        <router-link to="/about" class="btn btn-primary btn-lg font-weight-bolder my-3">
          了解更多
        </router-link>
      </div>
    </div>

    <!-- 商品連結 -->
    <div class="py-5" data-aos="fade" data-aos-duration="2000">
      <div class="container">
        <div class="h3 text-center my-3 font-weight-bolder">最近大家都在瘋甚麼</div>
        <div class="row">
          <div class="col-md-6 my-3">
            <router-link to="/hot">
              <div
                class="link-img hot">
                <div class="layer invisible">
                  <h4 class="text-dark text-right carousel-caption link-text">
                    Hot Products →
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-md-6 my-3">
            <router-link to="/discount">
              <div
                class="link-img discount">
                <div class="layer invisible">
                  <h4 class="text-dark text-right carousel-caption link-text">
                    Discount Products →
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
$assets: '~@/assets/';

export default {
  data() {
    return {
    };
  },
};
</script>

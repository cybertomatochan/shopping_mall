<template>
  <div>
    <div
      class="jumbotron d-flex justify-content-center align-items-center"
      style="
        background-image: url('https://images.unsplash.com/photo-1488459716781-31db52582fe9');
      "
    >
      <div class="jumboLayer text-center py-4">
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
        <h3 class="text-center my-3 font-weight-bolder">最新消息</h3>
        <div class="row">
          <div class="col-md-4 my-3">
            <div
              class="news-img d-flex align-items-center"
              style="
                background-image: url('https://images.unsplash.com/photo-1570604127008-f644337cfb8b');
              "
            >
              <div class="px-3 mx-3 news-text">
                <h3 class="text-primary font-weight-bolder">【親子廚房】</h3>
                <p>110/02</p>
                <p class="font-weight-bolder">
                  營養師和料理專家同台教學，挑食、過敏都沒問題，大人小孩都愛吃的手工水餃食譜。
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 my-3">
            <div
              class="news-img d-flex align-items-center"
              style="
                background-image: url('https://images.unsplash.com/photo-1575443163387-1ee3ce66a683');
              "
            >
              <div class="px-3 mx-3 news-text">
                <h3 class="text-primary font-weight-bolder">【會員專屬--異國食堂】</h3>
                <p>109/12</p>
                <p class="font-weight-bolder">
                  年末回饋，邀請白金會員至五星級飯店 BUFFET，享受溫馨平安夜。
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 my-3">
            <div
              class="news-img d-flex align-items-center"
              style="
                background-image: url('https://images.unsplash.com/photo-1499682562388-92424022d2a2');
              "
            >
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
      <div class="container text-light text-center">
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
    <div class="py-5">
      <div class="container">
        <div class="h3 text-center my-3 font-weight-bolder">最近大家都在瘋甚麼</div>
        <div class="row">
          <div class="col-md-6 my-3">
            <router-link to="/hot">
              <div
                class="link-img"
                style="
                  background-image: url('https://images.unsplash.com/photo-1603092872493-55d05f48019e');
                "
              >
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
                class="link-img"
                style="
                  background-image: url('https://images.unsplash.com/photo-1559667709-eabb5b50117a');
                "
              >
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
export default {
  data() {
    return {};
  },
};
</script>

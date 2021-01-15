<template>
  <div>
    <div class="row">
      <div
        class="col-md-5 about-img"
        style="
          background-image: url('https://images.unsplash.com/photo-1518522772213-78b1085b76d2');
        "
      ></div>
      <div class="col-md-7 py-5 text-primary">
        <div class="row d-flex justify-content-center">
          <div class="col-8">
            <h3 class="text-center mb-5 font-weight-bolder">關於我們</h3>
            <p class="h5 font-weight-bolder mb-5">
              &emsp;&emsp;
              CoMall成立於2019年，創辦團隊皆為傳統小吃愛好者。為了推廣這份美味，積極在全台菜市場尋找合作店家，希望將這些在地風味送到每位美食愛好者面前。
            </p>
            <p class="h5 font-weight-bolder">
              &emsp;&emsp;隨著業務發展，CoMall除了原本的網路通路外也在2020年6月開設實體店面，並舉辦多種線下實體活動，期望帶給消費者不一樣的感官體驗。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex flex-md-row-reverse bg-primary align-items-center">
      <div class="col-md-5">
        <div class="text-light px-3 my-3">
          <h3 class="text-center">實體商店</h3>
          <h3 class="mt-5">
            <i class="fas fa-map-marked-alt mr-5"></i>110台北市信義區菸廠路88號
          </h3>
          <h3 class="mt-5"><i class="fas fa-phone-volume mr-5"></i> 0987-6543210</h3>
          <h3 class="mt-5">
            <i class="fas fa-paper-plane mr-5"></i>comallnotreal@gmail.com
          </h3>
        </div>
      </div>
      <div class="col-md-7 px-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14458.765581207339!2d121.5614574!3d25.044545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d204e656cd39b8!2z6Kqg5ZOB55Sf5rS75p2-6I-45bqX!5e0!3m2!1szh-TW!2stw!4v1610459580136!5m2!1szh-TW!2stw"
          frameborder="0"
          style="border: 0; height: 50vh; width: 100%"
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
    <div class="container py-5 text-primary">
      <h3 class="text-center font-weight-bolder py-3">FAQ</h3>
      <!-- Q1 -->
      <p
        class="h5 font-weight-bolder que px-3 py-3"
        data-toggle="collapse"
        data-target="#Q1"
        aria-expanded="false"
        aria-controls="Q1"
      >
        完成的訂單可以修改付款方式或取件方式嗎？
      </p>
      <div class="collapse" id="Q1">
        <div class="card card-body">
          訂單送出後即進入系統出貨作業流程，無法修改付款或取件方式，如需變更請取消訂單後再重新下單。
        </div>
      </div>
      <!-- Q2 -->
      <p
        class="h5 font-weight-bolder que px-3 py-3"
        data-toggle="collapse"
        data-target="#Q2"
        aria-expanded="false"
        aria-controls="Q2"
      >
        多少錢才可免運?
      </p>
      <div class="collapse" id="Q2">
        <div class="card card-body">
          凡購物滿1500元即可享有免運費的優惠。
          若購物未滿1500元，無論選擇宅配到府或是7-11取貨付款，運費統一以100元計算，而若您選擇使用【貨到付款】，則除原本運費外需額外另加40元的宅配人員代收費用。
        </div>
      </div>
      <!-- Q3 -->
      <p
        class="h5 font-weight-bolder que px-3 py-3"
        data-toggle="collapse"
        data-target="#Q3"
        aria-expanded="false"
        aria-controls="Q3"
      >
        可以更改發票的日期跟內容嗎？
      </p>
      <div class="collapse" id="Q3">
        <div class="card card-body">
          採用系統化自動開立，無法指定變更品名、日期，且一筆訂單對應一張發票，無法分別開立多張。如有分別開立需求，請將商品分別下單。
        </div>
      </div>
      <!-- Q4 -->
      <p
        class="h5 font-weight-bolder que px-3 py-3"
        data-toggle="collapse"
        data-target="#Q4"
        aria-expanded="false"
        aria-controls="Q4"
      >
        請問可以離島配送嗎?
      </p>
      <div class="collapse" id="Q4">
        <div class="card card-body">
          商品皆可離島全區配送，單一商品材積限制：長+寬+高需低於120公分;
          單一商品重量限制：需低於20公斤; 運費：每張訂單加收運費90元;
          配送時間：約3個工作天。
        </div>
      </div>
      <!-- Q5 -->
      <p
        class="h5 font-weight-bolder que px-3 py-3"
        data-toggle="collapse"
        data-target="#Q5"
        aria-expanded="false"
        aria-controls="Q5"
      >
        請問配合的宅配公司是哪一家？
      </p>
      <div class="collapse" id="Q5">
        <div class="card card-body">
          除特殊原因外（預購、特別訂製商品除外），一般在訂單確認後五天內(不含例假日)將貨品運送到指定地點。您可在「我的帳戶」內，查詢您最近訂購商品的送貨狀態(配送中-表示已通知廠商出貨；已配送-表示廠商已送交郵局或貨運寄送)。
        </div>
      </div>
    </div>
  </div>
</template>

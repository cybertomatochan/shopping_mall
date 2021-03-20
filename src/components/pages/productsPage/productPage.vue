<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb pl-0">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">
          <router-link to="/all">所有商品</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <router-link :to="`${product.id}`">{{ product.title }}</router-link>
        </li>
      </ol>
    </nav>

    <loading :active.sync="isLoading"></loading>

    <div class="row">
      <div class="col-md-8">
        <div
          style="height: 450px; background-size: cover; background-position: center"
          :style="{ backgroundImage: `url(${product.imageUrl})` }"
        ></div>
      </div>

      <div class="col-md-4 text-right mb-5">
        <p class="text-primary h4 mb-5 text-left">{{ product.title }}</p>
        <!-- 有特價 -->
        <div v-if="product.origin_price !== product.price">
          <s class="my-3 h5"> 原價： NT.{{ product.origin_price }}</s>
          <p class="text-danger h3 my-3">特價： NT.{{ product.price }}</p>
        </div>
        <!-- 原價 -->
        <div v-else="product.origin_price == product.price">
          <p class="text-dakr h3 my-3">售價： NT.{{ product.price }}</p>
        </div>

        <div class="row">
          <div class="col-6 d-flex justify-content-between align-items-center">
            <i class="far fa-minus-square fa-2x text-primary" @click="minqty()"></i>
            <h5>{{ qty }}</h5>
            <i class="far fa-plus-square fa-2x text-primary" @click="addqty()"></i>
          </div>
          <div class="col-6 text-right">
            <a class="btn btn-primary" @click="addtoCart(product.id)"> 加入購物車 </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: "",
      qty: 1,
      isLoading: false,
    };
  },
  methods: {
    addtoCart(id, qty = this.qty) {
      const vm = this;
      vm.isLoading = true;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: cart }).then((response) => {
        console.log(response);
        vm.$bus.$emit("cart:update");
        vm.isLoading = false;
      });
    },
    getCart() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      this.$http.get(url).then((response) => {
        console.log(response.data);
      });
    },
    getProduct() {
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      this.$http.get(api).then((response) => {
        if (response.data.products.find((item) => item.id == vm.$route.params.id)) {
          const a = response.data.products.filter(
            (item) => item.id == vm.$route.params.id
          );
          vm.product = a[0];
          console.log(vm.product);
          vm.isLoading = false;
        } else {
          console.log("no");
          vm.$router.push("wrongPage");
        }
      });
    },
    addqty() {
      const vm = this;
      vm.qty += 1;
    },
    minqty() {
      const vm = this;
      if (vm.qty > 1) {
        vm.qty -= 1;
      }
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

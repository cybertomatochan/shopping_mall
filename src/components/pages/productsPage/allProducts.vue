<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb pl-0">
        <li class="breadcrumb-item"><router-link to="/">home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">
          <router-link to="/">所有商品</router-link>
        </li>
      </ol>
    </nav>
    <loading :active.sync="isLoading"></loading>
    <div class="row">
      <div
        class="card-group col-md-4 mb-3"
        v-for="(item, key) in products"
        :key="item.id"
      >
        <router-link class="card h-100 shadow p-3 bg-white rounded" :to="`${item.id}`">
          <div
            style="height: 150px; background-size: cover; background-position: center"
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
          ></div>
          <div class="card-body">
            <h5 class="card-text">{{ item.title }}</h5>
          </div>
          <div class="card-foot">
            <p class="card-text text-right align-bottom">NT.{{ item.price }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        vm.products = response.data.products;
        vm.isLoading = false;
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

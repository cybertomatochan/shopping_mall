<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <table class="table mr-3">
      <thead>
        <th class="text-center">品項</th>
        <th class="text-center" width="80">個數</th>
        <th class="text-center" width="150">價格</th>
        <th class="text-center" width="100">刪除</th>
      </thead>
      <tbody>
        <tr v-for="item in cart.carts" :key="item.id">
          <th class="align-middle">{{ item.product.title }}</th>
          <th class="text-center align-middle">{{ item.qty }}</th>
          <th class="text-right align-middle">{{ item.product.price }}</th>
          <th class="text-center align-middle">
            <button class="btn btn-danger" @click.prevent="delCart(item.id)">
              <i class="fas fa-trash"></i>
            </button>
          </th>
        </tr>
        <tr>
          <th colspan="2" class="text-right">總價</th>
          <th class="text-right">{{ cart.total }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      cartLength: [],
      isLoading: false,
    };
  },
  methods: {
    getCart() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      this.$http.get(url).then((response) => {
        console.log(response.data);
        vm.cart = response.data.data;
        vm.cartLength = response.data.data.carts.length;
      });
    },
    delCart(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(url).then((response) => {
        console.log(response.data);
        vm.$bus.$emit("cart:update");
        vm.getCart();
        vm.isLoading = false;
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>

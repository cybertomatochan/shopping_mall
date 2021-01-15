<template>
  <div>
    <button
      class="btn btn-secondary dropdown-toggle cart-btn"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <i class="fas fa-shopping-cart mr-3"></i>{{ cartLength }}
    </button>
    <div
      class="dropdown-menu dropdown-menu-left"
      aria-labelledby="dropdownMenuButton"
      style="min-width: 20rem"
    >
      <table class="table table-responsive w-100">
        <thead>
          <th class="text-center">品項</th>
          <th class="text-center" width="80">個數</th>
          <th class="text-center" width="80">價格</th>
          <th class="text-center" width="50">刪除</th>
        </thead>
        <tbody>
          <tr v-for="item in cart.carts" :key="item.id">
            <th class="align-middle">{{ item.product.title }}</th>
            <th class="text-center align-middle">{{ item.qty }}</th>
            <th class="text-right align-middle">{{ item.total }}</th>
            <th>
              <button class="btn btn-danger align-middle" @click="delCart(item.id)">
                <i class="fas fa-trash"></i>
              </button>
            </th>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-end">
        <button class="btn btn-primary mr-3" @click="goPay" v-if="cartLength != 0">
          結帳去
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      cartLength: 0,
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
        vm.getCart();
      });
    },
    dropdownMenu() {
      $("#dropdownMenu2").dropdown("show");
    },
    goPay() {
      this.$router.push("payment");
    },
  },
  created() {
    this.getCart();
    this.$bus.$on("cart:update", () => {
      this.getCart();
    });
  },
};
</script>

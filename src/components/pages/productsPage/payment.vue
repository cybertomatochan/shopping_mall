<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <table class="table mr-3">
      <thead>
        <th class="text-center">品項</th>
        <th class="text-center" width="80">個數</th>
        <th class="text-center" width="150">價格</th>
      </thead>
      <tbody>
        <tr v-for="item in order.products" :key="item.id">
          <th class="align-middle">{{ item.product.title }}</th>
          <th class="text-center align-middle">{{ item.qty }}</th>
          <th class="text-right align-middle">{{ item.product.price }}</th>
        </tr>
        <tr>
          <th colspan="2" class="text-right">總價</th>
          <th class="text-right">{{ order.total }}</th>
        </tr>
      </tbody>
    </table>
    <div class="text-right">
      <button class="btn btn-danger" @click="payOrder()">確認付款去</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderId: "",
      order: {
        products: {},
      },
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.order = response.data.order;
        console.log(response.data.order);
        vm.isLoading = false;
      });
    },
    payOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.post(url).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push(`/all`);
        }
        vm.isLoading = false;
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>

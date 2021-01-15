<template>
  <div>
    <nav class="list-group d-flex justify-content-center">
      <router-link class="list-group-item pt-md-0" to="/all">所有商品</router-link>
      <router-link class="list-group-item" to="/hot">熱銷商品</router-link>
      <router-link class="list-group-item" to="/discount">折扣商品</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: "",
    };
  },
};
</script>

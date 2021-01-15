<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-lg-2 px-md-4 mt-3">
          <Sidebar></Sidebar>
          <Cart></Cart>
        </div>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 mt-3">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./sidebar";
import Cart from "./cart";
export default {
  components: {
    Sidebar,
    Cart,
  },
};
</script>

<template>
  <div>
    <Navbar />
    <div class="main">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../navbar";
import Footer from "../footer";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

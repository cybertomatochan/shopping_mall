<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container d-flex">
        <router-link class="nav-link navbar-brand pl-0" to="/"
          >CoMa<i class="fas fa-utensils"></i
        ></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse d-md-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li class="nav-item ml-3">
              <router-link class="nav-link" to="/all">Products</router-link>
            </li>
            <li class="nav-item ml-3">
              <router-link class="nav-link" to="/about">About Us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {};
  },
};
</script>

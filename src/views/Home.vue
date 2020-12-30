<template>
  <div class="home">
    <h1>{{ info }}</h1>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      info: null,
    };
  },
  created: function() {
    axios.get("/professors").then((response) => (this.info = response.data));
  },
  methods: {},
};
</script>

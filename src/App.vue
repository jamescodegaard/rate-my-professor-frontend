<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar">
        <div class="container-fluid">
          <router-link to="/professors" class="navbar-brand"
            >Professors</router-link
          >
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="nameFilter"
              list="lastNames"
            />
            <datalist id="lastNames">
              <option v-for="professor in professors">{{
                professor.last_name
              }}</option>
            </datalist>
            <button class="btn btn-light btn-outline-secondary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>

    <router-view />
    <footer>
      <div>
        <br />
      </div>
    </footer>
  </div>
</template>

<style>
#nav {
  background-color: #6ddaf0;
}

#nav .navbar-brand {
  color: rgb(94, 94, 94);
}

#app {
  background-color: #e0e0e0;
  background-image: url("https://www.transparenttextures.com/patterns/asfalt-dark.png");
  height: 100vh;
  /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
}
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  data: function() {
    return {
      professors: [],
      nameFilter: "",
      sortAttribute: "nameFilter",
      error: [],
    };
  },
  created: function() {},
  mixins: [Vue2Filters.mixin],
  methods: {},
};
</script>

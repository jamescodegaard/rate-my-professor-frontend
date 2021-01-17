<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-dark bg-info">
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
  </div>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
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

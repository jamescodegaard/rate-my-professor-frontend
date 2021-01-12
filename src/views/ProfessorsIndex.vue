<template>
  <div class="professors-index">
    <div v-for="professor in professors">
      <h1>{{ professor.first_name }} {{ professor.last_name }}</h1>
      <h3>{{ professor.school }}</h3>
      <h3>{{ professor.department }}</h3>
      <h3>{{ professor.title }}</h3>
      <router-link :to="`/professors/${professor.professor_id}`"
        >See Reviews</router-link
      >
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      professors: {},
      error: [],
    };
  },
  created: function() {
    axios
      .get("/professors")
      .then((response) => (this.professors = response.data));
  },
  methods: {},
};
</script>

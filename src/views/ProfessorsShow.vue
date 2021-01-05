<template>
  <div class="professors-show">
    <h1>{{ professor.first_name }} {{ professor.last_name }}</h1>
    <h3>Title: {{ professor.title }}</h3>
    <h3>School: {{ professor.school }}</h3>
    <h3>Department: {{ professor.department }}</h3>
    <h3>Reviews:</h3>
    <div v-for="review in professor.reviews">
      <h4>Rating: {{ review.rating }}</h4>
      <h4>{{ review.text }}</h4>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      professor: {},
      error: [],
    };
  },
  created: function() {
    axios.get(`/professors/${this.$route.params.id}`).then((response) => {
      console.log(response.data), (this.professor = response.data.professor[0]);
    });
  },
  methods: {
    reviewsIndex: function() {},
  },
};
</script>

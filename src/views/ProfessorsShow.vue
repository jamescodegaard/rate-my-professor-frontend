<template>
  <div class="professors-show">
    <h1>{{ professor.first_name }} {{ professor.last_name }}</h1>
    <h3>Title: {{ professor.title }}</h3>
    <h3>School: {{ professor.school }}</h3>
    <h3>Department: {{ professor.department }}</h3>
    <button v-on:click="destroyProfessor()">Delete this Professor</button>
    <h3>Reviews:</h3>
    <div v-for="review in professor.reviews">
      <h4>Rating: {{ review.rating }}</h4>
      <h4>{{ review.text }}</h4>
      <button v-on:click="destroyReview(review)">Delete Review</button>
    </div>
    <button v-on:click="reviewsFormToggle = !reviewsFormToggle">
      Add a Review!
    </button>
    <div v-if="reviewsFormToggle === true">
      <form v-on:submit="createReview()">
        <ul>
          <li>
            <label>Review Description:</label>
            <input type="text" v-model="newText" />
          </li>
          <li>
            <label>Rating:</label>
            <input type="number" v-model="newRating" />
          </li>
        </ul>
        <button type="submit">Submit Your Review!</button>
      </form>
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
      reviewsFormToggle: false,
      newReview: "",
      newText: "",
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
    createReview: function() {
      var params = {
        professor_id: this.professor.professor_id,
        text: this.newText,
        rating: this.newRating,
      };
      axios
        .post("/reviews", params)
        .then((response) => {
          console.log(response);
          this.professor.reviews.push(response.data);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyProfessor: function() {
      axios
        .delete(`/professors/${this.professor.professor_id}`)
        .then((response) => {
          this.$router.push("/professors");
        });
    },
    destroyReview: function(review) {
      var index = this.professor.reviews.indexOf(review);
      axios.delete(`/reviews/${review.review_id}`).then((response) => {
        this.professor.reviews.splice(index, 1);
      });
    },
  },
};
</script>

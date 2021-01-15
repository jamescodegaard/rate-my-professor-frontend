<template>
  <div class="professors-show">
    <h1>{{ professor.first_name }} {{ professor.last_name }}</h1>
    <h3>Title: {{ professor.title }}</h3>
    <h3>School: {{ professor.school }}</h3>
    <h3>Department: {{ professor.department }}</h3>
    <button v-on:click="updateProfessorFormToggle = !updateProfessorFormToggle">
      Update professor info
    </button>
    <button v-on:click="destroyProfessor()">Delete this Professor</button>
    <h3>Reviews:</h3>
    <div v-for="review in professor.reviews">
      <h4>Rating: {{ review.rating }}</h4>
      <h4>{{ review.text }}</h4>
      <button v-on:click="updateReviewFormToggle = review.review_id">
        Edit Review
      </button>
      <button v-on:click="destroyReview(review)">Delete Review</button>
      <div v-if="updateReviewFormToggle === review.review_id">
        <form v-on:submit.prevent="updateReview(review)">
          <ul>
            <li>
              <label>Text:</label>
              <input type="text" v-model="review.text" />
            </li>
            <li>
              <label>Rating:</label>
              <input type="text" v-model="review.rating" />
            </li>
          </ul>
          <button type="submit">Update Review!!</button>
        </form>
      </div>
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
    <div v-if="updateProfessorFormToggle === true">
      <form v-on:submit.prevent="updateProfessor()">
        <ul>
          <li>
            <label>First Name:</label>
            <input type="text" v-model="professor.first_name" />
          </li>
          <li>
            <label>Last Name:</label>
            <input type="text" v-model="professor.last_name" />
          </li>
          <li>
            <label>School:</label>
            <input type="text" v-model="professor.school" />
          </li>
          <li>
            <label>Department:</label>
            <input type="text" v-model="professor.department" />
          </li>
          <li>
            <label>Title:</label>
            <input type="text" v-model="professor.title" />
          </li>
        </ul>
        <button type="submit">Update Professor!!</button>
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
      updateProfessorFormToggle: false,
      updateReviewFormToggle: null,
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
    updateProfessor: function() {
      var params = {
        first_name: this.professor.first_name,
        last_name: this.professor.last_name,
        school: this.professor.school,
        department: this.professor.department,
        title: this.professor.title,
      };
      axios
        .put(`/professors/${this.professor.professor_id}`, params)
        .then((response) => {
          console.log(response.data);
          this.updateProfessorFormToggle = false;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    updateReview: function(review) {
      // var index = this.professor.reviews.indexOf(review);
      var params = {
        professor_id: this.professor.professor_id,
        text: review.text,
        rating: review.rating,
      };
      axios
        .put(`/reviews/${review.review_id}`, params)
        .then((response) => {
          console.log(response.data);
          // this.professor.reviews[index] = response.data;
          this.updateReviewFormToggle = null;
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

<template>
  <div class="professors-show">
    <div class="container text-center">
      <div class="professor-info rounded">
        <div class="mt-3">
          <br />
          <h1>{{ professor.first_name }} {{ professor.last_name }}</h1>
          <h3>Title: {{ professor.title }}</h3>
          <h3>School: {{ professor.school }}</h3>
          <h3>Department: {{ professor.department }}</h3>
          <div v-if="updateProfessorFormToggle === false">
            <button
              class="btn btn-light btn-outline-secondary border-info mt-1"
              v-on:click="
                updateProfessorFormToggle = !updateProfessorFormToggle
              "
            >
              Update professor info
            </button>
          </div>
          <br />
        </div>
      </div>

      <div v-if="updateProfessorFormToggle === true">
        <div class="row row-cols-1 g-4 gy-3 mt-1">
          <div class="col">
            <div class="card text-dark bg-light border-info">
              <div class="card-body">
                <h5 class="card-title"></h5>
                <div class="card-text">
                  <div class="row">
                    <button
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                      v-on:click="
                        updateProfessorFormToggle = !updateProfessorFormToggle
                      "
                    ></button>
                  </div>
                  <form class="row g-3" v-on:submit.prevent="updateProfessor()">
                    <div class="col-md-6">
                      <label class="form-label">First Name: </label>

                      <input
                        class="form-control"
                        type="text"
                        v-model="professor.first_name"
                      />
                    </div>

                    <div class="col-md-6">
                      <label class="form-label">Last Name: </label>

                      <input
                        class="form-control"
                        type="text"
                        v-model="professor.last_name"
                      />
                    </div>

                    <div class="col-md-4">
                      <label class="form-label">School: </label>

                      <input
                        class="form-control"
                        type="text"
                        v-model="professor.school"
                      />
                    </div>
                    <div class="col-md-4">
                      <label class="form-label">Department: </label>
                      <input
                        class="form-control"
                        type="text"
                        v-model="professor.department"
                      />
                    </div>
                    <div class="col-md-4">
                      <label class="form-label">Title: </label>
                      <input
                        class="form-control"
                        type="text"
                        v-model="professor.title"
                      />
                    </div>

                    <button
                      class="btn btn-light btn-outline-secondary border-info mt-4"
                      type="submit"
                    >
                      Update Professor!!
                    </button>
                  </form>
                  <button
                    class="btn btn-light btn-outline-secondary border-info mt-4"
                    v-on:click="destroyProfessor()"
                  >
                    Delete this Professor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <h3>Reviews:</h3>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4 gy-3">
        <div class="col" v-for="review in professor.reviews">
          <div class="card text-dark bg-light border-info">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <div class="card-text">
                <h5><strong>Rating: </strong>{{ review.rating }}</h5>
                <p>{{ review.text }}</p>
                <div v-if="updateReviewFormToggle === false">
                  <button
                    class="btn btn-light btn-outline-secondary btn-sm border-info mt-2"
                    v-on:click="
                      (updateReviewFormToggle = !updateReviewFormToggle),
                        (updateReviewID = review.review_id)
                    "
                  >
                    Edit Review
                  </button>
                </div>

                <div
                  v-if="
                    updateReviewID === review.review_id &&
                      updateReviewFormToggle === true
                  "
                >
                  <div class="row">
                    <button
                      type="button"
                      class="btn-close"
                      aria-label="Close"
                      v-on:click="
                        updateReviewFormToggle = !updateReviewFormToggle
                      "
                    ></button>
                  </div>
                  <form
                    class="row g-3"
                    v-on:submit.prevent="updateReview(review)"
                  >
                    <label class="form-label">Text:</label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="review.text"
                    />
                    <label class="form-label"
                      >Rating: {{ review.rating }}</label
                    >
                    <input
                      type="range"
                      class="form-range"
                      min="1"
                      max="5"
                      v-model="review.rating"
                    />
                    <button
                      class="btn btn-light btn-outline-secondary btn-sm border-info mt-1"
                      type="submit"
                    >
                      Update Review!!
                    </button>
                  </form>
                  <button
                    class="btn btn-light btn-outline-secondary btn-sm border-info mt-2"
                    v-on:click="destroyReview(review)"
                  >
                    Delete Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="btn btn-light btn-outline-secondary border-info mt-4"
        v-on:click="reviewsFormToggle = !reviewsFormToggle"
      >
        Add a Review!
      </button>
      <div v-if="reviewsFormToggle === true">
        <div class="row row-cols-1 g-4 gy-3 mt-1">
          <div class="col-md-12">
            <div class="card text-dark bg-light border-info">
              <div class="card-body">
                <h5 class="card-title"></h5>
                <div class="card-text">
                  <form v-on:submit="createReview()">
                    <div class="col-auto">
                      <label class="form-label">Review Description:</label>
                      <input
                        class="form-control"
                        type="text"
                        v-model="newText"
                      />
                    </div>

                    <div class="col-auto">
                      <label class="form-label" for="ratingRange">
                        Rating: {{ newRating }}
                      </label>
                      <div class="range">
                        <input
                          type="range"
                          class="form-range"
                          min="1"
                          max="5"
                          id="ratingRange"
                          v-model="newRating"
                        />
                      </div>
                    </div>

                    <button
                      class="btn btn-light btn-outline-secondary border-info mt-4"
                      type="submit"
                    >
                      Submit Your Review!
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div v-if="updateProfessorFormToggle === true">
        <form v-on:submit.prevent="updateProfessor()">
          <label>First Name:</label>
          <input type="text" v-model="professor.first_name" />

          <label>Last Name:</label>
          <input type="text" v-model="professor.last_name" />

          <label>School:</label>
          <input type="text" v-model="professor.school" />

          <label>Department:</label>
          <input type="text" v-model="professor.department" />

          <label>Title:</label>
          <input type="text" v-model="professor.title" />

          <button
            class="btn btn-light btn-outline-secondary border-info mt-4"
            type="submit"
          >
            Update Professor!!
          </button>
        </form>
      </div> -->
    </div>
  </div>
</template>

<style>
.professor-info {
  background: #c0b7d89c;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      professor: {},
      reviewsFormToggle: false,
      updateProfessorFormToggle: false,
      updateReviewFormToggle: false,
      updateReviewID: null,
      newReview: "",
      newRating: "",
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

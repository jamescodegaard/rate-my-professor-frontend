<template>
  <div class="professors-index">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4 gy-3 mt-1">
        <div class="col" v-for="professor in professors">
          <div class="card text-dark bg-light border-info">
            <div class="card-body">
              <h5 class="card-title">
                {{ professor.first_name }} {{ professor.last_name }}
              </h5>
              <p class="card-text">
                <div>{{ professor.school }}</div>
                <div>{{ professor.department }}</div>
                <div>{{ professor.title }}</div>
                <div>
                  <router-link :to="`/professors/${professor.professor_id}`" type="button" class="btn btn-light btn-outline-secondary border-info mt-2">See Reviews</router-link>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    <router-link to="/professors/new" type="button" class="btn btn-light btn-outline-secondary border-info mt-4" >Add a professor!!</router-link>
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

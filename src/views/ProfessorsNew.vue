<template>
  <div class="professors-new">
    <div class="container text-center">
      <div class="row row-cols-1 g-4 gy-3 mt-1">
        <div class="col">
          <div class="card text-dark bg-light border-info">
            <div class="card-body">
              <h2 class="card-title">Add a Professor</h2>
              <div class="card-text">
                <form class="row g-3" v-on:submit.prevent="createProfessor()">
                  <div class="col-md-6">
                    <label class="form-label">First Name: </label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="newFirstName"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Last Name: </label>

                    <input
                      class="form-control"
                      type="text"
                      v-model="newLastName"
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">School: </label>

                    <input
                      class="form-control"
                      type="text"
                      v-model="newSchool"
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Department: </label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="newDepartment"
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="form-label">Title: </label>
                    <input
                      class="form-control"
                      type="text"
                      v-model="newTitle"
                    />
                  </div>
                  <button
                    class="btn btn-light btn-outline-secondary border-info mt-4"
                    type="submit"
                  >
                    Create Professor
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      newFirstName: "",
      newLastName: "",
      newSchool: "",
      newDepartment: "",
      newTitle: "",
      errors: [],
    };
  },
  methods: {
    createProfessor: function() {
      var params = {
        first_name: this.newFirstName,
        last_name: this.newLastName,
        school: this.newSchool,
        department: this.newDepartment,
        title: this.newTitle,
      };
      axios
        .post("/professors", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/professors/${response.data.professor_id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

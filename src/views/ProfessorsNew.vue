<template>
  <div class="professors-new">
    <form v-on:submit.prevent="createProfessor()">
      <ul>
        <li>
          <label>First Name:</label>
          <input type="text" v-model="newFirstName" />
        </li>
        <li>
          <label>Last Name:</label>
          <input type="text" v-model="newLastName" />
        </li>
        <li>
          <label>School:</label>
          <input type="text" v-model="newSchool" />
        </li>
        <li>
          <label>Department:</label>
          <input type="text" v-model="newDepartment" />
        </li>
        <li>
          <label>Title:</label>
          <input type="text" v-model="newTitle" />
        </li>
      </ul>
      <button v-on:click="createProfessor()">Create the Professor!!</button>
    </form>
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
          this.$router.push(
            `/professors/${response.data.professor.professor_id})`
          );
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

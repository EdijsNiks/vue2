<template>
  <div class="about-me">
    <h1 style="color: white;">About Me</h1>
    <button :class="{ active: editMode }" @click="toggleEditMode">
      {{ editMode ? 'CANCEL' : 'EDIT FORM' }}
    </button>
    <FormComponent :disabled="!editMode" />
  </div>
</template>

<script>
import FormComponent from './FormComponent.vue';

export default {
  components: {
    FormComponent,
  },
  data() {
    return {
      user: {
        name: 'Edijs',
        surname: 'Niks',
        code: 'IT21007',
      },
      editMode: false,
    };
  },
  methods: {
    toggleEditMode() {
      this.editMode = !this.editMode;
    },
  },
};
</script>

<style scoped>
.about-me {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 24px;
  font-weight: bold;
}

h3 {
  font-size: 16px;
  margin: 10px 0;
}

button {
  border: none;
  background: none;
  color: #fff;
  background-color: #640a7a;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  transition: color 0.3s;
}
h1, button {
  display: inline-block;
  padding: 1%;
}

button.active {
  background-color: #c01229;
}
</style>
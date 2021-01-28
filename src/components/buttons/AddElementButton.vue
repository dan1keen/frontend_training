<template>
  <div class="text-center">
    <b-icon icon="plus-circle" @click="addElement"></b-icon>
  </div>
</template>

<script>
export default {
  name: 'AddElementButton',
  methods: {
    addElement() {
      this.$bvModal.show('modal_list_of_elements');
      this.$store.dispatch('initTemplates');
    },
  },
};
</script>

<style scoped></style>

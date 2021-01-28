<template>
  <div>
    <b-modal
      id="modal_list_of_elements"
      size="xl"
      scrollable
      title="Extra Large Modal"
    >
      <div class="row" v-for="(template, idx) in templates" :key="idx">
        <div class="col-md-12">
          <h3>{{ template.name }}</h3>
          <div class="row">
            <div
              class="col-md-4"
              v-for="(item, idxChild) in template.items"
              :key="idxChild"
            >
              <b-card
                overlay
                :img-src="item.preview"
                img-alt="Card Image"
                @click="selectTemplate(item, idxChild)"
                :class="
                  selectedTemplate.item === item ? 'selected-template' : ''
                "
              >
              </b-card>
            </div>
          </div>
        </div>
      </div>
      <template #modal-footer>
        <button class="btn btn-success" @click="handleSelectedTemplate">
          Сохранить
        </button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'AddElementModal',
  data() {
    return {
      selectedTemplate: {},
    };
  },
  computed: {
    templates() {
      return this.$store.state.editor.templates;
    },
  },
  methods: {
    handleSelectedTemplate() {
      this.$bvModal.hide('modal_list_of_elements');
      this.$store.dispatch('addBlock', this.selectedTemplate).then(() => {
        this.selectedTemplate = {};
      });
    },
    selectTemplate(item, index) {
      this.selectedTemplate = { item, index };
    },
  },
};
</script>

<style scoped>
.selected-template {
  border: 6px solid #28a745;
}
</style>

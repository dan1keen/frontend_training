<template>
  <div>
    <VRuntimeTemplate
      class="tilda-block"
      contenteditable="true"
      :template="block.item.html"
    />
  </div>
</template>

<script>
import VRuntimeTemplate from 'v-runtime-template';

export default {
  props: ['block'],
  name: 'EditorBlock',
  components: {
    VRuntimeTemplate,
  },
};
</script>

<style scoped></style>

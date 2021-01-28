<template>
  <div class="m-auto editor-area">
    <AddElementModal />
    <AddElementButton />
    <div class="tilda-content" ref="editor-html" id="new_block">
      <div v-for="(block, index) in blocks" :key="index">
        <EditorBlock :block="block" />
      </div>
    </div>
    <button class="btn btn-success" @click="handleSubmit">Сохранить</button>
  </div>
</template>

<script>
import AddElementButton from '@/components/buttons/AddElementButton';
import AddElementModal from '@/components/modals/AddElementModal';
import EditorBlock from '@/components/editor/Block';
export default {
  name: 'Editor',
  components: { EditorBlock, AddElementModal, AddElementButton },
  computed: {
    blocks() {
      return this.$store.state.editor.blocks;
    },
  },
  methods: {
    handleSubmit() {
      const cloneEditor = this.$refs['editor-html'].cloneNode(true);
      const blocks = cloneEditor.querySelectorAll('.tilda-block');
      blocks.forEach((block) => block.removeAttribute('contenteditable'));
      console.log(cloneEditor.innerHTML);
    },
  },
};
</script>

<style scoped></style>

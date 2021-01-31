<template>
  <div class="m-auto editor-area">
    <EditorNav />
    <AddElementModal />
    <AddElementButton />
    <div
      class="tilda-content"
      ref="editor-html"
      id="new_block"
      contenteditable="true"
    >
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
import EditorNav from '@/components/nav/EditorNav';
export default {
  name: 'Editor',
  components: { EditorBlock, AddElementModal, AddElementButton, EditorNav },
  computed: {
    blocks() {
      return this.$store.state.editor.blocks;
    },
  },
  methods: {
    handleSubmit() {
      const cloneEditor = this.$refs['editor-html'].cloneNode(true);
      cloneEditor.removeAttribute('contenteditable');
      console.log(cloneEditor.innerHTML);
    },
  },
};
</script>

<style scoped></style>

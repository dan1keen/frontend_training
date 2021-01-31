<template>
  <b-navbar type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <!--    <b-navbar-brand>E</b-navbar-brand>-->

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-text>
          <b-button
            variant="default"
            class="tilda-btn"
            @click="executeCommand('bold')"
          >
            <b-icon icon="type-bold"></b-icon>
          </b-button>
        </b-nav-text>
        <b-nav-text>
          <b-button
            variant="default"
            class="tilda-btn"
            @click="executeCommand('italic')"
          >
            <b-icon icon="type-italic"></b-icon>
          </b-button>
        </b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-text>
          <b-button
            variant="default"
            class="tilda-btn"
            @click="executeCommand('justifyLeft')"
          >
            <b-icon icon="justify-left"></b-icon>
          </b-button>
        </b-nav-text>
        <b-nav-text>
          <b-button
            variant="default"
            class="tilda-btn"
            @click="executeCommand('justifyFull')"
          >
            <b-icon icon="justify"></b-icon>
          </b-button>
        </b-nav-text>
        <b-nav-text>
          <b-button
            variant="default"
            class="tilda-btn"
            @click="executeCommand('justifyCenter')"
          >
            <b-icon icon="text-center"></b-icon>
          </b-button>
        </b-nav-text>
        <b-nav-text>
          <b-button
            variant="default"
            class="tilda-btn"
            @click="executeCommand('justifyRight')"
          >
            <b-icon icon="justify-right"></b-icon>
          </b-button>
        </b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-text>
          <b-button
            variant="default"
            class="tilda-btn"
            @click="executeCommand('undo')"
          >
            <b-icon icon="arrow-counterclockwise"></b-icon>
          </b-button>
        </b-nav-text>
        <b-nav-text>
          <b-button
            variant="default"
            class="tilda-btn"
            @click="executeCommand('redo')"
          >
            <b-icon icon="arrow-clockwise"></b-icon>
          </b-button>
        </b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'EditorNav',
  methods: {
    executeCommand(command, arg = null) {
      this.$parent.$refs['editor-html'].focus();
      document.execCommand(command, false, arg);
    },
  },
};
</script>

<style scoped>
.tilda-btn {
  padding: 0;
}
</style>

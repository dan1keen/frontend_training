<template>
  <div>
    <ul>
      <li v-for="news in newsList" :key="news.id">{{ news.name }}</li>
    </ul>
  </div>
</template>

<script>
import mainApi from '@/api/main';

export default {
  name: 'McvHome',
  data() {
    return {
      newsList: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      mainApi.getHomeInfo().then((response) => {
        this.newsList = response.data.items;
      });
    },
  },
};
</script>

<style scoped></style>

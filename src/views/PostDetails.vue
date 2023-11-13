<template>
  <div v-if="post">
    <h1 class="font-bold">{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
  <p v-if="!post">Loading...</p>
</template>
<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const post = ref(null);

const getPost = async () => {
  let id = route.params.id;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());
  post.value = data;
};

getPost();
</script>
<style></style>

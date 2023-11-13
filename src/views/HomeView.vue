<template>
  <div class="grid grid-cols-3 gap-6">
    <div
      class="p-5 bg-white border border-green-500 rounded shadow"
      v-for="item in mydata"
    >
      <h2 class="text-lg font-semibold">{{ item.title }}</h2>
      <p>
        {{ limit(item.body) }}
        <RouterLink :to="`post-details/${item.id}`" class="text-blue-500">
          Read more
        </RouterLink>
      </p>
    </div>
    <p v-if="mydata.length == 0">Loading...</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const mydata = ref([]);

const getPost = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) =>
    res.json()
  );
  mydata.value = data;
};

getPost();

const limit = (text) => {
  return text.split(" ").slice(0, 10).join(" ");
};
</script>

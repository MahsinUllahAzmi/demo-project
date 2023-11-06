<template>
  <div class="mx-auto max-w-[1200px] grid grid-cols-2">
    <div class="mb-10">
      <img
        src="./img/add-1.webp"
        alt="service img"
        class="w-full h-[450px] object-cover mb-4"
      />
      <h3 class="text-2xl font-bold text-center mb-4">Up to heading text</h3>
      <p class="text-md text-center text-black/70">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod nihil fugiat vero
        aut! Labore repellendus quaerat nesciunt dolorem hic fugit suscipit? Repellendus
        exercitationem, dicta optio ipsa sint nobis rerum asperiores?
      </p>
    </div>

    <div class="flex gap-4 justify-center items-center mx-auto mb-8">
      <input type="file" class="" />
      <input
        type="text"
        placeholder="Title Text"
        class="border-sky-500 border py-1 px-4"
      />
      <input
        type="text"
        placeholder="Description Text"
        class="border-sky-500 border py-1 px-4"
      />
      <div class="text-center">
        <button class="bg-red-500 py-1.5 px-4 rounded text-white">Submit Now</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>

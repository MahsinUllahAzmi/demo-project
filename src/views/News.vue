<template>
  <div class="flex gap-8 items-center border p-4 mb-10">
    <button
      class="hover:bg-sky-500 duration-300 bg-black px-2 py-1 rounded text-white text-sm"
    >
      Trending Now
    </button>
    <p class="">
      nother Big Apartment Project Slated for Broad Ripple Company Patricia Urquiola Coats
      Transparent Glas Tables for Livings
    </p>
  </div>

  <div class="grid grid-cols-2 w-full h-[450px] gap-2 mb-20">
    <div>
      <img src="@/img/news-1.jpg" alt="" class="h-full object-cover w-full" />
    </div>
    <div>
      <div class="mb-2">
        <img src="@/img/news-2.jpg" alt="" class="h-full object-cover w-full" />
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <img src="@/img/news-3.jpg" alt="" class="h-full w-full" />
        </div>
        <div>
          <img src="@/img/news-4.jpg" alt="" class="h-full w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
</script>

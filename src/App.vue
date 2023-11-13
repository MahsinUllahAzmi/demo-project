<template>
  <div class="">
    <div class="container mx-auto">
      <div class="flex">
        <div class="bg-gray-200 flex-2 w-[250px] p-4">
          <div class="mb-4">
            <h3 class="text-2xl font-bold text-center">Demo Logo</h3>
          </div>
          <RouterLink
            to="/"
            class="flex items-center gap-2 px-4 py-1 font-medium rounded text-md text-black/80 hover:bg-gray-300"
          >
            <i class="text-xl ph ph-globe-simple"></i>
            Dashboard
          </RouterLink>
          <RouterLink
            to="/about"
            class="flex items-center gap-2 px-4 py-1 font-medium rounded text-md text-black/80 hover:bg-gray-300"
          >
            <i class="text-xl ph ph-angular-logo"></i>
            About
          </RouterLink>
          <RouterLink
            to="/post-details"
            class="flex items-center gap-2 px-4 py-1 font-medium rounded text-md text-black/80 hover:bg-gray-300"
          >
            <i class="text-xl ph ph-note-pencil"></i>
            Post Details
          </RouterLink>
        </div>

        <div class="flex-1 p-4">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

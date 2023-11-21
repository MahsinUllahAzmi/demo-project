<template>
  <div class="">
    <div class="bg-white/80 shadow border-b mb-4">
      <div class="max-w-[1200px] mx-auto">
        <div class="flex justify-between py-8 items-center border-b border-black/10">
          <img src="@/img/logo.png" alt="" class="w-[272px] h-[90px]" />

          <div class="">
            <img
              src="https://tpc.googlesyndication.com/simgad/15346892760779862659"
              alt=""
              class="h-[90px] w-[728px]"
            />
          </div>
        </div>

        <div class="flex p-4">
          <RouterLink
            to="/"
            class="flex items-center gap-1 px-4 py-1 font-medium rounded text-md text-black/80 hover:bg-gray-300"
          >
            <i class="text-xl ph ph-globe-simple"></i>
            News
          </RouterLink>

          <RouterLink
            to="/about"
            class="flex items-center gap-2 px-4 py-1 font-medium rounded text-md text-black/80 hover:bg-gray-300"
          >
            <i class="text-xl ph ph-angular-logo"></i>
            Fashion
          </RouterLink>

          <RouterLink
            to="/post-details"
            class="flex items-center gap-2 px-4 py-1 font-medium rounded text-md text-black/80 hover:bg-gray-300"
          >
            <i class="text-xl ph ph-note-pencil"></i>
            Lifestyle
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="p-4 max-w-[1200px] mx-auto">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

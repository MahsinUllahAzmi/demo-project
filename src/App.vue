<template>
  <div class="max-w-[1000px] mx-auto">
    <h1 class="text-center mt-5 text-lg font-bold mb-4">My Vue ToDo App</h1>
    <!-- Input -->
    <div class="flex mb-4">
      <input 
        type="text"
        placeholder="Enner Task"
        class="border py-1 px-4 w-full"
        @input="text"
      >
      <button class="bg-red-500 border-none px-2 py-1 text-white text-sm font-semibold">
        SUBMIT
      </button>
    </div>
      <!-- Task Table -->
      
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr class="border">
                <th scope="col" class="border px-6 py-3">
                    Task
                </th>
                <th scope="col" class="border px-6 py-3">
                    Status
                </th>
                <th scope="col" class="border px-6 py-3">
                    #
                </th>
                <th scope="col" class="border px-6 py-3">
                    #
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border">
                <td class="px-6 py-4 border whitespace-nowrap">
                    item.task
                </td>
                <td class="px-6 py-4 border">
                    item.status 
                </td>
                <td class="px-6 text-center py-4 border ">
                    <span>
                      <i class="ph ph-pencil-simple"></i>
                    </span>
                </td>
                <td class="px-6 py-4 border text-center">
                  <span>
                      <i class="ph ph-trash"></i>
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')



</script>
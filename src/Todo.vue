<template>
  <div class="mb-8">
    <input v-model="inputString" class="w-[400px] border border-black/20 py-1 px-4">
    <button @click="addItem" class="bg-red-500 text-white py-1 px-4 rounded">Add ToDo</button>
  </div>

  <div>
    <p v-for="(item, index) in ToDo" :class="item.status ? 'text-red-500' : ''">
      {{item.title}}
      <button @click="item.status = true" class="py-1 px-1 bg-green-500 text-white rounded">Done</button>
      <button @click="removeItem(index)" class="py-1 px-1 bg-red-500 text-white rounded">X</button>
    </p>
  </div>

</template>

<script setup>
import { ref } from 'vue'

const inputString = ref('')

let ToDo = ref([])

const addItem = () => {
  ToDo.value.push({
    id: ToDo.value.length + 1,
    title: inputString.value,
    status: false,
  })
  inputString.value = null
}

const removeItem = (index) => {
  ToDo.value.splice(index, 1)
}

</script>
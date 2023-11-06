<template>
  <div class="bg-red-500 grid justify-center py-6">
    <div>
      <button class="mb-4" @click="popup = true">
        <i class="text-white font-bold text-2xl ph ph-plus"></i>
      </button>
      <div
        class="flex justify-center items-center w-full h-full fixed bg-black/20 top-0 left-0 backdrop-blur"
        v-if="popup"
      >
        <div
          class="w-[500px] h-[200px] bg-white relative p-6 rounded grid place-content-center shadow-md"
        >
          <button
            @click="popup = false"
            class="absolute -right-5 -top-5 bg-red-500 text-white px-2 py-0.5 rounded"
          >
            X
          </button>
          <div class="flex gap-4 w-full mb-6">
            <input
              type="text"
              placeholder="Your Product Name"
              class="border border-black/40 py-1.5 px-2.5"
              v-model="product"
            />
            <input
              type="number"
              placeholder="Your Product Price"
              class="border border-black/40 py-1.5 px-2.5"
              v-model="price"
            />
          </div>
          <button
            class="bg-sky-500 px-4 py-1.5 rounded text-white hover:bg-sky-600"
            @click="sbmit"
          >
            Creat
          </button>
        </div>
      </div>
    </div>

    <table class="bg-white w-[800px]">
      <tr class="border">
        <th class="py-2 px-4 border border-black/40 text-left">Index</th>
        <th class="py-2 px-4 border border-black/40 text-left">Product Name</th>
        <th class="py-2 px-4 border border-black/40 text-left">Product Price</th>
        <th class="py-2 px-4 border border-black/40 text-left">remove todo</th>
      </tr>

      <tr v-for="(item, index) in todo1" class="bg-white w-[800px]">
        <td class="py-2 px-4 border border-black/40">{{ index + 1 }}</td>
        <td class="py-2 px-4 border border-black/40">{{ item.value }}</td>
        <td class="py-2 px-4 border border-black/40">{{ item.price }}</td>
        <td class="py-2 px-4 border border-black/40 text-center">
          <button @click="close(index)" class="bg-red-500 text-white px-4 py-0.5 rounded">
            <i class="text-white ph ph-x"></i>
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const product = ref("");
const price = ref("");

const popup = ref(false);

let oldData = localStorage.my_todo ? JSON.parse(localStorage.my_todo) : [];

function updateStorage(data) {
  localStorage.my_todo = JSON.stringify(data);
}

const todo1 = ref(oldData);

const sbmit = (index) => {
  todo1.value.push({
    value: product.value,
    index: index.value,
    price: price.value,
  });
  updateStorage(todo1.value);
  product.value = "";
  price.value = "";
  popup.value = false;
};

const close = (data) => {
  todo1.value.splice(data, 1);
};
</script>

<template>
  <div class="shadow">

    <div class="flex items-center justify-between py-6 px-6 bg-gray-50">
      <div>
        <h3 class="text-black/80 text-lg font-bold">Contact</h3>
      </div>
      <div class="flex gap-2 items-center">
        <button class="border px-4 py-1 bg-blue-600 text-white rounded">
          New Contact
        </button>
        <button class="flex items-center gap-2 border px-4 py-1 rounded text-black/70">
          <PhFunnelSimple 
            size="15"
          />
          Filter
        </button>
      </div>
    </div>

    <table class="w-full">
      <tr>
        <th class="border-b py-4 px-4 text-left text-gray-500 text-sm font-medium">
          <div class="flex items-center gap-2 justify-center ">
            <span>Name</span>  
            <PhArrowUp 
              size="12"
              weight="regular"
            />
          </div>
        </th>
        <th class="border-b py-4 px-4 text-left text-gray-500 text-sm font-medium">
          <div class="flex items-center gap-2">
            <span>Email</span>  
            <PhArrowUp 
              size="12"
              weight="regular"
            />
          </div>
        </th>
        <th class="border-b py-4 px-4 text-left text-gray-500 text-sm font-medium">
          <div class="flex items-center gap-2">
            <span>Phone Number</span>  
            <PhArrowUp 
              size="12"
              weight="regular"
            />
          </div>
        </th>
        <th class="border-b py-4 px-4 text-left text-gray-500 text-sm font-medium">
          <div class="flex items-center gap-2">
            <span>Tag</span>  
            <PhArrowUp 
              size="12"
              weight="regular"
            />
          </div>
        </th>
      </tr>
      <tr class="bg-gray-100">
        <td class="py-3 px-5 text-left text-black/60  text-sm font-medium flex items-center gap-6">
          <input 
            type="checkBox"
            class="w-4 h-4"
          >
          <img 
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
            alt=""
            class="w-10 aspect-square object-cover rounded-full"
          >
          Mahsin Ullah Azmi
        </td>
        <td class="py-3 px-5 text-left text-black/60  text-sm font-medium">info@gmail.com</td>
        <td class="py-3 px-5 text-left text-black/60  text-sm font-medium">016 03283 901</td>
        <td class="py-3 px-5 text-left text-black/60  text-sm font-medium flex justify-between items-center">
          Developer
          <PhDotsThree 
            size="20"
            class="text-black/60"
            weight="bold"
          />
        </td>
      </tr>
      <tr class="bg-gray-50">
        <td class="py-3 px-5 text-left text-black/60  text-sm font-medium flex items-center gap-6">
          <input 
            type="checkBox"
            class="w-4 h-4"
          >
          <img 
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" 
            alt=""
            class="w-10 aspect-square object-cover rounded-full"
          >
          Mahsin Ullah Azmi
        </td>
        <td class="py-3 px-5 text-left text-black/60  text-sm font-medium">info@gmail.com</td>
        <td class="py-3 px-5 text-left text-black/60  text-sm font-medium">016 03283 901</td>
        <td class="py-3 px-5 text-left text-black/60  text-sm font-medium flex justify-between items-center">
          Developer
          <PhDotsThree 
            size="20"
            class="text-black/60"
            weight="bold"
          />
        </td>
      </tr>
    </table>
    <div class="flex justify-center">
      <div class="bg-white py-4 px-6 flex items-center gap-4 text-sm font-medium">
        <button class="bg-gray-300 p-1.5 rounded">
          <PhCaretLeft 
              size="18"
              class="text-black/50"
              weight="bold"
          />
        </button>
        <button>
          1
        </button>
        <button class="text-gray-400">
          2
        </button>
        <button class="text-gray-400">
          ....
        </button>
        <button class="text-gray-400">
          8
        </button>
        <button class="bg-gray-300 p-1.5 rounded">
          <PhCaretRight 
              size="18"
              class="text-black/50"
              weight="bold"
          />
        </button>
      </div>
    </div>
  </div>


</template>

<script setup>
  import { PhDotsThree,PhArrowUp, PhCaretLeft,PhCaretRight, PhFunnelSimple } from "@phosphor-icons/vue";
</script>
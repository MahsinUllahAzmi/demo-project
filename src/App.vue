<template>
  <button @click="add" class="bg-red-500 text-white py-1 px-4 rounded">click me</button>

  <p id="demo">
   
  </p>
</template>

<script setup>
 const mahsin = [
    {
      name: 'Muhibbullah',
      age: 28
    },
    {
      name: 'Aahsin ullah',
      age: 20
    },
    {
      name: 'Baidullah',
      age: 10,
    },
  
  ]

  function add(){
    console.log(mahsin.shift());
  }



</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script setup>
/**
Namota of (7)
7 * 1 = 7
7 * 2 = 14
......
 */

const namota = (num) => {
  console.log(`Namota of ${num}`);
  for (var i = 1; i <= 10; i++) {
    console.log(`${i} * ${num} = ${i * num}`);
  }
};

for (var i = 1; i <= 10; i++) {
  namota(i);
}
</script>

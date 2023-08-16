<template>
  <div class="">
    <div class="flex items-center">
      <div class="flex-2 px-10">
        <h1 class="text-3xl text-red-500 font-extrabold">Demo<span class="text-black">Logo</span></h1>
      </div>


      <div class="flex-1">
        <div class="flex justify-between px-[80px] py-2">
          <div class="flex gap-4">
            <p class="flex items-center gap-1 font-medium text-sm ">
              <i class="text-red-500 text-xl ph ph-map-pin-line"></i>
              380 St Kilda Road Melbourne, Australia
            </p>
            <p class="flex items-center gap-1 font-medium text-sm ">
              <i class="text-red-500 text-xl ph ph-envelope-simple"></i>
              380 St Kilda Road Melbourne, Australia
            </p>
          </div>

          <div class="flex gap-2">
            <a href="#">
              <i class="text-red-500 text-sm font-bold ph ph-twitter-logo"></i>
            </a>
            <a href="#">
              <i class="text-red-500 text-sm font-bold ph ph-facebook-logo"></i>
            </a>
            <a href="#">
              <i class="text-red-500 text-sm font-bold ph ph-pinterest-logo"></i>
            </a>
            <a href="#">
              <i class="text-red-500 text-sm font-bold ph ph-instagram-logo"></i>
            </a>
          </div>
        </div>



        <div class="clip-path bg-red-500 py-4 px-[80px] flex justify-between items-center">
          <div class="flex gap-4">
            <a 
              href="#" 
              class="text-white hover:text-black duration-300"
            >
              Home
            </a>
            <a 
              href="#" 
              class="text-white hover:text-black duration-300"
            >
              About
            </a>
            <a 
              href="#" 
              class="text-white hover:text-black duration-300"
            >
              Services
            </a>
            <a 
              href="#" 
              class="text-white hover:text-black duration-300"
            >
              Blog
            </a>
            <a 
              href="#" 
              class="text-white hover:text-black duration-300"
            >
              Contact
            </a>
          </div>

          <div class="flex items-center gap-2">
            <span>
              <i class="text-3xl text-white ph ph-phone-call"></i>
            </span>
            <div>
              <h5 class="text-sm text-white mb-1">Call anytime</h5>
              <h3 class="text-white font-medium">98 (000) - 9630</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .clip-path{
    clip-path: polygon(3% 0, 100% 0, 100% 99%, 0% 100%);
  }
</style>
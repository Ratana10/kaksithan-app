<template>
   <header class="p-4">
      <nav class="container-fluid flex justify-between items-center">
         <a class="uppercase text-primary" href="">Kaksithan</a>
         <div class="flex space-x-4">
            <ul class="flex space-x-4 items-center justify-center">
               <li v-for="(item, index) in navbar" :key="index">
                  <NuxtLink class="uppercase" to="">{{ item.name }}</NuxtLink>
               </li>
            </ul>
            <div class="flex">
               <p>EN</p>
               <NuxtImg
                  class="w-6 h-6 ml-2"
                  src="/img/icons/english_flag.jpg"
               />
            </div>
         </div>
      </nav>
   </header>
</template>
<script setup lang="">
const navbar = [
   {
      name: "Login",
   },
   {
      name: "Register",
   },
   {
      name: "Products",
   },
   {
      name: "Services",
   },
   {
      name: "About US",
   },
   {
      name: "Contact US",
   },
];
</script>
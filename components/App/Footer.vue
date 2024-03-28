<template>
   <footer class="h-[72px]">
      <div class="flex justify-between justify-items-center py-4 px-16">
         <div class="flex gap-1.5">
            <img class="w-10 h-10" src="~assets/img/image.png" alt="" />
            <div class="flex flex-col">
               <h5 class="uppercase text-primary text-xl font-semibold">
                  Kaksithen
               </h5>
               <p class="text-xs font-bold" style="color: #426823">
                  Isaac EAR Tech Co.,Ltd
               </p>
            </div>
         </div>
         <ul class="flex gap-6">
            <li>
               <a href="">
                  <p class="text-base font-medium text-right">
                     Terms & Conditions
                  </p>
               </a>
            </li>
            <li>
               <a href="">
                  <p class="text-base font-medium text-right">
                     Privacy Policy
                  </p></a
               >
            </li>
         </ul>
      </div>
   </footer>
</template>

<style scoped>
h5 {
   background-clip: text; /* Clip the background to the text content */
   -webkit-text-fill-color: transparent; /* Transparent text color */
   background-image: linear-gradient(to right, #6fab37, #548828);
}
</style>
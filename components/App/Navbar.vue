<template>
   <header class="h-[60px] bg-white px-10 position: sticky top-0">
      <nav class="flex justify-between items-center p-4">
         <div class="flex">
            <NuxtLink to="/">
               <h5 class="text-lg font-semibold uppercase">Kaksithan</h5>
            </NuxtLink>
         </div>
         <div class="flex">
            <ul class="flex items-center gap-6">
               <li v-for="(item, index) in navbar" :key="index">
                  <NuxtLink :to="item.href">
                     <p class="text-base font-medium text-right uppercase">
                        {{ item.name }}
                     </p>
                  </NuxtLink>
               </li>
            </ul>
         </div>
      </nav>
   </header>
</template>

<script setup lang="">
const navbar = [
   {
      name: "Login",
      href: "/login",
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
      href: "/contactus",
   },
];
const isActive = (href) => {
   const router = useRouter();
   console.log(true);
   return router.path === href;
};
</script>
<style scoped>
h5 {
   background-clip: text; /* Clip the background to the text content */
   -webkit-text-fill-color: transparent; /* Transparent text color */
   background-image: linear-gradient(to right, #6fab37, #548828);
}
</style>
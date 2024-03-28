
<template>
   <div
      class="w-[300px] h-[372px] py-10 gap-10 border-4 border-white rounded-lg bg-white"
   >
      <div class="flex flex-col items-center mb-10">
         <NuxtImg
            class="w-[40px] h-[40px] mx-auto object-contain"
            :src="`/img/${image}`"
         />
         <h1 class="text-xl font-bold mt-2" style="color: #6fab37">{{ title }}</h1>
      </div>

      <div class="gap-4 px-6 flex flex-col">
         <div v-for="(item, index) in object" :key="index" class="">
            <div class="">
               <p class="text-base font-semibold">{{ item.text }}</p>
               <p class="text-base">{{ item.description }}</p>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
const props = defineProps({
   image: String,
   title: String,
   text: String,
   description: String,
   object: Array,
});
</script>
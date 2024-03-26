<template>
   <div
      class="border-2 border-white w-16 h-16 rounded-full flex items-center justify-center cursor-pointer"
   >
      <NuxtLink :to="link" target="_blank" rel="noopener noreferrer">
         <NuxtImg class="w-8 h-8" :src="`/img/${image}`" />
      </NuxtLink>
   </div>
</template>

<script setup lang="">
const props = defineProps({
   image: String,
   link: String,
});
</script>
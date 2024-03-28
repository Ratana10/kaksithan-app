<template>
   <div
      class="w-16 h-16 rounded-full border-2 border-[#DCDFE6] p-3 flex gap-2 items-center justify-center"
      
      >
      <NuxtImg class="w-8 h-8" :src="`/img/${image}`" />
   </div>
</template>
<script setup lang="">
const props = defineProps({
   image: String,
   link: String,
});
</script>
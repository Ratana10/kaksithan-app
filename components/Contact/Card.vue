<template>
   <div
      class="bg-white text-center rounded-xl border shadow-lg p-10 w-[300px] h-[370px]"
   >
      <NuxtImg class="w-11 h-11 mx-auto" :src="`/img/${image}`" />
      <h1 class="text-lg text-primary">{{ title }}</h1>
      <div v-for="(item, index) in object" :key="index" class="">
         <div class="text-start mt-6">
            <p class="text-sm font-bold">{{ item.text }}</p>
            <p class="text-sm">{{ item.description }}</p>
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

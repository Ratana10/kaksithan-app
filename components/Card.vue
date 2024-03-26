<script setup>
// const { props  = defineProps({
//    title: { type: String },
// });
const props = defineProps({
   icon: String,
   title: String,
   text: String,
   description: String,
   object: Array,
});

console.log(props);
</script>

<template>
   <div
      class="bg-white font-semibold text-center rounded-xl border shadow-lg p-10 w-[300px] h-[370px]"
   >
      <img
         class="w-12 h-12 mx-auto"
         src="~assets/img/phone.png"
         alt="product designer"
      />
      <h1 class="text-lg text-primary">{{ title }}</h1>
      <!-- <div class="text-start mt-6">
         <p class="text-sm font-bold">{{ text }}</p>
         <p class="text-sm">{{ description }}</p>
      </div> -->
      <div v-for="(item, index) in object" :key="index" class="">
         <div class="text-start mt-6">
            <p class="text-sm font-bold">{{ item.text }}</p>
            <p class="text-sm">{{ item.description }}</p>
         </div>
      </div>
   </div>
</template>
<template>
   <div class="bg-sky-700 p-10 text-white space-y-8 rounded-lg" :style="{ backgroundColor: social.color }">
      <h5>Our Social Media</h5>
      <h1 class="text-3xl">{{ social.name }}</h1>
      <p class="text-sm">
         {{ social.description }}
      </p>

      <button
         class="text-Secondary bg-white px-4 py-2 rounded-md flex justify-center items-center"
      >
         <span>Direct {{ social.name }}</span>

         <NuxtImg class="w-4 h-4 ml-2" :src="`/img/${social.image}`" />
      </button>

      <div class="flex flex-row gap-6">
         <ContactSocialMedia
            @click="onClick(item)"
            v-for="(item, index) in socialMedia"
            :key="index"
            :image="item.image"
            :link="item.link"
         />
      </div>
   </div>
</template>

<script setup lang="">
const social = ref({
   name: "Telegram",
   description: ` Lorem ipsum dolor sit amet consectetur. Sagittis morbi sollicitudin
         maecenas diam tempus vitae risus mattis congue. Pulvinar odio nascetur
         non turpis eget dolor ac venenatis. Dignissim ac quis vitae ultricies
         imperdiet feugiat. Nisi elementum phasellus tristique ligula lorem
         scelerisque nibh eleifend. Posuere felis quis amet in pellentesque
         nulla diam. Sagittis sed volutpat consequat tincidunt quis facilisi ut
         ornare non. Volutpat erat at fames nulla mattis. Ut sapien ac eros in
         cras massa. Ipsum pharetra semper nulla orci tincidunt eu. Volutpat
         auctor semper amet in mi. Eu mauris risus semper aliquet consectetur
         ultrices. Vitae suspendisse pellentesque et tincidunt.`,
   color: "#0E7490",
   image: "social/telegram.png",
});

const socialMedia = [
   {
      name: "Telegram",
      description: `Telegram Lorem ipsum dolor sit amet consectetur. Sagittis morbi sollicitudin
         maecenas diam tempus vitae risus mattis congue. Pulvinar odio nascetur
         non turpis eget dolor ac venenatis. Dignissim ac quis vitae ultricies
         imperdiet feugiat. Nisi elementum phasellus tristique ligula lorem
         scelerisque nibh eleifend. Posuere felis quis amet in pellentesque
         nulla diam. Sagittis sed volutpat consequat tincidunt quis facilisi ut
         ornare non. Volutpat erat at fames nulla mattis. Ut sapien ac eros in
         cras massa. Ipsum pharetra semper nulla orci tincidunt eu. Volutpat
         auctor semper amet in mi. Eu mauris risus semper aliquet consectetur
         ultrices. Vitae suspendisse pellentesque et tincidunt.`,
      image: "social/telegram.png",
      link: "https://web.telegram.org/a/",
      color: "#0E7490",
   },
   {
      name: "Facebook",
      description: `Facebook Lorem ipsum dolor sit amet consectetur. Sagittis morbi sollicitudin
         maecenas diam tempus vitae risus mattis congue. Pulvinar odio nascetur
         non turpis eget dolor ac venenatis. Dignissim ac quis vitae ultricies
         imperdiet feugiat. Nisi elementum phasellus tristique ligula lorem
         scelerisque nibh eleifend. Posuere felis quis amet in pellentesque
         nulla diam. Sagittis sed volutpat consequat tincidunt quis facilisi ut
         ornare non. Volutpat erat at fames nulla mattis. Ut sapien ac eros in
         cras massa. Ipsum pharetra semper nulla orci tincidunt eu. Volutpat
         auctor semper amet in mi. Eu mauris risus semper aliquet consectetur
         ultrices. Vitae suspendisse pellentesque et tincidunt.`,
      image: "social/facebook.png",
      link: "https://www.youtube.com/",
      color: "#1151A4",
   },
   {
      name: "Instagram",
      description: `Instagram Lorem ipsum dolor sit amet consectetur. Sagittis morbi sollicitudin
         maecenas diam tempus vitae risus mattis congue. Pulvinar odio nascetur
         non turpis eget dolor ac venenatis. Dignissim ac quis vitae ultricies
         imperdiet feugiat. Nisi elementum phasellus tristique ligula lorem
         scelerisque nibh eleifend. Posuere felis quis amet in pellentesque
         nulla diam. Sagittis sed volutpat consequat tincidunt quis facilisi ut
         ornare non. Volutpat erat at fames nulla mattis. Ut sapien ac eros in
         cras massa. Ipsum pharetra semper nulla orci tincidunt eu. Volutpat
         auctor semper amet in mi. Eu mauris risus semper aliquet consectetur
         ultrices. Vitae suspendisse pellentesque et tincidunt.`,
      image: "social/instagram.png",
      link: "https://www.youtube.com/",
      color: "#9D10AA",
   },
   {
      name: "Youtube",
      description: `Youtube Lorem ipsum dolor sit amet consectetur. Sagittis morbi sollicitudin
         maecenas diam tempus vitae risus mattis congue. Pulvinar odio nascetur
         non turpis eget dolor ac venenatis. Dignissim ac quis vitae ultricies
         imperdiet feugiat. Nisi elementum phasellus tristique ligula lorem
         scelerisque nibh eleifend. Posuere felis quis amet in pellentesque
         nulla diam. Sagittis sed volutpat consequat tincidunt quis facilisi ut
         ornare non. Volutpat erat at fames nulla mattis. Ut sapien ac eros in
         cras massa. Ipsum pharetra semper nulla orci tincidunt eu. Volutpat
         auctor semper amet in mi. Eu mauris risus semper aliquet consectetur
         ultrices. Vitae suspendisse pellentesque et tincidunt.`,
      image: "social/youtube.png",
      link: "https://www.youtube.com/",
      color: "#C07070",
   },
   {
      name: "Iiktok",
      description: `Tiktok Lorem ipsum dolor sit amet consectetur. Sagittis morbi sollicitudin
         maecenas diam tempus vitae risus mattis congue. Pulvinar odio nascetur
         non turpis eget dolor ac venenatis. Dignissim ac quis vitae ultricies
         imperdiet feugiat. Nisi elementum phasellus tristique ligula lorem
         scelerisque nibh eleifend. Posuere felis quis amet in pellentesque
         nulla diam. Sagittis sed volutpat consequat tincidunt quis facilisi ut
         ornare non. Volutpat erat at fames nulla mattis. Ut sapien ac eros in
         cras massa. Ipsum pharetra semper nulla orci tincidunt eu. Volutpat
         auctor semper amet in mi. Eu mauris risus semper aliquet consectetur
         ultrices. Vitae suspendisse pellentesque et tincidunt.`,
      image: "social/tiktok.png",
      link: "https://www.tiktok.com/en/",
      color: "#1E293B",
   },
];

const onClick = (data) => {
   // social.value = data;
   console.log("testing");
   console.log(data);
   social.value = data;
};
</script>
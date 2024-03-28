<template>
   <div class="w-[1320px] h-[612px] flex flex-col gap-2.5">
      <div
         class="p-10 gap-6 flex flex-col rounded-md"
         :style="`background-color: ${social.color}`"
      >
         <h5 class="text-white text-2xl font-bold">Our Social Media</h5>
         <h1 class="text-6xl font-bold text-white">{{ social.name }}</h1>
         <p class="text-base text-white">
            {{ social.description }}
         </p>
         <button
            class="w-fit h-[40px] border py-[9px] px-5 flex items-center gap-2"
            :style="`background-color: #f3faeb; border-color:${social.color}`"
         >
            <NuxtLink :to="social.link">
               <p
                  class="text-base text-center"
                  :style="`color: ${social.color}`"
               >
                  Direct To <span>{{ social.name }}</span>
               </p>
            </NuxtLink>
            <NuxtImg class="w-4 h-4" :src="`/img/${social.image}`" />
         </button>
         <div class="flex flex-row gap-6 py-6">
            <ContactSocialMediaIcon
               @click="onClick(item)"
               v-for="(item, index) in socialMedias"
               :key="index"
               :image="item.image"
               :link="item.link"
            />
         </div>
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
   image: "social/telegram.png",
   link: "https://web.telegram.org/a/",
   color: "#0E7490",
});

const socialMedias = [
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
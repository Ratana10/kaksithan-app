<template>
   <div class="bg-sky-700 p-10 text-white space-y-8 rounded-lg">
      <h5>Our Social Media</h5>
      <h1 class="text-3xl">Telegram</h1>
      <p class="text-sm">
         Lorem ipsum dolor sit amet consectetur. Sagittis morbi sollicitudin
         maecenas diam tempus vitae risus mattis congue. Pulvinar odio nascetur
         non turpis eget dolor ac venenatis. Dignissim ac quis vitae ultricies
         imperdiet feugiat. Nisi elementum phasellus tristique ligula lorem
         scelerisque nibh eleifend. Posuere felis quis amet in pellentesque
         nulla diam. Sagittis sed volutpat consequat tincidunt quis facilisi ut
         ornare non. Volutpat erat at fames nulla mattis. Ut sapien ac eros in
         cras massa. Ipsum pharetra semper nulla orci tincidunt eu. Volutpat
         auctor semper amet in mi. Eu mauris risus semper aliquet consectetur
         ultrices. Vitae suspendisse pellentesque et tincidunt.
      </p>

      <button
         class="text-Secondary bg-white px-4 py-2 rounded-md flex justify-center items-center"
      >
         <span>Direct Telegram</span>

         <NuxtImg class="w-4 h-4 ml-2" src="/img/social/telegram.png" />
      </button>

      <div class="flex flex-row gap-6">
         <ContactSocialMedia
            v-for="(item, index) in socialMedia"
            :key="index"
            :image="item.image"
            :link="item.link"
         />
      </div>
   </div>
</template>

<script setup lang="">
const socialMedia = [
   {
      title: "telegram",
      image: "social/telegram.png",
      link: "https://web.telegram.org/a/",
   },
   {
      title: "facebook",
      image: "social/facebook.png",
      link: "https://www.youtube.com/",
   },
   {
      title: "instagram",
      image: "social/instagram.png",
      link: "https://www.youtube.com/",
   },
   {
      title: "youtube",
      image: "social/youtube.png",
      link: "https://www.youtube.com/",
   },
   {
      title: "tiktok",
      image: "social/tiktok.png",
      link: "https://www.tiktok.com/en/",
   },
];
</script>
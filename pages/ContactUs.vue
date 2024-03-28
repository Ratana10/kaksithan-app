<template>
   <div class="">
      <div class="h-[1208px] bg-hero bg-cover py-20 flex flex-col gap-16">
         <div class="flex flex-col items-center gap-16">
            <!-- Card -->
            <div class="flex items-center justify-center gap-10">
               <ContactCard
                  class=""
                  v-for="(item, index) in contactCard"
                  :key="index"
                  :title="item.title"
                  :image="item.image"
                  :object="item.object"
               />
            </div>
            <!-- Contact SocialMedia -->
            <ContactSocialMedia />
         </div>
      </div>
      <div class="py-20 flex flex-col gap-16">
         <div class="flex flex-col items-center gap-16">
            <ContactForm />
         </div>
      </div>
   </div>
</template>
<script setup lang="">
useHead({
   title: "Kaksithan | Contact Us",
});

const contactCard = [
   {
      title: "Hot Line",
      image: "icons/phone.png",
      object: [
         {
            text: "Sale Service",
            description: "+855 98 478 778",
         },
         {
            text: "Customer Service",
            description: "+855 12 476 778",
         },
      ],
   },
   {
      title: "Address",
      image: "icons/vector.png",
      object: [
         {
            text: "Phone Penh",
            description:
               "No. 43, Street 02, Phum Trapeang svay, Songkat Kouk Kleang, Khan Sen Sok, Phnom Penh",
         },
      ],
   },
   {
      title: "Working Hour",
      image: "icons/clock.png",
      object: [
         {
            text: "Monday - Friday",
            description: "8:00 AM - 5:00 PM",
         },
         {
            text: "Saturday",
            description: "8:00 AM - 12:00 PM",
         },
      ],
   },
   {
      title: "Email",
      image: "icons/mail.png",
      object: [
         {
            text: "Admin & Finance",
            description: "admin@kaksithan.com",
         },
         {
            text: "Sale Management",
            description: "sale@kaksithan.com",
         },
         {
            text: "Service & Maintenance",
            description: "service@kaksithan.com",
         },
      ],
   },
];
</script>
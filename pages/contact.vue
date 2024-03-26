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

<template>
   <div>
      <div class="bg-hero">
         <div class="container mx-auto p-8 space-y-16">
            <!-- Card -->
            <div class="flex gap-8 items-center justify-center">
               <ContactCard
                  v-for="(item, index) in contactCard"
                  :key="index"
                  :title="item.title"
                  :image="item.image"
                  :object="item.object"
               />
            </div>
            <ContactContent />
         </div>
      </div>
      <div class="container mx-auto p-8 space-y-16">
         <ContactForm />
      </div>
   </div>
</template>
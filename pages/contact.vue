<script setup lang="">
useHead({
   title: "Kaksithan | Contact Us",
});
</script>

<template>
   <div class="container mx-auto p-8 space-y-16">
      <!-- Card -->
      <div class="flex gap-8 items-center justify-center">
         <Card
            image="icons/phone.png"
            title="Hot Line"
            :object="[
               {
                  text: 'Sale Service',
                  description: '+855 98 478 778',
               },
               {
                  text: 'Customer Service',
                  description: '+855 12 476 778',
               },
            ]"
         />
         <Card
            image="icons/vector.png"
            title="Address"
            :object="[
               {
                  text: 'Phone Penh',
                  description:
                     'No. 43, Street 02, Phum Trapeang svay, Songkat Kouk Kleang, Khan Sen Sok, Phnom Penh',
               },
            ]"
         />
         <Card
            image="icons/clock.png"
            title="Working Hours"
            :object="[
               {
                  text: 'Monday - Friday',
                  description: '8:00 AM - 5:00 PM',
               },
               {
                  text: 'Saturday',
                  description: '8:00 AM - 12:00 PM',
               },
            ]"
         />
         <Card
            image="icons/mail.png"
            title="Email"
            :object="[
               {
                  text: 'Admin & Finance',
                  description: 'admin@kaksithan.com',
               },
               {
                  text: 'Sale Management',
                  description: 'sale@kaksithan.com',
               },
               {
                  text: 'Service & Maintenance',
                  description: 'service@kaksithan.com',
               },
            ]"
         />
      </div>
      <CardContent />

      <div class="">
         <ContactForm />
      </div>
   </div>
</template>
<template>
   <div class="container mx-auto p-8 space-y-16">
      <!-- Card -->
      <div class="flex gap-8 items-center justify-center">
         <Card
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
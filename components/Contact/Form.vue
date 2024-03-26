<template>
   <div class="">
      <div class="text-primary space-y-2 mb-8">
         <h1 class="text-2xl uppercase">Contact US</h1>
         <p>Leave us a message, Kindly fill the form below</p>
      </div>
      <form action="">
         <div class="grid grid-cols-2 gap-4">
            <div class="">
               <div class="mt-4">
                  <label for="">Name</label>
                  <div class="mt-2">
                     <input
                        type="text"
                        class="p-2 block w-full rounded-md border-0 py-1.5 ring-1 ring-primary"
                        placeholder="Name"
                     />
                  </div>
               </div>
               <div class="mt-4">
                  <label for="">Subject</label>
                  <div class="mt-2">
                     <input
                        type="text"
                        class="p-2 block w-full rounded-md border-0 py-1.5 ring-1 ring-primary"
                        placeholder="Subject"
                     />
                  </div>
               </div>
               <div class="mt-4">
                  <label for="">Email</label>
                  <div class="mt-2">
                     <input
                        type="email"
                        class="p-2 block w-full rounded-md border-0 py-1.5 ring-1 ring-primary"
                        placeholder="Email"
                     />
                  </div>
               </div>
            </div>
            <div class="mt-4">
               <div class="col-span-full">
                  <label
                     for=""
                     class="block text-sm font-medium leading-6 text-gray-900"
                     >Message</label
                  >
                  <div class="mt-2">
                     <textarea
                        placeholder="Message"
                        rows="9"
                        class="p-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-primary focus:ring-primary"
                     ></textarea>
                  </div>
               </div>
            </div>
         </div>
         <div class="flex justify-end mt-4">
            <button
               class="text-white bg-primary px-4 py-2 flex justify-center items-center rounded-md"
            >
               <img
                  class="w-4 h-4 mr-2"
                  src="~assets/img/logos_telegram_32.png"
                  alt=""
               />
               <span>Send Message</span>
            </button>
         </div>
      </form>
   </div>
</template>
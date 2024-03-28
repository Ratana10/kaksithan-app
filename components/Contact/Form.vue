<template>
   <div class="flex flex-col gap-16">
      <div class="flex gap-2 flex-col">
         <h1 class="text-3xl uppercase font-bold" style="color: #6fab37">
            Contact US
         </h1>
         <p class="text-base" style="color: #6fab37">
            Leave us a message, Kindly fill the form below
         </p>
      </div>
      <form action="" class="w-[1285px] h-[309px]">
         <div class="grid grid-cols-2">
            <div class="flex flex-col gap-4">
               <div>
                  <label for="" class="text-base font-normal font-Inter"
                     >Name</label
                  >
                  <div class="mt-2">
                     <input
                        type="text"
                        class="border-c w-[630.5px] h-[40px] rounded-sm border py-[9px] px-3"
                        placeholder="Name"
                     />
                  </div>
               </div>
               <div>
                  <label for="" class="text-base font-normal font-Inter"
                     >Subject</label
                  >
                  <div class="mt-2">
                     <input
                        type="text"
                        class="border-c w-[630.5px] h-[40px] rounded-sm border py-[9px] px-3"
                        placeholder="Subject"
                     />
                  </div>
               </div>
               <div>
                  <label for="" class="text-base font-normal font-Inter"
                     >Email</label
                  >
                  <div class="mt-2">
                     <input
                        type="email"
                        class="border-c w-[630.5px] h-[40px] rounded-sm border py-[9px] px-3"
                        placeholder="Email"
                     />
                  </div>
               </div>
            </div>
            <div class="">
               <div class="col-span-full">
                  <label for="" class="text-base font-normal font-Inter"
                     >Message</label
                  >
                  <div class="mt-2">
                     <textarea
                        placeholder="Message"
                        rows="9"
                        class="border-c w-[640px] h-[275px] border rounded-sm pt-2 pr-0.5 pb-0.5 pl-3"
                     ></textarea>
                  </div>
               </div>
            </div>
         </div>
         <div class="flex justify-end">
            <button
               class="h-[40px] py-[9px] px-5 flex flex-row items-center rounded-sm gap-4"
               style="background-color: #6fab37"
            >
               <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M14.355 2.14501C14.2875 2.07784 14.2023 2.03134 14.1093 2.01097C14.0163 1.9906 13.9194 1.9972 13.83 2.03001L2.83 6.03001C2.73513 6.06599 2.65346 6.12998 2.59583 6.21348C2.53819 6.29699 2.50732 6.39605 2.50732 6.49751C2.50732 6.59897 2.53819 6.69803 2.59583 6.78153C2.65346 6.86503 2.73513 6.92902 2.83 6.96501L7.125 8.68001L10.295 5.50001L11 6.20501L7.815 9.39001L9.535 13.685C9.57205 13.778 9.63619 13.8578 9.71909 13.914C9.802 13.9701 9.89986 14.0001 10 14C10.101 13.9979 10.1991 13.9653 10.2812 13.9064C10.3633 13.8475 10.4257 13.7651 10.46 13.67L14.46 2.67001C14.4941 2.58155 14.5023 2.48522 14.4837 2.39227C14.4651 2.29932 14.4205 2.21356 14.355 2.14501Z"
                     fill="white"
                  />
               </svg>

               <p class="text-center text-white font-Inter">Send Message</p>
            </button>
         </div>
      </form>
   </div>
</template>

<style scoped>
.border-c {
   border-color: #dcdfe6;
}
</style>
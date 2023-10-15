<script>
export default {
  methods: {
    redirectToDiscord() {
      const externalLink = 'https://discord.com/invite/q5FjdbT2ak';
      window.open(externalLink, '_blank');
    },
  },
};
</script>

<template>
  <div class="flex flex-col mmd:flex-row mmd:justify-between height-difuser">

    <div class="flex flex-col <-> xl:pl-48 lg:pl-24 md:pl-20 sm:pl-24 pl-10 <-> xl:py-52 lg:py-48 md:py-16 sm:py-14 py-6">

      <text class="text-4xl amm:text-5xl axm:text-6xl sm:text-7xl font-PhonkRegular " style="line-height: 80%; color: #017DF9">Addex</text>
      <text class="text-4xl amm:text-5xl axm:text-6xl sm:text-7xl text-white font-PhonkRegular" style="line-height: 90%">Creations</text>
      <text class="text-xs amm:text-xl sm:text-2xl text-white font-NexaBook sm:leading-10">Transformando sua visão em arte.</text>

      <button class="saiba-mais mt-14" @click="redirectToDiscord">Saiba mais +</button>

    </div>

    <div class="flex mmd:flex-col flex-row mmd:justify-self-end xl:px-48 lg:px-24 md:px-20 mmd:px-20 sm:px-28 px-10 <-> xl:pt-32 lg:pt-32">

      <div class="flex flex-col text-right pr-4 py-7">
        <text class="font-NexaHeavy text-4xl" style="color: #017DF9">+<span class="text-white">200</span></text>
        <text class="font-NexaLight text-white">Clientes</text>
        <text class="font-NexaLight text-white">Satisfeitos</text>
      </div>

      <div class="flex flex-col text-right px-4 py-7">
        <text class="font-NexaHeavy text-4xl" style="color: #017DF9">+<span class="text-white">4</span></text>
        <text class="font-NexaLight text-white">Anos no</text>
        <text class="font-NexaLight text-white">mercado</text></div>

      <div class="flex flex-col text-right px-4 py-7">
        <text class="font-NexaHeavy text-4xl" style="color: #017DF9">+<span class="text-white">380</span></text>
        <text class="font-NexaLight text-white">Projetos</text>
        <text class="font-NexaLight text-white">concluídos</text>
      </div>

    </div>

  </div>
  <div class="pb-12">
    <footer class="py-0 mx-48 dark:bg-zinc-950 dark:text-gray-50 rounded-[48px]">
      <div class="container px-0 py-10 mx-auto space-y-6 divide-y divide-neutral-900 md:space-y-12 divide-opacity-50">
        <div class="grid grid-cols-12">
          <div class="pb-6 col-span-full md:pb-0 md:col-span-6">
              <div class="flex items-center justify-center w-12 h-12">
                <img src="@/assets/addex_blue_logo.svg" alt="Addex Gray" class="flex-shrink-0  dark:text-gray-900">
              </div>
          </div>
         </div>
        <div class="grid justify-center pt-6 lg:justify-between">
          <div class="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>Copyright © 2019 - 2023 Addex Company. Todos os direitos reservados.</span>
          </div>
          <div class="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            <a rel="noopener noreferrer" href="#">
              <span>Privacy policy</span>
            </a>
            <a rel="noopener noreferrer" href="#">
              <span>Terms of service</span>
            </a>
            <a rel="noopener noreferrer" href="#" title="Email" class="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </a>
            <a rel="noopener noreferrer" href="#" title="Twitter" class="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" class="w-5 h-5">
                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
              </svg>
            </a>
            <a rel="noopener noreferrer" href="#" title="GitHub" class="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@media (min-width: 375px){
  .height-difuser {
    min-height: calc(100vh - 136px)
  }
}

@media (min-width: 480px) {
  .height-difuser {
    min-height: calc(100vh - 132px)
  }
}

@media (min-width: 768px) {
  .height-difuser {
    min-height: calc(100vh - 116px);
  }
}


.saiba-mais {
  font-family: NexaLight, sans-serif;
  color: #9e9e9e;
  border-radius: 27px;
  border: 1px solid #D4D4D4;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  text-align: center;
  width: 296px;
  height: 50px;
  user-select: none;
  transition: background-color 0.5s ease, color 0s ease, border 1.5s ease;
  background: #040404 none;
  position: relative;
  z-index: 1;

  &:hover {
    border: 1px solid #040404;
    background-color: #5865f2;
    color: transparent;
    background-image: url('@/assets/discord.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10%;
  }
}

</style>


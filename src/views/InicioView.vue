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

    <div
        class="flex flex-col <-> xl:pl-48 lg:pl-24 md:pl-20 sm:pl-24 pl-10 <-> xl:py-52 lg:py-48 md:py-16 sm:py-14 py-6">

      <text class="text-4xl amm:text-5xl axm:text-6xl sm:text-7xl font-PhonkRegular "
            style="line-height: 80%; color: #017DF9">Addex
      </text>
      <text class="text-4xl amm:text-5xl axm:text-6xl sm:text-7xl text-white font-PhonkRegular"
            style="line-height: 90%">Creations
      </text>
      <text class="text-xs amm:text-xl sm:text-2xl text-white font-NexaBook sm:leading-10">Transformando sua visão em
        arte.
      </text>

      <button class="saiba-mais mt-14" @click="redirectToDiscord">Saiba mais +</button>

    </div>

    <div
        class="flex mmd:flex-col flex-row mmd:justify-self-end xl:px-48 lg:px-24 md:px-20 mmd:px-20 sm:px-28 px-10 <-> xl:pt-32 lg:pt-32">

      <div class="flex flex-col text-right pr-4 py-7">
        <text class="font-NexaHeavy text-4xl" style="color: #017DF9">+<span class="text-white">200</span></text>
        <text class="font-NexaLight text-white">Clientes</text>
        <text class="font-NexaLight text-white">Satisfeitos</text>
      </div>

      <div class="flex flex-col text-right px-4 py-7">
        <text class="font-NexaHeavy text-4xl" style="color: #017DF9">+<span class="text-white">4</span></text>
        <text class="font-NexaLight text-white">Anos no</text>
        <text class="font-NexaLight text-white">mercado</text>
      </div>

      <div class="flex flex-col text-right px-4 py-7">
        <text class="font-NexaHeavy text-4xl" style="color: #017DF9">+<span class="text-white">380</span></text>
        <text class="font-NexaLight text-white">Projetos</text>
        <text class="font-NexaLight text-white">concluídos</text>
      </div>

    </div>

  </div>
  <div class="pb-12 bg-black">
    <footer class="py-0 xl:mx-32 lg:mx-24 md:mx-20 mx-10 sm:dark:bg-zinc-950 bg-zinc-900 rounded-[48px]">
      <div
          class="container py-10 mx-auto px-10 space-y-6 divide-y-2 divide-neutral-900 md:space-y-12 divide-opacity-50">
        <div class="grid grid-cols-12 items-center justify-between w-fit">
          <div class="pb-0 -mb-4">
            <div class="flex items-center justify-center w-12 h-12">
              <img src="@/assets/addex_blue_logo.svg" alt="Addex Gray" class="dark:text-gray-900">
            </div>
          </div>
          <div class="appender pb-0 -mb-4 pl-4 col-end-9 amm:col-end-10 sm:col-end-11 lg:col-end-12">
            <div class="flex items-center justify-center">
              <a  href="https://www.behance.net/addex" target="_blank">
                <img class="mx-4 pr-4 amm:pr-6 sm:pr-10 xl:pr-16" src="@/assets/behance_gray_logo.png" alt="Behance">
              </a>
              <a href="https://discord.gg/K9epKN7qbG" target="_blank">
                <img class="mx-4 pr-4 amm:pr-6 sm:pr-10 xl:pr-16" src="@/assets/discord_gray_logo.png" alt="Discord">
              </a>
              <a href="https://www.instagram.com/addexcompany/" target="_blank">
                <img class="mx-4 pr-4 amm:pr-6 sm:pr-10 xl:pr-16" src="@/assets/instagram_gray_logo.png" alt="Instagram">
              </a>
            </div>
          </div>

        </div>

        <div class="grid justify-center pt-8 lg:justify-between">
          <div class="flex flex-col self-center text-sm text-center lg:mr-10 mb-4 md:block space-x-6">
    <span class="font-NexaBook text-base text-neutral-400">
      Copyright © 2019 - 2023 Addex Company.
      <span class="font-NexaLight">Todos os direitos reservados.</span>
    </span>
          </div>
          <div class="flex justify-center pt-4 lg:pt-0 lg:col-end-13 space-x-4">
            <a rel="noopener noreferrer" href="#">
              <span class="font-NexaBook text-base text-neutral-400">FAQ</span>
            </a>
            <a rel="noopener noreferrer" href="#">
              <span class="font-NexaBook text-base text-neutral-400">Política de Privacidade</span>
            </a>
            <a rel="noopener noreferrer" href="#">
              <span class="font-NexaBook text-base text-neutral-400">Termos de Serviço</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.height-difuser {
  min-height: calc(100vh - 136px)
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

@media (min-width: 1460px) {
  .appender {

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


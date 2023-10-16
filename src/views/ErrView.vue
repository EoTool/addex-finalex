<script setup>
import {ref, watch} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();
const currentPage = ref('');

const setCurrentPage = () => {
  if (route.path === '/') {
    currentPage.value = 'Início';
  } else if (route.path === '/galeria') {
    currentPage.value = 'Galeria';
  } else if (route.path === '/contato') {
    currentPage.value = 'Contato';
  } else if (route.path === '/faq') {
    currentPage.value = 'FAQ'
  } else if (route.path === '/politica_de_privacidade') {
    currentPage.value = 'POLÍTICA DE PRIVACIDADE'
  } else if (route.path === '/termos_de_servico') {
    currentPage.value = 'TERMOS DE SERVIÇO'
  }
};

watch(() => route.path, () => {
  setCurrentPage();
});

setCurrentPage();
</script>


<template>
  <div class="flex flex-col items-center pt-10 amm:pt-56">
    <h1 class="font-PhonkRegular text-5xl mmd:text-6xl mx-6" style="color: #017DF9">Que pena</h1>
    <text class="hidden-visible text-white font-NexaHeavy text-lg mx-6 pt-20 amm:pt-3 amm:text-center">A página de <span
        class="text-red-600">{{
        currentPage
      }}</span> que você procura ainda está em desenvolvimento.
    </text>
    <text class="font-NexaBook text-white text-base mx-6 pt-8 amm:pt-4 amm:text-center">
      Pedimos desculpas pela inconveniência. Estamos trabalhando duro para criar um espaço incrível para você em breve.
    </text>
    <text class="font-NexaBook text-blue-200 text-base mx-4 pt-20 amm:pt-2 text-center ">Fique atento às atualizações e
      volte em breve para conferir<span class="">!</span></text>

  </div>

  <div class="flex flex-col items-center absolute bottom-12 w-full">
    <text class="font-NexaBook text-white text-base text-center">Addex Company © 2023</text>
  </div>
</template>

<style scoped>

</style>

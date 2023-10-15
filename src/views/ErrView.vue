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
    <text class="hidden-visible text-white font-NexaHeavy text-lg mx-6 pt-20 amm:pt-3 amm:text-center">A página de <span class="text-red-600">{{
        currentPage
      }}</span> que você procura ainda está em desenvolvimento.
    </text>
    <text class="font-NexaBook text-white text-base mx-6 pt-8 amm:pt-4 amm:text-center">
      Pedimos desculpas pela inconveniência. Estamos trabalhando duro para criar um espaço incrível para você em breve.
    </text>
    <text class="font-NexaBook text-blue-200 text-base mx-6 pt-20 amm:pt-2 text-center ">Fique atento às atualizações e volte em breve para conferir<span class="">!</span></text>

  </div>
</template>

<style scoped>

@media (min-width: 850px) {
  .hidden-visible {
    display: block;
  }
}
</style>

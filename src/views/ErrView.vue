<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

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
  <div class="flex flex-col items-center pt-56">
    <h1 class="font-PhonkRegular text-5xl mmd:text-6xl mx-6" style="color: #017DF9">Que pena</h1>
    <text class="hidden-visible font-NexaHeavy text-lg mx-6 pt-3">A página de <span class="text-red-600">{{ currentPage }}</span> que você procura ainda está em desenvolvimento.</text>
    <text class="font-NexaLight text-base pt-4 md:text-center md:pt-0">
      Pedimos desculpas pela inconveniência. Estamos trabalhando duro para criar <br class="mmd:hidden" /> um espaço incrível para você em breve. Fique atento às atualizações e volte em breve para conferir!
    </text>


  </div>
</template>

<style scoped>
text {
  color: white;
}

@media (min-width: 850px) {
  .hidden-visible {
    display: block;
  }
}
</style>

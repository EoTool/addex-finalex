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
    <h1 class="font-PhonkRegular text-6xl" style="color: #017DF9">Que pena</h1>
    <text class="font-NexaHeavy text-lg pt-2">A página <span class="">{{ currentPage }}</span> que você deseja acessar ainda não foi construída.</text>
    <text class="font-NexaLight text-base pt-5" style="line-height: 90%">Pedimos desculpas pela inconveniência. Estamos trabalhando duro para criar</text>
    <text class="font-NexaLight text-base">um espaço incrível para você em breve. Fique atento às atualizações e volte em breve para conferir!</text>
  </div>
</template>

<style scoped>
text {
  color: white;
}
</style>

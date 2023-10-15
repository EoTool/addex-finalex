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
  <div class="flex">
    <div class="flex flex-col <-> xl:px-48 lg:px-24 md:px-20 sm:px-28 px-10 <-> xl:py-52 lg:py-48 md:py-16 sm:py-14 py-6">
      <text class="text-4xl mm:text-5xl sm:text-7xl font-PhonkRegular " style="line-height: 80%; color: #017DF9">Addex</text>
      <text class="text-4xl mm:text-5xl sm:text-7xl text-white font-PhonkRegular" style="line-height: 90%">Creations</text>
      <text class="sm:text-2xl text-white font-NexaBook sm:leading-10">Transformando sua visão em arte.</text>

      <button class="saiba-mais" @click="redirectToDiscord">Saiba mais +</button>
    </div>
  </div>
</template>

<style scoped>
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
  margin-top: 70px;
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


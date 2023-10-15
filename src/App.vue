<template>
  <nav class="flex flex-col items-center justify-between bg-transparent px-10 xl:px-48 lg:px-24 md:px-20 sm:px-18 py-2 sm:py-10 md:py-8">
    <div class="flex flex-col sm:flex-row items-center justify-between w-full">
      <div class="invisible md:visible select-none pointer-events-none">
        <img src="./assets/addex_blue_logo.svg" alt="Addex Logo" class="block lg:inline-block" />
      </div>
      <div class="text-lg font-NexaBook flex justify-center lg:justify-start">
        <router-link
            ref="inicioLink"
            class="px-8 pt-2 mb-2 sm:px-14 sm:pt-3 sm:mb-3 anchor-container block lg:inline-block text-gray-200 relative"
            :class="{ 'active-link': $route.path === '/' }"
            to="/"
            draggable="true"
            @dragstart="handleDragStart"
        >
          Início
          <div class="box absolute inset-x-0 bottom-0 mx-auto" :class="{ 'active-box': $route.path === '/' }"></div>
        </router-link>
        <router-link
            ref="galeriaLink"
            class="px-8 pt-2 mb-2 sm:px-14 sm:pt-3  sm:mb-3 anchor-container block lg:inline-block text-gray-200 relative"
            :class="{ 'active-link': $route.path === '/galeria' }"
            to="/galeria"
            draggable="true"
            @dragstart="handleDragStart"
        >
          Galeria
          <div class="box not-done-box absolute inset-x-0 bottom-0 mx-auto" :class="{ 'active-box': $route.path === '/galeria' }"></div>
        </router-link>
        <router-link
            ref="contatoLink"
            class="px-8 pt-2 mb-2 sm:px-14 sm:pt-3 sm:mb-3 anchor-container block lg:inline-block text-gray-200 relative"
            :class="{ 'active-link': $route.path === '/contato' }"
            to="/contato"
            draggable="true"
            @dragstart="handleDragStart"
        >
          Contato
          <div class="box not-done-box absolute inset-x-0 bottom-0 mx-auto" :class="{ 'active-box': $route.path === '/contato' }"></div>
        </router-link>
      </div>
      <div class="invisible select-none pointer-events-none">
        <img src="./assets/addex_blue_logo.svg" alt="Addex Logo" class="block lg:inline-block" />
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style scoped>
.box {
  margin-top: 4px;
  width: 30px;
  height: 3px;
  background-color: #017DF9;
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
  transition: transform 0.3s, visibility 0.3s;
  visibility: hidden;
  transform-origin: center;
  transform: scaleX(0);
}

.anchor-container:hover .box {
  visibility: visible;
  transform: scaleX(1);
}

.active-box {
  visibility: visible;
  transform: scaleX(1);
}

.not-done-box {
  background-color: red;
}
</style>

<script>
export default {
  methods: {
    handleDragStart(event) {
      event.preventDefault();
    },
  },
};
</script>

<style>

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background: linear-gradient(180deg, #0A0A0A 0%, #000 100%); */
  background: black;
  height: 100vh;
  overflow-x: hidden;
}

* {
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

</style>

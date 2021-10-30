<template>
  <section class="masthead" role="img" aria-label="Image Description">
    <h1>Nuxt food App</h1>
    <button>SEE RESTAURANT ></button>
  </section>
</template>

<style scoped>

.masthead {
  padding: 40px;
  width: 100%;
  height: 80vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover !important;
  background:radial-gradient(ellipse at center, rgba(0,0,0,.2), rgba(0,0,0,0.8)), url(~/assets/headerimg.jpg) no-repeat center center scroll}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 8vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
}

</style>

<template>
  <div class="app">
    <Header />
    <div class="wrapper">
      <div class="breadcrumbs">
        <NuxtLink to="https://wien.at">wien.at</NuxtLink> > <NuxtLink to="https://www.wien.gv.at/politik-verwaltung/">
          Politik & Verwaltung</NuxtLink> > Bestätigung der Registrierung
      </div>
      <Form />
    </div>
    <div class="modals" id="modals"></div>
    <Footer/>
  </div>
</template>

<script setup>
import { configure } from 'vee-validate';
configure({
  generateMessage: context => {
    return `The field ${context.field} is invalid`;
  },
});
</script>

<style lang="scss">
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px 300px;

    .breadcrumbs {
      flex: 1 1 20%;
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>

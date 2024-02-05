<script setup>
import {configure} from 'vee-validate';

configure({
  generateMessage: context => {
    return `The field ${context.field} is invalid`;
  },
});
</script>

<template>
  <div class="app">
    <div class="wrapper">
      <div class="breadcrumbs">
        <NuxtLink to="https://wien.at">wien.at</NuxtLink> > <NuxtLink to="https://www.wien.gv.at/politik-verwaltung/">
        Politik & Verwaltung</NuxtLink> > Bestätigung der Registrierung
      </div>
      <Form />
    </div>
    <div class="modals" id="modals"></div>
  </div>
</template>

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

    @media screen and (max-width: 1280px){
      padding: 20px 100px;
      flex-direction: column;
      .breadcrumbs {
        padding: 20px 20px;
      }
    }

    @media screen and (max-width: 740px){
      padding: 20px 20px;
    }

    .breadcrumbs {
      flex: 1 1 20%;
      font-size: 12px;
      line-height: 20px;
    }
  }
}
</style>

<template>
  <header class="header">
    <NuxtLink to="https://www.wien.gv.at/"><img src="assets/images/logo_staat.jpg" alt="" class="logo"></NuxtLink>
    <img src="assets/images/logo_zmr.jpg" alt="" class="logo1">
  </header>
</template>

<style lang="scss">
.header {
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 6px 50px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 40px;

  .logo,
  .logo1 {
    margin-top: 30px;
    height: 60px;
  }

  .logo1 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    margin-right: 40px;
  }

  .logo {
    height: 40px;
  }


  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 640px) {
    justify-content: center;
    .logo1 {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translateX(-50%);
      margin-right: 40px;
    }
  }
}
</style>
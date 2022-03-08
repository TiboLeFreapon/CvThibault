<template>
  <div class="logo">
    <a
      href="https://www.linkedin.com/in/thibault-schmitt-b229a9151/"
      target="blank"
      ><img src="../MyOwnIcons/linkedin.png" alt="logo link"
    /></a>
    <br />

    <a href="mailto:thibault.schmitt5@gmail.com">
      <img src="../MyOwnIcons/gmail.png" alt="logo gmail"
    /></a>
    <br />
    <a href="https://www.instagram.com/thibault.schmi2t/" target="blank">
      <img src="../MyOwnIcons/insta.png" alt="logo insta"
    /></a>
  </div>
</template>
<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.logo {
  visibility: hidden;
  animation: appirationReseaux 1s 20s forwards;
  position: fixed;
  right: 0;
  top: 40%;
  margin: 20px;
}

img {
  padding: 20px;
  cursor: pointer;
  height: 50px;
  width: 50px;
}

@media (max-width: 900px) {
  img {
    padding: 10px;
    height: 25px;
    width: 25px;
  }
  .logo {
    top: 40%;
  }
}

@media (max-width: 640px) {
  .logo {
    position: initial;
    display: flex;
    justify-content: center;
  }
  img {
    margin: 20px 40px 0 20px;
  }
}

@keyframes appirationReseaux {
  0% {
    visibility: visible;
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0px);

    visibility: visible;
  }
}
</style>

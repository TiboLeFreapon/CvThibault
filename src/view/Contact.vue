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
    <img src="../MyOwnIcons/insta.png" alt="logo insta" />
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.logo {
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
    padding: 5px;
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
</style>

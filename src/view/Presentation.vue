<template>
  <h1>PRESENTATION</h1>
  <div class="box">
    <div class="div-moi">
      <img src="../MyOwnIcons/moi.png" alt="" class="moi" />
    </div>
    <div class="conv">
      <img src="../MyOwnIcons/bulle.png" alt="" class="bulle" />
      <div class="text">
        <p class="p1">Bienvenue sur mon site ! Moi c'est Thibault.</p>
        <p class="p2">J'ai 24 ans, je suis un développeur web.</p>
        <p class="p3">Vous pouvez découvrir mon CV à travers ce site.</p>
        <p class="p4">Je l'ai développé en Vue.Js.</p>
        <p class="p5">Mes réseaux sont sur le côté si jamais !</p>
        <p class="p6">Mes réseaux sont en bas si jamais !</p>
      </div>
    </div>
  </div>
  <img
    src="../MyOwnIcons/description.png"
    alt="description"
    class="description"
  />
</template>

<script>
export default {
  name: "Presentation",
};
</script>

<style scoped>
.box {
  height: 700px;
  width: 600px;
  margin: auto;
  display: flex;
}

.description {
  width: 500px;
  position: absolute;
  top: 200px;
  visibility: hidden;
  animation: appear-description 1s 23s forwards;
  opacity: 0;
}

.ul {
  list-style: none !important;
}
.div-moi {
  width: 50%;
  height: 700px;
}
.conv {
  position: relative;
  width: 250px;
  height: 250px;
  top: -80px;
  left: -100px;
}

.moi {
  width: 100%;
  animation: presentation 2.5s 0.5s;
}

.bulle {
  position: relative;
  width: 100%;
  height: auto;
  animation-name: presentation1;
  animation-duration: 20s;
  animation-iteration-count: 1;
  animation-delay: 3s;
  opacity: 0;
}

.text {
  position: relative;
  width: 80%;
  height: auto;
  font-size: larger;
  top: -200px;
  left: 25px;
  text-align: center;
}

.p1,
.p3,
.p5 {
  position: absolute;
  animation-name: presentation2;
  animation-duration: 3s;
  top: 0;
  visibility: hidden;

  color: black;
}

.p2,
.p4 {
  position: relative;
  animation-name: presentation2;
  animation-duration: 4s;
  visibility: hidden;
  position: absolute;
  top: 0;

  color: black;
}

.p5 {
  animation-fill-mode: forwards;
}

.p1 {
  animation-delay: 4s;
}
.p2 {
  animation-delay: 7s;
}

.p3 {
  animation-delay: 11s;
}
.p4 {
  animation-delay: 14s;
}

.p5 {
  animation-delay: 18s;
}
.p6 {
  color: black;
  position: absolute;
  top: 0;
  visibility: hidden;
}
@keyframes presentation {
  0% {
    transform: scale(0) translateX(30px);
  }
  80% {
    transform: scale(1) translateX(30px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes presentation1 {
  5% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes presentation2 {
  0% {
    visibility: visible;
  }
  100% {
    visibility: hidden;
  }
}
h1 {
  visibility: hidden;
}
@keyframes appear-description {
  0% {
    visibility: visible;
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}
h1 {
  visibility: hidden;
}

@media (max-width: 450px) {
  h1 {
    visibility: visible;
    position: relative;
    top: -85px;
  }
  .box {
    transform: scale(0.8);
    top: -100px;
    position: relative;
    left: -10%;
  }
}
@media (max-width: 693px) {
  .description {
    width: 70%;
  }
}
@media (max-width: 370px) {
  h1 {
    visibility: visible;
    position: relative;
    top: -70px;
    font-size: 20px;
  }
  .box {
    transform: scale(0.7);
    top: -110px;
    position: relative;
    left: -30%;
  }
}
@media (max-width: 310px) {
  h1 {
    visibility: visible;
    position: relative;
    top: -70px;
    font-size: 20px;
  }
  .box {
    transform: scale(0.6);
    top: -110px;
    position: relative;
    left: -40%;
  }
  .description {
    display: absolute;
    width: 70%;
  }
}

@media (max-width: 640px) {
  .p5 {
    animation: none;
  }
  .p6 {
    animation-name: presentation2;
    animation-duration: 3s;
    animation-delay: 18s;
  }
}
</style>

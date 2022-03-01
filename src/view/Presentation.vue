<template>
  <h1>PRESENTATION</h1>
  <div class="box">
    <div class="div-moi">
      <img src="../MyOwnIcons/moi.png" alt="" class="moi" />
    </div>
    <div class="conv">
      <img src="../MyOwnIcons/bulle.png" alt="" class="bulle" />
      <div class="text">
        <p class="p1">Salut ! Moi c'est Thibault, J'ai 24 ans.</p>
        <p class="p2">
          Bienvenue sur mon site, je suis un développeur full stack junior.
        </p>
        <p class="p3">Vous pouvez découvrir mon CV à travers ce site.</p>
        <p class="p4">
          Il est 100% développé par moi même et sans copié/ collé Stack
          Overflow. ;)
        </p>
        <p class="p5">Mes réseaux sont sur le côté si jamais !</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Presentation",
};
</script>

<style scoped>
p {
  color: black;
}
.box {
  height: 700px;
  width: 600px;
  margin: auto;
  display: flex;
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
  animation-name: presentation;
  animation-duration: 3s;
  animation-iteration-count: 1;
}

.bulle {
  position: relative;
  width: 100%;
  height: auto;
  animation-name: presentation1;
  animation-duration: 20s;
  animation-iteration-count: 1;
  animation-delay: 3s;
  visibility: hidden;
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
  visibility: hidden;
  top: 0;
}

.p2,
.p4 {
  position: relative;
  animation-name: presentation2;
  animation-duration: 4s;
  visibility: hidden;
  position: absolute;
  top: 0;
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

@keyframes presentation {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes presentation1 {
  0% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
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

@media (max-width: 450px) {
  h1 {
    visibility: visible;
  }
}
</style>

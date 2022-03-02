<template>
  <h1>LOISIRS</h1>
  <div class="lois">
    <p>Mes passions sont intances mais a duré indéterminée !</p>
    <div class="contenu" v-for="loisir in loisirs" :key="loisir.id">
      <div @click="vue[loisir.id] = !vue[loisir.id]">
        <h3>
          {{ loisir.name }}
          <img
            src="../MyOwnIcons/extendButton.png"
            :class="{ extend: !vue[loisir.id], shrink: vue[loisir.id] }"
          />
        </h3>
      </div>
      <div class="losir-text" v-if="vue[loisir.id]">
        <p>{{ loisir.explication }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lois",
  data() {
    return {
      loisirs: [
        {
          id: 0,
          name: "Voyage",
          explication:
            "J'ai visité plusieurs pays avec ma famille ou mes amis. J'ai visité la Tunisie avec ma famille, le Mexique et Bali avec mes amis, Les USA tout seul et actuellement le Canada avec ma copine.",
        },
        {
          id: 1,
          name: "Echec",
          explication:
            "J'adore ce jeu. Mon pick elo a été 1200. J'ai un peu arreté de jouer car il fallait apprendre les ouvertures pour pouvoir grinder un peu plus. Alors que je joue au jeu uniquement pour sa partie statégique.",
        },
        {
          id: 2,
          name: "Sport",
          explication:
            "Footing du dimanche pour se vider la tête ainsi que différentes activité sportive entre amis.",
        },
        {
          id: 3,
          name: "Mode",
          explication:
            "Je suis beaucoup les dernieres sorties. Notament les sorties sneakers. Je me tiens au courrant de l'histoire de certaine marque que j'apprécie.",
        },
        {
          id: 4,
          name: "Nouvelles technologies",
          explication:
            "Quelquefois par semaine, je me tiens informé de l'actualité technologique, principalement en écoutant des podcats. J'écoute aussi des débats autour de l'actualité numérique (ect) ",
        },
        {
          id: 5,
          name: "Philosophie",
          explication:
            "Toujours s'endormir avec un audio de philosophie pour essayer de comprendre les différtes facon de penser donc les autres.",
        },
      ],
      vue: [false, false, false, false, false, false],
    };
  },
};
</script>

<style scoped>
.lois {
  background-color: var(--back-ground-color1);
  border-radius: 20px;
  padding: 20px;
  width: 60%;
  margin: 150px auto 100px auto;
  margin-bottom: 50px;
  z-index: 1;
}
.lois::before {
  content: "";
  width: 65%;
  height: 30%;
  z-index: -1;
  display: block;
  position: absolute;
  top: 40%;
  left: 18%;
  background: linear-gradient(
    45deg,
    #79fdb4,
    rgb(87, 255, 123),
    rgb(2, 243, 94),
    rgb(87, 255, 213),
    #79fdb4
  );
  border-radius: 20%;
  filter: blur(200px);
  opacity: 0.9;
}
.contenu {
  text-align: left;
}
.extend,
.shrink {
  width: 20px;
  height: 15px;
  cursor: pointer;
  opacity: 0.5;
}

h3 {
  cursor: pointer;
}
.shrink {
  animation: rotationFleche 1s forwards;
}
.extend {
  animation: rotationFlech 0.5s forwards;
}
.extend:hover {
  opacity: 1;
}
.shrink:hover {
  opacity: 1;
}

p {
  font-size: larger;
}

.loisir-text {
  animation: appear 1s forwards;
}

h1 {
  visibility: hidden;
}
@media (max-width: 900px) {
  .lois {
    border-radius: 20px;
    padding: 20px;
    width: 60%;
    margin: 80px auto 100px auto;
    margin-bottom: 50px;
  }
}
@media (max-width: 450px) {
  h1 {
    visibility: visible;
    position: relative;
    top: -90px;
  }
  .lois {
    padding: 10px;
    width: 80%;
    position: relative;
    top: -80px;
    margin-bottom: 10px;
    font-size: smaller;
    margin-top: 0;
  }
  .lois::before {
    content: "";
    width: 100%;
    height: 70%;
    filter: blur(150px);
  }
}
@media (max-width: 316px) {
  .menu2 {
    transform: scale(0.8);
  }
  h1 {
    font-size: smaller;
    position: relative;
    top: -65px;
  }
  .lois {
    top: -50px;
  }
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes rotationFleche {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(540deg);
  }
}
@keyframes rotationFleche1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
</style>

<template>
  <h1 class="soustitre">FORMATION</h1>
  <div class="formation">
    <div class="formaContenu" v-for="diplome in diplomes" :key="diplome.id">
      <h2>{{ diplome.name }}</h2>
      <p v-if="diplome.specialité">spécialité {{ diplome.specialité }}</p>
      <br />
      <p>Année scolaire {{ diplome.date }}</p>
      <br />
      <p>Etablissement: {{ diplome.ecole }}</p>
      <p v-if="diplome.particularité">{{ diplome.particularité }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Forma",
  data() {
    return {
      diplomes: [
        {
          id: 0,
          name: 'Master "Expert informatique et systemes d`informations"',
          specialité: "Developpement Web/ Méthodes Agile",
          date: "2019/2021",
          ecole: "Epsi Lyon",
          particularité: "",
        },
        {
          id: 1,
          name: "Bachelor informatique",
          specialité: "",
          date: "2018/2019",
          ecole: "Epsi Lyon",
          particularité: "",
        },
        {
          id: 2,
          name: "DUT Mesures Physiques",
          specialité: "Math",
          date: "2015-2018",
          ecole: "Université Savoie MontBlanc Annecy",
          particularité:
            "Sportif de haut niveau: Le dîplome s`obtient en 3ans en non 2 car nous avions pas cours l`après-midi pour faire notre sport.",
        },
        {
          id: 3,
          name: "Baccalauréat Scientifique",
          specialité: "Math",
          date: "2015",
          ecole: "Lycée Jean-Mermoz",
          particularité: "Sportif de haut niveau",
        },
      ],
    };
  },
};
</script>

<style scoped>
.formation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 50px;
  margin: 100px;
}

.formaContenu {
  background: var(--back-ground-color1);
  padding: 10px;
  border-radius: 5px;
  position: relative;
}

.formaContenu::after {
  content: "";
  width: 80%;
  height: 110%;
  z-index: -1;
  display: block;
  background: linear-gradient(
    45deg,
    #a8e6fd,
    rgb(87, 179, 255),
    rgb(42, 159, 255),
    rgb(87, 179, 255),
    #a8e6fd
  );
  position: relative;
  top: -90%;
  left: 10%;
  border-radius: 20%;
  filter: blur(80px);
  opacity: 1;
  /*box-shadow: 2px 0px 5px 1px #87cdfc, -2px 0px 5px 1px #87cdfc;*/
}

h1 {
  visibility: hidden;
}

@media (max-width: 900px) {
  .formation {
    margin: 50px;
    grid-template-columns: repeat(auto-fit, 400px);
    grid-template-rows: 1fr 1fr;
    justify-content: center;
  }
}
@media (max-width: 550px) {
  .formation {
    margin: 50px;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-template-rows: 1fr 1fr;
    justify-content: center;
  }
}

@media (max-width: 450px) {
  h1 {
    visibility: visible;
    position: relative;
    top: -90px;
  }

  h2 {
    font-size: medium;
  }
  .formation {
    margin: 20px;
    position: relative;
    top: -40px;
  }
}

@media (max-width: 316px) {
  h1 {
    font-size: smaller;
    position: relative;
    top: -70px;
  }
  .formation {
    width: 80%;
    position: relative;
    top: -40px;
  }
}
</style>

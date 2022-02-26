<template>
  <h1>EXPERIENCES</h1>

  <div class="exp-tot">
    <img
      src="../MyOwnIcons/precedent.png"
      @click="precedent"
      class="precendent"
    />
    <div class="contenu">
      <div
        v-for="experience in experiences"
        :key="experience.id"
        :class="{
          exp1: experience.pos === 0,
          exp2: experience.pos === 1,
          exp3: experience.pos === 2,
        }"
      >
        <h2>{{ experience.societe }}</h2>
        <p>de {{ experience.dateDebut }} à {{ experience.dateFin }}</p>

        <div
          v-for="(mission, index) in nombreMission[experience.id].missions"
          :key="index"
        >
          <h3>{{ mission.name }}</h3>
          <div
            v-for="(tache, indextache) in nombreMission[experience.id].missions[
              index
            ].taches"
            :key="indextache"
          >
            {{ tache.detail }}
          </div>
        </div>
      </div>
    </div>
    <img src="../MyOwnIcons/suivant.png" @click="suivant" class="suivant" />
  </div>
</template>

<script>
export default {
  name: "Exp",
  data() {
    return {
      experiences: [
        {
          id: 0,
          pos: 0,
          societe: "SPIE ICS",
          defSociete: "Filliale de SPIE, grand groupe internationnal.",
          lien: "https://www.spie-ics.com/",
          dateDebut: "Septembre 2019",
          dateFin: "Août 2021",
          missions: [
            {
              name: "Développeur Full Stack",
              taches: [
                {
                  detail: "Développement d'interface Vue.js.",
                },
                { detail: "Création de base de donnée via MongoDb." },
                {
                  detail:
                    "Développement des fonctionnalités Back-End via Node.js.",
                },
              ],
            },
            {
              name: "Développeur Front-End/ Powershell",
              taches: [
                {
                  detail:
                    "Création d'un outil en interne permettant l'amélioration de la sécurité de l'Active Directory.",
                },
                {
                  detail:
                    " Les fonctionnalités ont été développé en PowerShell. ",
                },
                { detail: "Le rapport web en HTML/CSS/JS." },
              ],
            },
            {
              name: "DevOps",
              taches: [
                {
                  detail: "Automatisation de processus en interne (VBA...)",
                },
              ],
            },
          ],
        },
        {
          id: 1,

          pos: 2,
          societe: "ENEDIS",
          defSociete: "Filliale d'EDF.",
          lien: "https://www.enedis.fr/",
          dateDebut: "Septembre 2018",
          dateFin: "Septembre 2019",
          missions: [
            {
              name: "Developpeur Front End",
              taches: [
                {
                  detail: "Developpement d'une application en interne.",
                },
                { detail: "Utilisation de HTML/ CSS/ JS." },
              ],
            },
          ],
        },
        {
          id: 2,

          pos: 1,
          societe: "UrbaSolar",
          defSociete:
            "Entreprise française dans la production d'energie Renouvelable.",
          lien: "https://urbasolar.com/homepage-urbasolar/",
          dateDebut: "Avril",
          dateFin: "Juin 2018",
          missions: [
            {
              name: "Dévelopement d'outils internes.",
              taches: [
                {
                  detail:
                    "Développement d'outil sur Excel permettant de calculer et d'automatiser différents paramètres pour la construction de centrales photovoltaïques.",
                },
                {
                  detail:
                    "Première expérience de développement en entreprise, en VBA .....",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {
    nombreMission() {
      return this.experiences;
    },
  },
  methods: {
    suivant() {
      /*fonction permettant de recupérer le reste d'une division pour changer la class des div, donc leur position*/
      this.experiences[0].pos += 1;
      this.experiences[0].pos = this.experiences[0].pos % 3;

      this.experiences[1].pos += 1;
      this.experiences[1].pos = this.experiences[1].pos % 3;

      this.experiences[2].pos += 1;
      this.experiences[2].pos = this.experiences[2].pos % 3;
    },
    precedent() {
      /*fonction permettant de recupérer le reste d'une division pour changer la class des div, donc leur position*/
      this.experiences[0].pos += 2;
      this.experiences[0].pos = this.experiences[0].pos % 3;

      this.experiences[1].pos += 2;
      this.experiences[1].pos = this.experiences[1].pos % 3;

      this.experiences[2].pos += 2;
      this.experiences[2].pos = this.experiences[2].pos % 3;
    },
  },
};
</script>

<style scoped>
.exp-tot {
  margin-top: 100px;
  display: flex;
  justify-content: center;
}
.contenu {
  width: 50%;
  position: relative;
  text-align: left;
}

h2 {
  text-align: center;
}
/*Classe premier plan*/
.exp1,
.exp2,
.exp3 {
  width: 100%;
  border-radius: 20px;
  position: absolute;
  padding: 20px;
  opacity: 1;
  /*border-bottom: 3px solid var(--borders-color);
  border-right: 3px solid var(--borders-color);*/
}

.exp1 {
  height: 500px;
  background-color: #212633f1;
  top: 0;
  z-index: 3;
}

.exp3::before,
.exp2::before {
  content: "";
  width: 70%;
  height: 60%;
  z-index: -1;
  display: block;
  background: linear-gradient(
    45deg,
    #fddba8,
    rgb(255, 202, 87),
    rgb(255, 152, 16),
    rgb(255, 202, 87),
    #fddba8
  );
  position: absolute;
  top: 0;
  left: 10%;
  border-radius: 20%;
  filter: blur(150px);
  opacity: 0.9;
}
/*Classe deuxieme plan*/
.exp2,
.exp3 {
  height: 300px;
  background-color: #1b282e;
  z-index: 0;
  top: 100px;
  filter: blur(1px);
  font-size: x-small;
}
/*décalage*/
.exp2 {
  left: 200px;
}
.exp3 {
  right: 200px;
}

.suivant,
.precendent {
  position: relative;
  width: 100px;
  height: 100px;
  cursor: pointer;
  opacity: 0.8;
  top: 200px;
  z-index: 2;
}

.precendent:hover,
.suivant:hover {
  opacity: 1;
}
.suivant {
  padding-left: 50px;
}
h1 {
  visibility: hidden;
}
@media (max-width: 650px) {
  .contenu {
    font-size: smaller;
  }
}
@media (max-width: 720px) {
  .suivant,
  .precendent {
    transform: scale(0.7);
  }
  .exp-tot {
    margin-top: 0;
  }
}
@media (max-width: 450px) {
  h1 {
    visibility: visible;
    position: relative;
    top: -90px;
  }
  .exp1 {
    margin: 10px;

    width: 80%;
  }
  .exp-tot {
    position: relative;
    top: -75px;
    flex-direction: column;
    margin-top: 0;
  }
  .contenu {
    width: 100%;
    top: 60px;
  }
  .exp2 {
    left: 100px;
    height: 300px;
    font-size: xx-small;
  }
  .exp3 {
    right: 100px;
    font-size: xx-small;
    height: 300px;
  }
  .suivant,
  .precendent {
    z-index: 4;
    justify-self: center;
    position: absolute;
  }

  .precendent {
    top: -30px;
  }
  .suivant {
    top: -30px;
    left: 60%;
  }
}
@media (max-width: 316px) {
  h1 {
    font-size: smaller;
    position: relative;
    top: -65px;
  }
  .suivant,
  .precendent {
    top: 10px;
    transform: scale(0.5);
  }
}
</style>

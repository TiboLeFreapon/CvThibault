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
          exp1: experience.id === 0,
          exp2: experience.id === 1,
          exp3: experience.id === 2,
          rotSuivant1: experience.pos === 0 && rotationSuivant,
          rotSuivant2: experience.pos === 1 && rotationSuivant,
          rotSuivant3: experience.pos === 2 && rotationSuivant,
          rotPrecedent1: experience.pos === 0 && rotationPrecedent,
          rotPrecedent2: experience.pos === 1 && rotationPrecedent,
          rotPrecedent3: experience.pos === 2 && rotationPrecedent,
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
      rotationSuivant: false,
      rotationPrecedent: false,
      nbrClick: 0,
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
      if (!this.rotationSuivant) {
        this.rotationSuivant = true;
      } else {
        this.experiences[0].pos += 1;
        this.experiences[0].pos = this.experiences[0].pos % 3;

        this.experiences[1].pos += 1;
        this.experiences[1].pos = this.experiences[1].pos % 3;

        this.experiences[2].pos += 1;
        this.experiences[2].pos = this.experiences[2].pos % 3;
        this.rotationSuivant = true;
        this.rotationPrecedent = false;
      }
    },
    precedent() {
      /*fonction permettant de recupérer le reste d'une division pour changer la class des div, donc leur position*/

      this.experiences[0].pos += 2;
      this.experiences[0].pos = this.experiences[0].pos % 3;

      this.experiences[1].pos += 2;
      this.experiences[1].pos = this.experiences[1].pos % 3;

      this.experiences[2].pos += 2;
      this.experiences[2].pos = this.experiences[2].pos % 3;

      this.rotationPrecedent = true;
      this.rotationSuivant = false;
    },
  },
};
</script>

<style scoped>
/*
 POS0= DROITE
POS1= DROITE
POS2= GAUCHE
 */
.exp-tot {
  --height-pos-0: 500px;
  --height-pos-1: 300px;
  --height-pos-2: 300px;

  --width-pos-0: 100%;
  --width-pos-1: 70%;
  --width-pos-2: 70%;

  --left-pos-0: 0px;
  --left-pos-1: 500px;
  --left-pos-2: -250px;

  --top-pos-0: 0;
  --top-pos-1: 100px;
  --top-pos-2: 100px;

  --opacity-pos-0: ;
  --opacity-pos-1: 0.3;
  --opacity-pos-2: 0.3;

  --left-transaction-0to1: 550px;
  --left-transaction-2to0: -550px;
}
li {
  list-style: none;
}
.exp-tot {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  height: 500px;
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
  border-radius: 20px;
  position: absolute;
  padding: 20px;
  opacity: 1;
  /*border-bottom: 3px solid var(--borders-color);
  border-right: 3px solid var(--borders-color);*/
}

.exp1 {
  height: var(--height-pos-0);
  background-color: #212633f1;
  top: var(--top-pos-0);
  z-index: 3;
  width: var(--width-pos-0);
}
.exp2,
.exp3 {
  height: var(--height-pos-1);
  background-color: #212633f1;
  z-index: 0;
  top: var(--top-pos-1);
  filter: blur(1px);
  font-size: x-small;
  opacity: var(--opacity-pos-1);
  width: var(--width-pos-1);
}
/*décalage*/
.exp2 {
  left: var(--left-pos-1);
}
.exp3 {
  left: var(--left-pos-2);
}

.exp-tot::before {
  content: "";
  width: 60%;
  height: 50%;
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
  top: 30%;
  left: 20%;
  border-radius: 20%;
  filter: blur(200px);
  opacity: 0.9;
}
/*Classe deuxieme plan*/

.suivant,
.precendent {
  position: relative;
  width: 100px;
  height: 100px;
  cursor: pointer;
  opacity: 0.8;
  top: 200px;
  z-index: 4;
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

/* en cliquant, c'est classe seront prise pour permettre la rotation des divs */
.rotSuivant1 {
  animation: rotation0to1 2s forwards;
}
.rotSuivant2 {
  animation: rotation1to2 2s forwards;
}
.rotSuivant3 {
  animation: rotation2to0 2s forwards;
}

/* annimation des ratation */
@keyframes rotation0to1 {
  0% {
    font-size: medium;
    left: var(--left-pos-0);
    width: var(--width-pos-0);
    height: var(--height-pos-0);
    top: var(--top-pos-0);
    opacity: var(--opacity-pos-0);
  }
  50% {
    left: var(--left-transaction-0to1);
    z-index: 3;
    opacity: var(--opacity-pos-0);
  }
  100% {
    background-color: #1b282e;
    top: var(--top-pos-1);
    filter: blur(1px);
    font-size: x-small;
    left: var(--left-pos-1);
    width: var(--width-pos-1);
    z-index: 0;
    opacity: var(--opacity-pos-1);
    height: var(--height-pos-1);
  }
}
@keyframes rotation1to2 {
  0% {
    left: var(--left-pos-1);
    width: var(--width-pos-1);
    height: var(--height-pos-1);
    top: var(--top-pos-1);
    font-size: x-small;

    opacity: var(--opacity-pos-1);
  }
  100% {
    left: var(--left-pos-2);
    top: var(--top-pos-2);
    opacity: var(--opacity-pos-2);
    background-color: #1b282e;
    z-index: 0;
    filter: blur(1px);
    height: var(--height-pos-2);

    opacity: var(--opacity-pos-2);
    width: var(--width-pos-2);
    font-size: x-small;
  }
}
@keyframes rotation2to0 {
  0% {
    left: var(--left-pos-2);
    width: var(--width-pos-2);
    height: var(--height-pos-2);
    top: var(--top-pos-2);

    opacity: var(--opacity-pos-2);
    font-size: x-small;
  }
  50% {
    left: var(--left-transaction-2to0);
    z-index: 3;
  }
  100% {
    background-color: #212633f1;
    top: var(--top-pos-0);
    z-index: 3;
    width: var(--width-pos-0);
    left: var(--left-pos-0);
    filter: blur(0px);

    height: var(--height-pos-0);

    font-size: medium;
    opacity: var(--opacity-pos-0);
  }
}

/* ************************Rotations precedentes************************** */

.rotPrecedent1 {
  animation: rotation0to2 2s forwards;
}
.rotPrecedent2 {
  animation: rotation2to1 2s forwards;
}
.rotPrecedent3 {
  animation: rotation1to0 2s forwards;
}
@keyframes rotation0to2 {
  0% {
    font-size: medium;
    left: var(--left-pos-0);
    width: var(--width-pos-0);
    height: var(--height-pos-0);
    top: var(--top-pos-0);
    opacity: var(--opacity-pos-0);
  }
  50% {
    left: var(--left-transaction-2to0);
    z-index: 3;
  }
  100% {
    background-color: #1b282e;
    top: var(--top-pos-2);
    filter: blur(1px);
    font-size: x-small;
    left: var(--left-pos-2);
    width: var(--width-pos-2);
    z-index: 0;
    opacity: var(--opacity-pos-2);
    height: var(--height-pos-2);
  }
}
@keyframes rotation2to1 {
  0% {
    left: var(--left-pos-2);
    width: var(--width-pos-2);
    height: var(--height-pos-2);
    top: var(--top-pos-2);
    font-size: x-small;

    opacity: var(--opacity-pos-2);
  }
  100% {
    left: var(--left-pos-1);
    top: var(--top-pos-1);
    opacity: var(--opacity-pos-1);
    background-color: #1b282e;
    z-index: 0;
    filter: blur(1px);
    height: var(--height-pos-1);

    opacity: var(--opacity-pos-1);
    width: var(--width-pos-1);
    font-size: x-small;
  }
}
@keyframes rotation1to0 {
  0% {
    left: var(--left-pos-1);
    width: var(--width-pos-1);
    height: var(--height-pos-1);
    top: var(--top-pos-1);

    opacity: var(--opacity-pos-1);
    font-size: x-small;
  }
  50% {
    left: var(--left-transaction-0to1);
    z-index: 3;
  }
  100% {
    background-color: #212633f1;
    top: var(--top-pos-0);
    z-index: 3;
    width: var(--width-pos-0);
    left: var(--left-pos-0);
    filter: blur(0px);

    height: var(--height-pos-0);

    font-size: medium;
    opacity: var(--opacity-pos-0);
  }
}

/**********************  mediaQuery  *******************/

@media (max-width: 755px) {
  .suivant,
  .precendent {
    transform: scale(0.7);
  }
  .exp-tot {
    margin-top: 0;
  }
  .exp1,
  .ep2,
  .exp3 {
    font-size: smaller !important;
  }
}
@media (max-width: 480px) {
  h1 {
    visibility: visible;
    position: relative;
    top: -90px;
  }

  .exp-tot {
    --height-pos-0: auto;
    --height-pos-1: auto;
    --height-pos-2: auto;

    --width-pos-0: 70%;
    --width-pos-1: 70%;
    --width-pos-2: 70%;

    --left-pos-0: 10%;
    --left-pos-1: 500px;
    --left-pos-2: -250px;

    --top-pos-0: 0;
    --top-pos-1: 100px;
    --top-pos-2: 100px;

    --opacity-pos-0: ;
    --opacity-pos-1: 0.3;
    --opacity-pos-2: 0.3;

    --left-transaction-0to1: 550px;
    --left-transaction-2to0: -550px;
  }

  .exp-tot {
    position: relative;
    top: -100px;
    flex-direction: column;
    height: 600px;
  }
  .contenu {
    width: 100%;
    top: -280px;
  }
  .suivant,
  .precendent {
    z-index: 4;
    justify-self: center;
    position: absolute;
  }

  .exp1 {
    height: var(--height-pos-0);
    left: var(--left-pos-0);
  }
  .exp1,
  .exp2,
  .exp3 {
    min-height: 450px;
    font-size: smaller !important;
  }
  .precendent {
    top: 40%;
  }
  .suivant {
    top: 40%;
    left: 60%;
    opacity: 0.3;
  }
}
@media (max-width: 316px) {
  h1 {
    font-size: smaller !important;
    position: relative;
    top: -65px;
  }
  .suivant,
  .precendent {
    top: 10px;
    transform: scale(0.5);
  }
  .exp1,
  .exp2,
  .exp3 {
    min-height: 450px;
    font-size: small !important;
  }
}
</style>

<template>
  <h1>COMPTENCES</h1>
  <div class="comp">
    <p>
      Voici les différentes compétences que j'ai acquis lors de ma formation et
      de mes diverses expériences.
    </p>
    <p>
      J'aimerai ajouter que je travaille chaque jours pour enrichir ou
      perfectionner mon pannel de connaissance.
    </p>

    <div class="tabl">
      <div class="butt">
        <button @click="voirFront()" :class="{ actives: isVisibleFront }">
          Front
        </button>
        <button @click="voirBack()" :class="{ actives: isVisibleBack }">
          Back
        </button>
        <button @click="voirBdd()" :class="{ actives: isVisibleBdd }">
          Bdd
        </button>
        <button @click="voirAutre()" :class="{ actives: isVisibleAutre }">
          Autre
        </button>
      </div>
      <div class="contenu">
        <div v-show="isVisibleFront">
          <Front></Front>
        </div>
        <div v-show="isVisibleBack" class="cacher">
          <Back></Back>
        </div>

        <div v-show="isVisibleBdd" class="cacher">
          <Bdd></Bdd>
        </div>

        <div v-show="isVisibleAutre" class="cacher">
          <Autre></Autre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Front from "../components/Front.vue";
import Back from "../components/Back.vue";
import Bdd from "../components/Bdd.vue";
import Autre from "../components/Autre.vue";

export default {
  name: "Competence",
  components: {
    Front,
    Back,
    Bdd,
    Autre,
  },
  data() {
    return {
      isVisibleFront: true,

      isVisibleBack: false,

      isVisibleBdd: false,

      isVisibleAutre: false,
    };
  },
  methods: {
    voirFront() {
      this.isVisibleFront = true;

      this.isVisibleBack = false;

      this.isVisibleBdd = false;

      this.isVisibleAutre = false;

      return (
        this.isVisibleFront,
        this.isVisibleBack,
        this.isVisibleAutre,
        this.isVisibleBdd
      );
    },
    voirBack() {
      this.isVisibleFront = false;

      this.isVisibleBack = true;

      this.isVisibleBdd = false;

      this.isVisibleAutre = false;

      return (
        this.isVisibleFront,
        this.isVisibleBack,
        this.isVisibleAutre,
        this.isVisibleBdd
      );
    },

    voirBdd() {
      this.isVisibleFront = false;

      this.isVisibleBack = false;

      this.isVisibleBdd = true;

      this.isVisibleAutre = false;

      return (
        this.isVisibleFront,
        this.isVisibleBack,
        this.isVisibleAutre,
        this.isVisibleBdd
      );
    },

    voirAutre() {
      this.isVisibleFront = false;

      this.isVisibleBack = false;

      this.isVisibleBdd = false;

      this.isVisibleAutre = true;

      return (
        this.isVisibleFront,
        this.isVisibleBack,
        this.isVisibleAutre,
        this.isVisibleBdd
      );
    },
  },
};
</script>

<style scoped>
.comp {
  border-radius: 20px;
  padding: 50px;
  width: 60%;
  margin: auto;
  margin-bottom: 50px;
}

.comp::before {
  content: "";
  width: 65%;
  height: 50%;
  border-radius: 5px;
  display: block;
  position: absolute;
  top: 30%;
  left: 20%;
  background: linear-gradient(
    45deg,
    #faa8fd,
    rgb(255, 87, 233),
    rgb(255, 42, 255),
    rgb(255, 87, 233),
    #faa8fd
  );
  z-index: -1;
  opacity: 0.9;

  filter: blur(150px);
  /*box-shadow: 2px 0px 5px 1px #87cdfc, -2px 0px 5px 1px #87cdfc;*/
}
.tabl {
  display: flex;
  width: 90%;
  border-radius: 10px;
  margin: auto;
  flex-direction: column;
  --backgroundcolortable: #1a1a295d;
  opacity: 1;
}
.butt {
  width: 100%;
  border: none;
}
.contenu {
  background-color: #1a1a29;
  margin: 0%;
  border: 2px solid var(--back-ground-color1);
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  opacity: 1;
}
button {
  width: 25%;
  cursor: pointer;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: var(--backgroundcolortable);
  font-size: larger;
  color: rgb(255, 255, 255);
  border: none;
}

button:hover {
  opacity: 0.9;
}

/*partie du tableau active*/
.actives {
  background-color: #1a1a29;
  border: none;
}
.actives:hover {
  opacity: 1;
}

.contenu {
  height: 500px;
}

h1 {
  visibility: hidden;
}

@media (max-width: 450px) {
  h1 {
    visibility: visible;
    position: relative;
    top: -90px;
  }
  .comp {
    padding: 10px;
    width: 80%;
    position: relative;
    top: -80px;
    margin-bottom: 10px;
    font-size: smaller;
  }
  .contenu {
    padding: 10px;
    margin-bottom: 0;
  }
}

@media (max-width: 316px) {
  h1 {
    font-size: smaller;
    position: relative;
    top: -70px;
  }
  .comp {
    width: 80%;
    position: relative;
    top: -40px;
  }
}

.etoiles {
  width: 70%;
  height: auto;
  position: relative;
  top: 20%;
  left: 0px;
  opacity: 1;
  margin: 0;
}
.img-etoiles {
  position: relative;
  width: 100%;
  z-index: 2;
}

.rempl {
  position: absolute;
  top: 0px;
  background: linear-gradient(
    rgb(255, 42, 255),
    rgb(255, 87, 233),
    #faa8fd,
    #faa8fd,
    #faa8fd
  );
  height: 80%;
  border: 1px solid green;
  z-index: 1;
}
</style>

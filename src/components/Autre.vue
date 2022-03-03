<template>
  <div class="contenu" v-for="langage in langages" :key="langage.id">
    <div class="lang">
      <h3>{{ langage.name }}</h3>
      <div class="stars">
        <div class="etoiles">
          <div class="rempl" :style="{ width: langage.stars + '%' }"></div>
          <div class="rempl-tot"></div>
          <img
            src="../MyOwnIcons/etoiles1.png"
            class="img-etoiles"
            alt="étoiles"
          />
        </div>
      </div>
    </div>
    <div
      class="lang1"
      v-for="(framework, index) in frameworkLangage[langage.id].frameworks"
      :key="index"
    >
      <h3>{{ framework.name }}</h3>
      <div class="etoiles1">
        <div class="rempl1" :style="{ width: framework.stars + '%' }"></div>
        <div class="rempl-tot"></div>
        <!-- <img
          src="../MyOwnIcons/etoiles1.png"
          class="img-etoiles"
          alt="étoiles"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Autre",
  data() {
    return {
      langages: [
        {
          id: 0,
          name: "Powershell",
          stars: 60,
          frameworks: [],
        },
        {
          id: 1,
          name: "VBA",
          stars: 80,
          frameworks: [],
        },
        {
          id: 3,
          name: "Jira",
          stars: 60,
          frameworks: [],
        },
        {
          id: 4,
          name: "Jenkis",
          stars: 40,
          frameworks: [],
        },

        {
          id: 4,
          name: "Docker",
          stars: 40,
          frameworks: [],
        },
      ],
    };
  },
  computed: {
    frameworkLangage() {
      return this.langages;
    },
  },
};
</script>

<style scoped>
h3 {
  width: 30%;
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
.rempl-tot {
  position: absolute;
  top: 0px;
  background-color: rgb(104, 104, 104);
  height: 80%;
  width: 98%;
  z-index: 0;

  border-radius: 5px;
}
.rempl {
  position: absolute;
  top: 0px;
  background: linear-gradient(
    rgb(255, 42, 255),
    rgb(255, 87, 233),
    #faa8fd,
    #faa8fd,
    #faa8fd,
    #faa8fd
  );
  height: 80%;
  z-index: 1;
  border-top-left-radius: 5px;

  border-bottom-left-radius: 5px;
}

.etoiles1 {
  width: 70%;
  height: auto;
  position: relative;
  left: 25%;
  opacity: 1;
  margin: 0;
  transform: scale(0.2);
  top: 10px;
}
.rempl1 {
  position: absolute;
  top: 0px;
  background: linear-gradient(
    rgb(42, 159, 255),
    rgb(87, 179, 255),
    #a8e6fd,
    #a8e6fd,
    #a8e6fd
  );
  height: 80%;
  z-index: 1;
}
.lang1 {
  height: 50px;
}

@media (max-width: 850px) {
  .etoiles {
    width: 100%;
    left: -30%;
  }
  .etoiles1 {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .etoiles {
    width: 150%;
    left: -50%;
  }
  .etoiles1 {
    width: 200%;
  }
}
</style>

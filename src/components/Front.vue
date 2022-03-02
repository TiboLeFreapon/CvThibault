<template>
  <div class="contenu" v-for="langage in langages" :key="langage.id">
    <div class="lang">
      <h3>{{ langage.name }}</h3>
      <div class="stars">
        <div class="etoiles">
          <img
            src="../MyOwnIcons/etoiles1.png"
            class="img-etoiles"
            alt="étoiles"
          />
        </div>
        <div class="remplissage">
          <div class="rempl"></div>
        </div>
      </div>
    </div>
    <div
      class="lang1"
      v-for="(framework, index) in frameworkLangage[langage.id].frameworks"
      :key="index"
    >
      <h3>{{ framework.name }}</h3>
      <p class="stars1">{{ framework.stars }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Front",
  data() {
    return {
      langages: [
        {
          id: 0,
          name: "HTML",
          stars: 5,
          frameworks: [],
        },
        {
          id: 1,
          name: "CSS",
          stars: 5,
          frameworks: [{ name: "Bootstrap", stars: 3 }],
        },
        {
          id: 2,
          name: "JavaScript",
          stars: 4,
          frameworks: [
            { name: "Vue.Js", stars: 3 },
            { name: "JQuery", stars: 2 },
            { name: "React", stars: 2 },
          ],
        },
      ],
    };
  },
  computed: {
    frameworkLangage() {
      return this.langages;
    },
    cacl(a) {
      return (a / 5) * 100;
    },
  },
};
</script>

<style scoped>
h3 {
  width: 30%;
}

.lang {
  border: 1px solid red;
}
.stars {
  border: 1px solid green;
}
.etoiles {
  width: 200px;
  height: auto;
  position: relative;
  top: 20%;
  left: 30%;
  z-index: 2;
  opacity: 1;
}
.img-etoiles {
  width: 200px;
}
.remplissage {
  z-index: 1;
  width: 200px;
  height: 40px;
  position: relative;
  top: -28px;
  left: 30%;

  background-color: #3535478e;
}
.rempl {
  background-color: rgba(255, 255, 0, 0.664);
  height: 40px;
  margin: 0;
}
</style>

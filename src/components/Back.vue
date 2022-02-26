<template>
  <div class="contenu" v-for="langage in langages" :key="langage.id">
    <div class="lang">
      <h3>{{ langage.name }}</h3>
      <p class="stars">{{ langage.stars }}</p>
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
  name: "Back",
  data() {
    return {
      langages: [
        {
          id: 0,
          name: "JavaScript",
          stars: 4,
          frameworks: [
            {
              name: "NodeJS",
              stars: 3,
            },
          ],
        },
        {
          id: 1,
          name: "PHP",
          stars: 3,
          frameworks: [{ name: "Symphonie", stars: 1 }],
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
</style>

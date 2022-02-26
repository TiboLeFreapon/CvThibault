<template>
  <p>Autres outils</p>
  <div v-for="langage in langages" :key="langage.id">
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
  name: "Autre",
  data() {
    return {
      langages: [
        {
          id: 0,
          name: "Powershell",
          stars: 4,
          frameworks: [],
        },
        {
          id: 1,
          name: "VBA",
          stars: 3,
          frameworks: [],
        },
        {
          id: 3,
          name: "Jira",
          stars: 3,
          frameworks: [],
        },
        {
          id: 4,
          name: "Jenkis",
          stars: 3,
          frameworks: [],
        },

        {
          id: 4,
          name: "Docker",
          stars: 3,
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
</style>

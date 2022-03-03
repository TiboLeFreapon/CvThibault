<template>
  <div id="nav2" v-if="display">
    <router-link to="/Formation" class="menu" @click="display = false"
      >Formations</router-link
    >

    <router-link to="/Competence" class="menu" @click="display = false"
      >Compétences</router-link
    >

    <router-link to="/" class="menu" @click="display = false"
      >Présentations</router-link
    >

    <router-link to="/Experience" class="menu" @click="display = false"
      >Expériences</router-link
    >

    <router-link to="/Loisir" class="menu" @click="display = false"
      >Loisirs</router-link
    >
  </div>

  <div id="nav">
    <router-link to="/Formation" class="menu">Formations</router-link>

    <router-link to="/Competence" class="menu">Compétences</router-link>

    <router-link to="/" class="menu">Présentations</router-link>

    <router-link to="/Experience" class="menu">Expériences</router-link>

    <router-link to="/Loisir" class="menu">Loisirs</router-link>
  </div>

  <div class="menu2">
    <img
      src="./MyOwnIcons/menu.png"
      alt="menu icon"
      class="menu2"
      @click="display = !display"
    />
  </div>
  <div class="main">
    <router-view />
  </div>

  <div class="footer">
    <Contact></Contact>
  </div>
</template>

<script>
import Contact from "./view/Contact.vue";

export default {
  components: {
    Contact,
  },
  data() {
    return {
      display: false,
    };
  },
};
</script>
<style>
body {
  --background-color-2: #1a1a29; /*#1a1a29*/
  background-color: var(--background-color-2);
  /*background-image: url(./MyOwnIcons/background/fondecran1.png);*/
  overflow-x: hidden;
}
.main {
  min-height: 70vh;
}
#App {
  min-height: 99%;
  max-width: 100%;
  --back-ground-color1: #1a1a29de; /*couleur1: #a8e6fd  couleur2: #212633da*/
  color: #eff0f3; /*coleur1 :#041765*/
  --back-ground-color-actif-menu: #212633;
  --borders-color: rgb(50, 93, 133);
  font-family: "Comic Sans MS", Didot, "Trebuchet MS", "Segoe UI", monospace;
}
/* Div encadrant les routers */
.router-contenu {
  position: relative;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: orange;
}

#nav {
  display: flex;
  top: 0px;
  padding-bottom: 50px;
  width: 75%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin: auto;
  height: auto;
  padding: 0;
  justify-content: space-evenly;
  background-color: transparent;
}
#nav2 {
  position: fixed;
  display: grid;
  width: 100%;
  height: 50%;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 2fr;
  z-index: 100;
  justify-content: center;
}
.menu {
  background-color: #1a1a2941;
  width: 20%;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: larger;
  opacity: 0.6;
}
.menu2 {
  width: 50px;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  visibility: hidden;
}
.menu:hover {
  opacity: 0.7;
}
a {
  text-decoration: none;
  color: #eff0f3;
}
#nav a.router-link-exact-active {
  background-color: var(--back-ground-color-actif-menu);
  border-left: 1px solid #ffffff21;
  border-right: 1px solid #ffffff21;
  border-bottom: 1px solid #ffffff21;
  color: #f4fcff;
  opacity: 1;

  z-index: 2;
}
#nav a.router-link-exact-active::after {
  content: "";
  width: 120%;
  height: 100%;
  z-index: 1;
  display: block;
  background: linear-gradient(
    45deg,
    #a8e6fd,
    rgb(159, 212, 255),
    rgb(155, 210, 255),
    rgb(159, 212, 255),
    #a8e6fd
  );
  position: relative;
  top: -60%;
  left: -10%;
  border-radius: 20%;
  filter: blur(70px);
  opacity: 1;
}
/*compétence*/
.lang,
.lang1 {
  display: flex;
  justify-content: space-between;
}
.lang {
  margin-top: 20px;
}
.lang1 {
  transform: scale(0.8);
}
.stars,
.stars1 {
  width: 30%;
}

/*MediaQuery*/

@media (max-width: 900px) {
  #nav {
    width: 100%;
  }
  .menu {
    font-size: smaller;
  }
}

@media (max-width: 450px) {
  #nav {
    visibility: hidden;
  }
  #nav2 {
    visibility: visible;
  }
  .menu {
    width: 100%;
    height: auto;
    padding: auto;
    background-color: rgb(255, 255, 255);
    font-size: larger;
    opacity: 0.95;
  }
  #nav2 a.router-link-exact-active {
    background-color: var(--back-ground-color-actif-menu);
    border-left: 1px solid #041765;
    border-right: 1px solid #041765;
    border-bottom: 1px solid #041765;
    color: #f4fcff;
    opacity: 1;
  }
  .menu2 {
    visibility: visible;
  }

  a {
    color: var(--background-color-2);
  }
}
@media (max-width: 316px) {
  .menu2 {
    transform: scale(0.8);
  }
  h1 {
    font-size: smaller;
    position: relative;
    top: -70px;
  }
}
</style>

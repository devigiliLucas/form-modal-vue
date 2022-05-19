<template>
  <div id="contents">
    <div id="photo">
      <img
        src="../assets/Fernanda.jpg"
        alt="Mulhr com um celular"
        class="photo"
      />
    </div>
    <div id="centralBox">
      <formularioUm />
      <formularioDois />
      <formularioTres />
    </div>
  </div>
</template>

<script>
import formularioUm from "./FormUm.vue";
import formularioDois from "./FormDois.vue";
import formularioTres from "./FormTres.vue";
export default {
  name: "FormForm",
  components: {
    formularioUm,
    formularioDois,
    formularioTres,
  },
};
</script>

<style scoped>
p {
  color: black;
}

.photo {
  z-index: -1;
  height: 95vh;
  width: auto;
  position: absolute;
  right: 0px;
  top: 48px;
}

#contents {
  display: flex;
  justify-content: center;
  align-items: center;
}

#centralBox {
  z-index: 0;
  height: 800px;
  width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>

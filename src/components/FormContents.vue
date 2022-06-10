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
      <formularioUm @enviarDados="receberDados"/>
      <formularioDois @enviarDadosEndereco="receberEndereco"/>
      <formularioTres />
    </div>
      <div id="modal" hidden>
        <modal :contato="dados_contato" :endereco="dados_endereco"/>
      </div>
  </div>
</template>

<script>
import formularioUm from "./FormUm.vue";
import formularioDois from "./FormDois.vue";
import formularioTres from "./FormTres.vue";
import modal from "@/components/ModalContents.vue";


export default {
  name: "FormForm",
  data() {
    return{
      dados_contato: {},
      dados_endereco: {},
    }
  },
  components: {
    formularioUm,
    formularioDois,
    formularioTres,
    modal,
  },
  methods: {
      receberDados(value) {
        this.dados_contato = value

    },

      receberEndereco(value) {
        this.dados_endereco = value
      }
  }
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

#modal {
  height: 100vh;
  width: 100vw;
  z-index: 3;
  position: fixed;
  right: 0px;
  top:00px;
}
</style>

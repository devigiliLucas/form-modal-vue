<template>
  <div id="modal">
    <header id="header">
      <div id="title">
        <h2>Confirmar informações de cadastro</h2>
      </div>
      <div id="btnClose">
        <p @click="closeModal()">X</p>
      </div>
    </header>
    <div id="nav">
      <p>Analíse e confirme os dados inputados no cadastro</p>
      <div id="buttons">
        <input type="button" class="btnBody" value="Cadastro" />
        <input type="button" class="btnBody margin" value="Pessoal" />
      </div>
    </div>
    <div id="body">
      <cadastro />
    </div>
    <footer id="footer">
      <input
        type="button"
        class="btnFooter btnCancel"
        @click="closeModal()"
        value="Cancelar"
      />
      <input
        type="button"
        class="btnFooter btnConfirmar"
        @click="confirm()"
        value="Confirmar"
      />
    </footer>
  </div>
</template>

<script>
import cadastro from "./ModalCastro.vue";
export default {
  name: "ModalContents",
  methods: {
    closeModal() {
      document.querySelector("#modal").style = "display: none;";
    },
    confirm() {
      document.querySelector("#modal").style = "display: none;";
      document.getElementById("form2").style = "display: none;";
      document.getElementById("form3").style = "display: block;";
    },
  },
  components: {
    cadastro,
  },
};
</script>

<style scoped>
* {
  background-color: wheat;
  color: black;
}

#modal {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
}

#header {
  width: 600px;
  height: 50px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(197, 197, 197);
}

#btnClose {
  position: absolute;
  right: 10%;
  top: 25px;
}

#title {
  position: absolute;
  left: 10%;
}

#nav {
  width: 497px;
}

#buttons {
  display: flex;
  margin-top: 10px;
}

.btnBody {
  height: 30px;
  width: 90px;
  color: black;
  border: 1px solid black;
  border-radius: 50px;
  font-size: 17px;
}

.btnBody:focus {
  background-color: rgb(51, 51, 51);
  color: white;
  border: none;
}

.margin {
  margin-left: 5px;
}

.btnFooter {
  height: 70px;
  width: 150px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
}

.btnCancel {
  color: rgb(224, 43, 87);
}

.btnConfirmar {
  background-color: rgb(224, 43, 87);
  color: white;
}

#footer {
  height: 60px;
  width: 600px;
  border-top: 1px solid rgb(197, 197, 197);
  display: flex;
  justify-content: center;
}

.btnFooter {
  margin-top: 13px;
}
</style>

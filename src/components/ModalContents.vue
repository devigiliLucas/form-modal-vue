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
        <input
          type="button"
          class="btnBody btnCadastro"
          value="Cadastro"
          @click="changeScreen2()"
        />
        <input
          type="button"
          class="btnBody btnPessoal margin"
          value="Pessoal"
          @click="changeScreen1()"
        />
      </div>
    </div>
    <div id="body">
      <div id="cadastro">
        <cadastro />
      </div>
      <div id="pessoal" hidden>
        <pessoal />
      </div>
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
import pessoal from "./ModalPessoal.vue";
export default {
  name: "ModalContents",
  methods: {
    closeModal() {
      document.querySelector("#modal").style = "display: none;";
    },
    changeScreen1() {
      // Cadastro => Pessoal
      document.querySelector("#cadastro").style = "display: none;";
      document.querySelector("#pessoal").style = "display: block;";

      // var btnPessoal = document.querySelector('.btnPessoal');
      // btnPessoal.classList.add('selectBtn');

      // var btnCadastro = document.querySelector('.btnCadastro');
      // btnCadastro.classList.add('defaultBtn');
    },
    changeScreen2() {
      // Pessoal => Cadastro
      document.querySelector("#cadastro").style = "display: block;";
      document.querySelector("#pessoal").style = "display: none;";

      // var btnPessoal = document.querySelector('.btnPessoal');
      // btnPessoal.classList.add('defaultBtn');

      // var btnCadastro = document.querySelector('.btnCadastro');
      // btnCadastro.classList.add('selectBtn');
    },
    confirm() {
      document.querySelector("#modal").style = "display: none;";
      document.getElementById("form2").style = "display: none;";
      document.getElementById("form3").style = "display: block;";
    },
  },
  components: {
    cadastro,
    pessoal,
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
  border-radius: 50px;
  font-size: 17px;
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

.defaultBtn {
  background-color: pink;
  color: black;
  border: 1px solid black;
}

.selectBtn {
  background-color: rgb(51, 51, 51);
  color: White;
  border: none;
}
</style>

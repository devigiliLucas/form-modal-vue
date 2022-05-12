<template>
  <form id="form2">
    <br />
    <div id="texts">
      <h2 class="subtitle">Dados pessoais</h2>
      <br />
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Orci, volutpat
        in <br />iaculis nec nisl tellus.
      </p>
      <br />
    </div>
    <br />
    <div id="labelLogradouro1">
      <label>País onde reside</label>
      <label>Cidade</label>
    </div>
    <div id="logradouro1">
      <input type="text" class="mediumInput contry" required />
      <input type="text" class="mediumInput paddingInput city" required />
    </div>
    <div id="labelLogradouro2">
      <label>Cep</label>
      <label>Endereço</label>
    </div>
    <div id="logradouro2">
      <input type="number" class="mediumInput cep" required />
      <input type="text" class="mediumInput paddingInput address" required />
    </div>
    <label>Número</label>
    <br />
    <input type="number" class="bigInput number" required />
    <div id="button">
      <input
        type="button"
        class="btn next2"
        value="Confirmar"
        @click="hiddenForm2()"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "formulárioDois",
  methods: {
    hiddenForm2() {
      // var body = document.querySelector("*")
      var Pais = document.querySelector(".contry").value;
      var Cidade = document.querySelector(".city").value;
      var CEP = document.querySelector(".cep").value;
      var Endereco = document.querySelector(".address").value;
      var Number = document.querySelector(".number").value;

      function confirmacao() {
        if (
          Pais === "" ||
          Cidade === "" ||
          CEP === "" ||
          Endereco === "" ||
          Number === ""
        ) {
          return false;
        } else {
          return true;
        }
      }

      if (confirmacao() === true) {
        document.getElementById("form1").style = "display: none;";
        document.getElementById("form3").style = "display: none;";
        document.querySelector("#modal").style = "display: block;";
        // body.style.filter='backgrowndColor: black;';
      } else {
        alert("Preencha todos os campos corretamente");
      }
    },
  },
};
</script>

<style scoped>
* {
  color: rgb(0, 0, 0);


}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}

#form2 {
  position: absolute;
  z-index: 2;
}

input {
  margin-bottom: 20px;
  margin-top: 0px;
  border: solid 1px black;
}

.bigInput {
  height: 50px;
  width: 528px;
  border-radius: 5px;
  font-size: 20px;
}

.mediumInput {
  height: 50px;
  width: 230px;
  border-radius: 5px;
  font-size: 20px;
}

#labelLogradouro1 {
  display: flex;
  justify-content: space-between;
  width: 340px;
}

#logradouro1 {
  display: flex;
  justify-content: flex-start;
}

#labelLogradouro2 {
  display: flex;
  justify-content: space-between;
  width: 355px;
}

#logradouro2 {
  display: flex;
  justify-content: flex-start;
}

.paddingInput {
  margin-left: 56px;
}

.btn {
  font-size: 20px;
  padding: 10px 55px;
  border: 0px;
  border-radius: 30px;
  color: white;
  background-color: rgb(255, 20, 106);
  cursor: pointer;
}

.btn:hover {
  background-color: rgba(255, 20, 106, 0.616);
}

#form2 {
  left: 450px;
}
</style>

<template>
  <form id="form1">
    <div id="texts">
      <h1 class="title">Seja bem-vindo</h1>
      <br />
      <h2 class="subtitle">Dados de contato</h2>
      <br />
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Orci, volutpat
        in <br />iaculis nec nisl tellus.
      </p>
      <br />
    </div>
    <label>Nome completo</label>
    <br />
    <input
      type="text"
      class="bigInput name"
      name="nome"
      v-model="dados.name"
      autocomplete="on"
    />
    <div id="labelEmail">
      <label>E-mail</label>
      <label>Confirmar e-mail</label>
    </div>
    <div id="email">
      <input
        type="text"
        class="mediumInput email"
        name="email"
        v-model="dados.email"
        autocomplete="on"
      />
      <input
        type="text"
        class="mediumInput paddingInput confirmacao"
        name="confirmacao"
        v-model="dados.confirmacao"
        autocomplete="on"
      />
    </div>
    <div id="labelNumbers">
      <label>Cpf</label>
      <label>Celular</label>
    </div>
    <div id="numbers">
      <input
        type="text"
        class="mediumInput cpf"
        name="cpf"
        maxlength="14"
        autocomplete="on"
        v-model="dados.cpf"
        v-maska="'###.###.###-##'"
        @maska="rawCpf = $event.target.dataset.maskRawValue"
      />
      <input
        type="text"
        class="mediumInput paddingInput celphone"
        name="celular"
        v-maska="'(##) #####-####'"
        autocomplete="off"
        v-model="dados.cel"
      />
    </div>
    <label>Data de nascimento</label>
    <br />
    <input
      type="date"
      class="mediumInput data"
      name="data"
      v-model="dados.data"
    />
    <p class="bottonText">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </p>
    <br />
    <p class="bottonText">Mattis semper odio preretium vestibulum nulla</p>
    <br />
    <div id="sms">
      <input type="checkbox" name="sms" v-model="dados.sms" />
      <label>Email e SMS</label>
    </div>
    <div id="mensageApp">
      <input type="checkbox" name="whatsapp" v-model="dados.whatsApp" />
      <label>Whatsapp</label>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Orci, volutpat
      in <br />iaculis nec nisl tellus. Amet tellus nunc dolor magna risus.
      <br />Habitant neque, id risus diam
    </p>
    <br />
    <div id="button">
      <input
        type="button"
        class="btn next1"
        value="confirmar"
        @click="
          hiddenForm1(isEmail, isCPF, sameEmail, isWritten),
            error(isEmail, isCPF, sameEmail, isWritten),
            $emit('enviarDados', dados)
        "
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "formulárioUm",
  data() {
    return {
      dados: {
        cpf: "",
        name: "",
        email: "",
        confirmacao: "",
        cel: "",
        data: "",
        sms: "",
        whatsApp: "",
      },
      rawCpf: "",
    };
  },

  methods: {
    enviarDados() {
      console.log("oi");
      
    },

    isCPF() {
      var Soma;
      var Resto;
      var i;
      Soma = 0;
      if (this.rawCpf == "00000000000") return false;

      for (i = 1; i <= 9; i++)
        Soma = Soma + parseInt(this.rawCpf.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(this.rawCpf.substring(9, 10))) return false;

      Soma = 0;
      for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(this.rawCpf.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) Resto = 0;
      if (Resto != parseInt(this.rawCpf.substring(10, 11))) return false;
    },

    isEmail() {
      var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

      if (reg.test(this.dados.email)) {
        return true;
      } else {
        return false;
      }
    },

    sameEmail() {
      if (this.dados.email === this.dados.confirmacao) {
        return true;
      } else {
        return false;
      }
    },

    isWritten() {
      if (
        this.dados.rawCpf === "" ||
        this.dados.name === "" ||
        this.dados.email === "" ||
        this.dados.confirmacao === "" ||
        this.dados.cel === "" ||
        this.dados.data === "" ||
        (this.dados.whatsApp == false && this.dados.sms == false)
      ) {
        return false;
      } else {
        return true;
      }
    },

    hiddenForm1(isEmail, isCPF, sameEmail, isWritten) {
      if (
        isEmail() === true &&
        isCPF() !== false &&
        sameEmail() === true &&
        isWritten() === true
      ) {
        console.log("Foi");
        document.getElementById("form1").style = "display: none;";
        document.getElementById("form2").style = "display: block;";
      } else {
        console.log("Não foi");

        console.log(this.dados.sms);
        console.log(this.dados.whatsApp);
      }
    },

    error(isEmail, isCPF, sameEmail, isWritten) {
      if (isCPF() === false) {
        alert("CPF Inválido");
      }
      if (isEmail() === false) {
        alert("E-mail Inválido");
      }
      if (sameEmail() === false) {
        alert("E-mails diferentes");
      }
      if (isWritten() === false) {
        alert("Tem informações faltando");
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

#form1 {
  z-index: 0;
  right: -450;
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

#labelEmail {
  display: flex;
  justify-content: space-between;
  width: 410px;
}

#email {
  display: flex;
  justify-content: flex-start;
}

#labelNumbers {
  display: flex;
  justify-content: space-between;
  width: 340px;
}

#numbers {
  display: flex;
  justify-content: flex-start;
}

.data {
  display: flex;
  flex-direction: row-reverse;
  font-weight: lighter;
}

.paddingInput {
  margin-left: 56px;
}

#sms {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 120px;
}

#mensageApp {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100px;
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

.bottonText {
  font: bold;
}
</style>

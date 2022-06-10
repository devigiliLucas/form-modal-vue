<template>
  <div id="outsideBox">
    <div id="insideBox">
      <header>
        <h2 class="title">Dados de contato</h2>
      </header>
      <div id="infos">
        <div id="colunaUm">
          <div id="labelUm">
            <label>CPF</label>
            <label>Celular</label>
          </div>
          <div id="infoUm">
            <p class="cpf">{{ dados.cpf }}</p>
            <p class="celular">{{ dados.cel }}</p>
          </div>
        </div>

        <div id="colunaDois">
          <div id="labelDois">
            <label>Nome</label>
            <label>Contato</label>
          </div>
          <div id="infoDois">
            <p class="nome">{{ dados.name }}</p>
            <p class="contato">{{ contato }}</p>
          </div>
        </div>

        <div id="colunaTres">
          <label>Nascimento</label>
          <p class="nascimento">{{ dados.data }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalCadastro",
  props: {
    dados: {
      type: Object
    }
  },
  computed: {
    contato() {
      if (this.dados.sms == true) {
        return "SMS"
      } else {
        return "❤Whatsapp"
      }
    }
  }
};
</script>

<style scoped>
* {
  width: 550px;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
}

#outsideBox {
  height: 350px;
  width: 500px;
  border: 1px solid rgb(197, 197, 197);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#insideBox {
  height: 300px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  width: 399px;
  border-bottom: 1px solid rgb(197, 197, 197);
}

#infos {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

#labelUm {
  display: flex;
}

#infoUm {
  display: flex;
  font-weight: bold;
}

#labelDois {
  display: flex;
}

#infoDois {
  display: flex;
  font-weight: bold;
}

.nascimento {
  font-weight: bold;
}
</style>

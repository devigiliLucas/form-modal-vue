<template>
  <div id="outsideBox">
    <div id="insideBox">
      <header>
        <h2 class="title">Dados de contato</h2>
      </header>
      <div id="infos">
        <div id="colunaUm">
          <div id="labelUm">
            <label>País</label>
            <label>Endereço</label>
          </div>
          <div id="infoUm">
            <p class="pais">{{ dadosEndereco.country }}</p>
            <p class="endereco">{{ dadosEndereco.addres }}</p>
          </div>
        </div>

        <div id="colunaDois">
          <div id="labelDois">
            <label>Cidade</label>
            <label>Numero</label>
          </div>
          <div id="infoDois">
            <p class="cidade">{{ dadosEndereco.city }}</p>
            <p class="numero">{{ dadosEndereco.number }}</p>
          </div>
        </div>

        <div id="colunaTres">
          <label>Cep</label>
          <p class="cep">{{ dadosEndereco.cep }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalPessoal",
  props: {
    dadosEndereco: {
      type: Object
    }
  },
  watch: {
    dadosEndereco: function(params) {
      console.log(params);
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

.pais {
  width: 276px;
}

.endereco {
  width: 150px;
}

.nascimento {
  font-weight: bold;
}
</style>

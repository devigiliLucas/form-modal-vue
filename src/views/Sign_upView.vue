<template>
  <main id="main ">
    <div id="header">
      <Header />
    </div>
    <div id="form">
      <FormForm />
    </div>
    <div id="modal">
        <modal />
      </div>
  </main>
</template>

<script>
import Header from "@/components/FormHeader.vue";
import FormForm from "@/components/FormContents.vue";
import modal from "@/components/ModalContents.vue";

export default {
  name: 'HomeView',
  components: {
    Header,
    FormForm,
    modal,
  }
}
</script>

<style scoped>
#header {
  height: 5vh;
}

#contents {
  height: 95vh;
}

#modal {
  height: 700px;
  width: 600px;
  /* display: flex;
  align-items: center; */
  z-index: 3;
  position: absolute;
  right: 250px;
  top:100px;
}
</style>
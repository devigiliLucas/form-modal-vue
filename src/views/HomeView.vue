<template>
  <main id="main">
    <div id="header">
      <Header />
    </div>
    <div id="banner">
      <Banner />
    </div>
    <div id="content">
      <Content />
    </div>
    <div class="aside">
      <Asided />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </main>
</template>

<script>
import Header from '@/components/HomeHeader.vue';
import Banner from '@/components/HomeBanner.vue';
import Content from '@/components/HomeArticle.vue';
import Asided from '@/components/HomeAsside.vue';
import Footer from '@/components/HomeFooter.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    Banner,
    Content,
    Asided,
    Footer
  }
}
</script>

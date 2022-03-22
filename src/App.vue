<template>
<Navbar :logo="logo_src" :alt="app_name" />
  <router-view/>
<Footer />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      logo_src: "/img/Logo-Bessa-ADV.png",
      app_name: "Bessa Advogados"
    }
  }
}
</script>

<style>
* {
 padding: 0;
 margin: 0;
 box-sizing: border-box;
 background: #f1f1f1f1;
}

.main-container {
  margin: 50px;
  min-height: 240px;  
}

h4 {
  text-align: center;
  font-size: 37px;
  font-weight: normal;
  line-height: 1.2;
  color: #3f3c3c;
  margin-top: 8rem;
  }

b{
  font-weight: 700;
  color: #404040;
}

</style>

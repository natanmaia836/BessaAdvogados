<template>
<Banner/>
  <div class="main-container"> 
    <div class="intro-msg">  
   <h4>
    <b>Um ambiente de apoio às realizações dos nossos clientes,</b>
     utilizando o 
     <br>Direito associado à técnicas de negociação, mediação, conciliação e <br />
      coaching integral sistêmico com foco em resultados.
   </h4>
  </div>
  </div>
</template>

<style scoped>
*{
  background-color: #ffff;
}

.main-container {
    width: 100%;
    height: 370px;
    margin: 0;
    margin-top: -127px;
}

.intro-msg {
  width: 100%;
  padding-top: 1px;
}

</style>
<script>
import Banner from "../components/Banner.vue"

export default{
  name: "Home",
  components: {
    Banner
  }
}
</script>

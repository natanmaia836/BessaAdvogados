<template>
<div class="main-container">
  <div id="all-container">
    <div id="vertical">
      <h2 class="page-tittle">Áreas de Atuação</h2>
      <p></p>
      </div>
    </div>
</div>
<div class="barrinha-branca"></div>
  <div id="dividendo">
    <div id="img-wrapper"></div>
    <div id="texto">
    <p>O Bessa Advogados atende todas as demandas rotineiras e extraordinárias de pessoa jurídica e/ou física,
      relacionadas ao Direito Imobiliário e ao Direito de Família e Sucessões, dentre as quais destacam-se:
    </p>
    </div>
    <div id="lista">
    <li>Análise de documentação imobiliária;</li>
    <li>Assessoria na compra e venda de imóveis;</li>
    <li>Assessoria em questões ligadas ao registro imobiliário;</li>
    <li>Adjudicação compulsória;</li>
    <li>Usucapião judicial e extrajudicial;</li>
    <li>Permuta;</li>
    <li>Dação em Pagamento;</li>
    <li>Doação;</li>
    <li>Cessão de direítos sucessórios;</li>
    <li>Divórcio</li>
    <li>Inventário;</li>
    <li>Testamento;</li>
    <li>Escritura de união estável;</li>
    <li>Escritura de namoro;</li>
    <li>Mediação em questões de familia e sucessões;</li>
    <li>Planejamento sucessório.</li>
    </div>
  <div id="icones">
    <div class="icone-civel"></div>
    <div class="icone-contratual"></div>
    <div class="icone-imobiliario"></div>
    <div class="icone-aa"></div>
    <div id="links">
    <router-link to="/Civel" id="teste">Cível</router-link> 
    <router-link to="/Contratual" id="teste2">Contratual</router-link> 
    <router-link to="/Imobiliario" id="teste3">Imobilíario</router-link> 
    <router-link to="/Familia" id="teste4">Família e Sucessões</router-link> 
    </div>
    <router-view/>
  </div>
  </div>
</template>

<style scoped>
*{
  background-color: #ffffff;
}
.main-container {
  margin: 0;
  height: 300px;
  width: 100%;
  color: #ffffffff;
  background-color: #ffffffff;
}

.barrinha-branca {
   background-color: #ffffff;
   bottom: 522px;
   content: "";
   height: 1px;
   left: 50%;
   margin-left: -245px;
   position: absolute;
   width: 98px;
   box-sizing: border-box;
}


#all-container {
height: 300px;
width: 53%;
margin-bottom: 81px;
background-repeat: no-repeat;
background-position: center top !important;
background-attachment: scroll;
background-image: url(/img/slidebessa2.jpg);
float: right;
color: #ffffffff;
background-color: #0f4e8c;
}

#vertical {
  display: table-cell;
  vertical-align: middle;
  background-color: transparent;
  
}

.page-tittle{
  bottom: -110px;
  left: -78%;
  background-color: #0f4e8c;
  padding: 28px;
 font-weight: 700;
 letter-spacing: 1px;
 position: relative;
 font-size: 54px;
 font-family: serif;
}

#dividendo {
  height: 950px;
  width: 100%;
  background-color: #ffffffff;
}

#texto {
  height: 75px;
  width: 58%;
  margin-left: 208px;
  margin-top: -5=1px;
  position: absolute;
  background-color: #ffffffff;
}

p {
  font-size: 20px;
  margin-top: 89px;
  padding-bottom: 32px;
  background-color: transparent;
  color: #818181;
}

#lista {
  height: 300px;
  width: 27%;
  position: absolute;
  margin-left: 13rem;
  margin-top: 169px;
  background-color: #ffffffff;
}
li {
  background-color: transparent;
  color: #818181;
  font-size: 19px;
}

#icones {
  margin-top: 600px;
  height: 380px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
}

#links {
  height: 20px;
  width: 60%;
  position: absolute;
  left: 212px;
  top: 156px;
  background-color: transparent;
}

#links a{
    color: #777474;
    text-decoration: none;
    transition: .3s;
    font-size: 26px;
    font-weight: 500;
    height: 60px;
    margin-left: 55px;
    
   
}


#links a:hover {
    color: #0f4e8c;
}

#teste {
  right: 990px;
  position: absolute;
}

#teste2 {
  right: 655px;
  padding-right: 25px;
  position: absolute;
}

#teste3 {
  right: 379px;
  width: 139px;
  padding-left: 20px;
  position: absolute;
}

#teste4 {
  right: 49px;
  width: 15%;
  padding-left: 12px;
  position: absolute;
}



.icone-civel{
  height: 250px;
  width: 40%;
  background-image: url(/img/Civel-ico.PNG);
  background-repeat: no-repeat;
  margin-left: 182px;
}

.icone-contratual{
  height: 250px;
  width: 40%;
  background-image: url(/img/Contratual-ico.PNG);
  background-repeat: no-repeat;
  margin-left: 10px;
  margin-top: -3px;
}

.icone-imobiliario{
  height: 250px;
  width: 40%;
  background-image: url(/img/Imobiliário-ico.PNG);
  background-repeat: no-repeat;
  margin-right: 850px;
    cursor: pointer;
}

.icone-aa{
  height: 250px;
  width: 30%;
  background-image: url(/img/FamiliaESucessoes-ico.PNG);
  background-repeat: no-repeat;
  position: absolute;
  margin-left: 1053px;
}

</style>


<script>
export default {

}
</script>


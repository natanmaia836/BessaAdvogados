<template>
<div class="main-container">
  <div id="all-container">
    <div id="vertical">
      <h2 class="page-tittle">Equipe</h2>
      <p></p>
      </div>
    </div>
    <div class="barrinha-branca"></div>
</div>
  <div id="dividendo">
    <div class="barrinha-azul"></div>
    <div id="img-wrapper"></div>
    <div id="texto-lateral">
      <h2>Perfil da Sócia</h2>
      <h4>Danielle Tavares Magalhaes Bessa</h4>
      <div class="icones">
        <div class="email-icone"></div>
        <div class="facebook-icone"></div>
        <div class="instagram-icone"></div>
      </div>
      <p>O escritório é liderado pela profissional que o administra, gerenciando 
        a consultoria, o contencioso judicial e os procedimentos extrajudiciais
         relacionados ao Direito Imobiliário e Direito de Família e Sucessões.</p>
    </div>
    </div>
      <div id="textos">
      <div class="barrinha-azul2"></div>
      <div class="barrinha-azul3"></div>
      <div class="barrinha-azul4"></div>
      <div id="texto-mini">
        <h2>Parceiros e Colaboradores</h2>
        <p>O escritório se vale de uma ampla rede de advogados parceiros e
          consultores externos,com os quais desenvolve projetos especificos,
          conforme a complexidade de suas demandas.
        </p>
        </div>

      <div id="texto-mini2">
        <h2>Suporte</h2>
        <p>Os advogados do escritório e seus clientes são apoiados pelo Suporte
          adminitrativo-operacional de pessoas que trabalham com paixão e comprometimeto,
          com foco na visão do escritório,de forma sustentável.
        </p>
      </div>
      <div id="texto-mini3">
        <h2>Estágiarios</h2>
        <p>Os estágiarios do Bessa Advogados são cuidadosamente selecionados e treinados
          a fim de capacitá-los para o desenvolvimento de suas próprias carreiras e,como
          consequência,estarem plenamente aptos a excelência na prestação de serviços.
        </p>
      </div>
      </div>
        
    

</template>
<style scoped>
*{
  background-color: #ffffffff;
}

.main-container {
  margin: 0;
  height: 400px;
  width: 100%;
  background-color: #ffffffff;
}

#all-container {
height: 300px;
width: 53%;
margin-bottom: 81px;
background-repeat: no-repeat;
background-position: center center !important;
background-attachment: scroll;
background-image: url(/img/slidebessa4.jpg);
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
  height: 900px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #c5c5c5c5;

}

.barrinha-branca {
   background-color: #ffffff;
   bottom: 518px;
   content: "";
   height: 1px;
   left: 50%;
   margin-left: -160px;
   position: absolute;
   width: 98px;
   box-sizing: border-box;
}


.barrinha-azul {
   background-color: #0f4e8c;
   bottom: -577px;
   content: "";
   height: 7px;
   left: 50%;
   margin-left: -67px;
   position: absolute;
   width: 140px;
   box-sizing: border-box;
}

.barrinha-azul2 {
   background-color: #0f4e8c;
   bottom: -976px;
   content: "";
   height: 7px;
   left: 50%;
   margin-left: -67px;
   position: absolute;
   width: 140px;
   box-sizing: border-box;
}

.barrinha-azul3 {
   background-color: #0f4e8c;
   bottom: -1504px;
   content: "";
   height: 7px;
   left: 50%;
   margin-left: -67px;
   position: absolute;
   width: 140px;
   box-sizing: border-box;
}

.barrinha-azul4 {
   background-color: #0f4e8c;
   bottom: -2032px;
   content: "";
   height: 7px;
   left: 50%;
   margin-left: -67px;
   position: absolute;
   width: 140px;
   box-sizing: border-box;
}

h2 {
  font-size: 50px;
  margin-left: 28px;
}

h4 {
  margin-top: 30px;
  margin-right: 126px;
  font-size: 28px;
  color: #479fd3;
}

.icones {
  height:30px;
  width: 35%;
  display: flex;
  justify-content: space-between;
  margin-left: 18px;
  margin-top: 10px;
}

.email-icone {
 height: 60px;
 width: 50%;
 background-image: url(/img/Email2-ico.PNG);
 background-repeat: no-repeat;
 cursor: pointer;
}

.facebook-icone {
 height: 60px;
 width: 50%;
 background-image: url(/img/Facebook-ico.PNG);
 background-repeat: no-repeat;
 cursor: pointer
}

.instagram-icone {
 height: 60px;
 width: 50%;
 background-image: url(/img/instagram-ico.PNG);
 background-repeat: no-repeat;
 cursor: pointer;
}


p {
  font-size: 19px;
  margin-top: 39px;
  margin-left: 33px;
}

#img-wrapper {
  height: 590px;
  width: 25%;
  margin-left: 23rem;
  background-color: #0f4e8c;
  background-image: url(/img/Danielle.jpg);
  background-size: cover;
}

#texto-lateral {
  height: 200px;
  width: 30%;
  margin-left: 10rem;
}

#textos {
  height: 1565px;
  width: auto;
  text-align: left;
}
  #texto-mini,#texto-mini2,#texto-mini3 {
    border-bottom: 1px solid #c5c5c5c5;
  }

  #texto-mini {
    height: 400px;
    width: 100%;
        border-top: 1px solid #c5c5c5c5;
    
  }

   #texto-mini2 {
    height: 400px;
    width: 100%;
  }

   #texto-mini3 {
    height: 400px;
    width: 100%;
  }


#texto-mini h2{
 font-size: 45px;
 margin-left: 62rem;
 margin-top: 6rem;
 width: 20%;
 color: rgba(43, 42, 43, 0.795)
}


#texto-mini p{
  font-size: 22px;
  margin-left: 62rem;
  width: 25%;
  color: #838080;
  
}

#texto-mini2 h2{
 margin-top: 8rem;
 font-size: 45px;
 margin-left: 62rem;
 color: rgba(43, 42, 43, 0.795);
 
}

#texto-mini2 p{
  margin-top: 2rem;
  font-size: 22px;
  margin-left: 62rem;
  width: 25%;
  color: #838080;
}

#texto-mini3 h2{
 margin-top: 8rem;
 font-size: 45px;
 margin-left: 62rem;
 color: rgba(43, 42, 43, 0.795);
}
#texto-mini3 p{
  margin-top: 2rem;
  font-size: 22px;
  margin-left: 62rem;
  width: 25%;
  color: #838080;
}
</style>

<script>



export default {
  components: {

  }
}
</script>

<style>

</style>
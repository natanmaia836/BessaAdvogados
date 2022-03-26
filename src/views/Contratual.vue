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
    <h2 id="Titulo">Contratual</h2>
    <p>
    O Bessa Advogados assessora seus clientes em todas as suas tratativas contratuais, desde a formulação do melhor instrumento, até a confecção de parecer quanto ao documento entregue para análise, conferindo maior segurança jurídica às partes e mitigando riscos imediatos.
    </p>
    <div id="texto-direita">
        <h2 id="Titulo2">Áreas de atuação</h2>
        <div id="bolinha"></div>
        <div id="bolinha2"></div>
        <div id="bolinha3"></div>
    <div id="links">
    <router-link to="/Civel" id="teste2" li>Cível</router-link> 
    <router-link to="/Imobiliario" id="teste3">Imobilíario</router-link> 
    <router-link to="/Familia" id="teste4">Família e Sucessões</router-link> 
    </div> 
    </div>
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
  height: 425px;
  width: 100%;
  background-color: #ffffffff;
}

#texto {
  height: 105px;
  width: 39%;
  margin-left: 268px;
  display: flex;
  background-color: #ffffffff;
  position: absolute;
  margin-top: 150px;
}

#Titulo {
    color: #535050;
    position: absolute;
    margin-top: 12px;
    font-size: 2.5rem;
}

p {
  font-size: 19px;
  margin-top: 89px;
  padding-bottom: 32px;
  background-color: transparent;
  color: #818181;
}

#texto-direita {
  height: 105px;
  width: 50%;
  margin-left: 888px;
  display: table-column;
  background-color: #ffffffff;
  position: absolute;
  margin-top: 150px;
}

#Titulo2 {
    color: #535050;
    margin-top: -132px;
    font-size: 2.2rem;
    padding-bottom: 20px ;
    padding-left: 30px;
}

#bolinha {
    position: absolute;
    width: 8px;
    height: 8px;
    bottom: 160px;
    right: 330px;
    background-color: #260c81;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    z-index: 100;
}

#bolinha2 {
    position: absolute;
    width: 8px;
    height: 8px;
    bottom: 125px;
    right: 330px;
    background-color: #260c81;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    z-index: 100;
}

#bolinha3 {
    position: absolute;
    width: 8px;
    height: 8px;
    bottom: 88px;
    right: 330px;
    background-color: #260c81;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    z-index: 100;
}

#links {
  height: 20px;
  width: 60%;
  display: flex;
  flex-direction: column;
  left: 212px;
  top: 156px;
  background-color: transparent;
}

#links a{
    padding-bottom: 15px;
    color: #777474;
    text-decoration: none;
    transition: .5s;
    font-size: 19px;
    font-weight: 500;
    height: 60px;
    margin-left: 55px;
    
   
}


#links a:hover {
    color: #0f4e8c;
}
</style>>

<script>

</script>

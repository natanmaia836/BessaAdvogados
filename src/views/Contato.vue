<template>
<div class="main-container">
  <div id="all-container">
    <div id="vertical">
      <h2 class="page-tittle">Contato</h2>
      <p></p>
      </div>
    <div class="barrinha-branca"></div>
    </div>
</div>
  <div id="dividendo">
    <div id="img-wrapper"></div>
      <div id="formulario-div">
    <div id="formula">
    <form method="post" action="">
      <label>Nome</label>
      <p>
        <input type="text" name="name" class="comm-field">
      </p>
      <label>Email</label>
      <p>
        <input type="text" name="email" class="comm-field">
      </p>
      <label>Assunto</label>
      <p>
        <input type="text" name="subject" class="comm-field">
      </p>
      <label>Mensagem</label>
      <p>
        <textarea name="message" id="msg" rows="7"></textarea>
      </p>
      <label>Voce é humano? O ano atual + 3 = ?</label>
      <p><input name="antispam" id="antispam" class="comm-field"></p>
      <p class="btn">
        <input type="submit" value="Enviar mensagem" id="submit">
      </p>
    </form>
    </div>
    <div id="formulario-direita">
      <div class="texto-direita">
      <h2> Fale conosco</h2>
      <p id="socorro">Para entrar em contato conosco utilize os canais abaixo:</p>
      <div class="img-face"></div>
      <p id="aloo"><b>Endereco:</b>Rua Boa Vista,254 | 18 andar | conj. 1806</p>
      <p id="azul">Telefone: +55 11 95655 5556 (WhastApp)</p>
      <p id="azul">Email: daniellebessa@bessaadvogados.com.br</p>
      </div>
      <div class="img-localizacao">
      </div>
    </div>

  </div>
  </div>

</template>
<style scoped>
*{
  background-color: #ffffffff;
}

.barrinha-branca {
   background-color: #ffffff;
   bottom: 524px;
   content: "";
   height: 1px;
   left: 50%;
   margin-left: -176px;
   position: absolute;
   width: 98px;
   box-sizing: border-box;
}


.main-container {
  margin: 0;
  height: 300px;
  width: 100%;
  color: #ffffffff;
  background-color: #ffffffff;
}

#all-container {
height: 300px;
width: 53%;
margin-bottom: 81px;
background-repeat: no-repeat;
background-position: center top !important;
background-attachment: scroll;
background-image: url(/img/contato.jpg);
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
  height: 980px;
  width: 100%;
  background-color: #ffffffff;
}

#formula label{
  font-size: 20px;
}

.comm-field {
  border: 1px solid #e5e5e5;
  background: #f2f2f2;
  color: #707070;
  width: 100%;
  padding: 18px;
  margin-top: 18px;
  font-size: 17px;
}

textarea {
  height: 200px;
  width: 100%;
  border: 1px solid #e5e5e5;
  background: #f2f2f2;
  color: #707070;
  padding: 18px;
  margin-top: 18px;
  font-size: 20px;
}

#submit {
  border: 3px solid #0f4e8c;
  color: #0f4e8c;
  padding: 13px;
  margin-top: 25px;
  text-align: center;
  width: 100%;
  font-weight: 700;
  background: none;
  cursor: pointer;
  font-size: 19px;
  transition: .3s;
}

#submit:hover {
  background-color: #0f4e8c;
  color: #ffffffff;
}


#formulario-div {
  height: 600px;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

#formula {
  height: 500px;
  width: 32%;
  margin-left: 270px;
}

#formulario-direita{
  height: 300px;
  width: 31%;
  margin-top: -192px ;
  margin-right: 305px;
}

h2 {
  padding-bottom: 20px;
  font-size: 33px;
}

#socorro {
  font-size: 19px;
  padding-bottom: 66px;
  color: #646464;
}

.img-face {
  position: absolute;
  height: 45px;
  width: 2%;
  background-image: url(/img/FdeFacebook-ico.PNG);
  background-repeat: no-repeat;
  margin-top: -55px;
  cursor: pointer;
}

#aloo {
font-size: 20px;
padding-bottom: 17px;
color: #646464;;
}

b {
  font-size: 20px;
  color: #154286;
}

#azul {
  font-size: 20px;
  padding-bottom: 17px;
  color: #154286;
}

.img-localizacao {
  margin-left: -16px;
  height: 350px;
  width: 75%;
  background-image: url(/img/Contato-imagem.PNG);
  background-repeat: no-repeat;
}




</style>

<script>
export default {

}
</script>


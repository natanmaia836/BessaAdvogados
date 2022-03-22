<template>
<div class="contato-form">
<div>
  <h1>Entre em contato conosco</h1> 
</div>
<div id="formula">
    <form method="post" action="">
      
      <p>
        <input type="text" placeholder="Nome" name="name" class="comm-field">
      </p>
      <p>
        <input type="text" placeholder="Email" name="email" class="comm-field">
      </p>
      <p>
        <input type="text" placeholder="Assunto" name="subject" class="comm-field">
      </p>
      <p><input name="antispam"  placeholder="Você é humano? O ano atual + 3 = ?" id="antispam" class="comm-field"></p>
      <div class="orango-tang">
      <p>
        <textarea name="message" placeholder="Escreva sua mensagem" id="msg" rows="7"></textarea>
      </p>
        <p class="btn">
        <input type="submit" value="Enviar" id="submit">
        </p>
      </div>
    </form>
    </div>
  </div>

</template>

<script>
export default {
name:"Formcontato"
}
</script>

<style scoped>
*{
  background-color: #242323;
}

.contato-form {
  margin: 0;
  width: 100%;
  height: 300px;
  position: absolute;
  margin-top: 100px;
  background-color: #242323
}

h1 {
  position: absolute;
  background-color: transparent;
  color: #ffffffff;
  margin: 0px 0px 0px 510px;
  margin-top: 7rem;
  font-size: 4.7rem;
  font-family: serif;
  font-weight: 520;
  line-height: 1.2;
}

#formula {
  display: flex;
  width: 70%;
  height: 200px;
  margin-left: 27rem;
  margin-top: 322px;
}

.orango-tang {
  width: 70%;
  margin-left: 32rem;
  margin-top: -365px;
}
.comm-field {
  border: 1px solid #4e4d4d;
  background: #4e4d4d;
  color: #ffffff;
  width: 60%;
  padding: 21px;
  margin-top: 26px;
  font-size: 20px;
}

textarea {
  height: 200px;
  width: 84%;
  border: 1px solid #4e4d4d;
  background: #4e4d4d;
  color: #707070;
  padding: 18px;
  margin-top: 18px;
  font-size: 20px;
}

::placeholder {
  color: #707070;
}

#submit {
  border: 3px solid #0f4e8c;
  color: #0f4e8c;
  padding: 21px;
  margin-top: 25px;
  text-align: center;
  width: 84.2%;
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


</style>


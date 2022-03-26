<template>
  <div id="nav">
    <router-link to="/" id="logo-url">
        <img :src="logo" :alt="alt" id="logo">
    </router-link>
    <div id="links"> 
    <router-link to="/">Home</router-link> 
    <router-link to="/OEscritorio">O Escritório</router-link> 
    <router-link to="/Equipe">Equipe</router-link> 
    <router-link to="/AreasDeAtuacao">Áreas de Atuação</router-link> 
    <router-link to="/Contato">Contato</router-link> 
  </div>
   <div class="header-contact">
       <div class="header-phone">
           <div class="icone">
           </div>
           <a id="socorro" href="https://api.whatsapp.com/send?phone=5511956555556">55 11 95655 5556 (WhatsApp)</a>
       </div>
       <div class="header-email">
           <div class="icone-email"></div>
            <a id="socorro" href="mailto:daniellebessa@bessaadvogados.com.br">daniellebessa@bessaadvogados.com.br</a>
       </div>
   </div>
    </div>
    <div class="float">
        <a class="anarc" href="https://api.whatsapp.com/send?phone=5511956555556">
        <img src="/img/whats-app.png" class="my-float">
        </a>
    </div>
</template>
<script>
export default {
    name: "Navbar",
    props: ["logo","alt"]
}
</script>
<style scoped>


#nav {
    background: #f1f1f1f1;
    color: #999999;
    width: 1145px;
    height: 242px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    z-index: 100;
}

.float {
    position: fixed;
    width: 70px;
    height: 70px;
    bottom: 20px;
    right: 20px;
    background-color: #25d366;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    z-index: 100;
}

.anarc {
    text-decoration: none;
    background: 0 0;
}

.my-float {
    margin: 14px;
    width: 60%;
    border: 0;
    vertical-align: middle;
    background: transparent;
}


#logo-url {
    margin-top: 22px;
    margin-left: -23px;
    float: left;
    position: relative;
}

#logo{
    width: 130%;
    margin-left: -46px;
}

.header-contact {
    float: right;
    margin-top: 49px;
    margin-right: -48px;
}

.header-phone {
    margin-bottom: 20px;
} 

.header-email {
 position: relative;
}


#links {
    margin: 170px;
    margin-top: 192px;
    margin-left: -519px;
    display: inline-block;
    padding-bottom: 16px;
    margin-right: 5px;
    z-index: 100;
}

#links a{
    color: #999999;
    text-decoration: none;
    transition: .5s;
    font-size: 20px;
    padding: 8px 13px;
   
}

#links a:hover {
    color: #0f4e8c;
    border: 1px solid #0f4e8c;
}

#socorro {
    text-decoration: none;
    color: #0f4e8c;
    background: 0 0;
    font-size: 22px;
}

#socorro:hover {
 color: #428bca;
 text-decoration: none;
}

.icone {
    background-repeat: no-repeat;
    background-image: url(/img/telefone-ico.PNG);
    width: 55px;
    height: 50px;
    margin-left: -72px ;
    margin-top: -10px;
    position: absolute;
}

.icone-email {
        background-repeat: no-repeat;
    background-image: url(/img/Email-ico.PNG);
    width: 55px;
    height: 50px;
    margin-left: -65px ;
    margin-top: -px;
    position: absolute;
}

</style>
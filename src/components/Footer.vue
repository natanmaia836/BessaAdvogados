<template>
<footer id="footer">
<Formcontato/>
       <div class="paragrafo">
       <p>© 2020 Bessa Advogados. | Todos direitos reservados. Desenvolvido por Teles Consultoria - http://www.tcwork.com.br</p>
       </div>
</footer>    
</template>

<script>
import Formcontato from "../components/Formcontato.vue"

export default {
    name: "Footer",
    components: {
        Formcontato,
}
}
</script>

<style scoped>
#footer {
    position: relative;
    height: 950px;
    width: 100%;
    bottom: 0;
    background-color:#242323;
    color: #777777;
}

.paragrafo{
align-items: center;
justify-content: center;
height: 12px;
width: 800px;
margin-top: 918px;
margin-left: 540px;
background-color: transparent;
position:absolute
}

p{
    background-color: transparent;
}
</style>
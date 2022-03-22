<template>
    <div id="main-banner">
        <div class="flexs">
        <ul class="flex-slider-direction">
        <li>
            <a class="flex-prev"></a>
        </li>
        <li>
            <a class="flex-next"></a>
        </li>
        </ul>
        </div>
        <h1>Solidez</h1>
    </div>
</template>

<script>
export default {
    name: "Banner"
}
</script>

<style scoped>
.flex-slider-direction{
    list-style: none;
    margin: 0;
    padding: 0;
}

.flexs {
    margin: 0;
    padding: 0;
}

.flex-prev {
    background: url('/img/flexslider-arrows.png')
    no-repeat scroll 0 0 transparent;
    cursor: pointer;
    display: block;
    height: 76px;
    position: absolute;
    text-indent: -9999px;
    top: 50%;
    width: 39px;
    z-index: 10;
    border: none;
    margin: -20px 0 0;
    opacity: 0.5;
    background-position: 0 0;
    left: 15px;
    top: 60%;
    color: #222;
    transition: .4s;
}

.flex-next {
    background: url('/img/flexslider-arrows.png')
    no-repeat scroll 0 0 transparent;
    cursor: pointer;
    display: block;
    height: 76px;
    position: absolute;
    text-indent: -9999px;
    top: 60%;
    width: 39px;
    z-index: 10;
    border: none;
    margin: -20px 0 0;
    opacity: 0.5;
    left: 97%;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    transition: .4s;
}

.flex-prev:hover {
   opacity: 1;
}
.flex-next:hover {
   opacity: 1;
}


#main-banner {
 background-image: url('/img/O-escritório-3.jpg');
 background-origin: 0 -250px;
 background-size: cover;
 height: 700px;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
}

#main-banner h1 {
    color: #ffffff;
    text-align: center;
    font-size: 82px;
    margin-bottom: 185px;
    margin-left: 9px;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background-color: transparent;
}
</style>


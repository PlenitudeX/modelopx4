<template>
    <section id="banner" class="banner">
        <div :style="{color}" class="fundo">
            <h1>Bem-vindo à {{ title }}</h1>
            <p>Na {{ title }}, amamos animais tanto quanto você. Nossa loja é o paraíso para todos os amantes de
                animais de estimação, onde você encontrará tudo o que precisa para cuidar e mimar seu companheiro peludo.
            </p>
            <a href="#contato">
                <button :style="{background: ButtonBackground, color: ButtonColor}" class="product-button">Saiba mais</button>
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
import Tema from '../../tema.json'


const props = defineProps({
    tema: String,
    title: String
})

const style = props.tema || 0

const color = Tema[style].$schema.Primary
const ButtonBackground = Tema[style].$schema.Secondary
const ButtonColor = Tema[style].$schema.White

</script>

<style scoped>
.banner {
    background-image: url('https://picsum.photos/2000/1000');
    text-align: center;
    height: 70vh;
    display: flex;
}

.banner .fundo {
    background-color: rgba(131, 68, 4, 0.27);
    height: 100%;
    text-align: center;
    padding: 100px 20px;
}

.banner h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2rem;
}

.banner p {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
}

@media (max-width: 768px) {


    .banner .fundo {
        padding: 50px 20px;
    }

    .banner h1 {
        font-size: 2rem;
    }

    .banner p {
        font-size: 1.2rem;
    }
}

@media (max-width: 576px) {


    .banner .fundo {
        padding: 20px 20px;
    }

    .banner h1 {
        font-size: 1.5rem;
    }

    .banner p {
        font-size: 1rem;
    }
}

@media (max-width: 400px) {
    .banner h1 {
        font-size: 1.2rem;
    }

    .banner p {
        font-size: 0.8rem;
    }
}
</style>

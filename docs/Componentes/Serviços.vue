<template>
    <section :style="{background: body}" id="services" class="services">
        <h1 :style="{color: Primary}">Serviços</h1>
        <div class="services-list">
            <div :style="{background: white}" v-for="service in services" :key="service.id"  class="service">
                <img :src="service.img" :alt="service.name" />
                <h2 :style="{color: text}">{{ service.name }}</h2>
                <p>{{ service.description }}</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Tema from '../../tema.json'

const props = defineProps<{
    tema: string
}>()

const style = props.tema || 0

const body = Tema[style].$schema.Body
const Primary = Tema[style].$schema.Primary
const white = Tema[style].$schema.White
const text = Tema[style].$schema.Secondary

const services = [
    {
        id: 1,
        name: 'Adestrador',
        description: 'Adestramos seu pet para que ele se torne um animal mais dócil e amigável. Contamos com profissionais experientes e capacitados para atender seu pet da melhor forma possível e com o melhor preço do mercado. Venha conhecer nosso espaço e nossos profissionais.',
        img: 'https://picsum.photos/2000/1000'
    },
    {
        id: 2,
        name: 'Banho e Tosa',
        description: 'Nosso serviço de banho e tosa transforma seu pet em uma verdadeira estrela! Nossos profissionais dedicados cuidam da higiene, beleza e bem-estar do seu companheiro, deixando-o limpo, cheiroso e com um visual incrível. Seu pet merece esse mimo!',
        img: 'https://picsum.photos/2000/1000'
    },
    {
        id: 3,
        name: 'Spa Day',
        description: 'Proporcione ao seu pet um dia de relaxamento e luxo com o nosso serviço de Spa Day. Mime seu amigo peludo com banho relaxante, massagem suave, tratamento facial e unhas perfeitas. Um dia de mimos e bem-estar para seu pet.',
        img: 'https://picsum.photos/2000/1000'
    }
]
</script>

<style scoped>
.services {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 5px;
}

.services-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

h1 {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
}

.service {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin: 1rem;
    box-shadow: 1px 1px 10px #ccc;
    padding: 1rem;
    border-radius: 10px;
}

.service img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
}

.service h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1rem 0 0;
}

.service p {
    font-size: 1rem;
    font-weight: 400;
    margin: 1rem 0 0;
    text-align: justify;
}
</style>

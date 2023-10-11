<template>
    <div>
        <!-- BANNER -->
        <Banner />
        <!-- PRODUTOS EM DESTAQUE -->
        <Destaques />
        <!-- CONHEÇA NOSSA EQUIPE -->
        <section id="equipe">
          <h1>Conheça quem cuida do seu pet!</h1>
          <VPTeamMembers size="small" :members="members" />
        </section>
        <!-- SERVIÇOS -->
        <Servicos />
        <!-- CONTATO -->
        <Contato />
    </div>
    <!-- FOOTER -->
    <Footer />
</template>

<script setup lang="ts">
import Banner from "./Componentes/Banner.vue";
import Destaques from "./Componentes/Destaques.vue";
import Servicos from "./Componentes/Serviços.vue";
import Contato from "./Componentes/Contato.vue";
import Footer from "./Componentes/Footer.vue";
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Tosador',
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Atendente',
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Aparador',
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Veterinário',
  },
]
</script>

<style scoped>
h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0 0;
    text-align: center;
}

</style>

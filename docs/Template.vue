<template>
    <div>
        <!-- BANNER -->
        <Banner :tema="Tema" :title="titulo"/>
        <!-- PRODUTOS EM DESTAQUE -->
        <Destaques :tema="Tema" />
        <!-- CONHEÇA NOSSA EQUIPE -->
        <section id="equipe">
          <h1>Conheça quem cuida do seu pet!</h1>
          <VPTeamMembers size="small" :members="members" :tema="Tema" />
        </section>
        <!-- SERVIÇOS -->
        <Servicos :tema="Tema" />
        <!-- CONTATO -->
        <Contato :tema="Tema" />
    </div>
    <!-- FOOTER -->
    <Footer :tema="Tema" />
</template>

<script setup lang="ts">
import Banner from "./Componentes/Banner.vue";
import Destaques from "./Componentes/Destaques.vue";
import Servicos from "./Componentes/Serviços.vue";
import Contato from "./Componentes/Contato.vue";
import Footer from "./Componentes/Footer.vue";
import { VPTeamMembers } from 'vitepress/theme'
import { mongoFind } from './mongo.js'
import { onMounted, ref } from 'vue'

const Tema = window.location.search.slice(-1)

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

const apiKey = 'ePYExNrjYIelZMMPOxTxqaB42saDaaqizfGIoX8nv0koqkQRlb81sOZNz2nLRh6I';
const body = {
  "collection": "PetShop",
  "database": "Modelospx",
  "dataSource": "ClusterPx",
  "projection": { "_id": false },
};

const titulo = ref('')

async function buscarDados() {
  try {
    const dados = await mongoFind(apiKey, body);
    titulo.value = dados[0].titulo;
    return titulo.value
  } catch (erro) {
    console.error('Erro ao buscar dados:', erro);
  }
}

onMounted(() => {
  buscarDados()
})

</script>

<style scoped>
h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0 0;
    text-align: center;
}

</style>

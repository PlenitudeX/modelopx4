<template>
    <div>
        <!-- BANNER -->
        <Banner :tema="Tema" />
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
import { onMounted, ref } from 'vue'
import axios from 'axios'

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


const info = ref('');
const apiKey = 'ePYExNrjYIelZMMPOxTxqaB42saDaaqizfGIoX8nv0koqkQRlb81sOZNz2nLRh6I';
const body = {
  "collection": "Afiliado",
  "database": "Executiva",
  "dataSource": "ClusterPx",
  "projection": { "_id": false },
};

const makePostRequest = async () => {
  try {
    const response = await axios.post(
      'https://sa-east-1.aws.data.mongodb-api.com/app/data-cujkc/endpoint/data/v1/action/find',
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );
    console.log(response.data.documents);


    // Lide com a resposta da requisição
    info.value = response.data.documents
    return info.value
  } catch (error) {
    info.value = 'Sem dados'
  }
};

onMounted(() => {
  makePostRequest()
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

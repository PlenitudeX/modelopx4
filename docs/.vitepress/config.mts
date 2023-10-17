import { defineConfig } from 'vitepress'
import axios from 'axios';

const makePostRequest = async () => {
  try {
    const body: any = {
      "collection": "PetShop",
  "database": "Modelospx",
  "dataSource": "ClusterPx",
  "projection": { "_id": false },
    };
    const apiKey: string = 'ePYExNrjYIelZMMPOxTxqaB42saDaaqizfGIoX8nv0koqkQRlb81sOZNz2nLRh6I';

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

    // Lide com a resposta da requisição
    const info: string = response.data.documents;
    return info;
  } catch (error) {
    const info: string = "Erro ao buscar informações";
    return info;
  }
};

const teste =  await makePostRequest();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: teste[0].titulo || "Pets & cia",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '#banner' },
      { text: 'Destaque', link: '#destaque' },
      { text: 'Equipe', link: '#equipe' },
      { text: 'Serviços', link: '#services' },
      { text: 'Contato', link: '#contato' },
    ],
  }
})

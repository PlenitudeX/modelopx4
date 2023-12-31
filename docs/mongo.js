import axios from "axios";

const apiKey = 'ePYExNrjYIelZMMPOxTxqaB42saDaaqizfGIoX8nv0koqkQRlb81sOZNz2nLRh6I';
const body = {
  "collection": "PetShop",
  "database": "Modelospx",
  "dataSource": "ClusterPx",
  "projection": { "_id": false },
};

export async function mongoFind() {
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

          return response.data.documents;

    } catch (error) {
        return error;
    }

}


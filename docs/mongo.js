import axios from "axios";

export async function mongoFind(apiKey, body) {
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


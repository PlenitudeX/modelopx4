<template>
    <section id="destaque">
        <h1>Nossos Produtos Destaques</h1>
        <div class="products">
            <div class="product" v-for="product in products" :key="product.id">
                <img :src="product.image" alt="Imagem do Produto">
                <h2>{{ product.name }}</h2>
                <p>{{ product.description }}</p>
                <p>Preço: R$ {{ product.price }}</p>
                <button class="product-button">Comprar</button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const products = [
    {
        id: 1,
        name: 'Ração Premium para Cães',
        description: 'Ração de alta qualidade para cães adultos.',
        price: 39.99,
        image: 'https://picsum.photos/2000/1000'
    },
    {
        id: 2,
        name: 'Coleira de Couro',
        description: 'Coleira resistente e elegante para seu cão.',
        price: 19.99,
        image: 'https://picsum.photos/2000/1000'
    },
    {
        id: 3,
        name: 'Brinquedo Interativo para Gatos',
        description: 'Mantenha seu gato entretido por horas.',
        price: 12.99,
        image: "https://picsum.photos/2000/1000"
    }
]
</script>

<style scoped>

h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0 0;
    text-align: center;
}

.products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.product {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.product img {
    width: 100%;
    max-width: 300px;
    border-radius: 5px;
}

.product h2 {
    font-size: 1.3rem;
    font-weight: 700;
    margin: 1rem 0;
}

.product p {
    font-size: 1rem;
    font-weight: 400;
    margin: 0.5rem 0;
}

@media (min-width: 768px) {
    .products {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .product {
        width: 300px;
    }

    .product img {
        width: 100%;
        max-width: 300px;
        border-radius: 5px;
    }

    .product h2 {
        font-size: 1.3rem;
        font-weight: 700;
        margin: 1rem 0;
    }

    .product p {
        font-size: 1rem;
        font-weight: 400;
        margin: 0.5rem 0;
    }

    .product-button {
        background-color: #3498db;
        color: #fff;
        border: none;
        padding: 10px 20px;
        font-size: 1.2rem;
        font-weight: 700;
        border-radius: 5px;
        cursor: pointer;
    }
}
</style>

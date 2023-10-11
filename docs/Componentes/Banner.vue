<template>
    <section id="banner" class="banner">
        <div class="fundo">
            <h1>Bem-vindo à PetShop Amigo Fiel</h1>
            <p>Na PetShop Amigo Fiel, amamos animais tanto quanto você. Nossa loja é o paraíso para todos os amantes de
                animais de estimação, onde você encontrará tudo o que precisa para cuidar e mimar seu companheiro peludo.
            </p>
            <a href="#contato">
                <button class="product-button">Saiba mais</button>
            </a>
        </div>
    </section>
</template>

<style scoped>
.banner {
    background-image: url('https://picsum.photos/2000/1000');
    text-align: center;
    height: 70vh;
    display: flex;
}

.banner .fundo {
    background-color: rgba(131, 68, 4, 0.27);
    color: #3498db;
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
    .banner {
        height: 50vh;
    }

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
    .banner {
        height: 40vh;
    }

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
    .banner {
        height: 30vh;
    }

    .banner .fundo {
        padding: 20px 20px;
    }

    .banner h1 {
        font-size: 1.2rem;
    }

    .banner p {
        font-size: 0.8rem;
    }
}
</style>

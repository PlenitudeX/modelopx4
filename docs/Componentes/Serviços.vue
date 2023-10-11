<template>
    <section class="services">
        <h1>Serviços</h1>
        <div class="services-list">
            <div class="service">
                <img src="https://picsum.photos/2000/1000" alt="Serviço 1" />
                <h2>Adesrador</h2>
                <p>
                    Adestramos seu pet para que ele se torne um animal mais dócil e amigável.
                    Contamos com profissionais experientes e capacitados para atender seu pet da melhor forma possível e com o melhor preço do mercado.
                    Venha conhecer nosso espaço e nossos profissionais.
                </p>
            </div>
            <div class="service">
                <img src="https://picsum.photos/2000/1000" alt="Serviço 2" />
                <h2>Banho e Tosa</h2>
                <p>
                    Nosso serviço de banho e tosa transforma seu pet em uma verdadeira estrela! Nossos profissionais dedicados cuidam da higiene, beleza e bem-estar do seu companheiro, deixando-o limpo, cheiroso e com um visual incrível. Seu pet merece esse mimo!
                </p>
            </div>
            <div class="service">
                <img src="https://picsum.photos/2000/1000" alt="Serviço 3" />
                <h2>Spa Day</h2>
                <p>
                    Proporcione ao seu pet um dia de relaxamento e luxo com o nosso serviço de Spa Day. Mime seu amigo peludo com banho relaxante, massagem suave, tratamento facial e unhas perfeitas. Um dia de mimos e bem-estar para seu pet.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.services {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.services-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.service {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin: 1rem;
    /* border: 1px solid black; */
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

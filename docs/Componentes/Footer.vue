<template>
    <footer :style="{background}">
    <div class="container">
        <div class="footer-content">
            <div class="footer-logo">
                <h3>Pet & Cia</h3>
                <p>O seu melhor amigo merece o melhor cuidado.</p>
            </div>
            <div class="footer-contact">
                <h3>Contato</h3>
                <ul>
                    <li><strong>Endereço:</strong> Rua das Petúnias, 1234</li>
                    <li><strong>Telefone:</strong> (55) 5555-5555</li>
                    <li><strong>Email:</strong> info@petecia.com</li>
                </ul>
            </div>
            <div class="footer-social">
                <h3>Redes Sociais</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
</template>

<script setup lang="ts">
import Tema from '../../tema.json'

const props = defineProps<{
    tema: string
}>()

const style = props.tema

const background = Tema[style].$schema.Footer

</script>

<style scoped>
footer {
    background-color: #3498db;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.footer-logo {
    flex: 1 1 300px;
    margin: 0 1rem;
}

.footer-logo h3, .footer-contact h3, .footer-social h3 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 1rem;
}

.footer-logo p {
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
}

.footer-contact {
    flex: 1 1 300px;
    margin: 0 1rem;
}

.footer-contact ul, .footer-social ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-contact li, .footer-social li {
    margin: 0.5rem 0;
}

.footer-social {
    flex: 1 1 300px;
    margin: 0 1rem;
}

.footer-social a {
    color: #fff;
    text-decoration: none;
}

.footer-social a:hover {
    text-decoration: underline;
}

.footer-logo, .footer-contact, .footer-social {
    padding: 15px 0
}

</style>

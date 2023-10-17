<template>
    <section id="contato" class="section">
    <div class="container">
        <div class="contact-form">
            <h1 :style="{color: title}">Envie-nos uma Mensagem</h1>
            <form>
                <div class="form-group">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" rows="4" required></textarea>
                </div>
                <button :style="{background: backButton, color: colorButton}" class="product-button" type="submit">Enviar Mensagem</button>
            </form>
        </div>
    </div>
</section>
</template>

<script setup lang="ts">
import Tema from '../../tema.json'

const props = defineProps<{
    tema: string
}>()

const style = props.tema || 0

const title = Tema[style].$schema.Primary
const backButton = Tema[style].$schema.Secondary
const colorButton = Tema[style].$schema.White
</script>

<style scoped>
.contact-form {
    text-align: center;
    padding: 20px 10px;
    border-radius: 5px;
    max-width: 50rem;
    margin: auto;
}

.form-group {
    margin-bottom: 15px;
}
input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

</style>

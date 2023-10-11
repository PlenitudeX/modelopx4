<template>
    <section id="contato" class="section">
    <div class="container">
        <div class="contact-info">
            <h2 class="section-title">Entre em Contato</h2>
            <p>Tire todas as suas dúvidas e marque uma visita ao nosso petshop.</p>
            <ul>
                <li><strong>Endereço:</strong> Rua das Petúnias, 1234</li>
                <li><strong>Telefone:</strong> (55) 5555-5555</li>
                <li><strong>Email:</strong> info@petecia.com</li>
            </ul>
        </div>
        <div class="contact-form">
            <h3>Envie-nos uma Mensagem</h3>
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
                <button class="btn-primary" type="submit">Enviar Mensagem</button>
            </form>
        </div>
    </div>
</section>
</template>

<style scoped>
.section {
    background-color: #f9f9f9;
    padding: 60px 0 0;
    text-align: center;
}

.section-title {
    color: #3498db;
}

.contact-info {
    margin: 0 auto;
    max-width: 600px;
}

.contact-info p {
    margin-bottom: 30px;
}

.contact-info ul {
    list-style: none;
    padding: 0;
}

.contact-form {
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

/* Outros estilos (estilize conforme necessário) */
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

.btn-primary {
    background-color: #3498db;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.btn-primary:hover {
    background-color: #1e87c3;
}
</style>

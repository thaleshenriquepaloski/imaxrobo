/* Reset de estilos padrão */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Estilos gerais */
body {
    font-family: Arial, sans-serif;
    background-color: #30B9E6; /* Cor de fundo para o corpo */
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px;
}

.navbar {
    background-color: #444;
    text-align: center;
}

.navlist {
    list-style-type: none;
    padding: 0;
}

.navlist li {
    display: inline;
    padding: 10px;
}

.navlink {
    color: #fff;
    text-decoration: none;
}

.navlink:hover {
    text-decoration: underline;
}

.content {
    padding: 20px;
    background-color: #fff; /* Alterando a cor do fundo do main */
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adicionando sombra */
}

.section {
    margin-bottom: 40px;
}

.section-title {
    font-size: 32px;
    margin-bottom: 20px;
}

.section-content {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
}

.section-image {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
}

.promotion-fieldset {
    border: 2px solid #444;
    border-radius: 10px;
    padding: 20px;
    position: relative;
}

.promotion-fieldset:hover {
    animation: shake 0.5s;
}

@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(5px); }
    50% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
    100% { transform: translateX(0); }
}

.promotion-item {
    text-align: center;
}

.promotion-image {
    max-width: 80%; /* Reduzindo o tamanho das imagens */
    height: auto;
    margin-bottom: 10px;
}

.promotion-title {
    font-size: 24px;
    margin-bottom: 15px; /* Aumentando a margem inferior */
}

.promotion-price {
    font-size: 20px;
    color: #ff6600;
    margin-bottom: 10px;
}

.promotion-info {
    font-size: 18px;
    color: #666;
    margin-bottom: 20px;
}

.promotion-link {
    text-decoration: none;
}

.promotion-guarantee {
    font-size: 20px;
    margin-bottom: 10px;
}

.promotion-satisfaction {
    font-size: 18px;
    color: #666;
    margin-bottom: 20px;
}

.footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px;
}

/* Media queries para telas menores */
@media only screen and (max-width: 768px) {
    .container {
        padding: 0 10px;
    }
    .section-title {
        font-size: 28px;
    }
    .section-content {
        font-size: 16px;
    }
    .promotion-title {
        font-size: 20px;
    }
    .promotion-price {
        font-size: 18px;
    }
    .promotion-info {
        font-size: 16px;
    }
    .promotion-guarantee {
        font-size: 18px;
    }
    .promotion-satisfaction {
        font-size: 16px;
    }
}

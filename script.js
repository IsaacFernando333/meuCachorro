async function pegaFraseKanye() {
    const frase = await fetch("https://api.kanye.rest");
    const texto = await frase.json();
    const h1 = document.querySelector('.kanye');
    const h2 = document.querySelector('.frase');
    h2.innerText = `"${texto.quote}"`;
    document.body.appendChild(h1);
}

pegaFraseKanye();
$(document).ready(function () {
    const apiUrl = "https://dog.ceo/api/breeds/image/random/10";

function p_img() {
    $.getJSON(apiUrl, function (data) {
        if (data.status === "success") {
            const images = data.message;
            const carouselInner = $("#carr_cao");
            carouselInner.empty(); 

            images.forEach((image, index) => {
                const isActive = index === 0 ? "active" : ""; 
                const carouselItem = `
                    <div class="carousel-item ${isActive}">
                        <img src="${image}" alt="Imagem de cachorro">
                    </div>
                `;
                carouselInner.append(carouselItem);
            });
            
        } else {
            alert("Erro ao carregar imagens.");
        }
    }).fail(function () {
        alert("Erro ao conectar à API.");
    });
}

$("#puxar_img").click(p_img);

});
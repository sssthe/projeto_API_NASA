        const title = document.querySelector("#texto");
        const img = document.querySelector("#imagem");
        const btn = document.querySelector("#buscar");
        btn.addEventListener("click", gerarImagem);

        function gerarImagem() {
            const input = document.querySelector("#data").value;

            fetch("https://api.nasa.gov/planetary/apod?api_key=InpB8aIHqMfdrATMTI1HqLbBUXuMfXoYldQuoEmm&date=" + input)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.media_type === "image") {
                        img.src = data.hdurl;
                        title.textContent = data.title;
                    } else {
                        console.error("O recurso não é uma imagem.");
                    }
                })
                .catch(error => {
                    console.error("Ocorreu um erro ao buscar a imagem:", error);
                });
        }





const btnl = document.getElementById("btn");
const animeCont = document.querySelector(".anime_container");

const animeImg = document.querySelector(".anime_img");
const animeNameEl = document.querySelector(".anime_name");

btnl.addEventListener("click", async function(){
    try {
        btnl.disabled = true;
        btnl.innerText = "Loading!!!!!";
        animeNameEl.innerText = "Wait a Sec!!!"
        const response = await fetch("https://api.catboys.com/img")
        const data = await response.json();
        btnl.disabled = false;
        btnl.innerText = "Get Anime"
        animeCont.style.display = "block";
        animeImg.src = data.url;
        animeNameEl.innerHTML = data.artist;
    } catch (error) {
        console.log(error);
        btnl.disabled = false;
        btnl.innerText = "Get Anime";
        animeNameEl.innerText = "Error Occured Plese try again";
    }
})
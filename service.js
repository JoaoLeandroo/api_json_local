const api = "./sabor.json";
const box = document.querySelector(".box")

fetch(api)
  .then((resp) => resp.json())
  .then((json) => {
    const burguer = json.categories[0].burguers;
    for (let i = 0; i < burguer.length; i++) {
      console.log(burguer[i].urlImg);
      const img = document.createElement("img")
      img.src = burguer[i].urlImg
      img.alt = burguer[i].name

      box.appendChild(img)
    }
    
  });

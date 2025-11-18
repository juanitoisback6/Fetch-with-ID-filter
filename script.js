

const loader = document.getElementById("loading");
const cont = document.getElementById("cont");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

loader.classList.add("hide");


async function getD () {

          try {

          loader.classList.remove("hide");
          cont.classList.add("hide")
 
          const identi = input.value;
          console.log(identi)

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${identi}`); 
        
        if (!response.ok){

          throw new Error(`HTTP ERROR ${response.status} there can be a number higher than 100`);

        }

        const data = await response.json();

    

        loader.classList.add("hide");
        cont.classList.remove("hide");

        return data;
        
        
          }

          catch (error) {

                    console.error(error);
                     loader.classList.add("hide");
  cont.classList.remove("hide");

                    cont.textContent=`Error fetching ${error}`
          }


}



async function sisa () {

const data = await getD ();
if(!data) return;

console.log(data)

cont.innerHTML =`<h1>${data.id}</h1><br> <h2>${data.title} </h2> <br> <p>${data.body} </p>`

}



btn.addEventListener("click", sisa);

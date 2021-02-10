//Interrogation de l'API

let params = (new URL(document.location)).searchParams;
let id = params.get('id');
console.log(id);

//Récupération des informations de l'API et création de la fiche produit

fetch("http://localhost:3000/api/teddies/"+id)
.then(response => response.json())
.then(ours => {      
        main = document.getElementById('main-produit');
        newOursProduit = document.createElement('div');
        newOursProduit.className = 'oursProduit row mx-auto mt-2 mb-2 col-md-6';
        main.append(newOursProduit);

        newOursProduitTitle = document.createElement('h1');
        newOursProduit.className = 'oursProduit text-center';
        newOursProduitTitle.textContent = 'Orinoco vous présente ' + ' ' + ours.name;
        newOursProduit.appendChild(newOursProduitTitle);

        newOursImage = document.createElement("img");    
        newOursImage.src = ours.imageUrl;    
        newOursImage.className = 'oursImage img-thumbnail rounded max-auto d-block mb-2 img-fluid';
        newOursImage.textContent = ours.imageUrl;
        newOursProduit.appendChild(newOursImage);

        newOursPrice = document.createElement("h2");
        newOursPrice.className = 'oursPrice col mt-3 mb-3 text-center';
        newOursPrice.textContent = ours.price + '€';
        newOursProduit.appendChild(newOursPrice); 

        newOursDescription = document.createElement("p");
        newOursDescription.className = 'oursDescription col mt-3 mb-3'
        newOursDescription.textContent = ours.description;
        newOursProduit.appendChild(newOursDescription);

        newOursProduitButton = document.createElement("select");
        newOursProduitButton.className = 'oursProduitButton col-6 btn btn-outline-secondary dropdown-toggle mt-3 mb-2';
        newOursProduit.appendChild(newOursProduitButton);
        for(let i in ours.colors){             
                newOursProduitColor = document.createElement("option");
                newOursProduitColor.className = 'oursProduitColor mb-3';
                newOursProduitColor.setAttribute("value", ours.colors[i]);
                newOursProduitColor.textContent = ours.colors[i];
                newOursProduitButton.appendChild(newOursProduitColor);         
        };
        console.log(ours);

        newOursPanier = document.createElement("button");
        newOursPanier.className = 'oursPanier col-7 btn btn-outline-secondary mt-3 mb-2';
        newOursPanier.setAttribute('id', 'panier')
        newOursPanier.textContent = "Ajouter au panier";
        newOursProduit.appendChild(newOursPanier);

//Elément sur lequel on veut détecter le clic

        let valideProduit = document.getElementById('panier');

//Ecoute de l'élement cliqué

        

        valideProduit.addEventListener('click', function savePanier(event){
                let myPanier = {
                        id:ours.id, 
                        nom:ours.nom, 
                        image: ours.imageUrl, 
                        color:
                document.getElementsByClassName('oursProduitColor').value,
                        price: ours.price
                };
                localStorage.setItem(ours.id,JSON.stringify(myPanier))
        });
        
        console.log(localStorage.getItem (ours.id));
        /*let oursCommande = function loadPanier(){
                let myPanier = localStorage.getItem('MyPanier');
                document.getElementsByClassName('oursPanier').value = myPanier;
                }*/
})
.catch(error => alert("Erreur : " + error));
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
        newOursProduit.className = 'oursProduit row d-flex flex-column mx-auto mt-2 mb-2 col-md-6';
        main.append(newOursProduit);

        newOursProduitTitle = document.createElement('h1');
        newOursProduit.className = 'oursProduit text-center mb-3';
        newOursProduitTitle.textContent = 'Orinoco vous présente ' + ' ' + ours.name;
        newOursProduit.appendChild(newOursProduitTitle);

        newOursImage = document.createElement("img");    
        newOursImage.src = ours.imageUrl;    
        newOursImage.className = 'oursImage img-thumbnail rounded max-auto d-block mt-3 mb-2 img-fluid';
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

        //Gestion des quantités dans le panier

        oursPanierQuantite = document.createElement('form');
        oursPanierQuantite.className = 'oursPanierQuantite col mt-1 mb-1 d-flex flex-row flex-wrap justify-content-center';
        newOursProduit.appendChild(oursPanierQuantite);

        oursPanierQuantiteMoins = document.createElement('button');
        oursPanierQuantiteMoins.className = 'oursPanierQuantiteMoins col-1 btn btn-secondary mt-3 mb-3 text-center';
        oursPanierQuantiteMoins.setAttribute('id', 'moins');
        oursPanierQuantiteMoins.textContent = '-';
        oursPanierQuantite.appendChild(oursPanierQuantiteMoins);   

        oursPanierQuantiteResult = document.createElement('input');
        oursPanierQuantiteResult.className = 'oursPanierQuantiteResult col-2 mt-3 mb-3 text-center';
        oursPanierQuantiteResult.setAttribute('value', 1);
        oursPanierQuantiteResult.setAttribute('id', 'result');
        oursPanierQuantiteResult.setAttribute('type', 'text');
        oursPanierQuantite.appendChild(oursPanierQuantiteResult);

        oursPanierQuantitePlus = document.createElement('button');
        oursPanierQuantitePlus.className = 'oursPanierQuantitePlus col-1 btn btn-secondary mt-3 mb-3 text-center';
        oursPanierQuantitePlus.setAttribute('id', 'plus');
        oursPanierQuantitePlus.textContent = '+';
        oursPanierQuantite.appendChild(oursPanierQuantitePlus);

        let quantite = document.getElementById('result');
        result = result.value,10;
        console.log(oursPanierQuantiteResult.value);
        let plus = document.getElementById('plus');
        let moins = document.getElementById('moins');

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

//Ecoute de l'élement cliqué et stockage dans le localStorage       

        valideProduit.addEventListener('click', function savePanier(event){
                let myPanier = {
                        id: ours._id, 
                        name: ours.name, 
                        imageUrl: ours.imageUrl, 
                        price: ours.price,
                        quantite: document.getElementById('result').value
                };

                if(localStorage.getItem(ours._id)!= null){
                        let panierStocke = JSON.parse(localStorage.getItem(ours._id));
                        
                        panierStocke.push(myPanier);
                        localStorage.setItem(ours._id,JSON.stringify(panierStocke));
                        console.log('dans if' + panierStocke);
                 
                } else {
                        let panierStocke = [];       
                        panierStocke.push(myPanier);
                        localStorage.setItem(ours._id,JSON.stringify(panierStocke));
                        console.log('dans else' + panierStocke);
                }

        //Ajout d'un popup suite à l'ajout au panier

                const popupConfirmation = () =>{
                        if(window.confirm(`${ours.name} a bien été ajouté au panier. 
                                \nCliquez sur OK, pour valider votre commande. 
                                \nCliquez sur ANNULER pour continuer vos achats.`)){
                                window.location.href = "panier.html";
                        }else{
                                window.location.href = "index.html";
                        }
                }
                popupConfirmation();
        });
        
        console.log(localStorage.getItem (ours._id));
})
.catch(error => alert("Erreur : " + error));
let params = (new URL(document.location)).searchParams;
let id = params.get('id');
console.log(id);

//Récupération de l'API et création de la fiche produit

fetch("http://localhost:3000/api/teddies/"+id)
.then(response => response.json())
.then(ours => {      
        main = document.getElementById('main-produit');
        newOursProduit = document.createElement('div');
        newOursProduit.className = 'oursProduit row mx-auto mt-2 col-md-6';
        main.append(newOursProduit); 
        newOursProduitTitle = document.createElement('h1');
        newOursProduit.className = 'oursProduit text-center';
        newOursProduitTitle.textContent = 'Orinoco vous présente ' + ' ' + ours.name;
        newOursProduit.appendChild(newOursProduitTitle);
        newOursPrice = document.createElement("h2");
        newOursPrice.className = 'oursPrice col-3 mb-0 text-center';
        newOursPrice.textContent = ours.price;
        newOursProduit.appendChild(newOursPrice);
        newOursImage = document.createElement("img");    
        newOursImage.src = ours.imageUrl;    
        newOursImage.className = 'oursImage img-thumbnail rounded max-auto d-block mb-2 img-fluid';
        newOursImage.textContent = ours.imageUrl;
        newOursProduit.append(newOursImage);
        newOursProduitButton = document.createElement("select");
        newOursProduitButton.className = 'oursButton btn btn-outline-secondary dropdown-toggle mt-0 mb-2';
        newOursProduitButton.textContent = "Plus de coloris";
        newOursProduit.append(newOursProduitButton);
        console.log(ours);
})
.catch(error => alert("Erreur : " + error));
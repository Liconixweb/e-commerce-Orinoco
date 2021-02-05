//Récupération de l'API et création de chaque fiche ours

fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(ours => {
    for(let i=0; i <ours.length; i++){      
        console.log('Ours ' + i + ' ' + ours[i].imageUrl + ' ' + ours[i].name + ' ' + ours[i].price);
        main = document.getElementById('main');
        newOurs = document.createElement('div');
        newOurs.className = 'ours row mx-auto mt-2 col-md-6';
        main.append(newOurs);        
        newOursImage = document.createElement("img");    
        newOursImage.src = ours[i].imageUrl;    
        newOursImage.className = 'oursImage img-thumbnail rounded max-auto d-block mb-2 img-fluid h-75';
        newOursImage.textContent = ours[i].imageUrl;
        newOurs.append(newOursImage);
        newOursName = document.createElement("h2");        
        newOursName.className = 'oursName col-9 mb-0';
        newOursName.textContent = ours[i].name;
        newOurs.append(newOursName);
        newOursPrice = document.createElement("h2");
        newOursPrice.className = 'oursPrice col-3 mb-0';
        newOursPrice.textContent = ours[i].price;
        newOurs.append(newOursPrice);
        newOursDescription = document.createElement("button");
        newOursDescription.className = 'oursDescription btn btn-outline-secondary mt-0 mb-2';
        newOursDescription.textContent = "Plus de coloris";
        newOurs.append(newOursDescription);
        let newOursLien = document.createElement('a');
        newOursLien.appendChild(newOursDescription);
        newOursLien.href = "produit.html";
        newOursLien.className = 'oursLien text-center';
        newOurs.appendChild(newOursLien);
    } 
})
.catch(error => alert("Erreur : " + error));
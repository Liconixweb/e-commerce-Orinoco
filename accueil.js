//Récupération de l'API et création de chaque fiche ours

fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(ours => {
    for(let i=0; i <ours.length; i++){      
        console.log('Ours ' + i + ' ' + ours[i].imageUrl + ' ' + ours[i].name + ' ' + ours[i].price);
        main = document.getElementById('main');
        newOurs = document.createElement('div');
        newOurs.className = 'ours row mx-auto  mt-2';
        main.append(newOurs);        
        newOursImage = document.createElement("img");    
        newOursImage.src = ours[i].imageUrl;    
        newOursImage.className = 'oursImage img-thumbnail rounded max-auto d-block mb-2 roboto';
        newOursImage.textContent = ours[i].imageUrl;
        newOurs.append(newOursImage);
        newOursName = document.createElement("h2");        
        newOursName.className = 'oursName col-9';
        newOursName.textContent = ours[i].name;
        newOurs.append(newOursName);
        newOursPrice = document.createElement("h3");
        newOursPrice.className = 'oursPrice col-3';
        newOursPrice.textContent = ours[i].price;
        newOurs.append(newOursPrice);
        newOursDescription = document.createElement("h4");
        newOursDescription.className = 'oursDescription col text-center';
        newOursDescription.textContent = "Plusieurs coloris";
        newOurs.append(newOursDescription);
    } 
})
.catch(error => alert("Erreur : " + error));
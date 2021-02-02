//Récupération de l'API

fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(ours => {
    for(let i=0; i <ours.length; i++){      
        console.log('Ours ' + i + ' ' + ours[i].imageUrl + ' ' + ours[i].name + ' ' + ours[i].price);
        main = document.getElementById('main');
        newOurs = document.createElement('div');
        main.append(newOurs);
        newOurs.className = 'ours col-6';
        newOursName = document.createElement("div");        
        newOursName.className = 'oursName';
        newOursName.textContent = ours[i].name;
        newOurs.append(newOursName);
        newOursImage = document.createElement("img");    
        newOursImage.src = ours[i].imageUrl;    
        newOursImage.className = 'oursImage';
        newOursImage.textContent = ours[i].imageUrl;
        newOurs.append(newOursImage);
        newOursPrice = document.createElement("div");
        newOursPrice.className = 'oursPrice';
        newOursPrice.textContent = ours[i].price;
        newOurs.append(newOursPrice);
    } 
})
.catch(error => alert("Erreur : " + error));
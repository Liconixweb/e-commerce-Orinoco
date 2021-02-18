//Mise en page du panier

main = document.getElementById('main-panier');
newPanier = document.createElement('div');
newPanier.className = 'newPanier row mx-auto mt-2 mb-2 col-md-6';
main.prepend(newPanier);

//Récupération des données du panier dans le localStorage

let panierStocke = [];
for(let i=0; i <localStorage.length; i++){    
    let id = localStorage.key(i);
    panierStocke.push(JSON.parse(localStorage.getItem(id)));
}
console.log(panierStocke);

newPanierTitle = document.createElement('h1');
newPanierTitle.className = 'oursPanierTitle text-center';
newPanierTitle.textContent = 'Votre Panier :';
newPanier.appendChild(newPanierTitle);

oursCommandeTitle = document.createElement('p');
oursCommandeTitle.className = 'oursCommandeTitle row mx-auto mt-2 mb-3 col-md-6';
oursCommandeTitle.textContent = 'Les ours commandés : ';
newPanier.appendChild(oursCommandeTitle);

//Affichage des articles présents dans le localStorage

for(let i=0; i < panierStocke.length; i++){      

    oursPanier = document.createElement('div');
    oursPanier.className = 'oursPanier mx-auto row mt-2 mb-3 col-md-6';
    newPanier.appendChild(oursPanier);

    oursPanierImage = document.createElement('img');    
    oursPanierImage.src = panierStocke[i][0].imageUrl;
    oursPanierImage.className = 'oursPanierImage col img-thumbnail rounded max-auto text-center w-50 h-50 mt-4 mb-2 img-fluid';
    oursPanierImage.textContent = panierStocke[i][0].imageUrl;
    oursPanier.appendChild(oursPanierImage);

    oursPanierTitle = document.createElement('p');
    oursPanierTitle.className = 'oursPanierTitle col ml-2 pl-4 align-self-center';
    oursPanierTitle.textContent = panierStocke[i][0].name;
    oursPanier.appendChild(oursPanierTitle);

    
//Gestion des quantités dans le panier

    oursPanierQuantite = document.createElement('form');
    oursPanierQuantite.className = 'oursPanierQuantite col-6 mt-3 mb-3 ';
    oursPanierQuantite.textContent = 'quantité :' + '    ';
    oursPanier.appendChild(oursPanierQuantite);

    oursPanierQuantiteResult = document.createElement('input');
    oursPanierQuantiteResult.className = 'oursPanierQuantiteResult col-4 text-center';
    oursPanierQuantiteResult.setAttribute('value', panierStocke[i][0].quantite);
    oursPanierQuantiteResult.setAttribute('id', 'result');
    oursPanierQuantiteResult.setAttribute('type', 'number');
    oursPanierQuantite.appendChild(oursPanierQuantiteResult);

//Modification de la quantité finale

    let quantite = document.getElementById('result');
    quantite = result.value;
    console.log(result.value);

    let valide = document.getElementById('result');

    valide.addEventListener('change', function(){
        for(let i=0; i <localStorage.length; i++){    
            let id = localStorage.key(i);
            panierStocke.push(JSON.parse(localStorage.getItem(id)));
        }
        panierStocke[i][0].quantite = result.value;
        localStorage.removeItem(panierStocke._id);
        localStorage.setItem(panierStocke._id,JSON.stringify(panierStocke));
        oursPanierPrice.textContent = 'Prix total : ' + panierStocke[i][0].price*panierStocke[i][0].quantite + " €";        
    });
console.log(result.value);

    oursPanierPrice = document.createElement('p');
    oursPanierPrice.className = 'oursPanierPrice col mt-4';
    oursPanierPrice.textContent = 'Prix total : ' + panierStocke[i][0].price*quantite + " €";
    oursPanier.appendChild(oursPanierPrice); 

    buttonSupprime = document.createElement('button');
    buttonSupprime.className = 'buttonSupprime fas fa-trash-alt  btn-sm btn-outline-secondary text-center';
    oursPanier.appendChild(buttonSupprime);

//Supression de l'article après un clique

buttonSupprime.addEventListener('click', function supprimeArticle(event){
    localStorage.removeItem(panierStocke[i][0]._id);
});
}
for(let i=0; i < panierStocke.length; i++){  

oursCommandeTotal = document.createElement('p');
oursCommandeTotal.className = 'oursCommandeTotal row mx-auto mt-2 mb-3 col-md-6';
let total = panierStocke[i][0].price*panierStocke[i][0].quantite;
console.log(total);

newPanier.appendChild(oursCommandeTotal);
}oursCommandeTotal.textContent = 'Total de la commande : ';
/*
//Envoi des formulaires avec JavaScript

function sendData(data){
    let xhr = new XMLHttpRequest();
    let formData = new FormData();

    for(form in data) {
        formData.append(name, data[form]);
    }

    xhr.addEventListener('load', function(event){
        alert('Vos données ont bien été envoyées');
    });

    xhr.addEventListener('error', function(event){
        alert('Une erreur est survenue !');
    });

    xhr.open('POST', 'http://localhost:3000/api/teddies/');

    xhr.send(formData);

    window.location = "confirmation.html";
}

window.addEventListener('load', function(){
    function sendData(){
        let xhr = new XMLHttpRequest();
        let formData = new FormData(form);

        xhr.addEventListener('load', function(event){
            alert(event.target.responseTex);
        });

        xhr.addEventListener('error', function(event){
            alert('Une erreur est survenue !');
        });

        xhr.open('POST', 'https://example.com');

        xhr.send(formData);
    }

    let form = document.getElementById('formulaire');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        sendData();
    });
});*/
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
    oursPanier.className = 'oursPanier row mx-auto mt-2 mb-3 col-md-6 d-inline-flex flex-row flex-wrap align-content-between';
    newPanier.appendChild(oursPanier);

//Gestion des quantités dans le panier

    oursPanierQuantite = document.createElement('form');
    oursPanierQuantite.className = 'oursPanierQuantite col-3 h- mt-3 mb-3 d-flex flex-row justify-content-start align-content-center';
    oursPanier.appendChild(oursPanierQuantite);

    oursPanierQuantiteMoins = document.createElement('button');
    oursPanierQuantiteMoins.className = 'oursPanierQuantiteMoins col-3 btn btn-secondary mt-3 mb-3 text-center';
    oursPanierQuantiteMoins.setAttribute('id', 'moins');
    oursPanierQuantiteMoins.textContent = '-';
    oursPanierQuantite.appendChild(oursPanierQuantiteMoins);   

    oursPanierQuantiteResult = document.createElement('input');
    oursPanierQuantiteResult.className = 'oursPanierQuantiteResult col-6 mt-3 mb-3 text-center';
    oursPanierQuantiteResult.setAttribute('value', panierStocke[i][0].quantite);
    oursPanierQuantiteResult.setAttribute('id', 'result');
    oursPanierQuantiteResult.setAttribute('type', 'text');
    oursPanierQuantite.appendChild(oursPanierQuantiteResult);

    oursPanierQuantitePlus = document.createElement('button');
    oursPanierQuantitePlus.className = 'oursPanierQuantitePlus col-3  btn btn-secondary mt-3 mb-3 text-center';
    oursPanierQuantitePlus.setAttribute('id', 'plus');
    oursPanierQuantitePlus.textContent = '+';
    oursPanierQuantite.appendChild(oursPanierQuantitePlus);

    let quantite = document.getElementById('result');
    result = result.value,10;
    console.log(oursPanierQuantiteResult.value);
    let plus = document.getElementById('plus');
    let moins = document.getElementById('moins');

//Modification du button

    quantite.addEventListener('blur', function(){
        result = document.getElementById('result');
        result = result.value,10;
        localStorage.setItem("quantite", result.value);
        console.log(result);
    });

//Button moins

   moins.addEventListener('click', function retraitArticle(event){
    if(result >0 && result <=99){
        result--;
        document.getElementById('result').value = result;
    }    
    }); 
console.log(result + " Retrait d'un produit");
//Button plus

    oursPanierQuantitePlus.addEventListener('click', function ajoutArticle(event){
        if(result >= 0 && result < 99){
            result++;
            document.getElementById('result').value = result;
        }        
    }); 
console.log(result + " Ajout d'un produit");

    oursPanierTitle = document.createElement('p');
    oursPanierTitle.className = 'oursPanierTitle col-3 mt-3 mb-3 text-center justify-content-start align-content-center';
    oursPanierTitle.textContent = panierStocke[i][0].name;
    oursPanier.appendChild(oursPanierTitle);

    oursPanierImage = document.createElement('img');    
    oursPanierImage.src = panierStocke[i][0].imageUrl;
    oursPanierImage.className = 'oursPanierImage col-4 img-thumbnail rounded max-auto text-center justify-content-start align-content-center w-50 h-50 mt-4 mb-2 img-fluid';
    oursPanierImage.textContent = panierStocke[i][0].imageUrl;
    oursPanier.appendChild(oursPanierImage);    

    oursPanierPrice = document.createElement('p');
    oursPanierPrice.className = 'oursPanierPrice col-3 mt-3 mb-3 justify-content-start align-content-center';
    oursPanierPrice.textContent = panierStocke[i][0].price + '€';
    oursPanier.appendChild(oursPanierPrice); 

    buttonSupprime = document.createElement('button');
    buttonSupprime.className = 'buttonSupprime fas fa-trash-alt col-2 btn btn-outline-secondary justify-content-start align-content-center';
    oursPanier.appendChild(buttonSupprime);


//Supression de l'article après un clique

buttonSupprime.addEventListener('click', function supprimeArticle(event){
    localStorage.removeItem(panierStocke);
});}

oursCommandeTotal = document.createElement('p');
oursCommandeTotal.className = 'oursCommandeTotal row mx-auto mt-2 mb-3 col-md-6';
let total = [Number(panierStocke.price)];
console.log(total);
oursCommandeTotal.textContent = 'Total de la commande : ';
newPanier.appendChild(oursCommandeTotal);



    
        
    
/*if(localStorage.get !== "" ){ 
    let panierStocke = [];         
        for(let i=0; i <localStorage.length; i++){ 
            let key = localStorage.key(i);
            panierStocke.push(JSON.parse(localStorage.getItem(key)));
        }

    oursPanier = document.createElement('div');
    oursPanier.className = 'oursPanier row mx-auto mt-2 mb-2 col-md-6';
    newPanier.appendChild(oursPanier);

    oursPanierVide = document.createElement('h1');
    oursPanierVide.className = 'oursPanierVide row mx-auto mt-2 mb-2 col-md-6';
    oursPanierVide.textContent = 'Votre panier est vide !';
    oursPanier.appendChild(oursPanierVide);
    console.log('Panier vide !');

} else {
    
    console.log('Un ou plusieurs articles sont dans le panier !');
*/        
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
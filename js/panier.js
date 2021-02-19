//Mise en page du panier

main = document.getElementById('main-panier');
newPanier = document.createElement('div');
newPanier.className = 'newPanier row mx-auto mt-2 mb-2 col-md-6';
main.prepend(newPanier);

//Récupération des données du panier dans le localStorage

let panierStocke = JSON.parse(localStorage.getItem('panier'));

console.log(panierStocke);

if (panierStocke != null) {

    if(panierStocke.length == 0){
        console.log('Panier vide');

    } else {

        newPanierTitle = document.createElement('h1');
        newPanierTitle.className = 'oursPanierTitle text-center';
        newPanierTitle.textContent = 'Votre Panier :';
        newPanier.appendChild(newPanierTitle);

        oursCommandeTitle = document.createElement('p');
        oursCommandeTitle.className = 'oursCommandeTitle row mx-auto mt-2 mb-3 col-md-6';
        oursCommandeTitle.textContent = 'Les ours commandés : ';
        newPanier.appendChild(oursCommandeTitle);

        //Affichage des articles présents dans le localStorage

        let totalCommande = 0;

        for(let i=0; i < panierStocke.length; i++){      

            oursPanier = document.createElement('div');
            oursPanier.className = 'oursPanier mx-auto row mt-2 mb-3 col-md-6';
            newPanier.appendChild(oursPanier);

            oursPanierImage = document.createElement('img');    
            oursPanierImage.src = panierStocke[i].imageUrl;
            oursPanierImage.className = 'oursPanierImage col max-auto text-center w-50 h-50 mt-4 mb-2 img-fluid';
            oursPanierImage.textContent = panierStocke[i].imageUrl;
            oursPanier.appendChild(oursPanierImage);

            oursPanierTitle = document.createElement('p');
            oursPanierTitle.className = 'oursPanierTitle col ml-2 pl-4 align-self-center';
            oursPanierTitle.textContent = panierStocke[i].name;
            oursPanier.appendChild(oursPanierTitle);

        // Gestion du prix des articles commandés

            oursPanierPrice = document.createElement('p');
            oursPanierPrice.className = 'oursPanierPrice col mt-4';
            oursPanierPrice.setAttribute('id', 'prixArticle');
            oursPanierPrice.textContent = 'Prix total : ' + panierStocke[i].price + " €";
            oursPanier.appendChild(oursPanierPrice); 
            
            totalCommande = totalCommande + panierStocke[i].price;

        //Suppression de l'article après un clique

            buttonSupprime = document.createElement('button');
            buttonSupprime.className = 'buttonSupprime fas fa-trash-alt  btn btn-outline-secondary text-center';
            oursPanier.appendChild(buttonSupprime);
console.log(i);
            buttonSupprime.addEventListener('click', function supprimeArticle(event){
                
                
                localStorage.removeItem(panierStocke[i]);
            });
        }
        //Calcul du total de la commande

    oursCommandeTotal = document.createElement('p');
    oursCommandeTotal.className = 'oursCommandeTotal row mx-auto mt-2 mb-3 col-md-6';    
    oursCommandeTotal.textContent = 'Total de la commande : ' + totalCommande;
    newPanier.appendChild(oursCommandeTotal);
    }
} else {
    newPanierTitle = document.createElement('h1');
    newPanierTitle.className = 'oursPanierTitle text-center';
        newPanierTitle.textContent = 'Votre Panier est vide !';
    newPanier.appendChild(newPanierTitle);
}

/*//Envoi des produits commandés


let commande = [];
for (let i in panierStocke){
    commande.push(panierStocke[i].id);
}
console.log(commande);

//Envoi des formulaires avec JavaScript

let formulaire = {
    firstName: nom,
    lastName: prenom,
    adress: adresse,
    city: ville-adresse,
    email: email
};
let user = [];
user.push(formulaire);
console.log(user);

const envoi = {
    method: 'POST',
    body: JSON.stringify(user, commande),
    headers: {
        'Content-Type': 'application/json'
    }
};

fetch("http://localhost:3000/api/order/, envoi")
.then(response => response.json())
.then(user => { 
    console.log(user);
})
.catch(error => alert("Erreur : " + error));





/*
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
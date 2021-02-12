//Mise en page du panier

main = document.getElementById('main-panier');
newPanier = document.createElement('div');
newPanier.className = 'newPanier row mx-auto mt-2 mb-2 col-md-6';
main.prepend(newPanier);

newPanierTitle = document.createElement('h1');
newPanierTitle.className = 'oursPanierTitle text-center';
newPanierTitle.textContent = 'Votre Panier :';
newPanier.appendChild(newPanierTitle);

//Récupération des données du panier dans le localStorage

let oursCommande = JSON.parse(localStorage.getItem('ours'));
console.log(oursCommande);

//Affichage des articles présents dans le localStorage

oursPanier = document.createElement('div');
oursPanier.className = 'oursPanier row mx-auto mt-2 mb-2 col-md-6';
oursPanier.textContent = 'Les ours commandés : ' + oursCommande;
newPanier.appendChild(oursPanier);

buttonSupprime = document.createElement('button');
buttonSupprime.className = 'buttonSupprime fas fa-trash-alt col-1 btn btn-outline-secondary justify-content-center align-items-end';
oursPanier.appendChild(buttonSupprime);

//Supression de l'article après un clique

buttonSupprime.addEventListener('click', function supprimeArticle(event){
    localStorage.removeItem('ours');
});

totalCommande = document.createElement('h2');
totalCommande.className = 'totalCommande text-center';
totalCommande.textContent = 'Total de votre commande :';
newPanier.appendChild(totalCommande);

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

/*window.addEventListener('load', function(){
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
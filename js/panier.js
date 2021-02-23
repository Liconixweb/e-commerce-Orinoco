//Mise en page du panier

main = document.getElementById('main-panier');
newPanier = document.createElement('div');
newPanier.className = 'newPanier col m-2';
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
        oursCommandeTitle.className = 'oursCommandeTitle row mt-2 mb-2';
        oursCommandeTitle.textContent = 'Les ours commandés : ';
        newPanier.appendChild(oursCommandeTitle);

        //Affichage des articles présents dans le localStorage

        let totalCommande = 0;

        for(let i=0; i < panierStocke.length; i++){      

            oursPanier = document.createElement('div');
            oursPanier.className = 'oursPanier row d-flex align-items-center mt-2 mb-3 m-md-0 h-md-15';
            newPanier.appendChild(oursPanier);

            oursPanierImage = document.createElement('img');    
            oursPanierImage.src = panierStocke[i].imageUrl;
            oursPanierImage.className = 'oursPanierImage col align-self-center w-50 h-50 mt-2 mb-2 img-fluid';
            oursPanierImage.textContent = panierStocke[i].imageUrl;
            oursPanier.appendChild(oursPanierImage);

            oursPanierTitle = document.createElement('p');
            oursPanierTitle.className = 'oursPanierTitle col m-0 align-self-center justify-content-center text-center';
            oursPanierTitle.textContent = panierStocke[i].name;
            oursPanier.appendChild(oursPanierTitle);

        // Gestion du prix des articles commandés

            oursPanierPrice = document.createElement('p');
            oursPanierPrice.className = 'oursPanierPrice col m-0 flex-nowrap align-self-center justify-content-center text-center';
            oursPanierPrice.setAttribute('id', 'prixArticle');
            oursPanierPrice.textContent = 'Prix total : ' + panierStocke[i].price + "€";
            oursPanier.appendChild(oursPanierPrice); 
            
            totalCommande = totalCommande + panierStocke[i].price;

        //Suppression de l'article après un clique

            buttonSupprime = document.createElement('button');
            buttonSupprime.className = 'buttonSupprime fas fa-trash-alt col-md btn btn-outline-secondary text-center';
            oursPanier.appendChild(buttonSupprime);
            
            console.log(panierStocke);          
            
            buttonSupprime.addEventListener('click', function supprimeArticle(event){                  
                let index = event.target;                
                panierStocke.splice(index,1);             
                localStorage.setItem('panier',JSON.stringify(panierStocke));
                window.location.href = "panier.html";
                if (panierStocke.length === 0){
                    localStorage.removeItem('panier');
                }
            });        
            console.log(panierStocke);
        }
        //Calcul du total de la commande

    oursCommandeTotal = document.createElement('p');
    oursCommandeTotal.className = 'oursCommandeTotal row mx-auto mt-2 mb-3';    
    oursCommandeTotal.textContent = 'Total de la commande : ' + totalCommande + '€';
    newPanier.appendChild(oursCommandeTotal);
    }
} else {
    newPanierTitle = document.createElement('h1');
    newPanierTitle.className = 'oursPanierTitle text-center';
        newPanierTitle.textContent = 'Votre Panier est vide !';
    newPanier.appendChild(newPanierTitle);
}

//Tableau des id des produits commandés

let commande = [];
for (let i in panierStocke){
    commande.push(panierStocke[i].id);
}
console.log(commande);

//Validation et envoi des id des produits commandés et du formulaire valide

valider = document.getElementById('valide');
let firstName = document.getElementById('nom');
let regexFirstName = /([a-zA-Z\-])\s([a-zA-Z])/g;
let lastName = document.getElementById('prenom');
let regexLastName = /([a-zA-Z\-])\s([a-zA-Z])/g;
let address = document.getElementById('adresse');
let regexAdress = /[a-zA-Z0-9\-_\.]\s[a-zA-Z0-9\-_\.]/g;
let codeAddress = document.getElementById('code-adresse');
let regexCodeAddress = /[0-9]/g;
let city = document.getElementById('ville');
let regexCity = /([a-zA-Z\-])\s([a-zA-Z])/g;
let email = document.getElementById('mail');
let regexEmail = /[a-zA-Z0-9\-_\.]+@+[a-zA-Z0-9\-_\.]/g;

valider.addEventListener('click', function valideCommande(event){
    if((regexFirstName.test(firstName) === true)
        && (regexLastName.test(lastName) === true)
        && (regexAdress.test(address) === true)
        && (regexCodeAdress.test(codeAddress) === true)
        && (regexCity.test(city) === true)
        && (regexEmail.test(email) === true)
    ){
        let formulaire = {
            firstName: firstName.value,
            lastName: lastName.value,
            adress: adress.value,
            city: city.value,
            email: email.value
        };        
        let user = [];
        user.push(formulaire);
        console.log(user);
        console.log('Le formulaire est valide !')

        const envoi = {
            method: 'POST',
            body: JSON.stringify({user, commande}),
            headers: {
                'Content-Type': 'application/json'
            }
        };           
            fetch("http://localhost:3000/api/teddies/order"+ envoi)
            .then(response => response.json())
            .then(user => { 
                console.log(user);
            })
            .catch(error => alert("Erreur : " + error));
        
    } else{
        alert('Une ou plusieurs données du formulaire sont incorrectes, veuillez les vérifier !')
        window.location.href = "panier.js";
        console.log("Le formulaire n'est pas valide !")
        
   }
});

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

    xhr.open('POST', 'http://localhost:3000/order/');

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
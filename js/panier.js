//Mise en page du panier

main = document.getElementById('main-panier');
newPanier = document.createElement('div');
newPanier.className = 'newPanier col m-2';
main.prepend(newPanier);

//Récupération des données du panier dans le localStorage

let panierStocke = JSON.parse(localStorage.getItem('panier'));
console.log(panierStocke);

//totalCommande contiendra la valeur total de ma commande

let totalCommande = 0;

//Condition présentant un panier vide ou un panier contenant des articles

if (panierStocke != null) {

    if(panierStocke.length == 0){
        console.log('Panier vide');

    } else {

        newPanierTitle = document.createElement('h1');
        newPanierTitle.className = 'oursPanierTitle text-center';
        newPanierTitle.textContent = 'Votre Panier :';
        newPanier.appendChild(newPanierTitle);

        oursCommandeTitle = document.createElement('h2');
        oursCommandeTitle.className = 'oursCommandeTitle row mt-2 mb-2';
        oursCommandeTitle.textContent = 'Les ours commandés : ';
        newPanier.appendChild(oursCommandeTitle);

        //Affichage des articles présents dans le localStorage

        panierStocke.forEach((ours,index) =>{      
            console.log(ours);
            console.log(index);

            oursPanier = document.createElement('div');
            oursPanier.className = 'oursPanier row d-flex align-items-center mt-2 mb-3 m-md-1 h-md-15 rounded bg-white shadow';
            newPanier.appendChild(oursPanier);

            oursPanierImage = document.createElement('img');    
            oursPanierImage.src = ours.imageUrl;
            oursPanierImage.className = 'oursPanierImage col align-self-center w-50 h-50 mt-2 mb-2 img-fluid';
            oursPanierImage.textContent = ours.imageUrl;
            oursPanier.appendChild(oursPanierImage);

            oursPanierTitle = document.createElement('h3');
            oursPanierTitle.className = 'oursPanierTitle col m-0 align-self-center justify-content-center text-center';
            oursPanierTitle.textContent = ours.name;
            oursPanier.appendChild(oursPanierTitle);

        // Gestion du prix des articles commandés

            oursPanierPrice = document.createElement('h3');
            oursPanierPrice.className = 'oursPanierPrice col m-0 flex-nowrap align-self-center justify-content-center text-center';
            oursPanierPrice.setAttribute('id', 'prixArticle');
            oursPanierPrice.textContent = 'Prix total : ' + ours.price + "€";
            oursPanier.appendChild(oursPanierPrice); 
            
            totalCommande = totalCommande + ours.price;

        //Suppression de l'article après un clique

            buttonSupprime = document.createElement('button');
            buttonSupprime.className = 'buttonSupprime fas fa-trash-alt col-md btn btn-outline-secondary text-center m-md-2';
            buttonSupprime.setAttribute("data-index", index);
            oursPanier.appendChild(buttonSupprime);
            
            console.log(panierStocke);          
            
            buttonSupprime.addEventListener('click', function supprimeArticle(event){                  
                                 
                panierStocke.splice(index,1);             
                localStorage.setItem('panier',JSON.stringify(panierStocke));
                window.location.href = "panier.html";
                if (panierStocke.length === 0){
                    localStorage.removeItem('panier');
                }                
            });        
            console.log(panierStocke);
    
        })
        //Calcul du total de la commande

    oursCommandeTotal = document.createElement('h2');
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

let products = [];
for (let i in panierStocke){
    products.push(panierStocke[i].id);
}
console.log(products);

//Validation et envoi des id des produits commandés et du formulaire valide

valider = document.getElementById('valide');
let firstName = document.getElementById('nom');
let regexFirstName = /[a-zA-Z\-\s]/g;
let lastName = document.getElementById('prenom');
let regexLastName = /[a-zA-Z\-\s]/g;
let address = document.getElementById('adresse');
let regexAddress = /[a-zA-Z0-9\-\s\.]/g;
let city = document.getElementById('ville');
let regexCity = /[a-zA-Z\-\s]/g;
let email = document.getElementById('mail');
let regexEmail = /[a-zA-Z0-9\-\s\.\_\@]/g;
valider.addEventListener('click', function valideCommande(event){
    event.preventDefault()
    if((regexFirstName.test(firstName) === true)
        && (regexLastName.test(lastName) === true)
        && (regexAddress.test(address) === true)
        && (regexCity.test(city) === true)
        && (regexEmail.test(email) === true)
        && (products != 0)
    ){
        let contact = {
            firstName: firstName.value, 
            lastName: lastName.value, 
            address: address.value,
            city: city.value,
            email: email.value
        };        
        console.log(contact);          
        console.log('Le formulaire est valide !')

//order_id contiendra le numéro de la commande après validation et envoi du formulaire

        const envoi = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({contact, products}),
            mode: 'cors',
            cache: 'default'
        };     
        fetch("http://localhost:3000/api/teddies/order", envoi)
        .then(response => response.json())
        .then(contact => {
            localStorage.setItem("totalCommande",JSON.stringify(totalCommande));
            console.log(contact);
            localStorage.setItem("numeroCommande", JSON.stringify(contact.orderId));
            window.location.href = "confirmation.html";
            console.log(contact.orderId);
        })
        .catch(error => alert("Erreur : " + error));
        
    } else{
        alert('Le panier est vide le formulaire de contact contient des informations incorrectes, veuillez vérifier !')
        console.log("Le panier est vide ou le formulaire n'est pas valide !")
        window.location.href = "panier.html";
   }
});

//Mise en page du panier

main = document.getElementById('main-panier');
newPanier = document.createElement('div');
newPanier.className = 'newPanier row mx-auto mt-2 mb-2 col-md-6';
main.prepend(newPanier);


newPanierTitle = document.createElement('h1');
newPanierTitle.className = 'oursPanierTitle text-center';
newPanierTitle.textContent = 'Votre Panier :';
newPanier.appendChild(newPanierTitle);

oursPanier = document.createElement('div');
oursPanier.className = 'oursPanier row mx-auto mt-2 mb-2 col-md-6';
let oursCommande = function loadPanier(){
    let myPanier = localStorage.getItem('MyPanier');
    document.getElementsByClassName('oursPanier').value = myPanier;
    }
oursPanier.textContent = 'Les ours commandés : ';
newPanier.append(oursPanier);

totalCommande = document.createElement('h2');
totalCommande.className = 'totalCommande text-center';
totalCommande.textContent = 'Total de votre commande :';
formulaire.insertBefore(totalCommande);
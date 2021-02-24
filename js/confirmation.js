//Récupération des données de la commande dans le localStorage

let totalCommande = JSON.parse(localStorage.getItem('totalCommande'));
let numeroCommande = JSON.parse(localStorage.getItem('numeroCommande'));

console.log(totalCommande);
console.log(numeroCommande);

//Mise en page de la confirmation de commande

main = document.getElementById('main-confirmation');
confirmation = document.createElement('div');
confirmation.className = 'newPanier row mx-auto mt-2 mb-2 col-md-6';
main.append(confirmation);

confirmationTitle = document.createElement('h1');
confirmationTitle.className = 'oursPanierTitle text-center mt-3 mb-3';
confirmationTitle.textContent = 'Votre commande n°' + numeroCommande +
                                'pour un total de ' + totalCommande + '€' +
                                'a bien été validé !';
confirmation.appendChild(confirmationTitle);

confirmationTexte = document.createElement('h2');
confirmationTexte.className = 'oursPanierTitle text-center mt-3 mb-3';
confirmationTexte.textContent = 'Merci de votre visite et à bientôt';
confirmation.appendChild(confirmationTexte);
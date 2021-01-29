fetch("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(data => {
    
    for(let i=0; i <data.length; i++){       
        console.log('Ours ' + i + ' ' + data[i].name);
    }
    //instructions 
})
.catch(error => alert("Erreur : " + error));
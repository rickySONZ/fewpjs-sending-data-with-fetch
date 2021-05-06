function submitData() {
    let formData = {
        name: "Steve",
        email: "steve@steve.com"
    };
    
    let configObj = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    
    return fetch("http://localhost:3000/users", configObj)
     .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        addMessageToPage(object.id);
      })
      .catch(function(error) {
          alert("Unauthorized Access");
          addMessageToPage(error)
      })
}


function addMessageToPage(object){
    let newObj = document.createElement('p')
    newObj.innerHTML =  object
    document.body.appendChild(newObj)
}
function submitData(name, email){
    const newuser = {
        name : name,
        email : email
    }
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json', 
        },
        body: JSON.stringify(newuser),
    })
    .then(ser => ser.json())
    .then(data => {

        const idof = data.id
        const idelement = document.createElement('p')
        idelement.textContent =  idof
        document.body.appendChild(idelement)
        console.log(data, idelement)
    })
    .catch(error=> {
        const errormessage = document.createElement('p')
        errormessage.textContent = error.message
        document.body.appendChild(errormessage)
        console.log(error.message)
    })

}
submitData("dov","data@a")
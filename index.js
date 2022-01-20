const newBody = document.getElementsByTagName("body")[0];

function submitData(userName, userEmail){
    const login = {
        "name": userName,
        "email": userEmail
    }
    return fetch(`http://localhost:3000/users`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
       body: JSON.stringify(login),
    })
    .then(res => res.json())
    .then(Object => newBody.append(Object.id))
    
    .catch(function (error) {
        const alertMessage = error.message;
        document.body.innerHTML = `${alertMessage}`;
    })
};
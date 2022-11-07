
// fetch(url, {headers: {'Authorization': `token ${ghtoken}` }})

fetch(url, {headers: {'Authorization': `token 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`}})
    .then(response => response.json())
    .then(users => {
        users.forEach( userObj => {
            // do something with each username
            console.log(userObj.login);
        })
    })
    .catch(error => console.error(error));

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    const obj = {
        url: formText
    }
    console.log(obj);
    Client.postData('http://localhost:8081/add', obj)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.categories[0].label
    })
}

export { handleSubmit }

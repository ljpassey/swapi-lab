const button = document.getElementById('btn')

const baseURL = 'https://swapi.dev/api/'

function onClick(event) {
    event.preventDefault()
    axios.get(baseURL + 'planets/2')
    .then((response) => {
        for (let i = 0; i < response.data.residents.length; i++) {
            axios.get(response.data.residents[i])
            .then((response) => {
                let resident = document.createElement('h2');
                resident.innerHTML = response.data.name
                document.getElementById('residents').appendChild(resident)   
            })
        }
    })
}

button.addEventListener('click', onClick)
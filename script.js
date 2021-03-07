fetch(' https://ghibliapi.herokuapp.com/films ')
    .then((res) => {
        return res.json()
    })
    .then((data) => {

        data.forEach((movie) => {

            //Creating a div with a card class
            const card = document.createElement('div')
            card.setAttribute('class','card')

            //Create h1 for each card and setting title from JSON data
            const h1 = document.createElement('h1')
            h1.textContent = movie.title

            //Create paragraph with movie description
            const p = document.createElement('p')
            movie.description = movie.description.substring(0,300) //Limit to 300 chars
            p.textContent = `${movie.description}`

            //Append card to container
            container.appendChild(card)


            //Append h1 to card
            card.appendChild(h1)
            card.appendChild(p)
        })
    })
    .catch((err) => {
        console.log('error')
    })



const app = document.getElementById('root')

const logo = document.createElement('img');
    logo.src = 'logo.png'

const container = document.createElement('div')
    container.setAttribute('class', 'container')
    
app.appendChild(logo)    
app.appendChild(container)

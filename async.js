async function thursdayClasswork(){
    let starWars = await fetch('https://swapi.dev/api/people')
    let realstarWars = await starWars.json()
    let custstarWars = realstarWars.results

        let newstarWars = custstarWars.map(person=>`<li>name:${person.name}  birthyear:${person.birthyear}   films:${person.films}  gender:${person.gender}</li><br>`)
    

    return document.body.innerHTML=newstarWars.join('')
}

thursdayClasswork()


// const getPlanetApi = async() => {
//     let planetApi = await fetch("https://swapi.dev/api/planets");
//     let planetData = await planetApi.json();
//     let finalData = planetData.results
//         let result = finalData.map(planet =>`<li> name: ${planet.name} ---- rotation period: ${planet.rotation_period} --- population: ${planet.population}  --- residents: ${planet.residents}</li>`)
//         return document.body.innerHTML = result.join('');
    
// }
// getPlanetApi()



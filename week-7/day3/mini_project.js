// function displayData(data, homeworld){
//     let divText = document.getElementById('text');
//     divText.innerHTML = '';
//     let h1Name = document.createElement('h1');
//     let divHeight = document.createElement('div');
//     let divGender = document.createElement('div');
//     let divYear = document.createElement('div');
//     let divHome = document.createElement('div');

//     h1Name.textContent = data.name;
//     divHeight.textContent = `Height: ${data.height}`;
//     divGender.textContent = `Gender: ${data.gender}`;
//     divYear.textContent = `Birth Year: ${data.birth_year}`;
//     divHome.textContent = `Home World: ${homeworld}`;

//     divText.appendChild(h1Name);
//     divText.appendChild(divHeight);
//     divText.appendChild(divGender);
//     divText.appendChild(divYear);
//     divText.appendChild(divHome);

//     document.getElementById('loading').style.display = 'none';
// }

// function randomPeople(url){
//     let numPeople = Math.floor(Math.random() * 84);
//     return url + 'api/people/' + numPeople
// }

// async function getHomeWorld(data){
//     let homeUrl = data.homeworld
//     const options = {
//     method: "GET",
//     headers: {
//     "Content-type": "application/json",
//         },
//     }
//     const res = await fetch(homeUrl, options);
//     const homeData = await res.json();
//     return homeData.result.properties.name
// }


// async function getData(){
//     const url = "https://www.swapi.tech/"
//     const options = {
//     method: "GET",
//     headers: {
//     "Content-type": "application/json",
//         },
//     }
//     let urlPeople = randomPeople(url)
//     let divText = document.getElementById('text');
//     divText.innerHTML = '';
//     document.getElementById('loading').style.display = 'block';
//     try{
//         const res = await fetch(urlPeople, options);
//         const data =  await res.json();
//         let homeworld = await getHomeWorld(data.result.properties)
//         displayData(data.result.properties, homeworld)
//     }catch(err){
//         let divText = document.getElementById('text');
//         let errMsg = document.createElement('h1');
//         errMsg.textContent = "Oh No! That person isn't avaible...";
//         divText.appendChild(errMsg)
//         document.getElementById('loading').style.display = 'none';

//     }
// }
// let button = document.querySelector('button');
// button.addEventListener('click', getData);

document.getElementById("fetch-character").addEventListener("click",fetchCharacter)

async function fetchCharacter() {
    const loadingMessage = document.getElementById("loading-message");
    const errorMessage = document.getElementById("error-message");
    const characterDetails = document.getElementById("character-details");

    loadingMessage.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    characterDetails.classList.add("hidden");

    const randomId= Math.floor(Math.random()*83) +1;


    try {
        const response=await fetch(`https://www.swapi.tech/api/people/${randomId}`);
        if (!response.ok) throw new Error ("Error occured");

        const data = await response.json();
        const character = data.result.properties;

        const homeworldResponse = await fetch (character.homeworld);
        const homeworldData = await homeworldResponse.json();
        const homeworldName= homeworldData.result.properties.name;


        document.getElementById("character-name").innerText=character.name;
        document.getElementById("character-height").innerText=character.height;
        document.getElementById("character-gender").innerText=character.gender;
        document.getElementById("character-birth").innerText = character.birth_year;
        document.getElementById("character-homeworld").innerText= homeworldName;

        loadingMessage.classList.add("hidden");
        characterDetails.classList.remove("hidden");
        } catch (error){
            console.log("Error fetchin data:",error);
            loadingMessage.classList.add("hidden");
            errorMessage.classList.remove("hidden"); 
        }
}
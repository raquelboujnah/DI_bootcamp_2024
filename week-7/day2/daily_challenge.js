// Use this Giphy API Random documentation. Use this API Key : 
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

document.forms[0].addEventListener('submit', async function(event) {
    event.preventDefault();
    let query = document.getElementById('userSearch').value;
    let url = `https://api.giphy.com/v1/gifs/random?tag=${query}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;

    try {
        let res = await fetch(url);
        let data = await res.json();
        let gifUrl = data.data.images.original.url;

        let gifContainer = document.getElementById('root');
        let gifDiv = document.createElement('div');

        let img = document.createElement('img');
        img.src = gifUrl;
        img.alt = 'gif';

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        gifDiv.appendChild(img);
        gifDiv.appendChild(deleteButton);
        gifContainer.appendChild(gifDiv)

        deleteButton.addEventListener('click', function(){
            gifContainer.removeChild(gifDiv);
        });
        document.getElementById('deleteAll').addEventListener('click', function() {
            gifContainer.innerHTML = '';
        });
        
    }catch(err){
        console.log(err);
    }
});

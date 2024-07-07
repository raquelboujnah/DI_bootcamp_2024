// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.
let form = document.forms[0];
function generateStory(noun, adjective, person, verb, place) {
    return `Once upon a time in ${place}, there was a ${adjective} ${noun} who loved to ${verb} with ${person}.`;
}

function getInputs(e) {
    e.preventDefault()
    let noun = document.getElementById('noun').value.trim();
    let adjective = document.getElementById('adjective').value.trim();
    let person = document.getElementById('person').value.trim();
    let verb = document.getElementById('verb').value.trim();
    let place = document.getElementById('place').value.trim();
    if (noun === '' || adjective === '' || person === '' || verb === '' || place === '') {
        alert('Both fields are required.');
        return;
    }
    let storyText = generateStory(noun, adjective, person, verb, place);
    let story = document.getElementById('story')
    story.textContent = storyText;
};


form.addEventListener('submit', getInputs);

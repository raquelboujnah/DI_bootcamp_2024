const form = document.forms[0];
const inputs = form.querySelectorAll('input');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');
const intensitySelectContainer = document.getElementById('intensitySelectContainer');

let username = null

inputs.forEach(input => {
    input.addEventListener('input', () => {
        const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
        submitBtn.disabled = !allFilled;
    });
});

function createIntensitySelect() {
    intensitySelectContainer.innerHTML = '';

    const title = document.createElement('h3');
    title.textContent = 'How intense do you want the program to be?';

    const select = document.createElement('select');
    select.setAttribute('id', 'intensity');
    select.setAttribute('name', 'intensity');

    const options = ['Intensity', 'Low', 'Medium', 'High'];
    options.forEach(optionText => {
        const option = document.createElement('option');
        option.setAttribute('value', optionText.toLowerCase());
        option.textContent = optionText;
        select.appendChild(option);
    });

    intensitySelectContainer.appendChild(title);
    intensitySelectContainer.appendChild(select);

    select.addEventListener('change', function(event){
        intensitySelect(event.target.value)
        window.location.href = '/fitness/main'; // Redirect to index.html

    })
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    try {
        const response = await fetch('/fitness/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        message.textContent = result.message;
        username = result.username
        createIntensitySelect();
    } catch (error) {
        console.error('Error submitting form:', error);
    }
});


const intensitySelect = async(value) => { 
    try {
        const response = await fetch('/fitness/intensity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({intensity:value,username})
        });
        const result = await response.json();

    } catch (error) {
        console.error('Error submitting form:', error);
    }
};


const createDaySelect = () => {
    const container = document.getElementById('day_number'); 
    const select = document.createElement('select');
    select.setAttribute('name', 'day_number');
    select.setAttribute('id', 'day_number');
    const firstOption = document.createElement('option');
    firstOption.textContent = "Day number..."
    select.appendChild(firstOption);

    for (let i = 1; i <= 14; i++) {
        const option = document.createElement('option');
        option.setAttribute('value', i);
        option.textContent = i;
        select.appendChild(option);
    }
    container.appendChild(select);
    select.addEventListener('change', function(){
        dayExercises()
    });
} 

const dayExercises = async() => { 
    try {
        const response = await fetch('/fitness/exercises', {
            method: 'GET',
        });
        const result = await response.json();
        displayExercises(result);
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};

const displayExercises = (exercises) => {
    const container = document.getElementById('exercises');
    container.innerHTML = '';
    exercises.forEach(exercise => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.classList.add('exercise');

        const name = document.createElement('h3');
        name.textContent = exercise.name;
        exerciseDiv.appendChild(name);

        const type = document.createElement('p');
        type.textContent = `Type: ${exercise.type}`;
        exerciseDiv.appendChild(type);

        const muscle = document.createElement('p');
        muscle.textContent = `Muscle: ${exercise.muscle}`;
        exerciseDiv.appendChild(muscle);

        const equipment = document.createElement('p');
        equipment.textContent = `Equipment: ${exercise.equipment}`;
        exerciseDiv.appendChild(equipment);

        const difficulty = document.createElement('p');
        difficulty.textContent = `Difficulty: ${exercise.difficulty}`;
        exerciseDiv.appendChild(difficulty);

        const instructions = document.createElement('p');
        instructions.textContent = `Instructions: ${exercise.instructions}`;
        exerciseDiv.appendChild(instructions);

        container.appendChild(exerciseDiv);
    });
};

createDaySelect()

function drinkWater(){
    alert('Drink Water')
}
setInterval(drinkWater, 30 * 60 * 1000)
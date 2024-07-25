const axios = require('axios');
const db = require("./db.js")

const cardioExercise = "https://api.api-ninjas.com/v1/exercises?type=cardio"
const powerliftingExercise = "https://api.api-ninjas.com/v1/exercises?type=powerlifting"
const abdominalExercise = "https://api.api-ninjas.com/v1/exercises?muscle=abdominals"
const exercisesexpert = "https://api.api-ninjas.com/v1/exercises?difficulty=beginner"
const healthyRecepies = "https://api.api-ninjas.com/v1/recipe?query=healthy"
const recepies = "https://api.spoonacular.com/recipes/complexSearch?query=diet"

const apiKeyExercises = "zMrusg03RNtFvFM5A8QjIA==lxsOhuK8Me2D4Iat";
const api = "a1810ba77ecf452983edddf8c3d52459"

const exercisesData = []
const recepiesData = []

const fetchExercises = async (url, apiKey, data) => {
    try {
        const response = await axios.get(url, {
            headers: {
                'X-Api-Key': apiKey
            }
        });
        const exercises = response.data;
        // console.log(exercises);
        data.push(...exercises); 
    } catch (error) {
        console.error('Error fetching exercises:', error);
    }
};

fetchExercises(exercisesexpert, apiKeyExercises, exercisesData)
.then(result => {
    // console.log(result);
})
.catch((err) => {
    console.log(err);
})
// console.log(exercisesData);
// const fetchAllExercises = async () => {
//     await Promise.all([
//         fetchExercises(abdominalExercise, apiKeyExercises, exercisesData),
//         fetchExercises(powerliftingExercise, apiKeyExercises,exercisesData),
//         fetchExercises(cardioExercise,apiKeyExercises, exercisesData)
//     ]);
//     console.log("All exercises fetched. Updated data:");
//     createExercise(exercisesData);
// };



// // const fetchAllRecepies = async () => {
// //     await Promise.all([
// //         fetchExercises(recepies, recepiesData)
// //     ]);
// //     console.log("All exercises fetched. Updated data:", recepiesData);
// //     await insertExercises();
// // };

// const createExercise = async (data) => {
//     try {
//         await db("exercises").insert(data);
//         console.log(`Inserted exercise`);
//     } catch (error) {
//         console.error('Error inserting exercise:', error);
//     }
// };



// // fetchAllRecepies()
// module.exports = fetchAllExercises


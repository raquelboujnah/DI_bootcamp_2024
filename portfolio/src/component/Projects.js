import dog from '../dog.png';
import fitness from '../fitness.jpeg'
import tape from '../tape1.png'
import paper from '../paper.png'

const Projects = () => {

    const handleDogCLick = () => {
        window.open("https://raquel.onrender.com/", "_blank");
    }

    const handleFitnessCLick = () => {
        window.open("https://github.com/raquelboujnah/Hackathon2", "_blank");
    }

    return (
        <div id="projects">
            <h3>My Projects</h3>
            <div id='projects_container'>
                <div id='one_project_container'>
                    <div id="dog_project" onClick={handleDogCLick} >
                        <img id='tape' src={tape}/>
                        <img id="dog_img"src={dog} alt="dog"/>
                        <h4>Like a dog Owner</h4>
                    </div>
                    <img src={paper} id='paper'/>
                    <p className='text_project'>Like a dog Owner" is an app designed for those considering getting a dog but are unaware of the full range of responsibilities involved. The app offers a month-long simulation that mimics real-life dog ownership. Each day, users receive alerts at specific times to feed, walk, and train their virtual dog. The simulation also includes managing a budget for essentials like food and vet visits, which the user sets at the beginning of the month. Additionally, the app introduces unexpected scenarios, such as sudden illnesses requiring a vet visit and periodic reminders to purchase more food, providing a realistic experience of dog ownership. All this will be depends one the breed the user will choose on the register page.</p>
                </div>
                <div id='two_project_container'>
                    <div id="project_item" onClick={handleFitnessCLick}>
                        <img id='fitness_img' src={fitness} alt='fitness'/>
                        <h4 id='fitness_title'>Fitness & Diet</h4>
                    </div>
                    <p className='text_project'>Fitness & Diet is a comprehensive website for fitness and diet enthusiasts. The platform offers a personalized two-week program featuring three diet meals and three exercises each day, tailored to the user's weight, height, gender, and intensity level. Users can track their daily progress, access detailed exercise instructions, and discover nutritious recipes. The goal is to provide a holistic approach to fitness and nutrition, ensuring users stay motivated and achieve their health goals. The website also includes reminders to stay hydrated, enhancing the overall wellness experience.</p>
                </div>

            </div>

        </div>
    )
}

export default Projects
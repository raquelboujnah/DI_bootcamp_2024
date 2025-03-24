import post_it from '../post-it.png'
const Skills = () => {
    return (
        <div>
            <h3> My Skills</h3>
            <div id="skills">
                <div className='post_it_container'>
                    <img id='post_it' src={post_it} alt='post-it'/>
                    <p className="skill_item">Python</p>
                </div>
                <div className='post_it_container'>
                    <img id='post_it' src={post_it} alt='post-it'/>
                    <p className="skill_item">JavaScript</p>
                </div>
                <div className='post_it_container'>
                    <img id='post_it' src={post_it} alt='post-it'/>
                    <p className="skill_item">React</p>
                </div>
                <div className='post_it_container'>
                    <img id='post_it' src={post_it} alt='post-it'/>
                    <p className="skill_item">Redux</p>
                </div>
                <div className='post_it_container'>
                    <img id='post_it' src={post_it} alt='post-it'/>
                    <p className="skill_item">Typescript</p>
                </div>
                <div className='post_it_container'>
                    <img id='post_it' src={post_it} alt='post-it'/>
                    <p className="skill_item">Html</p>
                </div>
                <div className='post_it_container'>
                    <img id='post_it' src={post_it} alt='post-it'/>
                    <p className="skill_item">Css</p>
                </div>
                
            </div>
        </div>
    )
}

export default Skills
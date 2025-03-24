import photo from '../photo.jpeg'
import frame from '../frame.png'
const AboutMe = () => {
    return (
        <>
            <h3> About me</h3>
            <div id='about_me'>
                <img id='photo' src={photo} alt='photo'/>
                <img id='frame' src={frame} alt='frame'/>
                <p>I am a new developer, I studied at Developer Institute for 3 intense months.</p>
            </div>
            
        </>
        
    )
};

export default AboutMe;
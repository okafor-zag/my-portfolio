import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

        const handleDownload = () => {
          const link = document.createElement('a');
          link.href = `${process.env.PUBLIC_URL}/resume.pdf`; // Path to your resume in the public folder
          link.download = 'Johnson Okafor Cv.pdf'; // Default file name for the download
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };

    return(
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>Hello! I'm a passionate web developer with a diverse skill set in both front-end and back-end technologies. With a strong foundation in React and WordPress, I build dynamic, user-friendly websites that offer seamless experiences across devices.</p>
                <p>As a React developer, I specialize in creating interactive, high-performance applications that leverage the power of modern JavaScript frameworks. I am adept at managing state, optimizing performance, and implementing responsive designs that cater to the needs of end-users..</p>
                <p>In addition to my development skills, I am also a WordPress expert. I have extensive experience in custom theme development, plugin integration, and website optimization, ensuring that your site not only looks great but also performs at its best.</p>
                <p>My passion for design extends to UI/UX design, where I use tools like Canva, Figma, and Photoshop to create visually appealing and intuitive interfaces. I believe that great design is about more than just aesthetics—it's about crafting experiences that delight users and drive engagement.</p>
                <p>With a keen eye for detail and a commitment to excellence, I am always eager to take on new challenges and deliver projects that exceed expectations. Whether you're looking for a sleek, modern website, a complex web application, or a beautiful and functional design, I'm here to bring your vision to life.</p>
                <div className="cv-buttons">
                <a href="https://docs.google.com/document/d/103MnpL_lgWXSpiPLB9FbvLUz7wU0eQQ9gpC_KcX3G34/edit?usp=sharing" target="blank" rel="noopener noreferrer" >
                    <button className="flat-btn">
                        View My Resume
                    </button>
                </a>
                <button onClick={handleDownload} className="flat-btn"> Download My Resume </button>
                </div>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#dd0031"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#f06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#fed81d"/>
                    </div>
    
                    <div className="face6">
                        <FontAwesomeIcon icon={faVuejs} color="#41B883"/>
                    </div>

                    <div className="face7">
                        <FontAwesomeIcon icon={faGitAlt} color="#41B883"/>
                    </div>

                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About;
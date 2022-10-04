import Meta from "../components/Meta";
import styles from '../styles/About.module.css'
import Avatar from '../media/MehdiRezakhani1.jpg'
import Image from 'next/image'
const about = () => {
    return (
        <div className={styles.About}>
            <Meta title="About US"/>
            <h2>Tech<span>News</span></h2>
            <p>
                This website shows the latest news and events from the world of web technology
                <br/>The data is loaded from <a href="https://rapidapi.com/" target="_blank" rel="noreferrer">rapidapi.com</a>
                <br/>NextJS has been used in this website. 
                <br/><a href="https://github.com/MehdiiRezakhani/tech-news" target="_blank" rel="noreferrer"> Source on GitHub</a>
            </p>
            <div>
                <p>DEVELOPED BY : </p>
                <a href="https://mehdirezakhani.ir" target="_blank" rel="noreferrer" class="devImage">
                    <Image src={Avatar} alt="AvatarPic"/>
                    <h3>Mehdi Rezakhani</h3>
                    <h4>Front-End Developer</h4>
                </a>
            </div>
        </div> 
    );
};

export default about;
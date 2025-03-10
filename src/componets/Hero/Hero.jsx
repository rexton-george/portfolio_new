import styles from './Hero.module.css'
import Button from '../Button/Button'

const Hero = () =>{
    return(
        <div className={styles.hero}>
            <div className={styles.roll}>
                <div className={styles.inroll}>
                    <h2>Rolls:</h2>
                    <div>
                        <h3><span>Web</span> Developer</h3>
                        <p>Building responsive and user-friendly websites with modern web technologies.</p>
                    </div>
                    <div>
                        <h3><span>Python</span> Developer</h3>
                        <p>Writing efficient and scalable Python code to solve real-world problems.</p>
                    </div>
                    <div className={styles.gd}>
                        <h3><span>Graphic</span> Designer</h3>
                        <p>Creating visually stunning designs that captivate and communicate effectively.</p>
                    </div>                    
                </div>
                
            </div>
            <div className={styles.namendimg}>
                <h1><span>REXTON</span> GEORGE R</h1>
                <img src="\src\assets\WhatsApp_Image_2024-09-12_at_22.42.22_d36cfb72-removebg-preview.png" alt="image" />
            </div>
            <div className={styles.dscrp}>
                <div className={styles.indscrp}>
                    <h2>About Me:</h2>
                    <div>
                        <p>
                            Hi! I'm a Pre-final Year CSE student at NPRCET with a passion for web development and problem-solving. 
                            I've solved 200+ problems on LeetCode and am actively honing my skills in full-stack development with React, Python, and SQL. 
                            As a Cisco Networking Academy learner, I'm also exploring networking and cybersecurity. 
                            Currently, I'm seeking internship opportunities to gain hands-on experience and contribute to innovative projects. 🚀
                        </p>
                    </div>
                    <div>
                        <span className={styles.Button}><Button name ='About'/></span>  
                    </div>
                                    
                </div>
            </div>
        </div>
    )
}

export default Hero
import Navbar from '../../componets/Navbar/Navbar'
import Styles from './About.module.css'
import Navlocator from '../../componets/Navlocator/Navlocator'
import AboutComponent from '../../componets/AboutComponent/AboutComponent'

const About = () =>
{
    return(
        <div className = {Styles.about}>
            <Navbar/>
            <Navlocator/> 
            <AboutComponent/>
        </div>
    )
}

export default About;
import Navbar from '../../componets/Navbar/Navbar'
import Styles from './About.module.css'
import Navlocator from '../../componets/Navlocator/Navlocator'

const About = () =>
{
    return(
        <div className = {Styles.about}>
            <Navbar/>
            <Navlocator/> 
        </div>
    )
}

export default About;
import Navbar from '../../componets/Common/Navbar/Navbar'
import Styles from './About.module.css'
import Navlocator from '../../componets/Common/Navlocator/Navlocator'
import AbComp1 from '../../componets/About_components/AbComp1/AbComp1'
import AbComp2 from '../../componets/About_components/AbComp2/AbComp2'

const About = () =>
{
    return(
        <div className = {Styles.about}>
            <Navlocator/> 
            <AbComp1 />
            <AbComp2/>
        </div>
    )
}

export default About;
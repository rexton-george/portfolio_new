import Navbar from '../../componets/Navbar/Navbar'
import Styles from './Skills.module.css'
import Navlocator from '../../componets/Navlocator/Navlocator'
const Skills = () =>
    {
        return(
            <div className={Styles.skills}>
            <Navbar/>
            <Navlocator/>
            </div>
        )
    }
    
    export default Skills;
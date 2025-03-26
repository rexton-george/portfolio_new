import Navbar from '../../componets/Navbar/Navbar'
import Styles from './Skills.module.css'
import Navlocator from '../../componets/Navlocator/Navlocator'
import SkillSet from '../../componets/SkillSet/SkillSet'
const Skills = () =>
    {
        return(
            <div className={Styles.skills}>
            {/* <Navlocator/> */}
            <SkillSet/>
            </div>
        )
    }
    
    export default Skills;
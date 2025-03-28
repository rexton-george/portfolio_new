import Navbar from '../../componets/Common/Navbar/Navbar'
import Styles from './Skills.module.css'
import Navlocator from '../../componets/Common/Navlocator/Navlocator'
import SkillSet from '../../componets/Skill_components/SkillSet/SkillSet'
const Skills = () =>
    {
        return(
            <div className={Styles.skills}>
            <Navlocator/>
            <SkillSet/>
            </div>
        )
    }
    
    export default Skills;
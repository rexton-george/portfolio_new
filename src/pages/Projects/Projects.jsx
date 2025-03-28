import Navbar from '../../componets/Common/Navbar/Navbar'
import Styles from './Projects.module.css'
import Navlocator from '../../componets/Common/Navlocator/Navlocator'

const Projects = () =>
    {
        return(
            <div className={Styles.projects}>
                <Navlocator/>
            </div>
        )
    }
    
    export default Projects;
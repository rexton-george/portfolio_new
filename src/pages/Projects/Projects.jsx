import Navbar from '../../componets/Navbar/navbar'
import Styles from './Projects.module.css'
import Navlocator from '../../componets/Navlocator/Navlocator'

const Projects = () =>
    {
        return(
            <div className={Styles.projects}>
                <Navbar/>
                <Navlocator/>
            </div>
        )
    }
    
    export default Projects
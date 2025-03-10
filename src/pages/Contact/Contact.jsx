import Navbar from '../../componets/Navbar/navbar'
import Styles from './Contact.module.css'
import Navlocator from '../../componets/Navlocator/Navlocator'

const Contact = () =>
    {
        return(
            <div className={Styles.contact}>
                <Navbar/>
                <Navlocator/>
            </div>
        )
    }
    
    export default Contact
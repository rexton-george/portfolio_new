import Navbar from '../../componets/Common/Navbar/Navbar'
import Styles from './Contact.module.css'
import Navlocator from '../../componets/Common/Navlocator/Navlocator'

const Contact = () =>
    {
        return(
            <div className={Styles.contact}>
                <Navlocator/>
            </div>
        )
    }
    
    export default Contact;
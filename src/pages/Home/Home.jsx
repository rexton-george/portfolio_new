import Styles from './home.module.css'
import Navbar from '../../componets/Navbar/navbar'
import Hero from '../../componets/Hero/Hero'
import Navlocator from '../../componets/Navlocator/Navlocator'


const Home = () =>
{
    return(
        <div className={Styles.home}>
            <Navbar/>
            <Navlocator/>
            <Hero/>
            <Hero/>
            <Hero/>
            <Hero/>
            <Hero/>
        </div>
    )
}
export default Home
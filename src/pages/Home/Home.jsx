import Styles from './home.module.css'
import Navbar from '../../componets/Navbar/Navbar'
import Hero from '../../componets/Hero/Hero'
import Navlocator from '../../componets/Navlocator/Navlocator'
import { motion } from "framer-motion";
import AOS from 'aos';
import { useEffect } from "react";

const Home = () =>
{
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

      
    return(
        <div className={Styles.home}>
            <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            >
                <Navbar/>
            </motion.div>
            
            <Navlocator/>
            <Hero/>
            <Hero data-aos="fade-up" style={{ padding: "50px", background: "lightcoral" }}/>
            <Hero data-aos="fade-up" style={{ padding: "50px", background: "lightcoral" }}/>
            <Hero data-aos="fade-up" style={{ padding: "50px", background: "lightcoral" }}/>
        </div>
    )
}
export default Home;
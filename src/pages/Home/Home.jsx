import { motion } from "framer-motion";
import AOS from 'aos';
import { useEffect } from "react";
import Styles from './home.module.css'


import Navbar from '../../componets/Common/Navbar/Navbar'
import Hero from '../../componets/Home_components/Hero/Hero'
import Navlocator from '../../componets/Common/Navlocator/Navlocator'
import HomeSkill from "../../componets/Home_components/HomeSkill/HomeSkill";


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
            </motion.div>
            
            <Navlocator/>
            <Hero/>
            <HomeSkill/>
        </div>
    )
}
export default Home;
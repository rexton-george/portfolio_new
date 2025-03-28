import { useState } from 'react';
import { motion } from "framer-motion";
import styles from './Navbar.module.css';
import Button from '../Button/Button';




const Navbar = () => 
{
    return(
            <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            >        
        <div id='Navbar' className={styles.Navbar}>

            <div className={styles.logo}><b>RG.</b></div>
            <div className={styles.button}>
                <Button path = 'Home' name = 'Home'/>
                <Button path = 'About' name = 'About'/>
                <Button path = 'Skills' name = 'Skills'/>
                <Button path = 'Projects' name = 'Projects'/>
                <Button path = 'Contact' name = 'Contact'/>
            </div>
            <div className={styles.icons}>
                
                <a href="https://www.linkedin.com/in/rexton-george-95520626a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BUXepjtGXSsazrWxpXeizYg%3D%3D"><i class="bi bi-linkedin"></i></a>
                <a href="https://github.com/rexton-george"><i class="bi bi-github"></i></a>
                <a href="https://leetcode.com/u/Rexton_George_R/"><i class="bi bi-code-slash"></i></a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRCVSmkPhXlgRkrmjBhXmplfqZCHTLmZFgFBJvwWhxwFRcBpmdrxCplvSBTLRmRnJSnBkC"><i class="bi bi-envelope"></i></a>
                <a href="https://www.instagram.com/log_peace?igsh=MTF2Y2RnMWFtM3Nmaw=="><i class="bi bi-instagram"></i></a><a href=""></a>
            </div>



        </div>
            </motion.div>        
    )
}

export default Navbar;
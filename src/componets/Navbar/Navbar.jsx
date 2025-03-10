import { useState } from 'react';
import styles from './Navbar.module.css';
import Button from '../Button/Button';



const Navbar = () => 
{
    return(
        <div id='Navbar' className={styles.Navbar}>
            <div className={styles.logo}><b>RG.</b></div>
            <div className={styles.button}>
                <Button name = 'Home'/>
                <Button name = 'About'/>
                <Button name = 'Skills'/>
                <Button name = 'Projects'/>
                <Button name = 'Contact'/>
            </div>
            <div className={styles.icons}>
                
                <a href="linkedin.com"><i class="bi bi-linkedin"></i></a>
                <a href="github.com"><i class="bi bi-github"></i></a>
                <a href="leetcode.com"><i class="bi bi-code-slash"></i></a>
                <a href="rextongeorge2005@gmail.com"><i class="bi bi-envelope"></i></a>
                <a href="instagram.com"><i class="bi bi-instagram"></i></a><a href=""></a>
            </div>
        </div>
    )
}

export default Navbar
import Style from './SkillSet.module.css';
import SkillCard from '../SkillCard/SkillCard';
import { DiAtom,DiPython,DiJava,DiJavascript1,DiCss3,DiHtml5,DiDjango } from "react-icons/di";
import { h2 } from 'framer-motion/client';




const SkillSet = () =>{
    return(
        <div className={Style.SkillCard}>
            <h1 className={Style.heading}><span>SKILL</span> SETS :</h1>
            <div className={Style.content}>
                <div className={Style.lang}>
                    <h2>PROGRAMMIG LANGUAGES:</h2>
                    <div className={Style.cards}>
                        <SkillCard icon = {<DiPython/>} name ='Python 🐍' content ='Python is a high-level, interpreted programming 
                        language known for its simplicity and readability. It is widely used in web development, data science, 
                        artificial intelligence, and automation due to its vast library support and ease of use.'/>
                        <SkillCard icon ={<DiJava/>} name ='Java ☕' content ='Java is a powerful, object-oriented programming 
                        language designed for cross-platform compatibility using the "Write Once, Run Anywhere" (WORA) principle. It is 
                        commonly used in enterprise applications, Android development, and backend systems.'/>
                        <SkillCard icon ={<i className='fa-solid fa-c'></i>} name ='C 🔵' content ='C is a low-level, high-performance programming language 
                        that provides direct access to memory and system resources. It is widely used for system programming, embedded 
                        systems, and developing operating systems like Linux.'/>
                        <SkillCard icon ={<DiJavascript1/>} name ='JavaScript (JS) ⚡' content ='JavaScript is a dynamic, lightweight 
                        programming language that enables interactivity on web pages. It is essential for frontend development and can also 
                        be used for backend development with frameworks like Node.js'/>
                        <SkillCard icon ={<DiHtml5/>} name ='HTML 🌐' content ='HTML (HyperText Markup Language) is the standard 
                        language for structuring web pages. It defines the content and layout of a webpage using elements like headings, 
                        paragraphs, images, and links.'/>
                        <SkillCard icon ={<DiCss3/>} name ='CSS 🎨' content ='CSS (Cascading Style Sheets) is used to style HTML 
                        elements by controlling colors, fonts, layouts, and responsiveness. It enhances the visual appeal of web pages and 
                        enables modern web design.'/>
                    </div>
                </div>
                <div className={Style.fw}>
                    <h2>FRAMEWORKS:</h2>
                    <div className={Style.cards}>
                        <SkillCard icon ={<DiAtom/>} name ='React.js ⚛️' content ='React.js is a JavaScript library for building fast and interactive user 
                        interfaces. Developed by Facebook, it follows a component-based architecture and uses a virtual DOM for efficient rendering.
                         It is widely used in modern web applications.'/>
                        <SkillCard icon ={<DiDjango/>} name ='Django 🐍' content ='Django is a high-level Python web framework designed for 
                        rapid development and clean, maintainable code. It follows the MVC (Model-View-Controller) pattern, comes with built-in 
                        security features, and is widely used for scalable web applications.'/>
                        <SkillCard icon ={<h3>Numpy</h3>} name ='NumPy 🔢' content ='NumPy (Numerical Python) is a Python library for 
                        numerical computing. It provides multi-dimensional arrays, mathematical functions, and linear algebra operations, 
                        making it essential for scientific computing and data analysis.'/>
                        <SkillCard icon ={<h3>Pandas</h3>} name ='Pandas 📊' content ='Pandas is a Python library for data manipulation and 
                        analysis. It provides data structures like Series and DataFrames, allowing efficient handling of structured data, making
                         it widely used in data science and machine learning.'/>
                        <SkillCard icon ={<h3>Flutter</h3>} name ='Flutter 🦋' content ='Flutter is a UI framework by Google for building 
                        cross-platform mobile, web, and desktop applications using a single Dart codebase. It offers a fast, customizable UI 
                        with a rich set of widgets.'/>
                        <SkillCard icon ={<h3>React Native</h3>} name ='React Native 📱' content ='React Native is a JavaScript framework that 
                        allows developers to build cross-platform mobile applications using React. It enables fast development with a 
                        native-like experience on both Android and iOS.'/>
                        <SkillCard icon ={<h3>Nmap</h3>} name ='Nmap 🔍' content ='Nmap (Network Mapper) is a powerful open-source tool used 
                        for network scanning, security auditing, and penetration testing. It helps identify open ports, services, and 
                        vulnerabilities in networks.'/>
                    </div>
                </div>
                <div className={Style.ss}>
                    <h2>SOFTSKILLS:</h2>
                    <div className={Style.cards}>
                        <SkillCard icon ='' content =''/>
                        <SkillCard icon ='' content =''/>
                        <SkillCard icon ='' content =''/>
                        <SkillCard icon ='' content =''/>
                        <SkillCard icon ='' content =''/>
                        <SkillCard icon ='' content =''/>
                        <SkillCard icon ='' content =''/>
                    </div>
                </div>                
            </div>
        </div>
    );
}

export default SkillSet;
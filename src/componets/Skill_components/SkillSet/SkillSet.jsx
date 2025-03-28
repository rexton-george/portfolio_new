import Style from './SkillSet.module.css';
import SkillCard from '../SkillCard/SkillCard';
import { DiAtom,DiPython,DiJava,DiJavascript1,DiCss3,DiHtml5,DiDjango,DiGithubBadge,DiLinux,DiMysql,DiVisualstudio } from "react-icons/di";
import { h2 } from 'framer-motion/client';




const SkillSet = () =>{
    return(
        <div className={Style.SkillCard}>
            <h1 className={Style.heading}><span>SKILL</span> SETS :</h1>
            <div className={Style.content}>
                <div className={Style.lang}>
                    <h2>PROGRAMMIG LANGUAGES:</h2>
                    <div className={Style.cards}>
                        <SkillCard className = {Style.card1} icon = {<DiPython/>} name ='Python 🐍' content ='Python is a high-level, interpreted programming 
                        language known for its simplicity and readability. It is widely used in web development, data science, 
                        artificial intelligence, and automation due to its vast library support and ease of use.'/>
                        <SkillCard className = {Style.card1} icon ={<DiJava/>} name ='Java ☕' content ='Java is a powerful, object-oriented programming 
                        language designed for cross-platform compatibility using the "Write Once, Run Anywhere" (WORA) principle. It is 
                        commonly used in enterprise applications, Android development, and backend systems.'/>
                        <SkillCard className = {Style.card1} icon ={<i className='fa-solid fa-c'></i>} name ='C 🔵' content ='C is a low-level, high-performance programming language 
                        that provides direct access to memory and system resources. It is widely used for system programming, embedded 
                        systems, and developing operating systems like Linux.'/>
                        <SkillCard className = {Style.card1} icon ={<DiJavascript1/>} name ='JavaScript (JS) ⚡' content ='JavaScript is a dynamic, lightweight 
                        programming language that enables interactivity on web pages. It is essential for frontend development and can also 
                        be used for backend development with frameworks like Node.js'/>
                        <SkillCard className = {Style.card1} icon ={<DiMysql/>} name = 'SQL 🛢️' content ='SQL is the standard language for managing and manipulating databases. 
                        It allows developers to retrieve, insert, update, and delete data efficiently. With its powerful querying capabilities, SQL is essential for backend 
                        development, data analysis, and database administration.'/>
                        <SkillCard className = {Style.card1} icon ={<DiHtml5/>} name ='HTML 🌐' content ='HTML (HyperText Markup Language) is the standard 
                        language for structuring web pages. It defines the content and layout of a webpage using elements like headings, 
                        paragraphs, images, and links.'/>
                        <SkillCard className = {Style.card1} icon ={<DiCss3/>} name ='CSS 🎨' content ='CSS (Cascading Style Sheets) is used to style HTML 
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
                        <SkillCard icon ={<i class="bi bi-megaphone-fill"></i>} name = 'Communication Skills 📢📝' content ='Effective communication is key to success 
                        in IT. Whether explaining technical concepts, writing clear documentation, or collaborating with team members, strong communication skills 
                        help bridge the gap between technical and non-technical stakeholders.'/>
                        <SkillCard icon ={<i class="bi bi-puzzle-fill"></i>} name = 'Problem-Solving & Critical Thinking 🧩🧠' content ='IT professionals must analyze 
                        complex issues and find efficient solutions. Critical thinking and logical reasoning enable quick debugging, troubleshooting, and strategic 
                        decision-making in challenging situations.'/>
                        <SkillCard icon ={<i class="bi bi-people-fill"></i>} name = 'Teamwork & Collaboration 🤝👥' content ='Working in IT requires seamless 
                        collaboration with developers, designers, and stakeholders. Strong teamwork skills foster a productive environment where ideas are shared, 
                        feedback is valued, and projects are successfully executed.'/>
                        <SkillCard icon ={<i class="bi bi-hourglass-split"></i>} name = 'Time Management ⏳📅' content ='Managing multiple tasks and deadlines is
                         crucial in the fast-paced IT industry. Effective time management ensures productivity, while organizational skills help in prioritizing work
                          and maintaining efficiency.'/>
                        <SkillCard icon ={<i class="bi bi-rocket-takeoff-fill"></i>} name = 'Adaptability & Continuous Learning 🔄📚' content ='Technology evolves rapidly, and staying relevant requires a 
                        growth mindset. Adaptability and a willingness to continuously learn new tools, frameworks, and methodologies help IT professionals stay ahead.'/>
                        <SkillCard icon ={<i class="bi bi-patch-check-fill"></i>} name = 'Attention to Detail 🔬👀' content ='Even the smallest error in code can lead to critical failures. Attention to 
                        detail ensures accuracy in development, testing, and debugging, leading to higher-quality software and fewer issues in production.'/>
                        <SkillCard icon ={<i class="bi bi-star-fill"></i>} name = 'Leadership & Initiative ⭐🚦' content ='Taking initiative and displaying leadership qualities help IT professionals 
                        grow in their careers. Whether mentoring juniors, leading projects, or proposing new ideas, strong leadership skills drive innovation and success.'/>
                        <SkillCard icon ={<i class="bi bi-balloon-heart-fill"></i>} name = 'Emotional Intelligence ❤️🙂' content ='Understanding emotions—both your own and those of others—enhances workplace relationships. 
                        Emotional intelligence helps in handling stress, resolving conflicts, and maintaining a positive and professional attitude.'/>

                    </div>
                </div>    
                <div className={Style.pltf}>
                    <h2>PLATFORMS AND TOOLS:</h2>
                    <div className={Style.cards}>
                        <SkillCard icon = {<DiLinux/>} name = 'Linux 🐧' content ='Linux is a powerful open-source operating system widely used for development, server management, and 
                        cybersecurity. Its flexibility, security, and command-line interface make it a preferred choice for developers, ethical hackers, and system administrators.'/>
                        <SkillCard icon = {<DiVisualstudio/>} name = 'VS Code 💻' content ='Visual Studio Code (VS Code) is a lightweight yet powerful code editor developed by Microsoft. 
                        With its extensive extensions, integrated terminal, and debugging tools, VS Code is a favorite among developers for writing and managing code efficiently.'/>
                        <SkillCard icon = {<i class="bi bi-rocket-takeoff-fill"></i>} name = 'IntelliJ IDEA 🚀' content ='IntelliJ IDEA is a robust and intelligent IDE designed for Java and Kotlin development. 
                        Known for its smart code assistance, seamless integration with frameworks, and powerful refactoring tools, it enhances productivity for software developers.'/>
                        <SkillCard icon = {<i class="bi bi-android"></i>} name = 'Android Studio 📱' content ='Android Studio is the official IDE for Android development, offering a rich set of tools for 
                        designing, coding, and testing Android applications. With features like an emulator, layout editor, and performance profilers, it simplifies app development.'/>
                        <SkillCard icon = {<i class="bi bi-pc-display-horizontal"></i>} name = 'VMware 🖥️' content ='VMware provides virtualization software that allows users to run multiple operating systems on a 
                        single machine. It is widely used in IT infrastructure, cloud computing, and ethical hacking for creating isolated virtual environments.'/>
                        <SkillCard icon = {<i class="bi bi-palette-fill"></i>} name = 'Figma 🎨' content ='Figma is a cloud-based UI/UX design tool used for creating interactive prototypes and wireframes. 
                        Its collaborative features make it ideal for designers and developers working together on web and mobile applications.'/>
                        <SkillCard icon = {<i class="bi bi-github"></i>} name = 'GitHub 🐙' content ='GitHub is a popular platform for version control and collaboration, allowing developers to host, review, 
                        and manage code repositories. With features like pull requests, CI/CD integration, and issue tracking, it streamlines software development workflows.'/>
                    </div>
                </div>            
            </div>
        </div>
    );
}

export default SkillSet;
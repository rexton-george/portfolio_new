import Style from './AbComp2.module.css'
import EDU from '../EDU/EDU';

const AbComp2 = () =>{
    return(
        <div className={Style.AbComp2}>
            <h1>CURRENTLY</h1>
            <EDU heading = 'College' img = '\src\assets\college.jpg' content ='My journey as a pre-final year Computer Science and Engineering 
            student at NPR College of Engineering and Technology, Natham, Dindigul, has been an incredible blend of learning, innovation, 
            and self-growth. From the foundational years, where I was introduced to programming and problem-solving, to the more advanced 
            subjects in algorithms, databases, networking, and artificial intelligence, every semester has been a stepping stone toward my 
            technical and professional development. Engaging in hands-on projects, hackathons, and coding competitions has refined my skills,
             while certifications in SQL, JavaScript, and networking have strengthened my expertise. Additionally, my experience with 
             frameworks like React and my work on projects like an online auction platform and a PC parts-selling website have given me 
             practical exposure to real-world applications. Beyond academics, participating in technical events, workshops, and seminars 
             has broadened my perspective on the latest industry trends, while group projects and teamwork have enhanced my problem-solving 
             and collaboration skills. The guidance from professors and the support of like-minded peers have made my learning journey 
             enriching and inspiring. As I step into the final year, I look forward to diving deeper into specialized domains, working on 
             impactful projects, and preparing for my career in the tech industry. My time at NPR College has been instrumental in shaping 
             my technical acumen, and I am excited about the opportunities that lie ahead in my final year and beyond.' marktitle = 'CGPA' 
             mark = '8.0'/>
            <EDU heading = 'Schooling up to 10th grade' img = 'src\assets\carmel_school.png' content ='My journey from LKG to 10th standard 
            at Carmel Matriculation School, Nochiodiapatti, Dindigul, has been a memorable and transformative experience, shaping me both 
            academically and personally. From my early days in kindergarten, where I first learned the basics with fun-filled activities, 
            to the rigorous yet rewarding challenges of high school, every phase was filled with learning, friendships, and valuable lessons. 
            The school provided a nurturing environment with dedicated teachers who not only imparted knowledge but also instilled discipline 
            and moral values. The vibrant school life, with annual days, sports events, and cultural programs, enriched my skills beyond 
            textbooks, while the strong academic foundation prepared me for future challenges. As I progressed through each class, I developed 
            a love for learning, gained confidence, and formed lifelong friendships that made school life truly special. Looking back, 
            Carmel Matriculation School was more than just an institution; it was a second home that played a crucial role in shaping the 
            person I am today.' marktitle = 'Percentage' mark = '70%'/>
            <EDU heading = 'Pre-University' img = '\src\assets\MSP_school.png' content='My 11th and 12th standard journey at Solai Nadar Memorial 
            Higher Secondary School, Dindigul, as a Bio-Maths student was a crucial and transformative phase of my academic life. Transitioning from
             high school to higher secondary education came with increased responsibilities, deeper subject knowledge, and a focus on future
              aspirations. As a Bio-Maths student, I navigated the complexities of Biology, where I explored human anatomy, genetics, and botany, 
              alongside the challenges of Mathematics, which tested my analytical and problem-solving skills. The dedicated teachers provided
               constant support, making even the toughest concepts easier to grasp, and their guidance played a key role in my academic growth. 
               Practical lab sessions in Biology and hands-on problem-solving in Mathematics helped bridge theoretical learning with real-world 
               applications. Apart from academics, the school environment fostered discipline, leadership, and teamwork through extracurricular
                activities and events. The friendships formed during these years, the late-night exam preparations, and the determination to 
                excel made this journey unforgettable. These two years not only strengthened my academic foundation but also helped me develop 
                resilience, time management, and a clear vision for my future endeavors. Looking back, my time at Solai Nadar Memorial Higher 
                Secondary School was a defining period that shaped my aspirations and prepared me for the next phase of my journey.' 
                marktitle = 'Percentage' mark = '70%'/>
        </div>
    )
}

export default AbComp2;
import './about.css'
import aboutimg from '../assets/about_profile.jpeg'
import nav_img from '../assets/theme_pattern.svg'
const About = () => {
return (
  <div id='about' className='about'>
    <div className="about-title">
    <h1>About me</h1>
    <img src={nav_img} alt=""  />
    </div>
    <div className="about-sections">
      <div className="about-left">
        <img src={aboutimg} alt="" className='profile_img'/>
      </div>
      <div className="about-right">
        <div className="para">
          <p>  I am an Electronics and Telecommunication Engineering student with a strong passion 
              for full-stack web development and real-time IoT systems. Based in Indore, India, 
              I specialize in building scalable MERN stack applications and integrating hardware 
              with web technologies.</p>
    <p> Currently serving as the Head of SRC (SGSITS Robotics Club), I lead technical teams, 
              manage innovative projects, and organize hands-on workshops. I continuously explore 
              modern technologies and leverage AI tools to enhance productivity and problem-solving efficiency.</p>
        </div>
    <div className="skills">
      <div className="about-skill"> <p>HTML & CSS</p> <hr style={{width:"85%"}} /> </div>
            <div className="about-skill"> <p>React.js</p> <hr style={{width:"80%"}} /> </div>
            <div className="about-skill"> <p>JavaScript</p> <hr style={{width:"75%"}} /> </div>
            <div className="about-skill"> <p>MongoDB</p> <hr style={{width:"80%"}} /> </div>
            <div className="about-skill"> <p>Express.js</p> <hr style={{width:"75%"}} /> </div>
            <div className="about-skill"> <p>Node.js</p> <hr style={{width:"75%"}} /> </div>
            <div className="about-skill"> <p>Java</p> <hr style={{width:"70%"}} /> </div>
            <div className="about-skill"> <p>C Programming</p> <hr style={{width:"65%"}} /> </div>
    </div>
      </div>
    </div>
    {/* <div className="about-acheivements">
      <div className="about-acheivement">
        <h1>10+</h1>
        <p>YEARS OF EXPERINCE</p>
      </div>
      <hr />
      <div className="about-acheivement">
        <h1>50+</h1>
        <p>PROJECTS COMPLETED</p>
      </div>
      <hr />
       <div className="about-acheivement">
        <h1>15+</h1>
        <p>HAPPY CLIENTS</p>
      </div>
    </div> */}
  </div>
)
}
export default About;
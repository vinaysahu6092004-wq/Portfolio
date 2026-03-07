import './mywork.css';
import theme_pattern from '../assets/theme_pattern.svg';
import mywork_data from '../assets/mywork_data.js';

const Work = () => {
  return (
    <div id='portfolio' className="my-work">

      <div className="mywork-title">
        <h1>My Work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-conatiner">
        {mywork_data.map((item, index) => (
          <div key={index} className="work-card">

            {item.w_link ? (
              <a 
                href={item.w_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={item.w_img} alt={item.w_name}/>
              </a>
            ) : (
              <img src={item.w_img} alt={item.w_name}/>
            )}

            <div className="work-overlay">
              <h3>{item.w_name}</h3>
            </div>

          </div>
        ))}
      </div>
    <div className="github-section">

  <p className="project-note">
    Click on any project image to visit the live project
  </p>

  <h2>Explore More Projects</h2>

  <a
    href="https://github.com/vinaysahu6092004-wq"
    target="_blank"
    rel="noopener noreferrer"
    className="github-btn"
  >
    Visit My GitHub
  </a>

</div>

    </div>
  );
};

export default Work;
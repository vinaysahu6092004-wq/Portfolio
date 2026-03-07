import "./services.css"
import theme_image from '../assets/theme_pattern.svg'
import services_data from '../assets/services_data.js'
const Services = () =>{
return (
<div id="service" className="services">
  <div className="services-title">
    <h1>My Services</h1>
    <img src={theme_image} alt="" />
  </div>
  <div className="services-container">
    {services_data.map((service,index) => {
        return (<div className="services-format" key={index}>
        <h3>{service.s_no}</h3>
        <h2>{service.s_name}</h2>
        <p>{service.s_desc}</p>
        <div className="services-readmore">
        {/* <p>Read More</p> */}
          {/* <img src={arrow_icon} alt="" /> */}
        </div>
      </div>)
    })}
  </div>
</div>
);
}
export default Services;
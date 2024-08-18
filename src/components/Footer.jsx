import linkedinIcon from '../assets/linkedinDark.png'
import githubIcon from '../assets/githubDark.png';

function Footer() {
   
  return(

<section id='footer' >
<span>
            <a href='https://linkedin.com' target="_blank">
            <img src={linkedinIcon} alt="linkedin Icon"/>
            </a>
            <a href='https://github.com' target="_blank">
            <img src={githubIcon} alt="github Icon"/>
            </a>
           
         </span>


</section>



  );



};

export default Footer
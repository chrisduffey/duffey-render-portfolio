import YDC from '../assets/ydc-voting-app.png'; 
import MVC from '../assets/mvc.png';
import Note from '../assets/note-taker.png';
import CSC from '../assets/code-script-chum.png';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="l-side">
        <h3>Portfolio</h3>
      </div>
      <div className="r-side">
        <a className="p-10 bg-gray-800 rounded-md " href="https://github.com/chrisduffey/ydc-voting-app" aria-label="Voting Application">
          <div>
          <h4>YDC VOTE</h4>
            <img src={YDC} alt="YDC Project" className='h-[50px] w-[100px] object-contain border border-black'/>            
          </div>
        </a> 
        <a className="p-4 bg-gray-800 rounded-md border-[5px] border-black-400" href="https://github.com/chrisduffey/mvc-tech-blog" aria-label="Tech Blog">
          <div>
          <h4>MVC TECH BLOG</h4>
            <img src={MVC} alt="MVC Project" className='h-[100px] w-[150px] object-contain border border-black' />
            
          </div>
        </a> 
        <a className="p-4 bg-gray-800 rounded-md" href="https://github.com/chrisduffey/note-taker" aria-label="Note Taking application">
          <div>
          <h4>Note Taker Application</h4>
            <img src={Note} alt="Note Project" className='h-[100px] w-[150px] object-contain border border-black' />
            
          </div>
        </a> 
        <a className="p-4 bg-gray-800 rounded-md" href="https://github.com/chrisduffey/code-script-chum?tab=readme-ov-file" aria-label="A resource search engine for front end developers">
          <div>
          <h4>Code Script Chum Resource Site</h4>
            <img src={CSC} alt="CSC Project" className='h-[100px] w-[100px] object-contain border border-black' />
            
          </div>
        </a> 
      </div>
    </section>
  );
}
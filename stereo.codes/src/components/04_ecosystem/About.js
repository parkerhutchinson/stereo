import React from 'react';
import VerticalText from '../01_atoms/VerticalText';
import Copy from '../03_organisms/Copy';
import SectionObserver from '../03_organisms/SectionObserver';
import Gallery from '../03_organisms/Gallery';

const About = (props) => (
   <SectionObserver classes="grid-col-24 grid-24 about">
     <VerticalText>
       <h4>STEREO</h4>
     </VerticalText>
     <div className="grid-col-18 grid-18 about-content">
       <Copy title="Hackerman" subTitle="Half Unicorn" grid={10}>
         <p>This is our world now. The world of the electron and the
           switch; the beauty of the baud. We exist without nationality,
           skin color, or religious bias. You wage wars, murder, cheat,
           lie to us and try to make us believe it's for our own good,
           yet we're the criminals. Yes, I am a criminal. My crime is
           that of curiosity. <strong>I am a hacker</strong>,
           and this is my manifesto.</p>
         <h3>Parker Hutchinson</h3>
         <h4>Full Stack Javascript Developer</h4>
       </Copy>
       <Gallery />
     </div>
     <div className="grid-col-1 spacer"></div>
     <VerticalText>
       <h4>CODES</h4>
     </VerticalText>
   </SectionObserver>
)

export default About;

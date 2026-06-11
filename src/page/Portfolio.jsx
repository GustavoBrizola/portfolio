import React, { useEffect, useState } from 'react';

// TODO: Refactorate imports
import Bottom from 'elements/components/Bottom';
import UserDisplay from 'elements/components/UserDisplay';
import Resume from 'elements/components/content/Resume';
import AboutMe from 'elements/components/content/AboutMe';
import Projects from 'elements/components/content/Projects';

/**
 * Portfolio Website
 *  
*/
export default
function Portfolio() {

  // Conditional import
  // This ensures the load of styles on demand
  // So the .css styles can set 
  // HTML elements(body, div, nav, etc.) per .css individually
  useEffect(() => {
    //@ts-ignore
    import('elements/styles/Portfolio.css');
  }, [])

  // Content Map
  // Section: ['sectionName', <content/>]
  const contentMap = {
    projects: ['Projects', <Projects/>],
    // portfolio: ['Portfolio', null],
    resume: ['Resume', <Resume/>],
    about: ['About Me', <AboutMe/>],
  };
  const [activeSection, setActiveSection] = useState('about');

  return (
    <main className='portfolio'>
      <div className='structure'>
        
        {/* Navigation Bar Structure */}
        <nav className='navigationBar'>
          <UserDisplay/>
          <div className="navigationBar_section">

            {/* Navigation Section */}
            {Object.entries(contentMap).map(([key, [label]]) => (
              <a key={key} href="#" onClick={(e) => { e.preventDefault(); setActiveSection(key); }}>
                {label}
              </a>
            ))}

          </div>
          <button>Contact Me</button>
        </nav>

        {/* Display Structure */}
        <section className='page'>
          <div className='page_content'>

            {/* Render active section from map */}
            {contentMap[activeSection]?.[1] || <></>}

          </div>
          <div className='page_bottom'><Bottom/></div>
        </section>

      </div>
    </main>
  )
}
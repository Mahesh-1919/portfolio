function navbar(){
    return(
            <div className="navbar">
                <div className="logo">MAHESH </div>
                <ul className="navlinks" >
                    <li className='nav-item '><a className='home' href="#">HOME</a></li>
                    <li className='nav-item'><a className='projects-nav' href="#projects">PROJECTS</a></li>
                    <li className='nav-item'><a className='skills-nav' href="#skills">SKILLS</a></li>
                    <li className='nav-item'><a className='edu-nav' href="#education">EDUCATION</a></li>
                    <li className='nav-item'><a className='about-nav' href="#contact">CONTACT</a></li>
                </ul>
            </div>
    )
}
export default navbar
function heroSection(){
    return(
        <>
            <section className="herosec">
                <div className="left">
                    <h1>Sai Siva Mahesh <br /> Jyothula</h1>
                    <h4> I am <span className="dev">Devloper .</span></h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima necessitatibus corrupti debitis minus in, numquam omnis, fuga labore vel fugit hic rem aperiam porro laboriosam unde commodi distinctio. Maxime, autem.</p>
                    <div className="hero-end">
                        <div className="span-icon">
                            <span className="icon"><i className="fa-brands fa-linkedin fa-sm"></i></span>
                            <span className="icon"><i className="fa-brands fa-instagram fa-sm"></i></span>
                            <span className="icon"><i className="fa-solid fa-envelope fa-sm"></i></span>
                            <span className="icon"><i className="fa-brands fa-github fa-sm"></i></span>
                        </div>
                        <button className="resume"> Resume</button>
                    </div>
                </div>
                <div className="right">
                    <img src="\assets\21MH5A0437.jpg" alt="profile"/>
                </div>
               
            </section>
        </>
    )
}

export default heroSection

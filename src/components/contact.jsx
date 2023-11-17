function contact(){
    return(
        <section id="contact">
            <div className="form" >
                <input type="text"  id="name" placeholder="Name" />
                <input type="email"  id="email" placeholder="Email"/>
                <textarea id="review" name="review" rows="4" cols="50" placeholder="Content"></textarea>
                <button>Submit</button>
            </div>
        </section>
    )
    
}
export default contact
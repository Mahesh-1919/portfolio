function card(props){
    return(
        <div className="card">
            <img src="/src/assets/WEBSITE-COVER.jpg" alt="image" />
            <div className="content">
                <p>{props.descript}</p>
            </div>
        </div>
    )
}
export default card;
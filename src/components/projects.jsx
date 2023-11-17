import Card from "./card";

function projects(){
    return(
        <>
            <section className="projects" id='projects'>
                <h1>Projects</h1>
                <div className="p-card">
                    <Card descript='In this project we have Deployed a movie listing website in the AWS cloud infrastructure by providing the load balancing.
– Tools & technologies used: HTML, CSS, JavaScript,MongoDB,AWS and Docker.
– Here are some of the features of the project: Users can upload movie details and images,Anyone user can view the
movies data uploaded into the website. simple to use,Easy to Access.'/>
                    <Card descript='In this project,We have deployed, monitored, and run our containerized web application and databases using Amazon EKS.
– Tools & technologies used: HTML,CSS, JavaScript,Kubernetes,Docker,AWS,Prometheus,Grafana
– We automated the deployment,management, scaling, and operation of our web application using Kubernetes.
– We can monitor our kubernetes cluster using the powerful monitoring tools like Prometheus and Grafana.'/>
                    <Card descript='A Spotify Clone page displays the artists name with the songs they composed.
– Tools & technologies used: HTML, CSS.
– Developed a responsive webpage that mirrors the look and feel of the popular music streaming platform, Spotify.
'/>
                    <Card descript='The project displays the rating and details of a movie by using API
– Tools & technologies used: HTML, CSS,JavaScript,Express.js,MongoDB.
– Developed a responsive web page that displays information on upcoming, trending movies and their ratings. A
search API allows users to find specific movies and get their ratings.'/>
                   
                
                </div>
            </section>
        </>
    )
}

export default projects;
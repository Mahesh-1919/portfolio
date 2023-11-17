import {
    VerticalTimeline,
    VerticalTimelineElement
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  
  
  export default function education() {
    return (
      <section className="education" id="education">
        <h1>Education</h1>
        <VerticalTimeline >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - present"
            contentStyle={ { background: 'rgb(255, 255, 255)',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
            }}

            iconStyle={{ background: "blueviolet",color:'#fff',}}

          >
            <h3 className="vertical-timeline-element-title">Bachelor Of Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">Aditya College Of Engineering</h4>
            <p>
              Creative Direction,ser Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            contentStyle={ { background: 'rgb(255, 255, 255)',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
        }}
            iconStyle={{ background: "blueviolet", color: "#fff" }}

          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            contentStyle={ { background: 'rgb(255, 255, 255)',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
        }}
            iconStyle={{ background: "blueviolet", color: "#fff" }}

          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement> 
        </VerticalTimeline>
      </section>
    );
  }
  
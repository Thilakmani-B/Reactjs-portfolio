import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Media} from 'reactstrap';
class Project extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects:[
                {
                    id:0,
                    image:'assets/images/hc.png',
                    name:'Handcricket',
                    category:'web app',
                    label:'Game',
                    duration:'1 Month',
                    description:`A web game app developed by me, it's being developed as a PWA`
                },
                {
                    id:1,
                    image:'assets/images/armentum.png',
                    name:'Armentum',
                    category:'Web Site',
                    label:'Site',
                    duration:'1 Week',
                    description:`A web site developed by me for an intersnship assignment.`
                },
                {
                    id:2,
                    image:'assets/images/ci.png',
                    name:'Clean India',
                    category:'web site',
                    label:'site',
                    duration:'2 Days',
                    description:`A Web site developed by us for our college event to create awareness about clean india scheme`
                }
            ]
        };
    }

    render()
    {
        const projectList = this.state.projects.map((project) =>
        {
            return(
                <div key={project.id} className = "col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={project.image} alt={project.name}/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{project.name}</Media>
                            <p>{project.description}</p>
                            </Media> 
                    </Media>
                </div>
            );
        });

    return(
<div className="container">
<div className="row">
    <Media list>
        {projectList}
    </Media>
</div>
</div>
 );
}
}
export default Project;
import React, {Component} from 'react';
import {Media} from 'reactstrap';
{/*Only class constructor can have local state */}
class Project extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render()
    {
        {/*projects array converted into the list by using map method */}
        const projectList = this.props.projects.map((project) =>
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

import React, {Component} from 'react';
import {Media} from 'reactstrap';
{/*Only class constructor can have local state */}
class Project extends Component{
    constructor(props){
        super(props);
        this.state = {
            selecteProject:null
        };
    }
    onProjectSelected(project){
        this.setState({
            selectedProject:project
        });
    }
    renderProject(project)
    {
  if(project != null){
return(
<h3>
    Developer:{project.developer}<br />
    Duration:{project.duration}<br />
    Category:{project.category}
</h3>
);
  }
  else{
      return(
      <div></div>);
  }

    }  
    render()
    {
        {/*projects array converted into the list by using map method */}
        const projectList = this.props.projects.map((project) =>
        {
            return(
                <div key={project.id} className = "col-12 mt-5">
                    <Media tag="li" onClick={()=>this.onProjectSelected(project)}>
                        <Media left middle>
                            <Media object width="100px" src={project.image} alt={project.name}/>
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
<div className="container row" id="description">
{this.renderProject(this.state.selectedProject)}
</div>
</div>
 );
}
}

export default Project;

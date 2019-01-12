import * as React from 'react'
import ProjectThumbnail, { ProjectThumbnailProps } from './ProjectThumbnail'

const Projects = ({ projects }: ProjectListProps) => {
    return projects.map((value) => (<ProjectThumbnail children={value} />))
}
export interface ProjectListProps extends HTMLDivElement {
    projects?: ProjectThumbnailProps[]
}

class ProjectList extends React.Component<ProjectListProps> {
    render() {
        return (
            <div>
                {Projects(this.props)}
            </div>
        );
    }
}

export default ProjectList;

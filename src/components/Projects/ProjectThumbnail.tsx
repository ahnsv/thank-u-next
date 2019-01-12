import * as React from 'react';

export interface ProjectThumbnailProps {
    title?: string
    description?: string
    recent_update?: string
    tags?: string[]
    stars?: number
    links?: string[]
}

class ProjectThumbnail extends React.Component<ProjectThumbnailProps, {}> {
    constructor(props: ProjectThumbnailProps) {
        super(props)
    }
    render() {
        const props = { ...this.props }
        return (
            <div className="thumbnail">
                <div className="thumbnail--title">{props.title}</div>
                <div className="thumbnail--description">{props.description}</div>
                <div className="thumbnail--recentUpdate">{props.recent_update}</div>
                <div className="thumbnail--tags">{props.tags}</div>
                <span className="stars">{props.stars}</span>
                <button className="thumbnail--links">
                    <a href={props.links[0]}></a>
                </button>
            </div>
        );
    }
}

export default ProjectThumbnail;
import React from "react";

import moment from "moment";

export const VideoComponent = props => {
    const { id, title, channelTitle, publishedAt, description } = props.data;

    if (props.previous && !props.data) {
        return <p>No previous video.</p>;
    }

    const videoUrl = `https://www.youtube.com/embed/${id}`;
    const postDate = moment.utc(publishedAt).fromNow();
    const shortDescription = description.slice(0, description.indexOf(".") + 1);

    return (
        <div className="mb-3" >
            <div className="card">
                <div className="embed-responsive embed-responsive-16by9" >
                    <iframe src={videoUrl} frameBorder="0" allowFullScreen className="card-img-top embed-responsive-item w-100"></iframe>
                </div>
                <div className="card-body px-2 py-2 my-auto" >
                    {props.current
                        ? <div>
                            <a href="" ><p className="font-weight-bold" onClick={props.moveToCurrentVideo}>{title}</p></a>
                            <h6 className="font-italic">{channelTitle}</h6>
                            <p>{shortDescription}</p>
                        </div>
                        : <a href="" ><p className="font-weight-bold mb-2" onClick={props.moveToCurrentVideo}>{title}</p></a>  
                    }
                    <small>{postDate}</small>
                </div>
            </div>
        </div>
    );
};
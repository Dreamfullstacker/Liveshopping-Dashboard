import React, { Fragment , useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Breadcrumb from '../common/breadcrumb/breadcrumb' 
import {Container,Row,Col,Card, CardBody} from 'reactstrap';
import { isEmpty } from "lodash"
import styles from "./AdminVideo.module.css";
import VideoPlayer from "./VideoPlayer/LiveVideoPlayer";
import {
    Button,
    Form,
    Label,
    Input,
  } from "reactstrap";

import * as config from "../../config";

function NotFoundError() {
    return (
        <>
            <h1>Error: Video not found</h1>
        </>
    );
}


const  ScheduledVideo = () => {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let { id } = useParams();
    const [videoTitle, setVideoTitle] = useState("");
    const [videoSubtitle, setVideoSubtitle] = useState("");
    const [formChanged, setFormChanged] = useState(false);
    const [selectedThumbnail, setSelectedThumbnail] = useState("");
    const [videoURL, setVideoURL] = useState('');
    // const [showPreview, setShowPreview] = useState(false);
    const [metadata, setMetadata] = useState([]);

    const [response, setResponse] = useState(false);
    const [apiFetched, setApiFetched] = useState(false);

    const fetchAPI = () => {
      // Call API and set the matched value if we're mounted
      const getVideoUrl = `${config.API_URL}/channel/${currentUser.username}/video/${id}`;
      fetch(getVideoUrl)
        .then(response => response.json())
        .then((json) => {
          if (json.Item) {
            setResponse(json.Item);
            setApiFetched(true);
            console.log(json.Item)
          }
          else {
            setResponse(null)
          }
        })
        .catch((error) => {
          console.error(error);
        });
      }
    useEffect(() => {
        // Set mounted to true so that we know when first mount has happened
        let mounted = true;
        if (mounted && !apiFetched) {
            fetchAPI()
        }
        // Set mounted to false when the component is unmounted
        return () => { mounted = false };
    }, [fetchAPI]);
    
    if (response === null) return <NotFoundError/>
    if (isEmpty(response)) return (
        <section className="full-width screen-height fl fl-j-center fl-a-center">
        <h1> Loading ...</h1>
        </section>
    )
    return (
         <Fragment>
         <Breadcrumb parent="Dashboard / scheduledvideo" title={id} caption1 = "Scheduled" caption2 = "Video" description = ""/>
         <Container fluid={true}>
            <Row>
              <Col sm="12">
                <Card>
                  <CardBody>
                    <Row>
                        <Col sm="12" md="4">
                            <h3>Your video stream comes in : </h3>
                            <VideoPlayer
                                controls={true}
                                muted={true}
                                videoStream={response.PlaybackUrl}
                            />
                        </Col>
                        <Col sm="12" md="8">
                            <h3>Scheduled Video Detail</h3>
                            <fieldset style={{border : "none"}}>
                                
                            </fieldset>
                        </Col>
                    </Row>
                    <Row className='pt-3'>
                      <h3>Productions to insert as metadata</h3>
                      <div>
                      
                      </div>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>   
          </Fragment> 
    );
}

export default ScheduledVideo;
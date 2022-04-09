import React, { Fragment , useEffect, useState} from 'react';
import { useParams, Link } from "react-router-dom";
import Breadcrumb from '../common/breadcrumb/breadcrumb' 
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap';
import { isEmpty } from "lodash"
import styles from "./AdminVideo.module.css";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import API from "../../get-video-api";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
  } from "reactstrap";

import * as config from "../../config";

function putAPI(payload) {
    console.log("SAMPLE: PUT changes to api...");
    console.log(payload);
    console.log("=============================");
  }

function NotFoundError() {
    return (
        <>
            <h1>Error: Video not found</h1>
        </>
    );
}


function ThumbnailRadio(props) {

    const [imgError, setImageError] = useState(false);
  
    if(imgError) {
      return (
        <span></span>
      )
    }
    return (
      <>
        <input
          className={styles.thumbnailRadio}
          type="radio"
          id={props.id}
          name={props.name}
          value={props.value}
          checked={props.checked}
          onChange={props.onChange}
        />
        <label htmlFor={props.id}>
            <img
              alt={`${props.name}`}
              className={styles.thumbnailRadioImage}
              src={props.thumbnail}
              onError={e => setImageError(true)}
            />
        </label>
      </>
    );
  }

const  Sample = () => {

    let { id } = useParams();
    const [videoTitle, setVideoTitle] = useState("");
    const [videoSubtitle, setVideoSubtitle] = useState("");
    const [formChanged, setFormChanged] = useState(false);
    const [selectedThumbnail, setSelectedThumbnail] = useState("");
    const [showPreview, setShowPreview] = useState(false);

    const [response, setResponse] = useState(false);
    const [apiFetched, setApiFetched] = useState(false);

    const fetchAPI = () => {
        // Call API and set the matched value if we're mounted
        if (config.USE_MOCK_DATA && config.USE_MOCK_DATA === true){
          const API_RETURN = API.vods.find((vod) => vod.id === id);;
          setResponse(API_RETURN);
          setVideoTitle(API_RETURN.title);
          setVideoSubtitle(API_RETURN.subtitle);
          setSelectedThumbnail(API_RETURN.thumbnail);
          setApiFetched(true);
        } else {
          const getVideoUrl = `${config.API_URL}/video/${id}`;
          fetch(getVideoUrl)
            .then(function (response) {
              if (response.ok) {
                setApiFetched(true);
                return response.json()
              }
              else {
                return null;
              }
            })
            .then((res) => {
              if (!response && res) {
                setResponse(res);
                setVideoTitle(res.title);
                setVideoSubtitle(res.subtitle);
                setSelectedThumbnail(res.thumbnail);
                setApiFetched(true);
                console.log(res.playbackUrl)
              }
              else {
                setResponse(null)
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }
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
    
    const handleOnChange = (e) => {
        setFormChanged(true);
        switch (e.currentTarget.id) {
          case "title":
            setVideoTitle(e.currentTarget.value);
            break;
          case "subtitle":
            setVideoSubtitle(e.currentTarget.value);
            break;
          default:
            break;
        }
    };
    
    const handleThumbnailChange = (e) => {
        setFormChanged(true);
        setSelectedThumbnail(`${e.currentTarget.value}`);
    };
    
    const handleSave = () => {
        const payload = {
          title: videoTitle,
          subtitle: videoSubtitle,
          thumbnail: selectedThumbnail,
        };
        // Update API
    
        if (config.USE_MOCK_DATA && config.USE_MOCK_DATA === true) {
          putAPI(payload);
        } else {
          const putVideoUrl = `${config.API_URL}/video/${id}`;
          fetch(putVideoUrl, {
            method: 'PUT',
            body: JSON.stringify(payload)
          })
          .then(response => response.json())
          .then((res) => {
            setVideoTitle(res.title);
            setVideoSubtitle(res.subtitle);
          })
          .catch((error) => {
            console.error(error);
          });
        }
        // Hide save
        setFormChanged(false);
    };
    
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
          handleSave();
        }
    };

    if (response === null) return <NotFoundError/>
    if (isEmpty(response)) return (
        <section className="full-width screen-height fl fl-j-center fl-a-center">
        <h1> Loading ...</h1>
        </section>
    )
    return (
         <Fragment>
         <Breadcrumb parent="Dashboard / recordedvideo" title={id} caption1 = "Recorded" caption2 = "Video" description = ""/>
         <Container fluid={true}>
            <Row>
              <Col sm="12">
                <Card>
                  <CardBody>
                    <Row>
                        <Col sm="12" md="8">
                            <VideoPlayer
                                controls={true}
                                muted={true}
                                videoStream={response.playbackUrl}
                            />
                            <section className="pt-2">
                                <h3>Thumbnail</h3>
                                <fieldset className={styles.thumbnailSelectors} style = {{border : "none"}}>
                                <ThumbnailRadio
                                    id={response.thumbnails[0]}
                                    name={"thumbnail"}
                                    value={response.thumbnails[0]}
                                    checked={selectedThumbnail === `${response.thumbnails[0]}`}
                                    onChange={handleThumbnailChange}
                                    thumbnail={response.thumbnails[0]}
                                />
                                <ThumbnailRadio
                                    id={response.thumbnails[1]}
                                    name={"thumbnail"}
                                    value={response.thumbnails[1]}
                                    checked={selectedThumbnail === `${response.thumbnails[1]}`}
                                    onChange={handleThumbnailChange}
                                    thumbnail={response.thumbnails[1]}
                                />
                                <ThumbnailRadio
                                    id={response.thumbnails[2]}
                                    name={"thumbnail"}
                                    value={response.thumbnails[2]}
                                    checked={selectedThumbnail === `${response.thumbnails[2]}`}
                                    onChange={handleThumbnailChange}
                                    thumbnail={response.thumbnails[2]}
                                />
                                </fieldset>
                            </section>
                        </Col>
                        <Col sm="12" md="4">
                            <fieldset style={{border : "none"}}>
                                <Form>
                                    <div className="form-row my-3">
                                        <Label htmlFor="title" className='h3'>Video title</Label>
                                        <Input className="form-control"
                                            type="text"
                                            name="title"
                                            id="title"
                                            placeholder="Title"
                                            onChange={handleOnChange}
                                            onKeyPress={handleKeyPress}
                                            value={videoTitle}
                                        />
                                    </div>
                                    <div className="form-row my-3">
                                        <Label htmlFor="subtitle" className='h3'>Video subtitle</Label>
                                        <Input className="form-control"
                                            type="text"
                                            name="subtitle"
                                            id="subtitle"
                                            placeholder="Subtitle"
                                            value={videoSubtitle}
                                            onChange={handleOnChange}
                                            onKeyPress={handleKeyPress}
                                        />
                                    </div>
                                    <Button>Save Change</Button>
                                </Form>
                            </fieldset>
                        </Col>
                    </Row>
                    
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>   
          </Fragment> 
    );
}

export default Sample;
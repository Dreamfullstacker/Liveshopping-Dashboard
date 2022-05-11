import React, {useState, useEffect, Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb' 
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap';
import Videoplayer from './VideoPlayer/VideoPlayer'
import * as config from "../../config";

const  Liveshow = (props) => {
    const [timerID, setTimerID] = useState(false);
    const [productions, setProductions] = useState('')
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const checkVideoState = () => {
        // Call API and set the matched value if we're mounted
        const getVideosUrl = `${config.API_URL}/channel/${currentUser.username}/l_video`;
        fetch(getVideosUrl)
        .then(response => response.json())
        .then((json) => {
          setProductions(json.Productions)
          console.log(json.Productions);
        })
        .catch((error) => {
          console.error(error);
        });
      }
    function addProduction (i) {
        // e.preventDefault();
        console.log(productions[i]);
    }
    useEffect(() => {
        // Set mounted to true so that we know when first mount has happened
        let mounted = true;
        // console.log(currentUser.state_disable)
        if (!timerID && mounted) {
            checkVideoState();
          const timer = setInterval(() => {
            checkVideoState();
          }, 5000)
          setTimerID(timer);
        }
    
        // Set mounted to false & clear the interval when the component is unmounted
        return () => {
          mounted = false;
          clearInterval(timerID);
        }
      }, [timerID])
    return (
         <Fragment>
         <Container fluid={true} style={{paddingTop : '20px'}}>
            <Row>
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <Row style = {{display : "flex" , justifyContent : "center"}}>
                                <Col sm="12" md="6">
                                    <Videoplayer 
                                        controls={true}
                                        muted={true}
                                        videoStream="https://6978a891354b.eu-west-1.playback.live-video.net/api/video/v1/eu-west-1.263504711656.channel.ON1mIX5kLymP.m3u8"
                                    />
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row>
                            {
                                productions?
                                productions.map((production , i) => {
                                    return (
                                        <Col sm = "2" onClick={() => addProduction(i)}>
                                            <img  src={production.production_item_image_path} alt="Image description" style={{width : "100%", height : "auto"}}></img>
                                            <p>Productioin Name : {production.production_item_name}</p>
                                            <p>Productioin Price : {production.production_item_price}</p>
                                        </Col>
                                    
                                    );
                                })
                                :
                                <p>"erunt mollit anim id est laborum."</p>
                            }
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
          </Container>   
          </Fragment> 
    );
}

export default Liveshow;
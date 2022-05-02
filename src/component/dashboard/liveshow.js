import React, {useState, useEffect, Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb' 
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap';
import Videoplayer from './VideoPlayer/VideoPlayer'


const  Liveshow = (props) => {
    const [timerID, setTimerID] = useState(false);
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const checkVideoState = () => {
        
    }
    useEffect(() => {
        // Set mounted to true so that we know when first mount has happened
        let mounted = true;
        console.log(currentUser.state_disable)
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
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
          </Container>   
          </Fragment> 
    );
}

export default Liveshow;
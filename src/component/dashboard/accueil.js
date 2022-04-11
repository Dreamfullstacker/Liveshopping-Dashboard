import React, { Fragment , useEffect, useState} from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb' 
import {Container,Row,Col,Card,CardHeader,CardBody , Button} from 'reactstrap';
import { Link } from "react-router-dom";
// import VodCard from "./VodCard/VodCard";
import * as config from "../../config";

// import LiveAPI from "../../live-stream-api"; 
import API from "../../get-video-api";
import FormatTimestamp from "../../utility/FormatTimestamp";

function sortByKey(array, key) {
  return array.sort(function(a, b) {
    var x = a[key]; var y = b[key];
    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
  });
}

const  Sample = (props) => {
  const [response, setResponse] = useState({});
  const [timerID, setTimerID] = useState(false);

  const fetchAPI = () => {
    // Call API and set the matched value if we're mounted
    if (config.USE_MOCK_DATA && config.USE_MOCK_DATA === true){
      const vods = API.vods;
      setResponse(vods);
    } else {
      const getVideosUrl = `${config.API_URL}/videos`;

      fetch(getVideosUrl)
      .then(response => response.json())
      .then((res) => {
        const sortedVods = sortByKey(res.vods, "created_on")
        setResponse(sortedVods);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

  useEffect(() => {
    // Set mounted to true so that we know when first mount has happened
    let mounted = true;

    if (!timerID && mounted) {
      fetchAPI();
      const timer = setInterval(() => {
        fetchAPI();
      }, config.POLL_DELAY_MS)
      setTimerID(timer);
    }

    // Set mounted to false & clear the interval when the component is unmounted
    return () => {
      mounted = false;
      clearInterval(timerID);
    }
  }, [timerID])

  const formattedAPIResponse = [];

  // Format Thumbnail, title, subtitle, hint into array of objects
  for (let index = 0; index < response.length; index++) {
    const vod = response[index];
    const time = FormatTimestamp(vod.length);
    const hintMeta = `${vod.views} views • ${time}`;
    formattedAPIResponse.push({
      id: vod.id,
      title: vod.title,
      subtitle: vod.subtitle,
      hint: hintMeta,
      thumbnailUrl: vod.thumbnail,
    });
  }

    return (
         <Fragment>
         <Breadcrumb parent="Dashboard" title="Accueil" caption1 = "Votre" caption2 = "Dashboard" description = "GERER L'ENSEMBLE DE VOS SESSIONS LIVE"/>
         <Container fluid={true}>
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <div className='row justify-content-between'>
                      <h5>LIVE Vidéo Programmé</h5>
                      <Link to = {'live'}><Button>Create New Live</Button></Link>
                    </div>
                    
                  </CardHeader>
                  <CardBody>
                    <figure className="col-xl-3 col-md-4 col-6" itemProp="associatedMedia" itemScope="">
                      <a href="dashboard" itemProp="contentUrl" data-size="1600x950">
                        <img className="img-thumbnail" src={require('../../assets/images/lightgallry/01.png')} itemProp="thumbnail" alt="Image description"></img>
                      </a>
                      <figcaption itemProp="caption description">Titre de la vidéo programmée</figcaption>
                      <figcaption itemProp="caption description">Date : 01/01/2022</figcaption>
                    </figure>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>LIVE Vidéo Terminé</h5>
                  </CardHeader>
                  <CardBody className='row'>
                  {formattedAPIResponse.map((v, i) => {
                    return (
                      // <VodCard
                      //   key={v.id}
                      //   id={v.id}
                      //   title={v.title}
                      //   subtitle={v.subtitle}
                      //   hint={v.hint}
                      //   thumbnailUrl={v.thumbnailUrl}
                      //   linkType={props.linkType}
                      // />
                      
                      <figure className="col-xl-3 col-md-4 col-6" itemProp="associatedMedia" itemScope="" key={v.id} id={v.id}>
                        <Link to={`recordvideo/${v.id}`}>
                        {/* <a href="recordvideo" itemProp="contentUrl" data-size="1600x950"> */}
                          <img className="img-thumbnail" src={v.thumbnailUrl} itemProp="thumbnail" alt="Image description"></img>
                        {/* </a> */}
                        <figcaption itemProp="caption description">{v.title}</figcaption>
                        <figcaption itemProp="caption description">{v.subtitle}</figcaption>
                        <figcaption itemProp="caption description">Date : 01/01/2022</figcaption>
                        </Link>
                      </figure>
                      
                    );
                  })}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>   
          </Fragment> 
    );
}

export default Sample;
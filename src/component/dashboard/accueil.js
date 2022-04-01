import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb' 
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap';

import * as config from "../../config";

import LiveAPI from "../../live-stream-api";

const  Sample = (props) => {
    return (
         <Fragment>
         <Breadcrumb parent="Dashboard" title="Accueil" caption1 = "Votre" caption2 = "Dashboard" description = "GERER L'ENSEMBLE DE VOS SESSIONS LIVE"/>
         <Container fluid={true}>
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>LIVE Vidéo Programmé</h5>
                  </CardHeader>
                  <CardBody>
                    <figure className="col-xl-3 col-md-4 col-6" itemprop="associatedMedia" itemscope="">
                      <a href="../assets/images/big-lightgallry/01.jpg" itemprop="contentUrl" data-size="1600x950">
                        <img className="img-thumbnail" src={require('../../assets/images/lightgallry/01.jpg')} itemprop="thumbnail" alt="Image description"></img>
                      </a>
                      <figcaption itemprop="caption description">Titre de la vidéo programmée</figcaption>
                      <figcaption itemprop="caption description">Date : 01/01/2022</figcaption>
                    </figure>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>LIVE Vidéo Programmé</h5>
                  </CardHeader>
                  <CardBody className='row'>
                    <figure className="col-xl-3 col-md-4 col-6" itemprop="associatedMedia" itemscope="">
                      <a href="../assets/images/big-lightgallry/01.jpg" itemprop="contentUrl" data-size="1600x950">
                        <img className="img-thumbnail" src={require('../../assets/images/lightgallry/01.jpg')} itemprop="thumbnail" alt="Image description"></img>
                      </a>
                      <figcaption itemprop="caption description">Titre de la vidéo programmée</figcaption>
                      <figcaption itemprop="caption description">Date : 01/01/2022</figcaption>
                    </figure>
                    <figure className="col-xl-3 col-md-4 col-6" itemprop="associatedMedia" itemscope="">
                      <a href="../assets/images/big-lightgallry/01.jpg" itemprop="contentUrl" data-size="1600x950">
                        <img className="img-thumbnail" src={require('../../assets/images/lightgallry/01.jpg')} itemprop="thumbnail" alt="Image description"></img>
                      </a>
                      <figcaption itemprop="caption description">Titre de la vidéo programmée</figcaption>
                      <figcaption itemprop="caption description">Date : 01/01/2022</figcaption>
                    </figure>
                    <figure className="col-xl-3 col-md-4 col-6" itemprop="associatedMedia" itemscope="">
                      <a href="../assets/images/big-lightgallry/01.jpg" itemprop="contentUrl" data-size="1600x950">
                        <img className="img-thumbnail" src={require('../../assets/images/lightgallry/01.jpg')} itemprop="thumbnail" alt="Image description"></img>
                      </a>
                      <figcaption itemprop="caption description">Titre de la vidéo programmée</figcaption>
                      <figcaption itemprop="caption description">Date : 01/01/2022</figcaption>
                    </figure>
                    <figure className="col-xl-3 col-md-4 col-6" itemprop="associatedMedia" itemscope="">
                      <a href="../assets/images/big-lightgallry/01.jpg" itemprop="contentUrl" data-size="1600x950">
                        <img className="img-thumbnail" src={require('../../assets/images/lightgallry/01.jpg')} itemprop="thumbnail" alt="Image description"></img>
                      </a>
                      <figcaption itemprop="caption description">Titre de la vidéo programmée</figcaption>
                      <figcaption itemprop="caption description">Date : 01/01/2022</figcaption>
                    </figure>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>   
          </Fragment> 
    );
}

export default Sample;
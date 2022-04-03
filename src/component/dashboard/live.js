import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb' 
import { useForm } from "react-hook-form";
import TooltipForm from "./tooltip";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";


const  Live = (props) => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook

  const onSubmit = (data) => {
    if (data !== "") {
      alert("You submitted the form and stuff!");
    } else {
      errors.showMessages();
    }
  };
    return (
         <Fragment>
         <Breadcrumb parent="Dashboard" title="Live" caption1 = "Votre" caption2 = "Dashboard" description = "GERER L'ENSEMBLE DE VOS SESSIONS LIVE"/>
         <Container fluid={true}>
            <Row>
              <Col sm="12" md="6">
                <Card>
                  <CardHeader>
                    <h5>Programmez Votre LIVE Vidéo</h5><span>Commencer dès maintenant à programmer votre session LIVE vidéo . Consulter notre guide utilisateur pour plus d'information.</span>
                  </CardHeader>
                  <CardBody>
                  <Form 
                    className="needs-validation" 
                    novalidate=""
                    onSubmit={handleSubmit(onSubmit)}
                  >
                      <div className="form-row">
                        <Col md="4 mb-3">
                          <Label for="validationCustom01">Titre</Label>
                          <Input 
                            className="form-control" 
                            id="validationCustom01" 
                            type="text" 
                            placeholder="Titre" 
                            required=""
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </Col>
                      </div>
                      <div className="form-row">
                        <Col md="6 mb-3">
                          <Label for="exampleFormControlTextarea4">Description</Label>
                            <Input 
                              type='textarea'
                              className="form-control" 
                              id="exampleFormControlTextarea4" 
                              placeholder="Description" 
                              rows="3"
                            />
                          <div className="invalid-feedback">Merci d'entrer une description valide.</div>
                        </Col>
                      </div>
                      <div className="form-group form-row">
                          <Label className="col-sm-3 col-form-Label">Time Only</Label>
                          <div className="col-xl-5 col-sm-7 col-lg-8">
                            <div className="input-group date" id="dt-time" data-target-input="nearest">
                              <Input 
                                className="form-control datetimepicker-input digits" 
                                type="text" 
                                data-target="#dt-time"
                              />
                              <div className="input-group-append" data-target="#dt-time" data-toggle="datetimepicker">
                                <div className="input-group-text"><i className="fa fa-clock-o"></i></div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="form-group form-row">
                          <Label className="col-sm-3 col-form-Label">Date Only</Label>
                          <div className="col-xl-5 col-sm-7 col-lg-8">
                            <div className="input-group date" id="dt-date" data-target-input="nearest">
                              <Input className="form-control datetimepicker-input digits" type="text" data-target="#dt-date"/>
                              <div className="input-group-append" data-target="#dt-date" data-toggle="datetimepicker">
                                <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                              </div>
                            </div>
                          </div>
                      </div> 
                      <div className="form-row">
                        <Col md="6 mb-3">
                          <Label for="validationCustom03">Host</Label>
                          <Input className="form-control" id="validationCustom03" type="text" placeholder="Host" required=""/>
                          <div className="invalid-feedback">Merci de donner un host valide.</div>
                        </Col>
                      </div>
                      <div className="form-group">
                        <div className="form-check">
                          <div className="checkbox p-0">
                            <Input className="form-check-input" id="invalidCheck" type="checkbox" required=""/>
                            <Label className="form-check-Label" for="invalidCheck">Je suis d'accord avec les conditions générales d'utilisation</Label>
                          </div>
                          <div className="invalid-feedback">Vous devez cocher la case avant validation.</div>
                        </div>
                      </div>
                      <Button className="btn btn-primary" type="submit">Valider</Button>
                    </Form>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    <h5>Paramêtre Du Lecteur Vidéo</h5><span>Commencer dès maintenant à programmer votre session LIVE vidéo . Consulter notre guide utilisateur pour plus d'information.</span>
                  </CardHeader>
                  <CardBody>
                  <Form>
                      <div className="form-row">
                        <div className="form-group">
                          <div className="media">
                            <Label className="col-form-Label m-r-10">Cacher le chat en live</Label>
                            <div className="media-body text-right  icon-state">
                              <Label className="switch">
                                <Input type="checkbox" checked=""/><span className="switch-state"></span>
                              </Label>
                            </div>
                          </div>
                          <div className="media">
                            <Label className="col-form-Label m-r-10">Cacher le chat lors du replay</Label>
                            <div className="media-body text-right  icon-state">
                              <Label className="switch">
                                <Input type="checkbox" /><span className="switch-state"></span>
                              </Label>
                            </div>
                          </div>
                          <div className="media">
                            <Label className="col-form-Label m-r-10">Cacher le compteur de visites</Label>
                            <div className="media-body text-right icon-state">
                              <Label className="switch">
                                <input type="checkbox" checked="" /><span className="switch-state"></span>
                              </Label>
                            </div>
                          </div>
                          <div className="media">
                            <Label className="col-form-Label m-r-10">Autoriser le replay</Label>
                            <div className="media-body text-right icon-state">
                              <Label className="switch">
                                <input type="checkbox" /><span className="switch-state"></span>
                              </Label>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Form>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    <h5>Source De Votre Vidéo</h5><span>Vous pouvez soit streamer votre live depuis votre smartphone, soit streamer depuis votre ordianteur en utilisant un logiciel comme OBS, ou alors déposer une vidéo pré-enregistrer.</span>
                  </CardHeader>
                  <CardBody>
                  <Form>
                      <div className="form-row">
                        <div className="form-group">
                          <Label for="validationDefault03">Vous pouvez choisir ici la source de votre vidéo à diffuser</Label>
                          <Input type="select" className="custom-select" required="">
                            <option value="">Choisissez la source de la vidéo</option>
                            <option value="1">Application smartphone</option>
                            <option value="2">OBS sur ordinateur</option>
                            <option value="3">Vidéo pré-enregistrée</option>
                          </Input>
                          <div className="invalid-feedback">Example invalid custom select feedback</div>
                        </div>
                        <div class="custom-file m-b-20">
                          <input class="custom-file-input" id="validatedCustomFile" type="file" required=""></input>
                          <label class="custom-file-label" for="validatedCustomFile">Choisir votre fichier vidéo au format .mp4...</label>
                          <div class="invalid-feedback">Example invalid custom file feedback</div>
                        </div>
                      </div>
                      <Button className="btn btn-primary" type="submit">Valider</Button>
                    </Form>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    <h5>Code D'ingestion Du Stream</h5><span>Copier / coller l'url du serveur RTMP dans votre logiciel de stream ou sur une application de stream de votre smartphone.</span>
                  </CardHeader>
                  <CardBody>
                    <Form classNmae="needs-validation" novalidate="">
                      <div className="form-row">
                        <Col md="6 mb-3">
                          <Label for="validationCustom03">Serveur RTMP</Label>
                          <Input className="form-control" id="validationCustom03" type="text" placeholder="rtmps://8be14badebca.global-contribute.live-video.net:443/app/" required=""/>
                          <div className="invalid-feedback">Merci de donner un host valide.</div>
                        </Col>
                      </div>

                      <div className="form-row">
                        <Col md="6 mb-3">
                          <Label for="validationCustom03">Clé de stream</Label>
                          <Input className="form-control" id="validationCustom03" type="text" placeholder="sk_eu-west-1_J7RjK5VttCW6_smPa4C8khzuGjCAaZ8bJE2AdniEG4i" required=""/>
                          <div className="invalid-feedback">Merci de donner un host valide.</div>
                        </Col>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" md="6">
                <Card>
                  <CardHeader>
                    <h5>Produits À Mettre En Avant</h5><span>Ces produits apparaitront sur la vidéo LIVE de votre session . Vous pourrez promouvoir ceux-ci dans votre live.</span>
                  </CardHeader>
                  <CardBody>
                  <Form className="needs-validation" novalidate="">
                      <div className="form-row">
                        <Col md="4 mb-3">
                          <Label for="validationCustom01">Nom de l'article</Label>
                          <Input className="form-control" id="validationCustom01" type="text" placeholder="Article" required=""/>
                          <div className="valid-feedback">Ca semble correct !</div>
                        </Col>
                      </div>
                      <div className="form-row">
                        <Col md="6 mb-3">
                          <Label for="exampleFormControlTextarea4">Désignation</Label>
                          <Input type="textarea" className="form-control" id="exampleFormControlTextarea4" placeholder="designation" rows="3"/>
                          <div className="invalid-feedback">Merci d'entrer une désignation valide.</div>
                        </Col>
                       </div>
                       <div className="form-row">
                        <Col md="6 mb-3">
                          <Label for="exampleFormControlTextarea4">Prix</Label>
                          <Input className="form-control" id="validationCustom01" placeholder="Prix" rows="3"/>
                          <div className="invalid-feedback">Merci d'entrer une désignation valide.</div>
                        </Col>
                       </div>
                       <div className="form-row">
                        <Col md="6 mb-3">
                          <Label for="exampleFormControlTextarea4">Remise</Label>
                          <Input className="form-control" id="validationCustom01" placeholder="Remise" rows="3"/>
                          <div className="invalid-feedback">Merci d'entrer une désignation valide.</div>
                        </Col>
                       </div>
                       <div className="form-row">
                        <Col md="6 mb-3">
                          <Label for="exampleFormControlTextarea4">Prix avec remise</Label>
                          <Input className="form-control" id="validationCustom01" placeholder="Prix avec remise" rows="3"/>
                          <div className="invalid-feedback">Merci d'entrer une désignation valide.</div>
                        </Col>
                       </div>
                      <div className="form-row">
                        <Col md="6 mb-3">
                          <Label for="validationCustom03">Url de l'article</Label>
                          <Input className="form-control" id="validationCustom03" type="text" placeholder="url" required=""/>
                          <div className="invalid-feedback">Merci de donner une url valide.</div>
                        </Col>
                       </div>
                      <div className="form-row">
                          <Col md="6 mb-3">
                            <Label for="validationCustom04">Image de l'article</Label>
                          </Col>
                          <div class="custom-file">
                          <input class="custom-file-input" id="validatedCustomFile" type="file" required=""></input>
                          <label class="custom-file-label" for="validatedCustomFile">Choisir votre fichier image au format .jpg</label>
                          <div class="invalid-feedback">Example invalid custom file feedback</div>
                        </div>
                      </div>
                      <div className="form-group">
                      </div>
                      <Button className="btn btn-primary m-t-20" type="submit">Ajouter l'article</Button>
                    </Form>
                  </CardBody>
                  <CardBody>
                  <div class="table-responsive product-table">
                      <div id="basic-1_wrapper" class="dataTables_wrapper no-footer"><div class="dataTables_length" id="basic-1_length"><label>Show <select name="basic-1_length" aria-controls="basic-1" class=""><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div><div id="basic-1_filter" class="dataTables_filter"><label>Search:<input type="search" class="" placeholder="" aria-controls="basic-1"/></label></div><table class="display dataTable no-footer" id="basic-1" role="grid" aria-describedby="basic-1_info">
                        <thead>
                          <tr role="row"><th class="sorting" tabindex="0" aria-controls="basic-1" rowspan="1" colspan="1" aria-label="Image: activate to sort column ascending" style={{width: "64.5px"}}>Image</th><th class="sorting_asc" tabindex="0" aria-controls="basic-1" rowspan="1" colspan="1" aria-label="Description: activate to sort column descending" style={{width: "165.297px"}} aria-sort="ascending">Description</th><th class="sorting" tabindex="0" aria-controls="basic-1" rowspan="1" colspan="1" aria-label="Prix: activate to sort column ascending" style={{width: "27.7031px"}}>Prix</th><th class="sorting" tabindex="0" aria-controls="basic-1" rowspan="1" colspan="1" aria-label="Remise: activate to sort column ascending" style={{width: "53.9219px"}}>Remise</th><th class="sorting" tabindex="0" aria-controls="basic-1" rowspan="1" colspan="1" aria-label="Prix remisé: activate to sort column ascending" style={{width: "52.2031px"}}>Prix remisé</th><th class="sorting" tabindex="0" aria-controls="basic-1" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending" style={{width: "132.875px"}}>Action</th></tr>
                        </thead>
                        <tbody>
                          <tr role="row" class="odd">
                            <td class=""><img src="../assets/images/ecommerce/product-table-5.png" alt=""/></td>
                            <td class="sorting_1">
                              <h6> Black Lipstick </h6>
                              <p>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</p>
                            </td>
                            <td class="">$10</td>
                            <td class="font-success">In Stock</td>
                            <td>9</td>
                            <td>
                              <button class="btn btn-danger btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Supprimer</button>
                              <button class="btn btn-success btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Effacer</button>
                            </td>
                          </tr><tr role="row" class="even">
                            <td class=""><img src="../assets/images/ecommerce/product-table-3.png" alt=""/></td>
                            <td class="sorting_1">
                              <h6> Gray Lipstick </h6>
                              <p>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</p>
                            </td>
                            <td class="">$10</td>
                            <td class="font-danger">10%</td>
                            <td>9</td>
                            <td>
                              <button class="btn btn-danger btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Supprimer</button>
                              <button class="btn btn-success btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Effacer</button>
                            </td>
                          </tr><tr role="row" class="odd">
                            <td class=""><img src="../assets/images/ecommerce/product-table-4.png" alt=""/></td>
                            <td class="sorting_1">
                              <h6> Green Lipstick </h6>
                              <p>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</p>
                            </td>
                            <td class="">$10</td>
                            <td class="font-primary">10%</td>
                            <td>9</td>
                            <td>
                              <button class="btn btn-danger btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Supprimer</button>
                              <button class="btn btn-success btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Effacer</button>
                            </td>
                          </tr><tr role="row" class="even">
                            <td class=""><img src="../assets/images/ecommerce/product-table-2.png" alt=""/></td>
                            <td class="sorting_1">
                              <h6> Pink Lipstick </h6>
                              <p>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</p>
                            </td>
                            <td class="">10</td>
                            <td class="font-primary">10%</td>
                            <td>9</td>
                            <td>
                              <button class="btn btn-danger btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Supprimer</button>
                              <button class="btn btn-success btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Effacer</button>
                            </td>
                          </tr><tr role="row" class="odd">
                            <td class=""><img src="../assets/images/ecommerce/product-table-1.png" alt=""/></td>
                            <td class="sorting_1">
                              <h6> Red Lipstick </h6><span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
                            </td>
                            <td class="">10</td>
                            <td class="font-success">10%</td>
                            <td>9</td>
                            <td>
                              <button class="btn btn-danger btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Supprimer</button>
                              <button class="btn btn-success btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Effacer</button>
                            </td>
                          </tr><tr role="row" class="even">
                            <td class=""><img src="../assets/images/ecommerce/product-table-6.png" alt=""/></td>
                            <td class="sorting_1">
                              <h6> White Lipstick </h6>
                              <p>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</p>
                            </td>
                            <td class="">$10</td>
                            <td class="font-primary">Low Stock</td>
                            <td>9</td>
                            <td>
                              <button class="btn btn-danger btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Supprimer</button>
                              <button class="btn btn-success btn-xs" type="button" data-original-title="btn btn-danger btn-xs" title="">Effacer</button>
                            </td>
                          </tr></tbody>
                      </table><div class="dataTables_info" id="basic-1_info" role="status" aria-live="polite">Showing 1 to 6 of 6 entries</div><div class="dataTables_paginate paging_simple_numbers" id="basic-1_paginate"><a class="paginate_button previous disabled" aria-controls="basic-1" data-dt-idx="0" tabindex="0" id="basic-1_previous">Previous</a><span><a class="paginate_button current" aria-controls="basic-1" data-dt-idx="1" tabindex="0">1</a></span><a class="paginate_button next disabled" aria-controls="basic-1" data-dt-idx="2" tabindex="0" id="basic-1_next">Next</a></div></div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              
            </Row>
          </Container>   
          </Fragment> 
    );
}

export default Live;
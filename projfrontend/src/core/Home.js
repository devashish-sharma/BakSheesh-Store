import React, { useState, useEffect } from 'react';
import '../styles.css';
import { API } from '../backend';
import Base from './Base';
import '../styles.css';
import c1 from '../images/g1.jpg';
import c2 from '../images/g2.jpg';
import c3 from '../images/g3.jpg';
import c4 from '../images/g4.jpg';
import c5 from '../images/g7.jpg';
import c6 from '../images/g8.jpg';
import c7 from '../images/g9.jpg';
import g4 from '../images/gift-gif-3.gif';
import Card from './Card';
import { getProducts } from './helper/coreapicalls';

const Home = () => {

  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)

  const loadAllProducts = () => {
    getProducts().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    })
  }

  useEffect(() => {
    loadAllProducts();
  }, [])

  return (
    <Base title="Home Page" description="Welcome to the BakSheesh Store">

      <div className="container-fluid mt-1">
        <div id="carouselExampleFade" className="carousel slide  rounded" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="2000" data-pause="hover">
              <img src={c1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button type="button" className="btn btn-warning text-dark btn-banner">Get started</button>
              </div>
            </div>
            <div className="carousel-item" data-interval="2000">
              <img src={c2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button type="button" className="btn btn-warning text-dark btn-banner">Get started</button>
              </div>
            </div>
            <div className="carousel-item" data-interval="2000">
              <img src={c3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button type="button" className="btn btn-warning text-dark btn-banner">Get started</button>
              </div>
            </div>
            <div className="carousel-item" data-interval="2000">
              <img src={c4} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button type="button" className="btn btn-warning text-dark btn-banner">Get started</button>
              </div>
            </div>
            <div className="carousel-item" data-interval="2000">
              <img src={c5} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button type="button" className="btn btn-warning text-dark btn-banner">Get started</button>
              </div>
            </div>
            <div className="carousel-item" data-interval="2000">
              <img src={c6} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button type="button" className="btn btn-warning text-dark btn-banner">Get started</button>
              </div>
            </div>
            <div className="carousel-item" data-interval="2000">
              <img src={c7} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button type="button" className="btn btn-warning text-dark btn-banner">Get started</button>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      {/* Products */}
      <div className="container-fluid mt-2">
        <h1 className="text-while ">All of Tshirts</h1>
          {products.map((product, index) => {
            return (
              <Card product={product} />
            )
          })}
      </div>

      <div className="container-fluid mt-2">
        <div className="card text-center progress-bar-striped progress-bar-animated bg-warning">
          <div className="card-header" id="pmd-inbox-headingOne">
            <h5 className="mb-0">
              <button className="btn btn-link active text-white" data-toggle="collapse" data-target="#pmd-accordion-colored-icon-collapseOne" aria-expanded="true" aria-controls="pmd-accordion-colored-icon-collapseOne">
                <i className="fa fa-smile text-white pmd-sm pmd-accordion-icon-left"></i>
               Collapsible Group Item #1
				<i className="fa fa-arrow-down text-white md-light pmd-sm pmd-accordion-arrow"></i>
              </button>
            </h5>
          </div>
          <div id="pmd-accordion-colored-icon-collapseOne" className="collapse" aria-labelledby="pmd-accordion-colored-icon-headingOne" data-parent="#pmd-accordion-colored-icon">
            <div className="card-body text-justify">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
          </div>
        </div>
      </div>


      <div className="container-fluid mt-2">
        <div className="row no-gutters bg-light position-relative mt-1">
          <div className="col-md-6 mb-md-0 p-md-3">
            <img src={g4} className="w-100" alt="..." />
          </div>
          <div className="col-md-6 position-static p-4 pl-md-0 text-justify text-dark">
            <h5 className="mt-0">Hey, Hey, welcome to Grandma's Gift Shop!</h5>
            <p>
              We hope to provide you all with an easy way to find and purchase quality products for yourself and your loved ones. We are always on the lookout for new products, so please keep coming back to checkout the latest goodies available for your precious ones.</p>
            <a href="/" className="text-link">Go somewhere</a>
          </div>
        </div>
      </div>


      <div className="container-fluid mt-2">
        <div id="pmd-accordion-colored-icon" >



          <div className="card text-center progress-bar-striped progress-bar-animated bg-success mt-2">
            <div className="card-header" id="pmd-accordion-colored-icon-headingTwo">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed text-white" data-toggle="collapse" data-target="#pmd-accordion-colored-icon-collapseTwo" aria-expanded="false" aria-controls="pmd-accordion-colored-icon-collapseTwo">
                  <i className="fa fa-arrow-down text-white pmd-sm pmd-accordion-icon-left"></i>
               Collapsible Group Item #2
						<i className="fa fa-arrow-down text-white md-light pmd-sm pmd-accordion-arrow"></i>
                </button>
              </h5>
            </div>
            <div id="pmd-accordion-colored-icon-collapseTwo" className="collapse" aria-labelledby="pmd-accordion-colored-icon-headingTwo" data-parent="#pmd-accordion-colored-icon">
              <div className="card-body text-justify">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
            </div>
          </div>

          <div className="card text-center progress-bar-striped progress-bar-animated bg-primary mt-2">
            <div className="card-header" id="pmd-accordion-colored-icon-headingThree">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed text-white" data-toggle="collapse" data-target="#pmd-accordion-colored-icon-collapseThree" aria-expanded="false" aria-controls="pmd-accordion-colored-icon-collapseThree">
                  <i className="fa fa-user text-white pmd-sm pmd-accordion-icon-left"></i>
                Collapsible Group Item #3
				<i className="fa fa-arrow-down text-white md-light pmd-sm pmd-accordion-arrow"></i>
                </button>
              </h5>
            </div>
            <div id="pmd-accordion-colored-icon-collapseThree" className="collapse" aria-labelledby="pmd-accordion-colored-icon-headingThree" data-parent="#pmd-accordion-colored-icon">
              <div className="card-body text-justify">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container-fluid mt-2">
        <nav className="w-auto">
          <div className="nav nav-pills" id="nav-tab" role="tablist">
            <a className="nav-item nav-link active text-white" id="nav-home-tab" data-toggle="pill" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
            <a className="nav-item nav-link text-white" id="nav-profile-tab" data-toggle="pill" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
            <a className="nav-item nav-link text-white" id="nav-contact-tab" data-toggle="pill" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
          </div>
        </nav>
        <div className="tab-content bg-light" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">      <div className="row no-gutters bg-light position-relative mb-3 mt-1">
            <div className="col-md-6 mb-md-0 p-md-3">
              <img src={c1} className="w-100" alt="..." />
            </div>
            <div className="col-md-6 position-static p-4 pl-md-0 text-justify text-dark">
              <h5 className="mt-0">Columns with stretched link</h5>
              <p>In this study, data collected from 120 rural households located in two distinct socio-cultural locales of Benin was used to assess the impact of 20 development projects on agricultural productivity. A 'with-without' approach of impact
              evaluation is followed using ANOVA and econometric regressions. Results reveal no significant differences of projects on agricultural productivity between participants in the two study zones. Econometric regression estimates show
              significantly positive impacts on agricultural productivity for two selected project indicators in the two study zones. However, the goal achievement index was more remarked in the Adja area, where the projects were found to have
                        better addressed</p>
              <a href="/" className="text-link">Go somewhere</a>
            </div>
          </div>
          </div>
          <div className="tab-pane fade show " id="nav-profile" role="tabpanel" aria-labelledby="nav-home-tab">      <div className="row no-gutters bg-light position-relative mb-3 mt-1">
            <div className="col-md-6 mb-md-0 p-md-3">
              <img src={c2} className="w-100" alt="..." />
            </div>
            <div className="col-md-6 position-static p-4 pl-md-0 text-justify text-dark">
              <h5 className="mt-0">Columns with stretched link</h5>
              <p>In this study, data collected from 120 rural households located in two distinct socio-cultural locales of Benin was used to assess the impact of 20 development projects on agricultural productivity. A 'with-without' approach of impact
              evaluation is followed using ANOVA and econometric regressions. Results reveal no significant differences of projects on agricultural productivity between participants in the two study zones. Econometric regression estimates show
              significantly positive impacts on agricultural productivity for two selected project indicators in the two study zones. However, the goal achievement index was more remarked in the Adja area, where the projects were found to have
                        better addressed</p>
              <a href="/" className="text-link">Go somewhere</a>
            </div>
          </div>
          </div>

          <div className="tab-pane fade show " id="nav-contact" role="tabpanel" aria-labelledby="nav-home-tab">      <div className="row no-gutters bg-light position-relative mb-3 mt-1">
            <div className="col-md-6 mb-md-0 p-md-3">
              <img src={c3} className="w-100" alt="..." />
            </div>
            <div className="col-md-6 position-static p-4 pl-md-0 text-justify text-dark">
              <h5 className="mt-0">Columns with stretched link</h5>
              <p>In this study, data collected from 120 rural households located in two distinct socio-cultural locales of Benin was used to assess the impact of 20 development projects on agricultural productivity. A 'with-without' approach of impact
              evaluation is followed using ANOVA and econometric regressions. Results reveal no significant differences of projects on agricultural productivity between participants in the two study zones. Econometric regression estimates show
              significantly positive impacts on agricultural productivity for two selected project indicators in the two study zones. However, the goal achievement index was more remarked in the Adja area, where the projects were found to have
                        better addressed</p>
              <a href="/" className="text-link">Go somewhere</a>
            </div>
          </div>
          </div>

        </div>
      </div>
    </Base>
  );
}


export default Home;
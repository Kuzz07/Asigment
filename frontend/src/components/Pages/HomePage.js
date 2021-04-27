import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Layout/Footer/Footer';


class HomePage extends React.Component{

    render(){
        return(
            <>
            <div className = "">

                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={process.env.PUBLIC_URL + "/images/slide1.jfif"} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={process.env.PUBLIC_URL + "/images/slide2.jpg"} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={process.env.PUBLIC_URL + "/images/slide3.jpg"} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


<section className = "section about-section" id= "section-1">
<div className = "container">
<div className = "row ">
            <div className = "col-md-6">
                    <img src = {process.env.PUBLIC_URL + "/images/body.png"} className = "img-fluid" style = {{height : "400px"}}/>
            </div>
            <div className = "col-md-6">
                <h1 className = "text-center title-primary about-title">Balance Your Body Mind And Spirit</h1>
                <p className = "text-justify mt-3 about-p">We are the continuously increasing massage therapy industry in Nepal.
<br></br><br></br>
Start a healthy lifestyle with exercise, spa cuisine and relax. Make some healthy changes in your life while keeping up with a professional career.
 Sometimes you just need to get away and spend some quiet time alone.
<br></br><br></br>
At Tranquility spa we offer over fifty services to nourish your skin, reduce stress,
detoxify your body and more. Take a break from your everyday routine to relax, refresh
and rejuvenate yourself with our spa treatments from our trained and experienced professionals.</p>
 </div>
</div>
</div>
</section>


<section className = "section offers-section" id = "section-2">
    <div className = "container mb-5">
        <h5 className = "text-center">Time to Relax</h5>
        <h1 className = "text-center title-primary offer-title">Our Packages</h1>

        <div className = "row">
            <div className = "col-md-4">
                <div className = "box">
                    <div className = "box-img">
                        <img src = {process.env.PUBLIC_URL + "/images/slide3.jpg"} className = "img-fluid"/>
                    </div>
                    <div className = "box-details p-5">
                        <h2>Valentine's Special Offer</h2>
                    </div>
                    <div className = "p-3 bg-green">
                        <h4 className = "text-center text-white">View Package</h4>
                    </div>
                    </div>
            </div>

            <div className = "col-md-4">
                <div className = "box">
                    <div className = "box-img">
                        <img src = {process.env.PUBLIC_URL + "/images/slide3.jpg"} className = "img-fluid"/>
                    </div>
                    <div className = "box-details p-5">
                        <h2>Dashain Special Offer</h2>
                    </div>
                      <div className = "p-3 bg-green">
                        <h4 className = "text-center text-white">View Package</h4>
                    </div>
                    </div>
            </div>

            <div className = "col-md-4">
                <div className = "box">
                    <div className = "box-img">
                        <img src = {process.env.PUBLIC_URL + "/images/slide3.jpg"} className = "img-fluid"/>
                    </div>
                    <div className = "box-details p-5">
                        <h2>New Year Special Offer</h2>
                    </div>
                      <div className = "p-3 bg-green">
                        <h4 className = "text-center text-white">View Package</h4>
                    </div>
                    </div>
            </div>

            <div className = "col-md-4">
                <div className = "box">
                    <div className = "box-img">
                        <img src = {process.env.PUBLIC_URL + "/images/slide3.jpg"} className = "img-fluid"/>
                    </div>
                    <div className = "box-details p-5">
                        <h2>Aniversery's Special Offer</h2>
                    </div>
                      <div className = "p-3 bg-green">
                        <h4 className = "text-center text-white">View Package</h4>
                    </div>
                    </div>
            </div>

            <div className = "col-md-4">
                <div className = "box">
                    <div className = "box-img">
                        <img src = {process.env.PUBLIC_URL + "/images/slide3.jpg"} className = "img-fluid"/>
                    </div>
                    <div className = "box-details p-5">
                        <h2>Valentine's Special Offer</h2>
                    </div>
                      <div className = "p-3 bg-green">
                        <h4 className = "text-center text-white">View Package</h4>
                    </div>
                    </div>
            </div>
            <div className = "col-md-4">
                <div className = "box">
                    <div className = "box-img">
                        <img src = {process.env.PUBLIC_URL + "/images/slide3.jpg"} className = "img-fluid"/>
                    </div>
                    <div className = "box-details p-5">
                        <h2>Valentine's Special Offer</h2>
                    </div>
                      <div className = "p-3 bg-green">
                        <h4 className = "text-center text-white">View Package</h4>
                    </div>
                    </div>
            </div>
        </div>
    </div>


    <div className = "m-auto d-flex" style = {{width : "150px"}}><button className = "custom-btn w-100">View All Offers</button><div className = "arrow-box"><i className = "fa fa-arrow-right"></i></div></div>
</section>

<section className = "section services-section">
    <div className= "container mb-5">
        <h5 className = "text-center">Get Genuine Product</h5>
        <h1 className = "text-center title-primary offer-title">Our Products</h1>

        <div className = "row">
            <div className = "col-md-3">
                <div className = "box">
                    <div className = "box-img">
                        <img src = {process.env.PUBLIC_URL + "/images/Abodyloction.jpg"} className = "img-fluid w-100"/>
                    </div>
                    <div className = "box-details p-5 bg-white d-block">
                        <h4>Aroma Body Loction</h4>
                        <p>It is a combination of carefully selected oil and Newari Traditional and Swedish massage that is designed to deliver a sense of well-being by increasing bl...</p>
                    </div>
                    <Link to = "/showallproduct">
                    <div className = "p-3 bg-green ">
                        <h4 className = "text-center text-white" >More Info</h4>
                    </div>
                    </Link>
                    </div>
            </div>


            <div className = "col-md-3">
                <div className = "box">
                    <div className = "box-img">
                        <img src = {process.env.PUBLIC_URL + "/images/Acleasing.jpg"} className = "img-fluid w-100"/>
                    </div>
                    <div className = "box-details p-5 bg-white d-block">
                        <h4>Aroma Cleasing Cream</h4>
                        <p>It is a combination of carefully selected oil and Newari Traditional and Swedish massage that is designed to deliver a sense of well-being by increasing bl...</p>
                    </div>
                    <Link to = "/product">
                    <div className = "p-3 bg-green ">
                        <h4 className = "text-center text-white" >More Info</h4>
                    </div>
                    </Link>
                    </div>
            </div>
            <div className = "col-md-3">
                <div className = "box">
                    <div className = "box-img">
                        <img src = {process.env.PUBLIC_URL + "/images/Ascrub.jpg"} className = "img-fluid w-100"/>
                    </div>
                    <div className = "box-details p-5 bg-white d-block">
                        <h4>Aroma Face Scrub</h4>
                        <p>It is a combination of carefully selected oil and Newari Traditional and Swedish massage that is designed to deliver a sense of well-being by increasing bl...</p>
                    </div>
                    <Link to = "/product">
                    <div className = "p-3 bg-green ">
                        <h4 className = "text-center text-white" >More Info</h4>
                    </div>
                    </Link>
                    </div>
            </div>
            <div className = "col-md-3">
                <div className = "box">
                    <div className = "box-img">
                        <img src = {process.env.PUBLIC_URL + "/images/Abscrub.jpg"} className = "img-fluid w-100"/>
                    </div>
                    <div className = "box-details p-5 bg-white d-block">
                        <h4>Aroma Body Scrub</h4>
                        <p>It is a combination of carefully selected oil and Newari Traditional and Swedish massage that is designed to deliver a sense of well-being by increasing bl...</p>
                    </div>
                    <Link to = "/product">
                    <div className = "p-3 bg-green ">
                        <h4 className = "text-center text-white" >More Info</h4>
                    </div>
                    </Link>
                    </div>
            </div>
        </div>
        
    </div>
    <div className = "m-auto d-flex" style = {{width : "160px"}}><button className = "custom-btn w-100">View All Product
    
    </button><div className = "arrow-box"><Link to = "/showallproduct"></Link><i className = "fa fa-arrow-right"></i></div>
    </div>

</section>

            </div>
            {/* <Footer/> */}
            </>
        )
    }

}


export default HomePage;


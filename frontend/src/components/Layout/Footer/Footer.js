import React from 'react'

class Footer extends React.Component{

    render(){
        return(
          
<footer className="bg-light text-center text-lg-start mt-5">

<div className = "col-md-2">
                    <div className = "logo-container">
                        <img src = {process.env.PUBLIC_URL + "/images/logo.png"} className = "img-fluids"/>
                    </div>
                    </div>
  <div className="container p-4">
    
   
    <div className="row">
    
      <div className="col-lg-5 col-md-10 mb-4 mb-md-0">
       <p>
        Established in 2004,
        <br></br> 
        The Tranquility spa has become the leader in spa and wellness industry with <br></br>
        numerous outlets in different cities and luxury hotels in Nepal and abroad.
        </p>
      </div>
    

    
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        

        <ul className="list-unstyled mb-0">
          <li>
            <a href="http://localhost:3001/" className="text-dark">Home</a>
          </li>
          <li>
            <a href="http://localhost:3001/about" className="text-dark">About us</a>
          </li>
          <li>
            <a href="http://localhost:3001/showallpackages" className="text-dark">Package</a>
          </li>
          <li>
            <a href="http://localhost:3001/Showallproduct" className="text-dark">Product</a>
          </li>
        </ul>
      </div>
     

     
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h3 className="text-uppercase mb-0">Social Media</h3>

        <ul className="list-unstyled">
          <li>
            <a href="https://www.facebook.com/" className="text-dark">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/?hl=en" className="text-dark">Instagram</a>
          </li>
          <li>
            <a href="https://www.youtube.com/" className="text-dark">Our YouTube</a>
          </li>
          <li>
            <a href="https://twitter.com/" className="text-dark">Twitter</a>
          </li>
        </ul>
      </div>
    
    </div>
   
  </div>
  


  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
   <b>Please Review us on : </b>
    <a className="text-dark" href="https://www.tripadvisor.com/Attraction_Review-g293890-d13325805-Reviews-Tranquility_Spa-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_Region.html">Tranqulityspa</a>
  </div>

</footer>

        )
    }
}

export default Footer;
import React from 'react'
import Footer from '../Layout/Footer/Footer';

export default class AboutPage extends React.Component {
    render() {
        return (
            <>
            <div>
                <section className="section pt-3" id="section">
                    <div className="container mb-5">
                        <h1 className="text-center title-primary offer-title"> About Us </h1>
                    </div>
                    <section className="section about-section" id="section-6">
                        <div className="container">
                            <div className="row ">
                                <div className="col-md-6">
                                    <img src={process.env.PUBLIC_URL + "/images/bb.jpg"} className="img-fluid" style={{ height: "350px" }} />
                                </div>
                                <div className="col-md-6">
                                    <p className="text-justify mt-3 about-p"><h1>Welcome to Tranquility spa,</h1><br></br>

                                                    Established in 2008, the Tranquility spa-216e has become the leader in spa and wellness industry with numerous
                                                    outlets in different cities and luxury hotels in Nepal and abroad.<br></br><br></br>

                                                    We are the first Day spa to be established in Nepal and recognized by Nepal Tourism Board and we are also the
                                                    first Nepalese brand to expand its service in the international market. Our chain of spas are managed by experienced
                                                    and professional experts educated in renowned institute in Thailand, Switzerland, UAE, Australia and Kerala, India with
                                                    a proven history in providing an excellent service at Marriott Putrajaya, Palm Garden Hotel Malaysia, Mirage Lords Inn,
                                                    Le Meridien, Hyatt, Radisson, Shangri~La and Intercontinental Hotel Group.<br></br><br></br>

                                                    We are well equipped with state-of-art technology and provide a peaceful environment to soothe away your stress, pain, anxiety
                                                    and Rejuvenate Mind, Body & Spirit.  Our services are centrally located and a perfect place for you to beautify yourself with our beauty treatments.<br></br><br></br>

                                                    Finally, we would like to encourage you to visit our spa and academy and know us better for the world-class service and possible
                                                    training and employment to both Nepalese and foreign nationals.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </section>

                </section>
                {/* Managment team */}
                <section className="section pt-4" id="section">
                    <div className="container mb-5">
                        <h1 className="text-center title-primary offer-title"> Management Team </h1>

                        <div className="row">

                            <div className="col-md-4">
                                <div className="box">
                                    <div className="about-img">
                                        <img src={process.env.PUBLIC_URL + "/images/babu.jpg"} className="img-fluid" />

                                    </div>
                                    <div className="box-details p-3">
                                        <h2 className="text-center"><b>Bhuwan Phaiju</b> </h2>
                                        <h3 className="text-center"> Owner</h3>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="box">
                                    <div className="about-img" >
                                        <img src={process.env.PUBLIC_URL + "/images/kuzz.jpg"} className="img-fluid" />

                                    </div>
                                    <div className="box-details p-3">
                                        <h2 className="text-center"><b>Kushal Phaiju</b></h2>
                                        <h3 className="text-center"> Stock King</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="box">
                                    <div className="about-img">
                                        <img src={process.env.PUBLIC_URL + "/images/rajesh1.jpg"} className="img-fluid" />

                                    </div>
                                    <div className="box-details p-3">
                                        <h2 className="text-center"><b>Rajesh Phaiju</b></h2>
                                        <h3 className="text-center"> Future Manager </h3>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>


                </section>
            </div>
            {/* <Footer/> */}
            </>
        )
    }
}


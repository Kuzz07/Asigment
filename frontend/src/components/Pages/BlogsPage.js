import React from 'react'


export default class BlogsPage extends React.Component {
    render() {
        return (
            <section className="section pt-4" id="section">
                <div className="container mb-5">
                    <h1 className="text-center title-primary offer-title"> All Blogs </h1>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="box">
                                <div className="box-img">
                                    <img src={process.env.PUBLIC_URL + "/images/bani.jpg"} className="img-fluid" />

                                </div>
                                <div className="box-details p-5">
                                    <h2 className="text-center">Marking a milestone with our First Anniversary</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="box">
                                <div className="box-img">
                                    <img src={process.env.PUBLIC_URL + "/images/Bimm.png"} className="img-fluid" />

                                </div>
                                <div className="box-details p-5">
                                    <h2 className="text-center">Immerse yourself to the absolute tranquility</h2>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="box">
                                <div className="box-img">
                                    <img src={process.env.PUBLIC_URL + "/images/Bpre.png"} className="img-fluid" />

                                </div>
                                <div className="box-details p-5">
                                    <h2 className="text-center">Marking a milestone with our first anniversar</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box">
                                <div className="box-img">
                                    <img src={process.env.PUBLIC_URL + "/images/Bsum.jpg"} className="img-fluid" />

                                </div>
                                <div className="box-details p-5">
                                    <h2 className="text-center">Summer is here which means it’s time to have fun with water!!!</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box">
                                <div className="box-img">
                                    <img src={process.env.PUBLIC_URL + "/images/BSPA.png"} className="img-fluid" />

                                </div>
                                <div className="box-details p-5">
                                    <h2 className="text-center">A gateway to relax and rejuvenate in traditional luxury</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box">
                                <div className="box-img">
                                    <img src={process.env.PUBLIC_URL + "/images/Blove.jpg"} className="img-fluid" />

                                </div>
                                <div className="box-details p-5">
                                    <h2 className="text-center">Show your love with Tranquility Spa!</h2>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </section>
        )
    }
}

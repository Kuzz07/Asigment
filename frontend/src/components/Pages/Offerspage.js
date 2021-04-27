import React from 'react'


export default class Offerspage extends React.Component {
    render() {
        return (


            <div className="container-fluid mt-5 screenFit">
                <div className="row ">
                    <div className="col-md-5">
                        <img src={process.env.PUBLIC_URL + "/images/Abodyloction.jpg"} className="img-fluid" style={{ height: "400px" }} />
                    </div>
                    <div className="col-md-6">
                        <div className="p-3 bg-green">
                            <h3 className="text-left text-white">Aroma Lotion</h3>
                        </div>
                        <p className="p-2 text-left font-medium">
                            The price of our services vary with outlet and time. We currently provideHimalayan Massagein the following outlets:
                                        </p>

                        <div className=" p-4 details-header mt-4">
                            <div className="icon-circle"><i class=" p-4 fa fa-plus" ></i></div>
                            <h2 className=" ml-3">Tranquility Spa, Thamel</h2>
                        </div>
                        <div className="details-body mx-4 p-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="font-medium">Time </h4>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="font-medium">12:00AM</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="font-medium">Duration </h4>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="font-medium">20 mins</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="font-medium">Price </h4>
                                </div>
                                <div className="col-md-6">
                                    <h4 className="font-medium">Rs 2000</h4>
                                </div>
                            </div>
                            <hr></hr>
                            <button className="btn btn-success btn-lg">Book Now</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
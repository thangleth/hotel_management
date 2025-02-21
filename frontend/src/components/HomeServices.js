export default function HomeServices() {
    return (
        <section className="container my-5">
            <h3 className="my-5 text-center">Services</h3>
            <div className="row text-center">
                <div className="col-4">
                    <div className="card">
                        <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                        <div className="card-body">
                            <h5 className="card-title">Room Types</h5>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                        <div className="card-body">
                            <h5 className="card-title">Events</h5>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                        <div className="card-body">
                            <h5 className="card-title">Online Booking</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
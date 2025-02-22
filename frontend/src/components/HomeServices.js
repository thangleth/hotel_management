import Link from "next/link"

export default function HomeServices() {
    return (
        <section className="container my-5">
            <h3 className="my-5 text-center">Services</h3>
            <div className="row text-center">
                <div className="col-4">
                    <div className="card">
                        <Link href='room-types'>
                            <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                        </Link>
                        <div className="card-body hms-bg-normal">
                            <h5 className="card-title">
                                <Link className="text-white" href='room-types'>Room Types</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                        <div className="card-body hms-bg-normal">
                            <h5 className="card-title">
                                <Link className="text-white" href='events'>Events</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                        <div className="card-body hms-bg-normal">
                            <h5 className="card-title">
                                <Link className="text-white" href='online-booking'>Online Booking</Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
import Link from "next/link"

export default function Page() {
    return (
        <section className="container my-5">
            <h3 className="my-5 text-center">Room Types (6)</h3>
            <div className="row text-center">
                <div className="col-4 mb-4">
                    <div className="card">
                        <Link href='room-types/single-bedroom'>
                            <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                        </Link>
                        <div className="card-body hms-bg-normal">
                            <h5 className="card-title">
                                <Link className="text-white" href='/room-types/single-bedroom'>Single Bedroom</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 mb-4">
                    <div className="card">
                        <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                        <div className="card-body hms-bg-normal">
                            <h5 className="card-title">
                                <Link className="text-white" href='events'>Room Types 2</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 mb-4">
                    <div className="card">
                        <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                        <div className="card-body hms-bg-normal">
                            <h5 className="card-title">
                                <Link className="text-white" href='online-booking'>Room Types 3</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 mb-4">
                    <div className="card">
                        <Link href='room-types'>
                            <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                        </Link>
                        <div className="card-body hms-bg-normal">
                            <h5 className="card-title">
                                <Link className="text-white" href='room-types'>Room Types 1</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 mb-4">
                    <div className="card">
                        <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                        <div className="card-body hms-bg-normal">
                            <h5 className="card-title">
                                <Link className="text-white" href='events'>Room Types 2</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 mb-4">
                    <div className="card">
                        <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                        <div className="card-body hms-bg-normal">
                            <h5 className="card-title">
                                <Link className="text-white" href='online-booking'>Room Types 3</Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
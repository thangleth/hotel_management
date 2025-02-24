import RoomTypeImages from "@/components/RoomTypeImages";
import Link from "next/link";

export default function Page() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-7">
                    <RoomTypeImages />
                    <h4 className="my-5">Amenties</h4>
                    <div className="row">
                        <div className="col-3">
                            <p>Wifi: <i className="fa fa-check-circle text-success"></i></p>
                            <p>Swimming Pool: <i className="fa fa-check-circle text-success"></i></p>
                            <p>Camera: <i className="fa fa-times-circle text-danger"></i></p>
                        </div>
                    </div>

                    <h4 className="my-5">Location:</h4>
                    <p>Google Map</p>
                </div>

                <div className="col-5">
                    <div className="card">
                        <h5 className="card-header">Booking Form</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label"><b>Room Type: </b>Single Bedroom</label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label"><b>Charges: </b>150$/Night</label>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label"><b>Total Guest: </b></label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label"><b>Check-In: </b></label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label"><b>Check-out: </b></label>
                                <input type="date" className="form-control" />
                            </div>
                            <Link href='/checkout' className="btn hms-color-dark mt-3">Confirm Booking</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
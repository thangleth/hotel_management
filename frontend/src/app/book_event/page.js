import RoomTypeImages from "@/components/RoomTypeImages";
import Link from "next/link";

export default function Page() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-7">
                    <RoomTypeImages />
                </div>

                <div className="col-5">
                    <div className="card">
                        <h5 className="card-header">Booking Event</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label"><b>Event Type:</b></label>
                                <select className="form-control">
                                    <option>Birthday Party</option>
                                    <option>Team building</option>
                                    <option>Business Events</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label"><b>Event Detail: </b></label>
                                <textarea className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label"><b>Total Guest: </b></label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label"><b>Event Date: </b></label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label"><b>Total Cost: </b></label>
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
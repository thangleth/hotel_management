import Link from "next/link";
import BarChart from "@/components/user/BarChart";

export default function Page() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-md-4 col-12">
                    <div className="list-group">
                        <a className="list-group-item hms-bg-normal" href="#">Dashboard</a>
                        <a className="list-group-item" href="#">Booking history</a>
                        <a className="list-group-item" href="#">Payment logs</a>
                        <a className="list-group-item" href="#">Update profile</a>
                        <a className="list-group-item text-danger" href="#">Logout</a>
                    </div>
                </div>
                <div className="col-md-8 col-12">
                    <div className="row">
                        <div className="col-6 text-center">
                            <div className="card">
                                <h3 className="card-header">Total Bookings</h3>
                                <div className="card-body">
                                    <h4><a href="#">123</a></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 text-center">
                            <div className="card">
                                <h3 className="card-header">Total Payments</h3>
                                <div className="card-body">
                                    <h4><a href="#">123</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BarChart />
                </div>
            </div>
        </section>
    )
}
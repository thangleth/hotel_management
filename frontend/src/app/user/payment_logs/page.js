import DashboardSideBar from "@/components/user/DashboardSidebar";
import Link from "next/link";

export default function Page() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-md-4 col-12">
                    <DashboardSideBar />
                </div>
                <div className="col-md-8 col-12">
                    <h3 className="mb-4">Booking History</h3>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Booking Date</th>
                                    <th>Detail</th>
                                    <th>Invoice</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>20/04/2024</td>
                                    <td>
                                        <p className="m-0 fw-bold">2 Rooms</p>
                                        <p className="m-0 fw-bold">20/04/2024 - 25/04/2024</p>
                                        <p >2 Guest</p>
                                    </td>
                                    <td>
                                        <p className="m-0 fw-bold">
                                            <Link href="$">KNICKS-123</Link>
                                        </p>
                                        <p className="m-0 fw-bold">15,000</p>
                                        <p className="m-0 fw-bold">Due</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}
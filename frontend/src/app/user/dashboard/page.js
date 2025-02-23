import Link from "next/link";
import BarChart from "@/components/user/BarChart";
import DashboardSideBar from "@/components/user/DashboardSidebar";

export default function Page() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-md-4 col-12">
                    <DashboardSideBar />
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
                    <div className="row my-4">
                        <div className="col-12">
                            <BarChart />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
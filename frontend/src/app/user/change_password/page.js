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
                    <div className="card">
                        <h5 className="card-header">Change Password</h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-5 col-12 mb-3">
                                    <label for="" className="form-label">New Password</label>
                                    <input type="text" className="form-control" placeholder="******"></input>
                                </div>
                                <div className="col-md-5 col-12 mb-3">
                                    <label for="" className="form-label">Confirm Password</label>
                                    <input type="text" className="form-control" placeholder="******"></input>
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <button className="btn btn-secondary">Reset</button>
                                    <button className="btn hms-color-dark ms-2">Submit</button>
                                </div>
                                <p>
                                    If you want to change your password, <Link href="/user/login">Click here</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
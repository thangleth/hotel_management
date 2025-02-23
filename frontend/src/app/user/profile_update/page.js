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
                        <h5 className="card-header">Update Profile</h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-2 col-12 mb-3">
                                    <img src="/thumb/thumb1.png" width={300} className="img-fluid"></img>
                                </div>
                                <div className="col-md-5 col-12 mb-3">
                                    <label for="" className="form-label">First Name</label>
                                    <input type="text" className="form-control" placeholder="First Name"></input>
                                </div>
                                <div className="col-md-5 col-12 mb-3">
                                    <label for="" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name"></input>
                                </div>
                                <div className="col-md-4 col-12 mb-3">
                                    <label for="" className="form-label">Username</label>
                                    <input type="text" className="form-control" placeholder="Username"></input>
                                </div>
                                <div className="col-md-4 col-12 mb-3">
                                    <label for="" className="form-label">Phone</label>
                                    <input type="number" className="form-control" placeholder="Phone"></input>
                                </div>
                                <div className="col-md-4 col-12 mb-3">
                                    <label for="" className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="Email"></input>
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                    <button className="btn btn-secondary">Reset</button>
                                    <button className="btn hms-color-dark ms-2">Submit</button>
                                </div>
                                <p>
                                    If you want to change your password, <Link href="/user/change_password">Click here</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
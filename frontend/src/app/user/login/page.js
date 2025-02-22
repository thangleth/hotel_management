import Link from "next/link";

export default function Page() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-md-6 col-12">
                    <img src="/thumb/thumb1.png" className="img-fluid" />
                </div>
                <div className="col-md-6 col-12">
                    <h3 className="mb-3">Login</h3>
                    <div className="row">
                        <div className="col-md-6 col-12 mb-3">
                            <label for="" className="form-label">Phone</label>
                            <input type="number" className="form-control" placeholder="Phone"></input>
                        </div>
                        <div className="col-md-6 col-12 mb-3">
                            <label for="" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Password"></input>
                        </div>
                        <div className="col-md-6 col-12 mb-3">
                            <button className="btn btn-secondary">Reset</button>
                            <button className="btn hms-color-dark ms-2">Submit</button>
                        </div>
                        <p>
                            <Link className="text-danger" href="/user/forget-password">Forget Password</Link>
                        </p>
                        <p>
                            If you are already registered user, <Link href="/user/signup">SignUp here</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
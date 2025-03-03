import Link from "next/link"

export default function Page() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-md-6 col-12">
                    <img src="/thumb/thumb1.png" className="img-fluid" />
                </div>
                <div className="col-md-6 col-12">
                    <h3 className="mb-3">Work with us</h3>
                    <div className="row">
                        <div className="col-12 mb-3">
                            <label htmlFor="" className="form-label">Your Name</label>
                            <input type="text" className="form-control" placeholder="Full Name"></input>
                        </div>
                        <div className="col-md-6 col-12 mb-3">
                            <label htmlFor="" className="form-label">Your Email</label>
                            <input type="text" className="form-control" placeholder="Your Email"></input>
                        </div>
                        <div className="col-md-6 col-12 mb-3">
                            <label htmlFor="" className="form-label">Your Phone</label>
                            <input type="number" className="form-control" placeholder="Your Phone"></input>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="" className="form-label">Code</label>
                            <input className="form-control"></input>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="" className="form-label">Your Message</label>
                            <textarea className="form-control"></textarea>
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="" className="form-label">Updated CV</label>
                            <input type="file" className="form-control"></input>
                        </div>
                        <div className="col-md-6 col-12 mb-3">
                            <button className="btn btn-secondary">Reset</button>
                            <button className="btn hms-color-dark ms-2">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
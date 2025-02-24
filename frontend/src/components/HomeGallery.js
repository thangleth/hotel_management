'use client'
import FsLightbox from "fslightbox-react"
import { useState } from "react"

export default function HomeGallery() {
    const [toggler, setToggler] = useState(false)

    return (
        <section className="container my-5">
            <FsLightbox toggler={toggler}
                sources={[
                    "thumb/thumb1.png",
                    "thumb/thumb1.png",
                    "thumb/thumb1.png"
                ]}
            />
            <h3 className="my-5 text-center">Gallery <button onClick={() => setToggler(!toggler)}
                className="float-end fs-5 btn text-white hms-color-dark">View all</button></h3>
            <div className="row text-center">
                <div className="col-4">
                    <div className="card">
                        <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                    </div>
                </div>
            </div>
            <div className="row text-center mt-4">
                <div className="col-4">
                    <div className="card">
                        <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}
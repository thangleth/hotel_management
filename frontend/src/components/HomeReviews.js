export default function HomeReviews() {
    return (
        <section className="container my-5">
            <h3 className="my-5 text-center">Reviews <a href="#" className="float-end fs-5 btn text-white" style={{ 'backgroundColor': '#92803d' }}>View all</a></h3>
            <div className="row mb-5">
                <div className="col-5 border p-2">
                    <h5>Author Name</h5>
                    <p>This is awesome project</p>
                    <span className="text-warning">
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                    </span>
                </div>
                <div className="col-5 offset-1 border p-2 ms-auto">
                    <h5>Author Name</h5>
                    <p>This is awesome project</p>
                    <p className="text-warning">
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                    </p>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-5 border p-2">
                    <h5>Author Name</h5>
                    <p>This is awesome project</p>
                    <span className="text-warning">
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                    </span>
                </div>
                <div className="col-5 offset-1 ms-auto border p-2">
                    <h5>Author Name</h5>
                    <p>This is awesome project</p>
                    <p className="text-warning">
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                        <i className="fa fa-star fa-2x"></i>
                    </p>
                </div>
            </div>
        </section>
    )
}
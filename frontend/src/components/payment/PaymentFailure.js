export default function PaymentFailure() {
    return (
        <>
            <h3 className="text-danger my-4"><i className="fa fa-check-circle"></i>Oops! Something wrong happened</h3>
            <h5>Error Code: Error Description</h5>
            <p className="my-4">
                <Link href='#' className="btn btn-dark">Home</Link>
                <Link href='#' className="btn hms-color-dark">My DashBoard</Link>
            </p>
        </>
    )
}
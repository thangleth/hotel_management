import Link from "next/link"

export default function Page() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-6 offset-3">
                    <h3 className="my-4">Checkout</h3>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>Total Guests</th>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th>Total Rooms</th>
                                <td>2</td>
                            </tr>
                            <tr>
                                <th>Check-In Date</th>
                                <td>23/04/2024</td>
                            </tr>
                            <tr>
                                <th>Check-Out Date</th>
                                <td>25/04/2024</td>
                            </tr>
                            <tr>
                                <th>Charges</th>
                                <td>1500</td>
                            </tr>
                            <tr>
                                <th>Tax</th>
                                <td>10%</td>
                            </tr>
                            <tr>
                                <th>Total Amount</th>
                                <td>1500 + 150 = 1650</td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="text-danger">
                                    Please inform ID when check-in
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <Link href="">Terms & Conditions</Link>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button className="btn btn-secondary">Cancel</button>
                                    <Link href="/payment/success" className="btn hms-color-dark ms-2">Pay now
                                        (Success)</Link>
                                    <Link href="/payment/success" className="btn btn-danger ms-2">Pay now
                                        (Failure)</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
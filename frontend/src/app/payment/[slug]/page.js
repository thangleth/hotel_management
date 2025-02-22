import PaymentSuccess from "@/components/payment/PaymentSuccess"
import PaymentFailure from "@/components/payment/PaymentFailure";
import Link from "next/link";

export default function Page({ params }) {
    const slug = params.slug;
    return (
        <section className="container my-5 text-center">
            {
                slug == 'success' && <PaymentSuccess />
            }
            {
                slug == 'failure' && <PaymentFailure />
            }
        </section>
    )
}
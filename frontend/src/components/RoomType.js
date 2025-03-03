import Link from "next/link"

export default function RoomType({ item }) {
    return (
        <div className="col-4 mb-4">
            <div className="card">
                <Link href={`/room-types/${item.title}`}>
                    <img src="thumb/thumb1.png" className="card-img-top" alt="Room Types"></img>
                </Link>
                <div className="card-body hms-bg-normal">
                    <h5 className="card-title">
                        <Link className="text-white" href={`/room-types/${item.title}`}>{item.title}</Link>
                    </h5>
                </div>
            </div>
        </div>
    )
}
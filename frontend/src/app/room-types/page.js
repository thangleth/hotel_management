import RoomType from "@/components/RoomType"
import Link from "next/link"

async function getRoomType(page_no) {
    const res = await fetch('http://127.0.0.1:8000/api/room-types/?page=' + page_no, { cache: 'no-store' })
    const data = await res.json()
    console.log("API Response:", data)
    return data
}

export default async function Page({ searchParams }) {
    const page = searchParams.page || 1
    const roomtypes = await getRoomType(page)
    const itemsPerPage = 2
    const totalPages = Math.ceil(roomtypes.count / itemsPerPage);
    const nextPage = parseInt(page) + parseInt(1)
    let links = []
    if (roomtypes.previous) {
        links.push(<Link className="page-link" href={`/room-types/?page=${page - 1}`}>Previous</Link>)
    }
    for (let i = 1; i <= totalPages; i++) {
        if (page == i) {
            links.push(<Link className="page-link active" href={`/room-types/?page=${i}`}>{i}</Link>)
        } else {
            links.push(<Link className="page-link" href={`/room-types/?page=${i}`}>{i}</Link>)
        }
    }
    if (roomtypes.next) {
        links.push(<Link className="page-link" href={`/room-types/?page=${nextPage}`}>Next</Link>)
    }

    return (
        <section className="container my-5">
            <h3 className="my-5 text-center">Room Types ({roomtypes.count})</h3>
            <div className="row text-center">
                {
                    roomtypes.results.map((item, index) => (
                        <RoomType item={item} key={index} />
                    ))
                }

            </div>

            <nav className="text-center">
                <ul className="pagination">
                    {
                        links.map((item, index) => (<li key={index} className="page-item">{item}</li>))
                    }
                </ul>
            </nav>
        </section>
    )
}
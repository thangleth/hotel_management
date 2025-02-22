'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function RoomTypeImages() {
    return (
        <Carousel showThumbs={false}>
            <div>
                <img src="/thumb/thumb1.png" />
            </div>
            <div>
                <img src="/thumb/thumb1.png" />
            </div>
        </Carousel>
    )
}
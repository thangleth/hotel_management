'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from "react";

export default function HomeBanners() {
    const [BannerList, setBannerList] = useState([])
    async function fetchBanner() {
        const banners = await fetch('http://127.0.0.1:8000/api/banners');
        const res = await banners.json()
        setBannerList(res.results)
    }

    useEffect(() => {
        fetchBanner()
    }, [])
    return (
        <Carousel showThumbs={false}>
            {
                BannerList.map((item, index) => (<div key={index}>
                    <img src={item.image} alt={item.title} />
                </div>))
            }
        </Carousel>
    )
}
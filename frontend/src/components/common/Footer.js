import { Bebas_Neue } from 'next/font/google'
const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export default function Footer() {
    return (
        <footer className="container-fluid py-3" style={{ 'backgroundColor': '#544427' }}>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <a className={`${bebas_neue.className} fs-4`} style={{ 'color': '#92803d' }} href="#">KNICKS</a>
                        <h6 className='text-white'>Hotel Luxury</h6>
                    </div>
                    <div className='col-3'>
                        <h4 className='text-white'>About</h4>
                        <p><a href='#' className='text-white text-decoration-none'>Company</a></p>
                        <p><a href='#' className='text-white text-decoration-none'>History</a></p>
                        <p><a href='#' className='text-white text-decoration-none'>Career</a></p>
                    </div>
                    <div className='col-3'>
                        <h4 className='text-white'>Contact</h4>
                        <p><a href='#' className='text-white text-decoration-none'>Company</a></p>
                        <p><a href='#' className='text-white text-decoration-none'>History</a></p>
                        <p><a href='#' className='text-white text-decoration-none'>Career</a></p>
                    </div>
                    <div className='col-3'>
                        <h4 className='text-white'>Support</h4>
                        <p><a href='#' className='text-white text-decoration-none'>Company</a></p>
                        <p><a href='#' className='text-white text-decoration-none'>History</a></p>
                        <p><a href='#' className='text-white text-decoration-none'>Career</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
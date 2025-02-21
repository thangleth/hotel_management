import { Bebas_Neue } from 'next/font/google'
import { Fredoka } from 'next/font/google'
const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: '400' })
const fredoka = Fredoka({ subsets: ['latin'], weight: '600' })

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark" style={{ 'backgroundColor': '#544427' }}>
            <div className="container">
                <a className={`navbar-brand ${bebas_neue.className} fs-4`} href="#">KNICKS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${fredoka.className}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-3">
                            <a className="nav-link fw-bold text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link fw-bold text-white" href="#">Gallery</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link fw-bold text-white" href="#">Services</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link fw-bold text-white" href="#">About us</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link fw-bold text-white" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn mt-1 fw-bold text-white" style={{ 'backgroundColor': '#92803d' }} href="#">Book Event</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
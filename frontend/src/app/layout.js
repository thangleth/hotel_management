import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Bottom from '@/components/common/Bottom';
import '../../styles/global.css'

export const metadata = {
  title: "Hotel Management Website",
  description: "Hotel Management Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Bottom />
      </body>
    </html>
  );
}


// import bootstrap
// import bootstrap
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

export default function Footer() {
    return (
        <footer className="bg-dark text-white mt-5">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white">Home</a></li>
                            <li><a href="#" className="text-white">Services</a></li>
                            <li><a href="#" className="text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact</h5>
                        <p>Email: info@example.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <small>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</small>
                </div>
            </div>
        </footer>
    );
}

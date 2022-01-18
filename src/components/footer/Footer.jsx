import "./footer.css";

export default function Footer() {
    return (
    <div className="main-footer">
        <div className="container">
            <div className="row">
            <div className="mainLeft">
                <h4>Newsletter</h4>
                <form>
                    <input type="email"/>
                    <button type="submit">email<i class="fas fa-envelope-square"></i></button>
                </form>
            </div>
        <div className="mainCenter">
            <h4><i class="fas fa-clock"></i>
                Lunch Service</h4>
            <p>Booking from 12:00pm - 1:30pm</p>
        </div>
            <div className="mainRight">
                <h4>Follow Along</h4>
        <i className="topIcon fab fa-facebook-f"></i>
        <i className="topIcon fab fa-instagram"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-youtube"></i>
    </div>
    </div>
    </div>
    </div>

    );
    }

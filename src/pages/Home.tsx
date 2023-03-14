import Logo from "../images/Logo.webp";

const Home = () =>
{
    return (
        <div className="vw-100 vh-100">
            <div className="w-100 h-50 d-flex justify-content-center align-items-center">
                <img
                    src={Logo}
                    alt="Logo"
                />
                <div>
                    <h1>OCCAM LLC.</h1>
                    <h1 className="text-orange">Games. Simply.</h1>
                </div>
            </div>  

            <div className="w-100 h-50 bg-black gray-top-border d-flex justify-content-center align-items-center">
                <div>
                    <h4 className="text-orange">ABOUT</h4>
                    <h5>Our mission is to keep things simple.</h5>
                    <br/>
                    <h5>It's easy to lose your way in game development.</h5>
                    <br/>
                    <h5>We keep games simple by keeping our vision the same.</h5>
                </div>
            </div>
        </div>
    );
}

export default Home;
import Logo from "../images/Logo.webp";

const Home = () =>
{
    return (
        <div className="vw-100 vh-100">
            <div className="w-100 h-50 d-flex justify-content-center align-items-center p-4">
                <img
                    src={Logo}
                    alt="Logo"
                    height="80%"
                />
                <div>
                    <h1 className="drop-shadow display-1 title-bold">OCCAM LLC.</h1>
                    <h1 className="text-orange drop-shadow display-1 title-bold">Games. Simply.</h1>
                </div>
            </div>  

            <div className="w-100 h-50 bg-black gray-top-border d-flex justify-content-center align-items-center">
                <div className="p-3">
                    <h1 className="text-orange">ABOUT</h1>
                    <h3>Our mission is to keep things simple.</h3>
                    <br/>
                    <h3>It's easy to lose your way in game development.</h3>
                    <br/>
                    <h3>We keep games simple by keeping our vision the same.</h3>
                </div>
            </div>
        </div>
    );
}

export default Home;
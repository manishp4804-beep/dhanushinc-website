import stock from "../../assets/about/stock.jpeg"
import Gas from "../../assets/Hero/gasImg.jpg"
import Sales from "../../assets/Hero/salesImg.jpg"
import SliderModule from "react-slick";

const Slider = SliderModule.default;
const ImageList = [
    {
        id: 1,
        img: stock,
        title: "Your Everyday Convenience Store",
        description: "From everyday essentials to snacks, drinks, and more, our mart is here to provide convenience and friendly service whenever you need it."
    },

    {
        id: 2,
        img: Gas,
        title: "Quality Fuel, Reliable Service",
        description: "Keep your journey moving with quality fuel and dependable service, making every stop quick, convenient, and hassle-free."
    },

    {
        id: 3,
        img: Sales,
        title: "Entertainment & Excitement",
        description: "Take a break and enjoy our arcade gaming experience, bringing fun and excitement to your visit with something for everyone."
    }
]
export default function Hero() {
    console.log(Slider)
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true
    }
    return (
        <div className="app-surface relative overflow-hidden min-h-screen flex items-center justify-center duration-200">
            <div className="container mx-auto px-4 py-10">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div key={data.id}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

                                {/* Text Section */}
                                <div className="order-2 lg:order-1 text-center lg:text-left space-y-5 max-w-xl mx-auto lg:mx-0">
                                    <h1 className="app-heading text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                                        {data.title}
                                    </h1>

                                    <p className="app-copy text-sm sm:text-base">
                                        {data.description}
                                    </p>
                                </div>

                                {/* Image Section */}
                                <div className="order-1 lg:order-2 flex justify-center">
                                    <img
                                        src={data.img}
                                        alt={data.title}
                                        className="w-64 sm:w-80 md:w-96 lg:w-112.5 h-auto object-contain"
                                    />
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

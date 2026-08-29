import Killen from "../../assets/Stores/Killen.jpg"
import Deport from "../../assets/Stores/Deport.png"
import HNL from "../../assets/Stores/H&L.png"
import Fox from "../../assets/Stores/Fox.png"
import Austin from "../../assets/Stores/Austin.jpeg"
import Twin from "../../assets/Stores/Twin.jpeg"
import HighStreet from "../../assets/Stores/HighStreet.jpeg"
import Elsa from "../../assets/Stores/Elsa.jpg"
import PitStop from "../../assets/Stores/PitStop.png"
import Loop from "../../assets/Stores/Loop.png"

const dropDown = [
    {
        id: 1,
        name: "Austin",
        link: "https://maps.app.goo.gl/4ewcvcH4znYsd9CL6",
        img: Austin
    },
    {
        id: 2,
        name: "Killeen",
        link: "https://maps.app.goo.gl/VcaLXPeMTdPVCSvP8",
        img: Killen
    },
    {
        id: 3,
        name: "Marshall",
        link: "/#marshall"
    },
    {
        id: 4,
        name: "Kansas",
        link: "/#kansas"
    },
    {
        id: 5,
        name: "H&L Discount Food Mart",
        link: "https://maps.app.goo.gl/CmLdK47g6JLdaLzz9",
        img: HNL
    },
    {
        id: 6,
        name: "Fox Fast Stop",
        link: "https://maps.app.goo.gl/jZMZ6SoEuc98a71C6",
        img: Fox
    },
    {
        id: 7,
        name: "Twin",
        link: "https://maps.app.goo.gl/bN2MectABDxELTRp7",
        img: Twin
    },
    {
        id: 8,
        name: "Penguin Hut",
        link: "https://maps.app.goo.gl/dE9QLbMi92wzer2HA"
    },
    {
        id: 9,
        name: "La México",
        link: "https://maps.app.goo.gl/zi4C91SNfrAD74iE9",
        img: Elsa
    },
    {
        id: 10,
        name: "Deport",
        link: "https://maps.app.goo.gl/xAcG3U1FXnET5TCy9",
        img: Deport
    },
    {
        id: 11,
        name: "HighStreet",
        link: "https://maps.app.goo.gl/ZjRkAmswbUu9bPar6",
        img: HighStreet
    },
    {
        id: 12,
        name: "PitStop",
        link: "https://maps.app.goo.gl/xgpMqHC5PZDZcL9b8",
        img: PitStop
    },
    {
        id: 13,
        name: "FairField",
        link: "/#fairfield",
    },
    {
        id: 14,
        name: "East Loop",
        link: "https://maps.app.goo.gl/Kd2Le73qdJUdQWMy9",
        img:Loop
    },
]

export default function Stores() {
    return (
        <div className="container mx-auto px-4 sm:px-6">
            <h1 className="app-heading flex justify-center font-bold text-2xl sm:text-3xl mb-8">
                Business Verticals
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dropDown.map((data) => (
                    <div
                        key={data.id}
                        className="relative rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center border app-border overflow-hidden p-6 min-h-55 flex flex-col justify-end"
                        style={{
                            backgroundImage: `url(${data.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="relative z-10">
                            <h2 className="text-xl font-semibold mb-2 text-white">
                                {data.name}
                            </h2>

                            <p className="text-white/80 text-sm mb-4">
                                Fuel, snacks, and a friendly stop.
                            </p>

                            <a
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="app-button inline-block rounded-full px-4 py-2 cursor-pointer transition-colors duration-200"
                            >
                                Locate
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

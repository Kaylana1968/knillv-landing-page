'use client'
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import KnillvDark from "@/public/knillvDark.png";
import kompact from "@/public/kompact.png";
import caisse from "@/public/caisse.png";
import fonct1 from "@/public/fonct1.png";
import fonct2 from "@/public/fonct2.png";
import fonct3 from "@/public/fonct3.png";


export default function Page() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
           
    return (
        <main>
             <nav className="flex justify-between items-center px-8 py-4 bg-gray-100 shadow-md">
                <div className="flex items-center gap-2">
                    <Image src={KnillvDark.src} alt="Logo" width={40} height={40} />
                </div>
                <div className="flex gap-4">
                    <div className="text-[#595959] px-7 py-3 text-lg rounded-full bg-[#e8e8e8] border border-[#e8e8e8] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] transition-all duration-300 hover:border-white active:shadow-[4px_4px_12px_#c5c5c5,-4px_-4px_12px_#ffffff]">
                        <a href="#accueil">Accueil</a>
                    </div>
                    <div className="text-[#595959] px-7 py-3 text-lg rounded-full bg-[#e8e8e8] border border-[#e8e8e8] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] transition-all duration-300 hover:border-white active:shadow-[4px_4px_12px_#c5c5c5,-4px_-4px_12px_#ffffff]">
                        <a href="#fonctionnalites">Fonctionnalités</a>
                    </div>
                    <div className="text-[#595959] px-7 py-3 text-lg rounded-full bg-[#e8e8e8] border border-[#e8e8e8] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] transition-all duration-300 hover:border-white active:shadow-[4px_4px_12px_#c5c5c5,-4px_-4px_12px_#ffffff]">
                        <a href="#tarif">Tarif</a>
                    </div>
                    <div className="text-[#595959] px-7 py-3 text-lg rounded-full bg-[#e8e8e8] border border-[#e8e8e8] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] transition-all duration-300 hover:border-white active:shadow-[4px_4px_12px_#c5c5c5,-4px_-4px_12px_#ffffff]">
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </nav>
     
            <section id="accueil" className="flex flex-row items-center justify-between h-screen px-16">
                <div className="flex flex-col items-start">
                    <Image src={KnillvDark.src} alt="Logo" width={200} height={200} />
                    <h6 className="text-4xl font-bold mt-4">
                        La solution de caisse compacte pensée <br /> pour
                        <span className="text-blue-500"> l’efficacité.</span>
                    </h6>
                    <p className="text-gray-500 mt-2">
                        Testez Knillv dès aujourd’hui et sans engagement
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-300 mt-4">
                        Essayer gratuitement
                    </button>
                </div>
                <div className="flex items-center">
                    <Image src={caisse.src} alt="Caisse" width={600} height={600} />
                </div>
            </section>


            <section
                id="fonctionnalites"
                ref={sectionRef}
                className="flex flex-col items-center justify-center h-screen px-10 bg-gray-50"
            >
                <h2 className="text-4xl font-bold text-gray-800 mb-8 ext-blue-500 ">
                    {Array.from("FONCTIONNALITÉS").map((letter, index) => (
                        <span
                            key={index}
                            className={`inline-block opacity-0 ${
                                isVisible ? "animate-fade-in-letter" : ""
                            }`}
                            style={{
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                    <Image src={fonct1.src} alt="fonct1" width={210} height={210} />
                        <h3 className="text-2xl font-semibold mt-4">Facilité d'utilisation</h3>
                        <p className="text-gray-600 mt-2">
                            Une interface intuitive pour une prise en main rapide.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                        <Image src={fonct2.src} alt="fonct2" width={150} height={150} />
                        <h3 className="text-2xl font-semibold mt-4">Gestion complète</h3>
                        <p className="text-gray-600 mt-2">
                            Gérez vos ventes, stocks et clients en un seul endroit.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                        <Image src={fonct3.src} alt="fonct2" width={200} height={200} />
                        <h3 className="text-2xl font-semibold mt-4">Multi-plateformes</h3>
                        <p className="text-gray-600 mt-2">
                            Disponible même sur vos appareils mobiles.
                        </p>
                    </div>
                </div>
            </section>
            <section
                id="tarif"
                className="relative flex flex-col items-center justify-center h-screen px-10 overflow-hidden"
            >
                {/* Vidéo en arrière-plan */}
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                >
                    <source src="/fondbleu.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas les vidéos HTML5.
                </video>

                {/* Contenu de la section */}
                <h2 className="text-4xl font-bold text-white mb-8  z-10">
                    Forfait annuel 
                </h2>
                <div className="flex flex-col items-center text-center p-8 rounded-lg shadow-[1.92px_1.92px_4.8px_hsl(0,0%,75%),-1.92px_-1.92px_4.8px_hsl(0,0%,100%),inset_-0.06px_-0.06px_0.24px_hsl(0,0%,75%),inset_0.06px_0.06px_0.24px_hsl(0,0%,100%)] bg-white/10 backdrop-blur-md z-10">
                <Image src={kompact.src} alt="Logo de Kompact" width={200} height={200} />
                
                <p className="text-gray-300 mb-2">
                    <span className="text-7xl font-bold">297€</span>
                    <span className="text-4xl font-medium"> / an</span>
                </p>
                
                <p className="text-blue-300 text-base">
                    soit <span className="text-2xl font-semibold">24</span><span className="text-sm align-super">€75</span> / mois
                </p>
                </div>
                <p className="text-gray-300 text-base mt-20 text-center">
                    Profitez d’un mois gratuit sans engagement. Annulable à tout moment avant la fin de la période d’essai.
                </p>
                
           
            </section>
        </main>
    );
}
import Image from "next/image";
import KnillvDark from "@/public/knillvDark.png";
import caisse from "@/public/caisse.png";

export default function Page() {
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
                    <Image src={caisse.src} alt="Caisse" width={600} height={600}
                    />
                </div>
            </section>
            <section id="fonctionnalites" className="flex flex-col items-center justify-center h-screen px-10 bg-gray-50">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Fonctionnalités</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                        <Image src="/path/to/feature1.png" alt="Fonctionnalité 1" width={100} height={100} />
                        <h3 className="text-2xl font-semibold mt-4">Facilité d'utilisation</h3>
                        <p className="text-gray-600 mt-2">
                            Une interface intuitive pour une prise en main rapide.
                        </p>
                    </div>
              
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                        <Image src="/path/to/feature2.png" alt="Fonctionnalité 2" width={100} height={100} />
                        <h3 className="text-2xl font-semibold mt-4">Gestion complète</h3>
                        <p className="text-gray-600 mt-2">
                            Gérez vos ventes, stocks et clients en un seul endroit.
                        </p>
                    </div>
              
                    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
                        <Image src="/path/to/feature3.png" alt="Fonctionnalité 3" width={100} height={100} />
                        <h3 className="text-2xl font-semibold mt-4">Support 24/7</h3>
                        <p className="text-gray-600 mt-2">
                            Une assistance disponible à tout moment pour vous aider.
                        </p>
                    </div>
    </div>
</section>
        </main>
    );
}
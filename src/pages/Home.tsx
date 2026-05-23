import { HeroSection } from "../components/sections/middle/HeroSection";
import { UploadSection } from "../components/sections/middle/UploadSection";
import { SavedCarousel } from "../components/memes/history/SavedCarousel";

function Home() {
    return (
        <main className="w-full">
            {/* Split Section: Stacks on mobile, splits 50/50 on desktop */}
            <section className="w-full min-h-screen md:h-screen flex flex-col md:flex-row">
                
                {/* Left/Top Column: Hero */}
                <div className="w-full md:w-1/2 min-h-[50vh] md:h-full bg-[#3e5c76]">
                    <HeroSection />
                </div>

                {/* Right/Bottom Column: Upload Container */}
                <div className="w-full md:w-1/2 min-h-[50vh] md:h-full bg-[#b6a6ca]">
                    <UploadSection />
                </div>

            </section>

            {/* Gallery Section */}
            <section className="w-full min-h-screen bg-gradient-to-b from-[#433e3f] to-[#070A13] px-6 sm:px-12 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
                        Community Memes
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl text-zinc-400">
                        React with memes created by users.
                    </p>
                    <div className="mt-12 sm:mt-16">
                        <SavedCarousel />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
import { HeroSection } from "../components/sections/middle/HeroSection";
import { UploadSection } from "../components/sections/middle/UploadSection";

import { SavedCarousel } from
"../components/memes/history/SavedCarousel";

function Home() {

    return (

        <main className="w-full">

            <section className="
                w-full
                h-screen
                flex
            ">

                <div className="
                    w-1/2
                    h-full
                    bg-[#3e5c76]
                ">

                    <HeroSection />

                </div>

                <div className="
                    w-1/2
                    h-full
                    bg-[#b6a6ca]
                ">

                    <UploadSection />

                </div>

            </section>

            <section className="
                w-full
                min-h-screen
                bg-gradient-to-b
                from-[#433e3f]
                to-[#070A13]
                px-12
                py-20
            ">

                <div className="
                    max-w-7xl
                    mx-auto
                ">

                    <h2 className="
                        text-6xl
                        font-bold
                        text-white
                        tracking-tight
                    ">

                        Community Memes

                    </h2>

                    <p className="
                        mt-4
                        text-xl
                        text-zinc-400
                    ">

                        React with memes created by users.

                    </p>

                    <div className="
                        mt-16
                    ">

                        <SavedCarousel />

                    </div>

                </div>

            </section>

        </main>

    );

}

export default Home;
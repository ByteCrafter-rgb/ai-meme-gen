export function HeroSection() {

    return (

        <section className="
        relative
        w-full
        h-full
        px-16
        flex
        items-center
        overflow-hidden
        ">

            {/* GIF background */}

            <div className="
            absolute
            inset-0
            ">

                <img

                src="
                https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif
                "

                className="
                w-full
                h-full
                object-cover
                opacity-20
                "

                />

                <div className="
                absolute
                inset-0

                bg-gradient-to-b

                from-black/60

                via-[#0B0E17]/60

                to-[#0B0E17]
                "/>

            </div>

            {/* Existing content */}

            <div className="
            relative
            z-10
            max-w-xl
            ">

                <h1 className="
                text-7xl
                font-bold
                leading-tight
                text-white
                ">

                    Upload chaos.

                    <br />

                    Get memes that are

                    <span className="
                    text-[#C8FF2E]
                    ">

                    {" "}actually funny.

                    </span>

                </h1>

                <p className="
                mt-8
                text-xl
                leading-9
                text-[#B0B6C2]
                ">

                    Upload an image and instantly generate
                    funny captions, meme formats and viral
                    content with AI.

                </p>

            </div>

        </section>

    );

}
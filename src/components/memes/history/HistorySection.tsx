import { getHistory }
from "../../../services/history";

export function HistorySection(){

    const history =
    getHistory();

    return(

        <section className="
        mt-12
        p-10
        rounded-4xl
        bg-[#101421]
        ">

            <h2 className="
            text-3xl
            text-white
            font-semibold
            ">

            History

            </h2>

            <div className="
            mt-8

            grid

            grid-cols-1

            sm:grid-cols-2

            lg:grid-cols-4

            gap-6
            ">

                {

                history.map(

                meme=>(

                <div

                key={
                    meme.id
                }

                className="
                aspect-square

                overflow-hidden

                rounded-2xl

                bg-[#081022]
                "

                >

                    <img

                    src={
                        meme.url
                    }

                    className="
                    w-full

                    h-full

                    object-cover

                    transition-all

                    duration-300

                    hover:scale-105
                    "

                    />

                </div>

                )

                )

                }

            </div>

        </section>

    );

}
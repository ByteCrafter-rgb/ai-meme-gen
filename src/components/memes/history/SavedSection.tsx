import { HistorySection } from "./HistorySection";

function Saved(){

    return(

        <main className="
            min-h-screen
            bg-[#070A13]
            px-20
            py-12
        ">

             <h1 className="mt-3 text-6xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">

        Saved Memes

    </h1>

            <HistorySection/>

        </main>

    );

}

export default Saved;
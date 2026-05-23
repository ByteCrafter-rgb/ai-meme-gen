import { MemeCard } from "./MemeCard";

export function MemeGrid({
    memes,
    onSelect,
    selected
}:{
    memes:string[];
    onSelect:
    (meme:string)=>void;
    selected:string;
}) {

    return (

        <div className="mt-10 grid grid-cols-3 gap-8">

            {
                memes.map(
                    (meme)=>(

                        <MemeCard
                            meme={meme}
                            onSelect={onSelect}
                            selected={
                                selected===meme
                            }
                        />

                    )
                )
            }

        </div>

    );

}
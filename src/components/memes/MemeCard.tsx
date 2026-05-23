export function MemeCard({
    meme,
    onSelect,
    selected
}:{
    meme:string;

    onSelect:
    (meme:string)=>void;

    selected:boolean;
}){

    return(

        <div

            onClick={()=>
                onSelect(
                    meme
                )
            }

            className={

                selected

                ?

                "border-4 border-[#C8FF2E] rounded-3xl"

                :

                "rounded-3xl"

            }

        >

            <img
                src={meme}
                className="
                    w-full
                    h-72
                    object-cover
                    rounded-3xl
                "
            />

        </div>

    );

}
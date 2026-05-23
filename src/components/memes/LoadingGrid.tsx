export function LoadingGrid(){

    return(

        <div className="mt-12 grid grid-cols-3 gap-8">

            {
                Array(6)
                .fill(0)
                .map((_,i)=>(

                    <div
                        key={i}

                        className="h-80 rounded-3xl bg-[#171B29] animate-pulse"
                    />

                ))
            }

        </div>

    );

}
import { MemeGrid } from "./MemeGrid";
import { RegenerateButton } from "./RegenerateButton";

export function CurrentGeneration({
    memes,
    onSelect,
    selected,
    onSave,
    saving,
}: {
    memes: string[];

    onSelect:
    (meme: string) => void;

    selected: string;

    onSave:
    () => void;

    saving: boolean;
}) {

    return (

        <section className="
        mt-14
        p-10
        rounded-4xl
        bg-[#101421]
        ">

            <div className="
            flex
            items-center
            justify-between
            ">

                <div>

                    <h2 className="
                    text-3xl
                    font-semibold
                    text-white
                    ">

                        Current Generation

                    </h2>

                    <p className="
                    mt-2
                    text-[#9CA3AF]
                    ">

                        Generated just now

                    </p>

                </div>

                <RegenerateButton />

            </div>

            <MemeGrid

                memes={
                    memes
                }

                onSelect={
                    onSelect
                }

                selected={
                    selected
                }

            />

            {

            selected !== ""

            &&

            (

            <div className="
            mt-8
            flex
            justify-center
            ">

                <button

                    onClick={
                        onSave
                    }

                    disabled={
                        saving
                    }

                    className="
                    px-8
                    py-4
                    rounded-2xl
                    bg-[#C8FF2E]
                    font-semibold
                    disabled:opacity-70
                    "

                >

                    {

                    saving

                    ?

                    "Saving..."

                    :

                    "Save Selection"

                    }

                </button>

            </div>

            )

            }

        </section>

    );

}
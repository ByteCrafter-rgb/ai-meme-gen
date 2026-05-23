import { useState } from "react";

import { getHistory } from "../../../services/history";

import type {
    SavedMeme
} from "../../../services/history";

const EMOJIS = [
    "😂",
    "🔥",
    "🧠",
    "💀"
];

const KEY =
"reactions";

export function SavedCarousel(){

    const history =
    getHistory();

    const [

    reactions,

    setReactions

    ] = useState<
    Record<
    string,
    string
    >

    >(

    JSON.parse(

    localStorage.getItem(
        KEY
    )

    ||

    "{}"

    )

    );

    const [

    copied,

    setCopied

    ] = useState<
    Record<
    string,
    boolean
    >

    >({});

    function handleReact(

        id:string,

        emoji:string

    ){

        const updated = {

            ...reactions,

            [id]:
            emoji

        };

        setReactions(
            updated
        );

        localStorage.setItem(

            KEY,

            JSON.stringify(
                updated
            )

        );

    }

    async function copyUrl(

        id:string,

        url:string

    ){

        await navigator
        .clipboard
        .writeText(
            url
        );

        setCopied(

            prev=>({

                ...prev,

                [id]:
                true

            })

        );

        setTimeout(()=>{

            setCopied(

                prev=>({

                    ...prev,

                    [id]:
                    false

                })

            );

        },1500);

    }

    async function downloadImage(

        url:string

    ){

        const response =

        await fetch(
            url
        );

        const blob =

        await response
        .blob();

        const objectUrl =

        URL.createObjectURL(
            blob
        );

        const a =

        document
        .createElement(
            "a"
        );

        a.href =
        objectUrl;

        a.download =
        "meme.png";

        a.click();

        URL.revokeObjectURL(
            objectUrl
        );

    }

    return (

        <div className="
        overflow-hidden
        ">

            <div className="
            flex
            gap-8
            w-max
            animate-scroll
            ">

                {

                history.map(

                (
                meme:
                SavedMeme
                )=>(

                <div

                key={
                    meme.id
                }

                className="
                w-80
                h-[520px]
                shrink-0
                bg-[#081022]
                rounded-[32px]
                p-5
                flex
                flex-col
                "

                >

                    <div className="
                    relative
                    group
                    ">

                        <img

                        src={
                            meme.url
                        }

                        className="
                        w-full
                        h-[380px]
                        object-cover
                        rounded-3xl
                        "

                        />

                        <div className="
                        absolute
                        inset-0

                        bg-black/60

                        opacity-0

                        group-hover:opacity-100

                        transition-all

                        duration-300

                        rounded-3xl

                        flex

                        items-center

                        justify-center

                        gap-4
                        ">

                            <button

                            onClick={()=>

                            copyUrl(

                            meme.id,

                            meme.url

                            )

                            }

                            className="
                            px-4
                            py-2

                            rounded-xl

                            bg-white/10

                            text-white

                            backdrop-blur
                            "

                            >

                            {

                            copied[
                            meme.id
                            ]

                            ?

                            "Copied ✓"

                            :

                            "Copy URL"

                            }

                            </button>

                            <button

                            onClick={()=>

                            downloadImage(

                            meme.url

                            )

                            }

                            className="
                            px-4
                            py-2

                            rounded-xl

                            bg-[#C8FF2E]

                            text-black

                            font-semibold
                            "

                            >

                            Download

                            </button>

                        </div>

                    </div>

                    <div className="
                    mt-auto
                    pt-6
                    flex
                    justify-center
                    gap-5
                    text-3xl
                    ">

                        {

                        EMOJIS.map(

                        emoji=>(

                        <button

                        key={
                            emoji
                        }

                        onClick={()=>

                        handleReact(

                        meme.id,

                        emoji

                        )

                        }

                        className={`

                        transition-all

                        duration-300

                        hover:scale-125

                        ${

                        reactions[
                        meme.id
                        ] === emoji

                        ?

                        "opacity-100 scale-125"

                        :

                        "opacity-30"

                        }

                        `}

                        >

                            {emoji}

                        </button>

                        )

                        )

                        }

                    </div>

                </div>

                )

                )

                }

            </div>

        </div>

    );

}
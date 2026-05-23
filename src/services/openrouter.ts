export async function generateOneMeme(
    image: string,
    index: number
){

    const prompts = [

        "Turn this into a funny internet meme with witty caption.",

        "Generate absurd GenZ humor meme from this image.",

        "Create a sarcastic meme from this image.",

        "Make a wholesome funny meme.",

        "Create a brainrot meme caption style image.",

        "Turn this into a viral reaction meme."

    ];

    const response =
    await fetch(

    "https://openrouter.ai/api/v1/chat/completions",

    {

        method:"POST",

        headers:{

            Authorization:

            `Bearer ${
                import.meta.env
                .VITE_OPENROUTER_API_KEY
            }`,

            "Content-Type":
            "application/json"

        },

        body:JSON.stringify({

            model:
            "google/gemini-2.5-flash-image",

            modalities:[
                "image",
                "text"
            ],

            messages:[

                {
                    role:"user",

                    content:[

                        {
                            type:"text",

                            text:
                            prompts[index]
                            ??
                            prompts[0]
                        },

                        {
                            type:"image_url",

                            image_url:{
                                url:image
                            }
                        }

                    ]

                }

            ]

        })

    }

    );

    const result =
    await response.json();

    console.log(
        result
    );

    const meme =

    result
    ?.choices?.[0]
    ?.message
    ?.images?.[0]
    ?.image_url
    ?.url;

    if(!meme){

        throw new Error(

        result?.error?.message

        ||

        "No meme returned"

        );

    }

    return meme;

}
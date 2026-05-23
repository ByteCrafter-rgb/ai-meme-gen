export async function testAPI() {

    const response =
        await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                method:"POST",

                headers:{
                    Authorization:
                    `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,

                    "Content-Type":
                    "application/json"
                },

               body: JSON.stringify({

                    model:
                    "google/gemini-2.5-flash-image",

                    modalities:
                    ["image","text"],

                    messages:[

                        {
                            role:"user",

                            content:
                            "Generate a funny cat meme"
                        }

                    ]

                })

            }
        );

    return await response.json();

}
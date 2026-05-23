import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { CurrentGeneration } from "../components/memes/CurrentGeneration";
import { LoadingGrid } from "../components/memes/LoadingGrid";

import { generateMemes } from "../services/memeAPI";
import { uploadMeme } from "../services/cloudinary";
import { saveMeme } from "../services/history";

function MyMemes() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const image = state?.image;

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [error, setError] = useState("");

    const [memes, setMemes] =
        useState<string[]>([]);

    const [selected, setSelected] =
        useState("");

    useEffect(() => {

        async function load() {

            try {

                if (!image)
                    return;

                const result =
                    await generateMemes(
                        image
                    );

                setMemes(
                    result
                );

            }

            catch (err) {

                console.error(
                    err
                );

                setError(
                    String(err)
                );

            }

            finally {

                setLoading(
                    false
                );

            }

        }

        load();

    }, []);

    function handleSelect(
        meme: string
    ) {

        setSelected(
            meme
        );

    }

    async function handleSave() {

        if (!selected)
            return;

        try {

            setSaving(
                true
            );

            const url =
                await uploadMeme(
                    selected
                );

            saveMeme(
                url
            );

            navigate(
                "/saved"
            );

        }

        finally {

            setSaving(
                false
            );

        }

    }

    return (

        <main className="
        min-h-screen
        bg-[#070A13]
        px-20
        py-12
        ">

            <h1 className="
            text-6xl
            font-bold
            text-white
            ">

                My AI Memes

            </h1>

            <p className="
            mt-3
            text-xl
            text-[#A1A1AA]
            ">

                Your AI-generated memes.

            </p>

            {

                loading

                    ?

                    <LoadingGrid />

                    :

                    error

                        ?

                        <div className="
                        mt-12
                        p-8
                        rounded-3xl
                        bg-red-900/20
                        border
                        border-red-500
                        text-red-300
                        ">

                            {error}

                        </div>

                        :

                        <CurrentGeneration

                            memes={
                                memes
                            }

                            onSelect={
                                handleSelect
                            }

                            selected={
                                selected
                            }

                            onSave={
                                handleSave
                            }

                            saving={
                                saving
                            }

                        />

            }

        </main>

    );

}

export default MyMemes;
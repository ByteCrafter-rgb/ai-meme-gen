import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function UploadSection() {
    const navigate = useNavigate();
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [image, setImage] = useState<File | null>(null);
    const [camera, setCamera] = useState(false);

    function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
        if (!e.target.files?.[0]) return;
        setImage(e.target.files[0]);
    }

    async function openCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "user" }
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            setCamera(true);
            setImage(null);
        } catch (err) {
            console.error("Error accessing camera: ", err);
        }
    }

    function capture() {
        if (!videoRef.current || !canvasRef.current) return;

        const ctx = canvasRef.current.getContext("2d");
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;

        ctx?.drawImage(videoRef.current, 0, 0);

        canvasRef.current.toBlob((blob) => {
            if (!blob) return;

            const file = new File([blob], "camera.png", {
                type: "image/png"
            });

            setImage(file);
            setCamera(false);

            const stream = videoRef.current?.srcObject as MediaStream;
            stream?.getTracks().forEach(track => track.stop());
        }, "image/png");
    }

    async function handleGenerate() {
        if (!image) return;
        navigate("/my-memes", {
            state: { image }
        });
    }

    return (
        <section className="h-full flex items-center justify-center p-4 sm:p-10">
            <div className="w-full max-w-md p-6 sm:p-10 rounded-3xl border border-[#27272A] bg-[#0B0E17] text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                    Upload your image
                </h2>
                <p className="mt-3 text-sm sm:text-base text-[#9CA3AF]">
                    Upload or use camera.
                </p>

                {/* Mobile Responsive Controls Action Layer */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <label className="flex-1 py-3 rounded-xl bg-[#1A1F2E] text-[#C8FF2E] cursor-pointer text-center text-sm sm:text-base">
                        Files
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleUpload}
                        />
                    </label>
                    <button
                        onClick={openCamera}
                        className="flex-1 py-3 rounded-xl bg-[#1A1F2E] text-[#C8FF2E] text-sm sm:text-base"
                    >
                        Camera
                    </button>
                </div>

                {/* Viewport Boundary Container Box */}
                <div className="mt-8 h-48 sm:h-56 w-full rounded-2xl border-2 border-dashed border-[#3F3F46] overflow-hidden flex items-center justify-center">
                    {image ? (
                        <img
                            src={URL.createObjectURL(image)}
                            alt="Preview"
                            className="w-full h-full object-contain"
                        />
                    ) : camera ? (
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <span className="text-[#C8FF2E] text-sm">
                            Select image
                        </span>
                    )}
                </div>

                {/* Dynamic Camera Control Shutter button */}
                {camera && (
                    <button
                        onClick={capture}
                        className="mt-4 w-full py-4 rounded-xl bg-[#C8FF2E] font-semibold text-black text-sm sm:text-base"
                    >
                        Capture
                    </button>
                )}

                {/* Submission CTA Layer */}
                <button
                    onClick={handleGenerate}
                    className={
                        image
                            ? "mt-6 w-full py-4 rounded-xl font-semibold bg-[#C8FF2E] text-black"
                            : "mt-6 w-full py-4 rounded-xl font-semibold bg-zinc-600 text-zinc-400 cursor-not-allowed"
                    }
                    disabled={!image}
                >
                    Generate Meme
                </button>

                <canvas ref={canvasRef} className="hidden" />
            </div>
        </section>
    );
}
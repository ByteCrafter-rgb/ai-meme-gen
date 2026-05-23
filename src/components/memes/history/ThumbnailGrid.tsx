import { ThumbnailCard } from "./ThumbnailCard";

export function ThumbnailGrid() {

    return (

        <div className="mt-8 grid grid-cols-6 gap-6">

            <ThumbnailCard />
            <ThumbnailCard />
            <ThumbnailCard />
            <ThumbnailCard />
            <ThumbnailCard />
            <ThumbnailCard />

        </div>

    );

}
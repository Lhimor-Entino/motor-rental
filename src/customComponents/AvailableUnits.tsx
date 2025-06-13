/* eslint-disable @next/next/no-img-element */
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { Link } from "react-router-dom";

// const images = Array.from({ length: 9 }, (_, i) => {
//   const isLandscape = i % 2 === 0;
//   const width = isLandscape ? 800 : 600;
//   const height = isLandscape ? 600 : 800;
//   return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
// });

const images = [
    "https://png.pngtree.com/png-clipart/20240321/original/pngtree-yamaha-png-free-download-png-image_14649020.png",
    "https://png.pngtree.com/png-clipart/20231027/original/pngtree-yamaha-yzf-r1-transparent-background-png-image_13445779.png",
    "https://www.nicepng.com/png/detail/4-47299_yamaha-motorcycle-png-download-image-yamaha-new-sport.png",
    "https://www.pngarts.com/files/1/Yamaha-Motorcycle-PNG-Photo.png",
    "https://www.pngarts.com/files/1/Yamaha-Motorcycle-PNG-Free-Download.png",
    "https://png.pngtree.com/png-vector/20240611/ourmid/pngtree-motorcycle-yamaha-vixion-vector-png-image_12713873.png"
]

export function AvailableUnits() {
    return (

        <section id="photos" className="pb-52 flex justify-center flex-col " >
            <div className="columns-3 gap-4 ">
                {images.map((imageUrl, idx) => (
                    <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                        <img
                            className="mb-4 size-60 rounded-lg object-contain"
                            src={imageUrl}
                            alt={`Random stock image ${idx + 1}`}
                        />
                    </BlurFade>
                ))}


            </div>
            <Link to={"/units"} className="w-full">
             <ShinyButton className="w-full">Show All (100 models) </ShinyButton>
            </Link>
           
        </section>
    );
}

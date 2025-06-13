import { BlurFade } from '@/components/magicui/blur-fade'
import { MorphingText } from '@/components/magicui/morphing-text'



const ShopBanner = () => {
    return (
        <>
            <section id="header-2">
                <BlurFade delay={0.25 * 2} inView>
                    <span className="text-pretty text-xl tracking-tighter sm:text-3xl xl:text-4xl/none">
                        <p className=" font-bold mb-10">Premium Motorcycle Rental in New York</p>
                        <p className="text-xl text-muted-foreground mt-2">Don’t hold back the thrill of the open road.</p>
                        <p className="text-xl text-muted-foreground mt-2">Ride the most iconic motorcycles from around the world—ready for you here and now.</p>
                        <MorphingText className="mt-20" texts={["Ignite", "Cruise", "Conquer"]} />
                    </span>
                </BlurFade>

            </section>
            <section id="header" className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background">
                {/* <WarpBackground> */}
                <BlurFade delay={0.25} inView className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                    <img className="size-full" src="https://www.pngarts.com/files/1/Yamaha-Motorcycle-PNG-Background-Image.png" />
                </BlurFade>
                {/* </WarpBackground> */}
            </section>
        </>

    )
}

export default ShopBanner
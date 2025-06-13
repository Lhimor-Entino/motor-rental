

import { BlurFade } from "@/components/magicui/blur-fade";
import { MorphingText } from "../magicui/morphing-text";

import { AvailableUnits } from "@/customComponents/AvailableUnits";
import { TextReveal } from "../magicui/text-reveal";
import ShopBanner from "@/customComponents/ShopBanner";
type Props = {

}

const LandingPage = (_props: Props) => {
  return (
    <div className=" w-4/5 flex flex-col m-auto p-8 rounded-2xl  ">

      <div className="grid grid-cols-2 gap-4">
        {/* {THE BANNER} */}
        <ShopBanner />
      </div>
      <div className="flex flex-col justify-center  items-center m-auto w-full ">

        <div className="flex flex-col items-center justify-between">
          <TextReveal className="text-[12px] text-muted-foreground">OUR VEHICLE FLEET</TextReveal>

        </div>

        <div className="w-full flex flex-col items-center justify-center ">
          <div className=" text-center text-[14px] font-bold text-slate-600 w-[50%] mb-10">
            <p className="p-1">Elevate your journey with our handpicked selection of premium motorcycles, where craftsmanship meets performance. </p>
            <p className="p-1"> Designed for riders who value sophistication, power, and the freedom of the open road—our fleet offers an unforgettable experience tailored for the true connoisseur.</p>
          </div>
          <AvailableUnits />

        </div>


      </div>

      <div>
          <section id="header" className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background">
          {/* <WarpBackground> */}
          <BlurFade delay={0.25} inView className="pointer-events-none z-10 whitespace-pre-wrap bg-clip-text  text-7xl font-bold leading-none tracking-tighter text-transparent">
             <span className="text-pretty text-xl tracking-tighter sm:text-3xl xl:text-4xl/none">
              <p className=" text-sm font-medium text-muted-foreground ">TAKING CARE OF EVERY CLIENT</p>
              <p className="text-xl text-slate-800 mt-2">Key Features</p>
              <p className="text-sm text-muted-foreground mt-2">
                We are all about our client's safety.
                <br></br>
                That's why we provide the best service you can imagine
              </p>

              <MorphingText className="mt-20" texts={["Ignite", "Cruise", "Conquer"]} />

            </span>
          </BlurFade>
          {/* </WarpBackground> */}
        </section>

      </div>
    </div>

  )
}

export default LandingPage
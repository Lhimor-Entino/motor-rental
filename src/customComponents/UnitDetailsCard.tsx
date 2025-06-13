import { BlurFade } from '@/components/magicui/blur-fade'
import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import { ShimmerButton } from '@/components/magicui/shimmer-button'

import type { UnitInterface } from '@/types/unitInterface'
import { CpuIcon, FuelIcon, GaugeCircleIcon, Settings2Icon } from 'lucide-react'

interface Props {
    unit: UnitInterface | null
}

const UnitDetailsCard = (props: Props) => {
    const { unit } = props

    if (!unit) return
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  mt-10 gap-4'>

            <section id="header" className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background">
                {/* <WarpBackground> */}
                {/* <BlurFade delay={0.25} inView className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                    <img className="size-full" src={unit.image} />
                </BlurFade> */}
                
                      <div className="relative">
                            <HeroVideoDialog
                                className="block dark:hidden "
                                animationStyle="top-in-bottom-out"
                                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                                thumbnailSrc={unit.image}
                                thumbnailAlt="Hero Video"
                                
                            />
                    
                        </div>
                {/* </WarpBackground> */}
            </section>
            <section id="header-2" className='pl-10 pr-10' >
                <BlurFade delay={0.25 * 2} inView>
                    <span className="text-pretty text-xl tracking-tighter sm:text-3xl xl:text-4xl/none">
                        <p className=" text-[1.7rem]">{unit.brand}</p>
                        <p className="text-3xl font-bold mt-9">{unit.name}</p>
                        <p className="text-xl text-muted-foreground mt-5">{unit.description}</p>

                    </span>
                </BlurFade>


                {/* {SPECS} */}
                <BlurFade delay={0.25 * 2} inView>
                    <div className='grid grid-cols-4 mt-10 '>
                        <div className='text-center'>
                            <p className='text-sm font-bold text-muted-foreground mb-1'>SPEED</p>
                            <div className='flex gap-x-2 justify-center items-center text-muted-foreground'>
                                <GaugeCircleIcon className='w-4' />
                                <span className='text-sm'>{unit.topSpeed}</span>
                            </div>
                        </div>
                        <div className='text-center'>
                            <p className='text-sm font-bold text-muted-foreground mb-1'>FUEL</p>
                            <div className='flex gap-x-2 justify-center items-center text-muted-foreground' >
                                <FuelIcon className='w-4' />
                                <span className='text-sm'>{unit.fuelType}</span>
                            </div>
                        </div>

                        <div className='text-center'>
                            <p className='text-sm font-bold text-muted-foreground mb-1'>CC</p>
                            <div className='flex gap-x-2  items-center justify-center text-muted-foreground'>
                                <CpuIcon className='w-4' />
                                <span className='text-sm'>{unit.engineCC}</span>
                            </div>
                        </div>
                        <div className='text-center'>
                            <p className='text-sm font-bold text-muted-foreground mb-1'>Transmission</p>
                            <div className='flex gap-x-2 justify-center items-center text-muted-foreground'>
                                <Settings2Icon className='w-4' />
                                <span className='text-sm'>{unit.transmission}</span>
                            </div>
                        </div>
                    </div>
                </BlurFade>


                <BlurFade delay={0.25 * 2} inView>
                    <div className='flex gap-x-3 mt-20 justify-end'>
                  
                        <ShimmerButton className="shadow-2xl">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Reserve
                            </span>
                        </ShimmerButton>
                        <ShimmerButton className="shadow-2xl ">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                Book now
                            </span>
                        </ShimmerButton>

                    </div>
                </BlurFade>
            </section>


        </div>
    )
}

export default UnitDetailsCard
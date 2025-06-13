import { BlurFade } from '@/components/magicui/blur-fade'
import { BoxReveal } from '@/components/magicui/box-reveal'
import type { UnitInterface } from '@/types/unitInterface'
import { Star } from 'lucide-react'
interface Props {
    unit: UnitInterface
    idx: number
}

const UnitCard = (props: Props) => {

    const { unit, idx } = props
    return (
        <div className='min-w-[200px] border p-4 pb-6 pt-6 rounded-3xl hover:cursor-pointer shadow-2xl'>
            <div className='w-full flex justify-center'>
                <BlurFade key={unit.image} delay={0.25 + idx * 0.05} inView>
                    <img
                        loading='lazy'
                        className="mb-4 size-60 rounded-lg object-contain"
                        src={unit.image}
                        alt={`Random stock image ${idx + 1}`}
                    />
                </BlurFade>
            </div>
            <div className="size-full max-w-lg items-center justify-center overflow-hidden pl-3 pr-3 ">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <h2 className=" text-[1rem] font-bold text-slate-700">
                        {unit.name}
                    </h2>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <p className=" text-[.8rem] text-slate-400 ">
                        {unit.brand}
                    </p>
                </BoxReveal>
                <div className='flex justify-between mt-2'>
                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <p className=" text-[.8rem] text-violet-600 font-bold ">
                            $ {unit.price}
                        </p>
                    </BoxReveal>
                    <div className='flex gap-x-2 items-center'>
                        <BoxReveal boxColor={"#5046e6"} duration={0.5} >
                            <Star className='w-4 text-yellow-600 '/>

                        </BoxReveal>
                        <BoxReveal boxColor={"#5046e6"} duration={0.5} >

                            <p className=" text-[.8rem]  text-slate-400 ">
                                {unit.rating}
                            </p>
                        </BoxReveal>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default UnitCard
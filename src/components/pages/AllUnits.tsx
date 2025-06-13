
import Map from '@/customComponents/Map';
import ShopBanner from '@/customComponents/ShopBanner'
import UnitCard from '@/customComponents/UnitCard'
import { motorcycles } from '@/data/data';
import type { UnitInterface } from '@/types/unitInterface';
import { LocateFixedIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
const AllUnits = () => {
  return (
    <div className=" w-4/5 flex flex-col m-auto p-8 rounded-2xl">
      <div className="grid grid-cols-2 gap-4 w-full">
        <ShopBanner />
      </div>

      <div className='mb-5'>

        <div className='flex justify-center'>
          <Popover>
            <PopoverTrigger className='flex gap-2 bg-violet-700 text-white p-3 pb-2 pt-2 rounded-2xl hover:cursor-pointer'>
              <LocateFixedIcon />
              <p>Find Near Me</p>
            </PopoverTrigger>
            <PopoverContent>
              <Map />
            </PopoverContent>
          </Popover>




        </div>
      </div>
      <div className='grid lg:grid-cols-4 sm:grid-cols-1  md:grid-cols-2 gap-6 w-full'>
        {motorcycles.map((unit: UnitInterface, index: number) =>
          <Link to={`/units/${unit.id}`}>
            <UnitCard unit={unit} idx={index} />
          </Link>
        )}
      </div>
    </div>
  )
}

export default AllUnits
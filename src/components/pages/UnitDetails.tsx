
import UnitDetailsCard from '@/customComponents/UnitDetailsCard';
import { motorcycles } from '@/data/data';
import type { UnitInterface } from '@/types/unitInterface';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

type Props = {}

const UnitDetails = (props: Props) => {
  const { id } = useParams<{ id: string }>();
  const [unit,setUnit] = useState<UnitInterface|null>(null)

  useEffect(() => {

    if(!id) return
    const selected_unit = motorcycles.filter((unit:UnitInterface) => unit.id === parseInt(id))
    setUnit(selected_unit[0])
  },[id])
  return (

    <>

    {!unit ?
     <div>

        <p>No Product Found</p>
    </div>
    :
    
     <div>

        <UnitDetailsCard unit={unit || null} />
    </div>
    }
    </>
   
  )
}

export default UnitDetails
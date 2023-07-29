import {FC} from 'react'
import { NavbarItemtypes } from '@/components/utils/NavbarArrayAndTypes'
import Link from "next/link"

const Dropdown: FC<{item: NavbarItemtypes}> = ({item}) => {
  return (
    <div>
        {item.dropDownData?.map((item:NavbarItemtypes, index:number)=>(
            <li className="hover:ml-2 group-hover:duration-300 -translate-y-7 group-hover:translate-y-0">
                <Link href={item.href}>{item.label}</Link>
            </li>

        ))}

    </div>
  )

}

export default Dropdown
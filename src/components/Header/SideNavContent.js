import React from 'react'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
const SideNavContent = ({title,one,two,three}) => {
  return (
    <>
      <div className=" mt-2 md:mt-1  border-b-[2px] border-b-gray-300">
        <h3 className="text-lg font-semibold px-6">{title}</h3>
        <ul className='text-sm'>
          <li className="flex items-center justify-between hover:bg-zinc-300 px-6 py-2 cursor-pointer">
            {one}
            <span>
              <KeyboardArrowRight />
            </span>
          </li>
          <li className="flex items-center justify-between hover:bg-zinc-300 px-6 py-2 cursor-pointer">
            {two}
            <span>
              <KeyboardArrowRight />
            </span>
          </li>
          <li className="flex items-center justify-between hover:bg-zinc-300 px-6 py-2 cursor-pointer">
            {three}
            <span>
              <KeyboardArrowRight />
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideNavContent
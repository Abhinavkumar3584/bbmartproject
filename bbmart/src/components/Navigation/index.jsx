import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { RiMenu2Fill } from 'react-icons/ri';
import { LiaAngleDownSolid } from 'react-icons/lia';
import CategoryPanel from './CategoryPanel';
import '../Navigation/style.css';


const Navigation = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    };


    return (
        <>
            <nav className='py-2'>
                <div className="container flex item-center justify-end gap-8">
                    <div className="col_1 w-[25%]">
                        <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}>
                            <RiMenu2Fill className='text-[18px]' />
                            SHOP BY CATEGORIES
                            <LiaAngleDownSolid className='text-[14px] m1-auto font-bold' />
                        </Button>
                    </div>

                    <div className="col_2 w-[75%]">
                        <ul className='flex items-center gap-6 nav'>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500] font-style:bold">
                                    <Button className='link transition !font-[500] !text-[#130e0e] hover:!text-[rgb(255,0,0)]'>
                                    Home
                                    </Button>
                                </Link>

                            </li>
                            <li className='list-none relative'>
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[#130e0e] hover:!text-[rgb(255,0,0)]'>Stationary</Button>
                                </Link>

                                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                                    <ul>
                                        <li className="list-none w-full">
                                            <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men</Button>
                                            </Link>
                                        </li>
                                        <li className="list-none w-full">
                                            <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men</Button>
                                            </Link>
                                        </li>
                                        <li className="list-none w-full">
                                            <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men</Button>
                                            </Link>
                                        </li>
                                        <li className="list-none w-full">
                                            <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men</Button>
                                            </Link>
                                        </li>
                                        <li className="list-none w-full">
                                            <Link to="/" className='w-full'>
                                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men</Button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>


                            </li>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[#130e0e] hover:!text-[rgb(255,0,0)]'>Printing</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[#130e0e] hover:!text-[rgb(255,0,0)]'>Branding</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[#130e0e] hover:!text-[rgb(255,0,0)]'>Essentials</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[#130e0e] hover:!text-[rgb(255,0,0)]'>Clothings</Button>
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Link to="/" className="link transition text-[14px] font-[500]">
                                    <Button className='link transition !font-[500] !text-[#130e0e] hover:!text-[rgba(255,48,48,0.91)]'>Groceries</Button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Category panel and its components */}
            <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel} />
        </>
    );
}

export default Navigation;
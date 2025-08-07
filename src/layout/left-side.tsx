import Image from 'next/image';
import React from 'react'

const styleHeader = "text-stone-800 text-[40px] leading-[48px] font-semibold tracking-[-0.4px]";
const styleSubHeader = 'text-stone-600 text-[20px] font-regular leading-[28px] tracking-[-0.04px]';
const styleLabel = 'text-stone-800 text-[18px] font-medium leading-[28px] tracking-[-0.4px]';

const LeftSide = () => {
    return (
        <section className='left-side flex flex-col h-full justify-between col-span-5'>
            <div className='top-container flex flex-col gap-9 max-w-[422px]'>
                <Image alt='logo' src={'/images/logo-daarut-tauhiid-min.png'} className='' width={102} height={95}/>
                <div className='text-container flex flex-col gap-4'>
                    <header className={`${styleHeader}`}>
                        Web Portal Satu Pintu Daarut Tauhiid
                    </header>
                    <p className={`${styleSubHeader}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </div>
            </div>
            <span className={`${styleLabel} hidden md:block`}>Pesantren Daarut Tauhiid, © 2025</span>
        </section>
    );
}

export default LeftSide
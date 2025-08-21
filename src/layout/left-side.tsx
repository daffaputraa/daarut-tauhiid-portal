import Image from 'next/image';
import React from 'react'

const styleHeader = "text-stone-800 text-[36px] uppercase leading-[48px] font-semibold tracking-[-0.4px]";
const styleSubHeader = 'text-stone-600 text-[28px] font-regular leading-[32px] tracking-[-0.04px]';
const styleLabel = 'text-stone-800 text-[18px] font-medium leading-[28px] tracking-[-0.4px]';

const LeftSide = () => {
    return (
        <section className='left-side flex flex-col h-full justify-between col-span-6'>
            <div className='top-container flex flex-col gap-9 max-w-[500px]'>
                <Image alt='logo' src={'/images/sekolah-dt.jpg'} className='rounded-full' width={270} height={95}/>
                <div className='text-container flex flex-col gap-4'>
                    <header className={`${styleHeader}`}>
                        Digitalisasi Pendidikan
                        <br/>
                        <p className='text-xl'>
                            Yayasan Daarut Tauhiid Rahmatan Lil Alamin 
                        </p>
                    </header>
                    {/* <p className={`${styleSubHeader}`}>Sekolah Daarut Tauhiid Indonesia</p> */}
                </div>
            </div>
            <blockquote className="border-l-4 border-stone-400 italic text-stone-900 text-lg text-center leading-relaxed">
                        “Teknologi adalah karunia dan ujian dari Alloh, bisa memudahkan kita untuk memperbanyak <span className="font-semibold">KEBAIKAN</span> atau memperbanyak <span className="font-semibold">DOSA</span>.”
                        <footer className="mt-2 text-stone-900 text-base font-medium">— Aa Gym</footer>
            </blockquote>
            <span className={`${styleLabel} hidden md:block`}>Sekolah Daarut Tauhiid Indonesia</span>
        </section>
    );
}

export default LeftSide
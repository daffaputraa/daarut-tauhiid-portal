import Image from 'next/image';
import React from 'react'

const styleHeader = "text-grey-800 text-[36px] uppercase leading-[48px] font-semibold tracking-[-0.4px]";
const styleSubHeader = 'text-stone-600 text-[28px] font-regular leading-[32px] tracking-[-0.04px]';
const styleLabel = 'text-stone-800 text-[18px] font-medium leading-[28px] tracking-[-0.4px]';

const LeftSide = () => {
    return (
      <section className="left-side flex flex-col h-full justify-between col-span-6">
        <div className="top-container flex flex-col gap-9 max-w-[500px]">
          <Image
            alt="logo"
            src={"/images/sekolah-dt.jpg"}
            className="rounded-full"
            width={270}
            height={95}
          />
          <div className="text-container flex flex-col gap-4">
            <header className={`${styleHeader}`}>
              Digitalisasi Pendidikan
              <br />
              <p className="text-xl">
                Yayasan Daarut Tauhiid Rahmatan Lil Alamin
              </p>
            </header>
            {/* <p className={`${styleSubHeader}`}>Sekolah Daarut Tauhiid Indonesia</p> */}
          </div>
        </div>
        <blockquote className="border-l-4 border-stone-400 italic text-lg text-center max-w-[600px] leading-relaxed bg-[#898E4E]/40 text-gray-950 px-4 py-2 rounded-2xl">
          “Teknologi adalah karunia dan ujian dari Alloh, bisa memudahkan kita
          untuk memperbanyak <span className="font-semibold">KEBAIKAN</span>{" "}
          atau memperbanyak <span className="font-semibold">DOSA</span>.”
          <footer className="mt-2 text-base font-medium text-zinc-900">
            — Aa Gym
          </footer>
        </blockquote>

        <div className='flex'>
            <span
            className={`${styleLabel} hidden md:block px-4 py-2 bg-[#313563] w-fit rounded-full text-white`}
            >
            Sekolah Daarut Tauhiid Indonesia
            </span>
           <span><span
        className={`   hidden md:block px-4 py-2  text-gray-950 w-fit rounded-full`}
      >
        PT Bengkel Aplikasi Nusantara
      </span></span>
        </div>
      </section>
    );
}

export default LeftSide
import CardApp from "@/src/components/app-card";
import LeftSide from "@/src/layout/left-side";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" box-border h-screen py-3 pt-16 max-w-[1200px] px-5 md:px-0 mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-9">
        <LeftSide />
        <div className="card-container w-full grid grid-cols-1 md:grid-cols-2 space-x-5 space-y-8 col-span-7">
          <CardApp
            logo="/images/logo-stai.png"
            title="SIAKAD STAI"
            description="Deskripsi singkat aplikasi"
            link="https://staidaaruttauhiid.ac.id/"
          />
          <CardApp
            logo="/images/logo-edutren.png"
            title="Edutren"
            description="Deskripsi singkat aplikasi"
            link="https://www.edutren.id/"
          />
          <CardApp
            logo="/images/logo-stai.png"
            title="SMKI"
            description="Deskripsi singkat aplikasi"
            link="https://staidaaruttauhiid.ac.id/"
          />
          <CardApp
            logo="/images/logo-stai.png"
            title="Presensi SDM"
            description="Deskripsi singkat aplikasi"
            link="https://staidaaruttauhiid.ac.id/"
          />
          <CardApp
            logo="/images/logo-stai.png"
            title="Mutabaah/MY SDM"
            description="Deskripsi singkat aplikasi"
            link="https://staidaaruttauhiid.ac.id/"
          />
        </div>
      </div>
    </>
  );
}

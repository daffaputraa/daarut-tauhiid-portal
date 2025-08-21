import CardApp from "@/src/components/app-card";
import LeftSide from "@/src/layout/left-side";
// import Image from "next/image"; // hapus kalau tidak dipakai

type VendorApp = {
  id: number;
  nama: string;
  url: string;
  deskripsi: string;
  gambar: string;
  buttonColor: string;
};

export default function Home() {
  const vendorData: VendorApp[] = [
    {
      id: 1,
      nama: "Mutaba'ah Yaumiyah",
      url: "https://sankar-dtr.my.id/v2/login/",
      deskripsi: "Sistem Laporan Ibadah Harian",
      gambar: "/images/logo-dt-sso-1.png",
      buttonColor: "bg-[#2F346C]",
    },
    {
      id: 2,
      nama: "SMKI",
      url: "https://rahmatan.daaruttauhiid.org/login",
      deskripsi: "Sistem Kinerja SDM",
      gambar: "/images/logo-dt-sso.png",
      buttonColor: "bg-[#2F346C]",
    },
    {
      id: 3,
      nama: "Presensi SDM",
      url: "https://mobile-dt.issds.id/login",
      deskripsi: "Sistem Kehadiran Karya",
      gambar: "/images/logo-dt-sso-2.png",
      buttonColor: "bg-[#2F346C]",
    },
    {
      id: 4,
      nama: "SIAKAD STAI 4.0",
      url: "/tes",
      deskripsi: "Sistem Informasi Akademik",
      gambar: "/images/logo-stai.png",
      buttonColor: "bg-[#2F346C]",
    },
    {
      id: 5,
      nama: "Edutren",
      url: "https://edutren.id/sdti", // belum ada link
      deskripsi: "Sistem Digitalisasi Pendidikan",
      gambar: "/images/logo-edutren.png",
      buttonColor: "bg-[#2F346C]",
    },
    {
      id: 6,
      nama: "PPDB",
      url: "https://www.ppdb.daaruttauhiid.sch.id/haladmin",
      deskripsi: "Sistem Pendaftaran Siswa Baru",
      gambar: "/images/ppdb.png",
      buttonColor: "bg-[#2F346C]",
    },
  ];

  return (
    <div className="box-border h-screen py-3 pt-12 max-w-[1200px] px-5 md:px-0 mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-9">
      <div className="lg:col-span-6">
        <LeftSide />
      </div>

      <div className="card-container w-full grid grid-cols-1  md:grid-cols-2 lg:col-span-6 gap-6 md:max-h-[600px]">
        {vendorData.map((app) => (
          <CardApp
          button={app.buttonColor}
            key={app.id}
            logo={app.gambar}
            title={app.nama}
            description={app.deskripsi}
            link={app.url || "#"} // fallback biar gak null
          />
        ))}
      </div>
    </div>
  );
}

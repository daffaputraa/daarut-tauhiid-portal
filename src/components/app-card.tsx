import Image from "next/image";
import { ArrowUpRight } from "lucide-react"; // atau ikon lain sesuai kebutuhan
import Link from "next/link";

interface CardAppProps {
    logo: string;
    title: string;
    link: string;
    description: string;
    onClick?: () => void;
}

export default function CardApp({ logo, title, description, link }: CardAppProps) {
    return (
        <div className="relative flex flex-col justify-between rounded-xl border border-stone-200 bg-white p-4 shadow-sm transition hover:shadow-md hover:bg-stone-100 hover:scale-105 cursor-pointer">   
        <div className="top-container  flex flex-col gap-2">     
            <header className="justify-between flex">
                <div className="flex items-center gap-2">
                    <Image src={logo} alt={title} width={74} height={30} className="rounded-md" />
                    <h3 className="text-xl font-semibold text-stone-800">{title}</h3>
                </div>
                <ArrowUpRight className="h-5 w-5 text-stone-400" />
            </header>
            <p className="text-lg text-stone-600">{description}</p>
        </div>

        {/* Deskripsi */}

        {/* Tombol */}
        <Link
            target="_blank"
            href={link}
            className="mt-2 w-fit rounded-lg bg-stone-900 px-4 py-2 text-white shadow hover:bg-stone-700 transition"
        >
            Masuk
        </Link>
        </div>
  );
}

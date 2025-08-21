import Image from "next/image";
import { ArrowUpRight } from "lucide-react"; // atau ikon lain sesuai kebutuhan
import Link from "next/link";

interface CardAppProps {
    logo: string;
    title: string;
    link: string;
    description: string;
    button: string;
    onClick?: () => void;
}

export default function CardApp({ logo, title, description, link, button }: CardAppProps) {
    return (
      <Link href={link} className="min-h-full">
        <div className="relative flex flex-col min-h-full justify-between rounded-xl border border-stone-200 bg-white/50 p-4 shadow-sm transition hover:shadow-md hover:bg-stone-100 hover:scale-105 cursor-pointer">
          <div className="top-container  flex flex-col mb-3">
            <header className="items-center flex flex-col gap-1">
              <Image
                src={logo}
                alt={title}
                width={90}
                height={30}
                className="rounded-md"
              />
              <div className="flex items-center justify-between">
                <h3 className="text-xl text-center font-semibold text-stone-800 uppercase">
                  {title}
                </h3>
                {/* <ArrowUpRight className="h-5 w-5 text-stone-400" /> */}
              </div>
              <p className="text-base text-stone-600">{description}</p>
            </header>
          </div>

          {/* Deskripsi */}

          {/* Tombol */}
          <Link
            // target="_blank"
            href={link}
            className={`mt-2 text-center rounded-lg w-full ${button} px-4 py-2 text-white shadow hover:bg-stone-700 transition`}
          >
            Masuk
          </Link>
        </div>
      </Link>
    );
}

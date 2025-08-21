import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <div>
      {" "}
      <div className="flex h-screen items-center justify-center flex-col">
        <h1 className="text-4xl font-bold">Under Maintanance</h1>
        <p className="mt-2 text-lg">Halaman yang kamu cari dalam maintanance.</p>
        <Link
          href="/"
          className="mt-4 px-4 py-2 bg-[#2F346C] text-white rounded-md hover:bg-blue-700"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

export default NotFound
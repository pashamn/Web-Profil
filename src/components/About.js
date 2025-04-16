import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className='about'>
        <div className="bg-gray-50 dark:bg-zinc-950 py-10 px-6 md:px-20 rounded-[500px] m-30">
            <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center pl-10 pr-10">
                {/* Foto di kiri */}
                <div>
                <Image src="/images/pasha.JPG" alt="Pasha" width={400} height={400} quality={100} className="w-[400px] h-auto rounded-r-[500px] rounded-bl-[500px] rounded-tl-[200px]"/>
                </div>

                {/* Teks di kanan */}
                <div>
                <p className="text-l leading-relaxed">
                    I'm Pasha Muhammad Nashwan, an informatics student at Itenas.
                    Passionate about technology, web development, and solving real-world problems with code.
                    Always eager to learn and collaborate! jajbhabsx sajbxhabxjh xbshbhba jxbasxhjbhasbx jhbxashbxja hbxasxhbah jbxasxbjas jbxajxbja jxbasxhbah jxbasjbxah sajbxjhabshx jsabxjbxsajbx xbasxhjbhjsabxaj sjbxajbxhjab bashbxhasb jxb ajbxhbas 
                </p>
                </div>

            </div>
        </div>
    </div>

  )
}

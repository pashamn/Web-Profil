import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className='about'>
      <div className="bg-gray-50/50 dark:bg-zinc-950/50 py-10 px-4 sm:px-6 md:px-20 rounded-[40px] sm:rounded-xl md:rounded-[20px] lg:rounded-[40px] mx-4 sm:mx-8 md:mx-30">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center px-2 sm:px-6 md:px-10 max-w-screen-lg mx-auto justify-center">
          <div className="flex justify-center">
            <Image 
              src="/images/pasha.JPG" 
              alt="Pasha" 
              width={400} 
              height={400} 
              quality={100} 
              className="w-full max-w-[300px] lg:max-w-[400px] h-auto rounded-2xl sm:rounded-r-[500px] sm:rounded-bl-[500px] sm:rounded-tl-[200px]"
            />
          </div>
          <div className="text-center lg:text-justify">
            <p className="text-base sm:text-lg leading-normal tracking-normal">
              I am Pasha Muhammad Nashwan, born in Bandung on October 11, 2005. I am a graduate of Pasundan 1 Bandung High School and currently pursuing my undergraduate degree in Informatics at the National Institute of Technology (Itenas) Bandung. With two years of experience in the world of lectures, I continue to develop my interests and abilities in the field of technology, especially in software development and programming.
            </p>
          </div>
        </div>
      </div>
    </div>


  )
}

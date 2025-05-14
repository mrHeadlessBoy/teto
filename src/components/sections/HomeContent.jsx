import React from 'react'
import { Link } from 'react-router-dom'


const HomeContent = () => {
  return (
    <section id="greetings" className="flex flex-col  justify-center gap-4 px-6">
    <h1 className="text-6xl text-black">Greetings, Visitor</h1>
  <p className="text-md text-black/80 max-w-xl leading-relaxed">
    You’ve entered the terminal of creation. Explore my world of code, design, and imagination.
    Navigate through each section to learn about me and what I’ve built.
  </p>
  <p className="text-right text-md text-black/80 max-w-xl leading-relaxed">
    -Chatchawan, aka.mrHeadless
  </p>
  <Link to="/chatchawan" className="p-2 bg-black/70 item-center w-35 text-lg text-white hover:bg-red-600 hover:p-2 hover:text-white transition duration-300">
    <span className="text-xl">{'>'}</span> Meet Me
  </Link>
</section>


  )
}

export default HomeContent
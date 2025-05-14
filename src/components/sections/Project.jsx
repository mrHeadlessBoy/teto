import React from 'react'

const Project = () => {
  return (
<section className="px-8 w-full h-full overflow-hidden">
  <div className="overflow-y-auto max-h-full pr-2 space-y-4">
    {/* Repeat this block for each project */}
    <div className="border border-black/30 mt-10 p-4 rounded bg-black/5 backdrop-blur-md hover:bg-black/10 transition">
      <h3 className="text-lg text-black mb-2 ">Irome</h3>
      <p className="text-md text-black/80">
        AI assistant with multiple personalities, emotion control, voice output routing,
        and full memory control. Styled for VTubing & real-time interaction.
      </p>
    </div>

    {/* Add more project cards here */}
  </div>
</section>



  )
}

export default Project
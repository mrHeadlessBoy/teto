import React from 'react';

const Hollow = () => {
  return (
    <section id="hollow" className="w-full h-full px-4 py-8 flex flex-col items-center justify-center">
      <h1 className='text-xl font-semibold text-black/80 mb-4'>
        Portfolio reference, Mostivation by: 
          <a href='https://www.youtube.com/embed/6cDSJs-b_Us' target="_blank" rel="noopener noreferrer" className='text-red-600 hover:underline'>
            ぴーなた-急性恋愛中毒 feat.重音テト
          </a> <br />
        Author: <a href='https://www.youtube.com/@ZZEFF' target="_blank" rel="noopener noreferrer" className='text-red-600 hover:underline'>
            @ZZEFF
          </a>
          
            {' '}-{' '} 
          <a href='https://www.youtube.com/embed/MIbvUIt-hrE' target="_blank" rel="noopener noreferrer" className='text-red-600 hover:underline'>
            [meme] X3 / Original meme
          </a>
      </h1>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/MIbvUIt-hrE"
          title="YouTube video"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Hollow;

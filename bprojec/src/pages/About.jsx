import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Bloggo
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Welcome to Bloggo, your ultimate destination for insightful and engaging content! 
            Whether you’re a curious reader, an aspiring writer, or someone seeking fresh perspectives, 
            Bloggo offers a diverse array of articles that cater to every interest.
            </p>

            <p>
            Our passionate team of writers delve into topics ranging from technology, 
            lifestyle, and health to travel, food, and entertainment. At Bloggo,
            we believe in the power of stories and ideas to inspire, educate, and entertain. 
            We strive to create a vibrant community where readers can explore new ideas and writers 
            can share their unique voices.
            </p>

            <p>
            With regular updates and a commitment to quality, Bloggo ensures that there’s always something new 
            to discover. Join us on this journey of exploration and connection. Dive into our latest posts, leave 
            your thoughts in the comments, and become a part of the Bloggo family today!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

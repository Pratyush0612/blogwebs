import React from 'react'
import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
    <h1 className='text-3xl font-semibold'>Blogs</h1>
    <p className='text-md text-gray-500'>Bloggo: Your go-to hub for insightful articles and latest trends
    </p>
    <CallToAction />
  </div>
  )
}

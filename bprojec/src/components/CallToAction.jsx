import React from 'react'
import { Button } from 'flowbite-react';
// import {Link} from 'react-router-dom'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Have A Look At the Website.
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout the blogs
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href='' target='_blank' rel='noopener noreferrer'>
                    Blogs
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?cs=srgb&dl=pexels-pixabay-262508.jpg&fm=jpg" />
        </div>
    </div>
  )
}


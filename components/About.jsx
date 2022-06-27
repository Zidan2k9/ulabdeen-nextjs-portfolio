import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About Me</p>
                <h2 className='py-4'>My Journey</h2>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, deserunt.</p>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, tenetur eligendi fugiat vel minima est corporis harum voluptatem beatae expedita neque voluptatum inventore officiis? Dicta assumenda debitis eos beatae sit!</p>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic itaque ipsam molestiae pariatur incidunt quod impedit error dolore nisi? Delectus eligendi dolores odit ad laborum sed animi doloribus obcaecati dolorum autem aperiam fugiat quae suscipit provident distinctio, sunt voluptatibus nisi.</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>My most recent projects can be found here</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="https://pixabay.com/get/gf8c159cba2f87d80f2dd18e8aae0b6b5b2b8f996b40a1a514e4df83022a80571e826b1ea45a77645c01d65df83bf51f5dfe3edbb755225f7a75f294898ccae52499ee27005e7480ce7f6d96d124f8573_1920.png" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About
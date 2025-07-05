import React from 'react';
import Form from './subc/Form';

export default function Contact() {
    return (
        <>
            <section id='contact' className=''>
                <div className='flex flex-col lg:flex-row'>

                    <article className='lg:w-1/2 bg-P1BlueD'>
                        <Form />
                    </article>

                    <article className='lg:w-1/2 h-[800px]'>
                        <img className='h-[800px] w-full object-cover' src="/contact.jpg" alt="" />
                    </article>
                </div>
            </section>
        </>
    );


    
}
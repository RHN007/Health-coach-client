import React from 'react';

const AboutUs = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-8 grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            We Have The Best Caretaker
                            <br className="hidden md:block" />
                            To Providing Best Service{' '}
                            <span className="relative px-1">
                                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                                <span className="relative inline-block text-deep-purple-accent-400">
                                    Purchase - Healthcoach.
                                </span>
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Explain to you how all this mistaken idea of denouncing ut pleasure work praising pain was born and will give you can complete design account sed the system, and expound the actual teachngs interior of the great design explorer of the truth master-builders design of human happiness one seds rejects, dislikes, or avoids pleasures give of the master-builder of human itself.
                        </p>
                    </div>
                   
                </div>
                <div className='hidden md:block'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/zP5JJARGhDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
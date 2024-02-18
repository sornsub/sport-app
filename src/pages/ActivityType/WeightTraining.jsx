import React from 'react'
import Nav from './Nav'

function WeigtTraining () {
    return (
        <>
            <Nav />
            <div className="hero min-h-screen flex justify-end items-center pr-60" style={{backgroundImage: `url("public/images/Weight.jpg")`}}>
            </div>
            <div className="flex justify-center items-center my-8">
                <span className="badge badge-lg h-10 w-36 bg-base-100 shadow-xl font-semibold" style={{ backgroundColor: '#E76F6D', color: '#fff' }}>Weight Training</span>
            </div>
            <div className="container mx-auto max-w-[1344px] my-8">
            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/3 order-1 md:order-2"> {/* ตำแหน่งของรูป */}
                    <img 
                        src='public/images/woman-run.png'
                        alt='womanrunning'
                        className='w-800 h-auto aspect-ratio-1/1'
                    />
                </div>
                    <div className="md:w-2/3 order-1 md:order-2"> {/* ตำแหน่งของเนื้อหา */}
                        <div className="flex flex-col justify-center">
                            <section className='flex flex-col gap-5 sm:items-center text-center lg:text-left lg:gap-6 lg:items-start'>
                                <h1 className='text-[42px] leading-[52px] sm:w-4/5 md:text-4xl font-bold font-head text-[#E76F6D] lg:text-5xl lg:flex-row'>
                                    About the Weight Training
                                </h1>
                                <p className='text-justify text-lg font-body text-[#4D4D4D]'>
                                Long-time runners will likely say that nothing beats the feeling of running—the wind in your hair, the sound of your feet on the pavement, 
                                and the sense of accomplishment when you cross off a goal from your list. Running can be freeing and empowering—that is, until your back pain kicks in.
                                </p>
                                <p className='text-justify text-lg font-body text-[#4D4D4D]'>
                                Running has been increasingly popular for decades. That’s not surprising considering its exercise brags: It requires little equipment, just a pair of running shoes. 
                                It’s a workout you can do on your own time and take with you if you’re away from home (no gym or class times to worry about). 
                                It’s efficient. And it can be great for boosting cardiovascular fitness.
                                </p>
                                <p className='text-justify text-lg font-body text-[#4D4D4D]'>
                                It’s different from walking because when you walk, one foot is always on the ground. 
                                But with running, there’s a moment when both feet are off the ground. That’s what makes running a high-impact activity. 
                                </p>
                                <p className='text-justify text-lg font-body text-[#4D4D4D]'>
                                Morris suggests that the average adult spends a minimum of 16 to 24 weeks to build a proper base for efficient aerobic running. 
                                After that, anaerobic running can help improve performance, she says, especially in terms of speed.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto max-w-[1344px] my-10">
            <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="md:w-2/3 order-1 md:order-2"> {/* ตำแหน่งของเนื้อหา */}
                        <div className="flex flex-col justify-center">
                            <section className='flex flex-col gap-5 sm:items-center text-center lg:text-left lg:gap-6 lg:items-start'>
                                <h1 className='text-[42px] leading-[52px] sm:w-4/5 md:text-3xl font-bold font-head text-[#E76F6D] lg:text-4xl lg:flex-row'>
                                    The Health Benefits of Weight Training
                                </h1>
                                <ul className='text-justify text-lg font-body text-[#4D4D4D]'>
                                    <li>Boosted Mood and Energy Levels</li>
                                    <li>Boosted Memory, Focus, and Task-Switching</li>
                                    <li>Better Respiratory Function</li>
                                    <li>Improved Cardiovascular Health</li>
                                    <li>Improved Bone Density</li>
                                    <li>Lower Risk of Chronic Disease</li>
                                    <li>Living Longer</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                    <div className="md:w-1/3 order-1 md:order-2"> {/* ตำแหน่งของรูป */}
                    <img 
                        src='public/images/run-benefit.jpg' 
                        className='max-w-sm rounded-lg shadow-2xl'
                    />
                </div>
                </div>
            </div>
            <div className="card-actions justify-center mt-14 mb-10">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-white" style={{backgroundColor: '#E76F6D'}}>
                    <a href="/exercise-create">Get Stated</a>
                </button>
            </div>
        </>
    );
}

export default WeigtTraining
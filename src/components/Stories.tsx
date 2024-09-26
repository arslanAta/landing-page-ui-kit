const Stories = () => {
    const path = window.location.href
    return (
        <div className='lg:h-screen'>
            <div className="container h-full">
                <div className='flex items-center h-full'>
                    <div className='text-center w-full px-6'>
                        <h1 className='text-center font-bold text-4xl'>Real Stories from Satisfied Customers</h1>
                        <p className='mt-6 font-normal'>See how our landing page ui kit is making an impact.</p>
                        <div className="mt-7 grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                            <div className="h-[430px] col-span-1 text-center rounded-2xl bg-white p-10">
                                <div className=" mx-auto w-14 h-14 rounded-full overflow-hidden">
                                    <img src={`${path}./img/avatar1.png`} alt="" />
                                </div>
                                <h1 className=" font-bold text-lg">Sarah K.</h1>
                                <p className="font-thin">UX Designer @Brello</p>
                                <p className="mt-6 font-normal">"I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!"</p>
                                <img src={`${path}./img/rating.png`} alt="" className="mx-auto mt-7" />
                            </div>
                            <div className="h-[430px] col-span-1 text-center rounded-2xl bg-white p-10">
                                <div className=" mx-auto w-14 h-14 rounded-full overflow-hidden">
                                    <img src={`${path}./img/avatar2.png`} alt="" />
                                </div>
                                <h1 className=" font-bold text-lg">Michael L.</h1>
                                <p className="font-thin">Creative Director @Yo</p>
                                <p className="mt-6 font-normal">“The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!"</p>
                                <img src={`${path}./img/rating.png`} alt="" className="mx-auto mt-7" />
                            </div>
                            <div className="h-[430px] col-span-1 text-center rounded-2xl bg-white p-10">
                                <div className=" mx-auto w-14 h-14 rounded-full overflow-hidden">
                                    <img src={`${path}./img/avatar3.png`} alt="" />
                                </div>
                                <h1 className=" font-bold text-lg">Lauren M.</h1>
                                <p className="font-thin">UI Designer @Boo</p>
                                <p className="mt-6 font-normal">"Anima’s Landing Page UI Kit has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently."</p>
                                <img src={`${path}./img/rating.png`} alt="" className="mx-auto mt-7" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories
const Features = () => {
    return (
        <div className='lg:h-screen text-textPrimary'>
            <div className='container h-full'>
                <div className="flex flex-col h-full  lg:justify-center">
                    <div className=''>
                        <h1 className='font-bold text-center text-4xl'>Features</h1>
                        <p className='mt-6 text-center font-thin'>These are just a few features you’ll get using Anima Landing Page Ui Kit.</p>
                    </div>
                    <div className="pt-16 max-lg:px-5">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="col-span-1 text-center min-h-[384px] rounded-3xl bg-white p-7 py-10">
                                <img src="../img/fast.png" alt="" className="mx-auto" />
                                <h1 className="text-3xl mt-6 font-bold">Fast building</h1>
                                <p className="mt-6 font-thin text-cnter">Tailor Anima's Landing Page UI Kit to your unique style and brand with customisable components, in no time!</p>
                                <p className="flex gap-2 justify-center text-primaryGreen mt-5 lg:mt-10">
                                    <span>Learn More</span>
                                    <img src="../img/arrow.png" alt="" />
                                </p>
                            </div>
                            <div className="col-span-1 text-center min-h-[384px] rounded-3xl bg-white p-7 py-10">
                                <img src="../img/responsive.png" alt="" className="mx-auto" />
                                <h1 className="text-3xl mt-6 font-bold">Responsive Design</h1>
                                <p className="mt-6 font-thin text-cnter">No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile.</p>
                                <p className="flex gap-2 justify-center text-primaryGreen mt-5 lg:mt-10">
                                    <span>Learn More</span>
                                    <img src="../img/arrow.png" alt="" />
                                </p>
                            </div>
                            <div className="col-span-1 text-center min-h-[384px] rounded-3xl bg-white p-7 py-10">
                                <img src="../img/nocode.png" alt="" className="mx-auto" />
                                <h1 className="text-3xl mt-6 font-bold">No Code Needed</h1>
                                <p className="mt-6 font-thin text-cnter">Zero coding skills required, Anima's Landing Page UI Kit empowers you to create stunning landing pages with ease.</p>
                                <p className="flex gap-2 justify-center text-primaryGreen mt-5 lg:mt-10">
                                    <span>Learn More</span>
                                    <img src="../img/arrow.png" alt="" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
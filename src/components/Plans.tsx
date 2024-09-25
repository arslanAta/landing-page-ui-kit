const Plans = () => {
    return (
        <div className='lg:h-screen max-lg:py-10'>
            <div className="container h-full">
                <div className='flex items-center h-full'>
                    <div className='w-full h-full px-6'>
                        <h1 className='text-4xl font-bold text-center'>Pick Your Perfect Plan</h1>
                        <p className='mt-5 text-center font-normal'>Find the perfect plan for your business with our flexible pricing options.</p>
                        <div className='mt-10 h-full  grid grid-cols-1 lg:grid-cols-3 gap-10'>
                            <div className=' h-[400px] rounded-xl bg-white col-span-1 py-10 px-7'>
                                <h1 className='text-lg'>Free</h1>
                                <p className='text-[50px] font-bold'>$0 <small className='text-base'>/month</small></p>
                                <p className='font-normal'>Best for Small Teams or Individuals.</p>
                                <ul className='mt-5 space-y-3'>
                                    <li className='flex gap-2'>
                                        <img src="../img/check.png" alt="" />
                                        <h1>Write feature details here</h1>
                                    </li>
                                    <li className='flex gap-2'>
                                        <img src="../img/check.png" alt="" />
                                        <h1>Write feature details here</h1>
                                    </li>
                                    <li className='flex gap-2'>
                                        <img src="../img/check.png" alt="" />
                                        <h1>Write feature details here</h1>
                                    </li>
                                </ul>
                                <button className='mt-5 w-full rounded-2xl py-4 bg-secondaryGreen text-primaryGreen'>Get started</button>
                            </div>
                            <div className=' h-[400px] rounded-xl bg-white col-span-1 py-10 px-7'>
                                <h1 className='text-lg'>Professional</h1>
                                <p className='text-[50px] font-bold'>$19 <small className='text-base'>/month</small></p>
                                <p className='font-normal'>Ideal for Growing Companies.</p>
                                <ul className='mt-5 space-y-3'>
                                    <li className='flex gap-2'>
                                        <img src="../img/check.png" alt="" />
                                        <h1>Write feature details here</h1>
                                    </li>
                                    <li className='flex gap-2'>
                                        <img src="../img/check.png" alt="" />
                                        <h1>Write feature details here</h1>
                                    </li>
                                    <li className='flex gap-2'>
                                        <img src="../img/check.png" alt="" />
                                        <h1>Write feature details here</h1>
                                    </li>
                                </ul>
                                <button className='mt-5 w-full rounded-2xl py-4 bg-secondaryGreen text-primaryGreen'>Get started</button>
                            </div>
                            <div className=' h-[400px] rounded-xl text-white bg-primaryGreen col-span-1 py-10 px-7'>
                                <h1 className='text-lg'>Enterprice</h1>
                                <p className='text-[50px] font-bold'>$49 <small className='text-base'>/month</small></p>
                                <p className='font-normal'>Ultimate for Enterprise Solutions.</p>
                                <ul className='mt-5 space-y-3'>
                                    <li className='flex gap-2'>
                                        <img src="../img/check.png" alt="" />
                                        <h1>Write feature details here</h1>
                                    </li>
                                    <li className='flex gap-2'>
                                        <img src="../img/check.png" alt="" />
                                        <h1>Write feature details here</h1>
                                    </li>
                                    <li className='flex gap-2'>
                                        <img src="../img/check.png" alt="" />
                                        <h1>Write feature details here</h1>
                                    </li>
                                </ul>
                                <button className='mt-5 w-full rounded-2xl py-4 bg-white text-primaryGreen'>Get started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans
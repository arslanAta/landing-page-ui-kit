const Center = () => {
    return (
        <div className='max-lg:py-10 h-screen min-h-screen text-textPrimary'>
            <div className='container h-full'>
                <div className='h-full flex flex-col lg:flex-row lg:justify-between items-center'>
                    <div className='basis-full lg:basis-1/2'>
                        <img src="../img/visuals2.png" alt="" />
                    </div>
                    <div className="max-lg:basis-full max-lg:px-6">
                        <h1 className='text-3xl max-lg:text-center lg:text-[67px] leading-tight font-bold'>Get Landing Page UI Kit Today!</h1>
                        <p className='mt-5 font-thin max-lg:text-center leading-tight text-xl'>Break the Figma limits and explore the endless possibilities with Anima.</p>
                        <button className='mt-7 max-lg:mx-auto w-[220px] rounded-3xl flex gap-2 justify-center text-white items-center py-4 bg-primaryGreen'>
                            <span>Get started</span>
                            <img src="../img/arrowwhite.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Center
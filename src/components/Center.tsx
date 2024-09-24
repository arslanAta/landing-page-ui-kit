const Center = () => {
    return (
        <div className='h-screen text-textPrimary'>
            <div className='container h-full'>
                <div className='h-full flex justify-between items-center'>
                    <div className='basis-1/2'>
                        <img src="../img/visuals2.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-[67px] font-bold'>Get Landing Page UI Kit Today!</h1>
                        <p className='mt-5 font-thin text-xl'>Break the Figma limits and explore the endless possibilities with Anima.</p>
                        <button className='mt-7 w-[220px] rounded-3xl flex gap-2 justify-center text-white items-center py-4 bg-primaryGreen'>
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
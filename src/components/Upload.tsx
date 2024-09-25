const Upload = () => {
    return (
        <div className="py-10 px-4">
            <div className="container">
                <div className="lg:h-[435px] rounded-3xl bg-[#F2BFAF]">
                    <div className="w-full h-full flex max-lg:flex-col-reverse justify-between">
                        <div className="p-10 basis-1/2">
                            <h1 className=" text-4xl lg:text-5xl font-bold leading-snug">Get Landing Page UI Kit Today!</h1>
                            <p className="text-xl mt-6 font-normal">Break the Figma limits and explore the endless possibilities with Anima.</p>
                            <button className="mt-10 flex gap-2 justify-center bg-primaryGreen text-white w-56 py-4 rounded-3xl text-center">
                                <span>Get started</span>
                                <img src="../img/arrowwhite.png" alt="" />
                            </button>
                        </div>
                        <div className="">
                            <img src="../img/mockup.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upload
const Hero = () =>{
    return(
        <div className="h-screen w-full">
            <div className="container h-full">
                <div className="h-[90px] w-full">
                    <div className="h-full flex max-lg:justify-center justify-between items-center">
                        <div className="flex gap-3 items-center">
                            <img src="../img/logomark.png" alt="" />
                            <h1 className="text-xl font-semibold">Landing Page</h1>
                        </div>
                        <div className="max-lg:hidden flex gap-4 text-sm"> 
                            <button className="text-primaryGreen px-6">Contact</button>
                            <button className="text-primaryGreen bg-secondaryGreen rounded-2xl px-5 py-3">How it works</button>
                            <button className="bg-primaryGreen text-white rounded-2xl px-5 py-3">Get started</button>
                        </div>
                    </div>
                </div>
                <div className="pt-10 lg:pt-16 h-4/5 flex items-center">
                    <div className="flex flex-col lg:flex-row justify-between items-start text-textPrimary">
                        <div className="basis-full max-lg:px-6 lg:basis-6/12">
                            <h1 className="text-4xl lg:text-[67px] max-lg:text-center leading-tight font-bold">Create Engaging Landing Pages</h1>
                            <p className="text-xl max-lg:text-center max-lg:mt-6">Build beautiful landing pages in record time with Anima’s Landing Page UI kit for Figma. No code required!</p>
                            <div className="lg:mt-7 mt-3 text-sm flex max-lg:justify-center gap-6">
                                <button className="text-white bg-primaryGreen text-center w-[220px] py-4 rounded-2xl">Get started</button>
                                <button className="max-lg:hidden  text-primaryGreen border bg-white border-primaryGreen text-center w-[220px] py-4 rounded-2xl">How its works</button>
                            </div>
                        </div>
                        <div className="max-lg:pt-7">
                            <img src="../img/visuals.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;
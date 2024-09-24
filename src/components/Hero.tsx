const Hero = () =>{
    return(
        <div className="h-screen w-full">
            <div className="container h-full">
                <div className="h-[90px] w-full">
                    <div className="h-full flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                            <img src="../img/logomark.png" alt="" />
                            <h1 className="text-xl font-semibold">Landing Page</h1>
                        </div>
                        <div className="flex gap-4 text-sm"> 
                            <button className="text-primaryGreen px-6">Contact</button>
                            <button className="text-primaryGreen bg-secondaryGreen rounded-2xl px-5 py-3">How it works</button>
                            <button className="bg-primaryGreen text-white rounded-2xl px-5 py-3">Get started</button>
                        </div>
                    </div>
                </div>
                <div className="pt-16">
                    <div className="flex justify-between items-start text-textPrimary">
                        <div className="basis-6/12">
                            <h1 className="text-[67px] font-bold">Create Engaging Landing Pages</h1>
                            <p className="text-xl">Build beautiful landing pages in record time with Anima’s Landing Page UI kit for Figma. No code required!</p>
                            <div className="mt-7 text-sm flex gap-6">
                                <button className="text-white bg-primaryGreen text-center w-[220px] py-4 rounded-2xl">Get started</button>
                                <button className="text-primaryGreen border bg-white border-primaryGreen text-center w-[220px] py-4 rounded-2xl">How its works</button>
                            </div>
                        </div>
                        <div>
                            <img src="../img/visuals.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;
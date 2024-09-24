const Metrics = () => {
  return (
    <div className='py-32 text-textPrimary'>
        <div className='container'>
            <div>
                <h1 className='text-center text-3xl font-bold'>Our Metrics Tell the Story</h1>
                <p className='text-center mt-7 font-thin'>Our metrics component gives you the inside scoop on your success and helps you stay on top of your game in style.</p>
            </div>
            <div className="py-16">
                <div className="w-full flex justify-between gap-10">
                    <div className="bg-white h-[170px] basis-1/4 rounded-t-2xl border-b-4 border-[#F2BFAF] flex items-center">
                        <div className="text-center mx-auto">
                            <h1 className="font-bold text-4xl">10k+</h1>
                            <p className="mt-4 font-thin">Website launched</p>
                        </div>
                    </div>
                    <div className="bg-white h-[170px] basis-1/4 rounded-t-2xl border-b-4 border-[#F2BFAF] flex items-center">
                        <div className="text-center mx-auto">
                            <h1 className="font-bold text-4xl">931k+</h1>
                            <p className="mt-4 font-thin">Projects created with Anima</p>
                        </div>
                    </div>
                    <div className="bg-white h-[170px] basis-1/4 rounded-t-2xl border-b-4 border-[#F2BFAF] flex items-center">
                        <div className="text-center mx-auto">
                            <h1 className="font-bold text-4xl">240k+</h1>
                            <p className="mt-4 font-thin">New users joined Anima</p>
                        </div>
                    </div>
                    <div className="bg-white h-[170px] basis-1/4 rounded-t-2xl border-b-4 border-[#F2BFAF] flex items-center">
                        <div className="text-center mx-auto">
                            <h1 className="font-bold text-4xl">12K+</h1>
                            <p className="mt-4 font-thin">Teams used Anima</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Metrics
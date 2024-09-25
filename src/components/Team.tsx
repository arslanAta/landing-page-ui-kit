const Team = () => {
    return (
        <div className='lg:h-screen'>
            <div className="container h-full">
                <div className="flex items-center">
                    <div className="w-full px-6">
                        <h1 className="text-4xl font-bold text-center">Meet our team</h1>
                        <p className="text-center mt-5 font-normal">Get to know the faces behind the scenes and learn about the values that drive us.</p>
                        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-24 ">
                            <div className="min-h-[450px] col-span-1 rounded-3xl bg-white">
                                <div className="h-3/5">
                                    <img src="../img/profile1.png" alt="" className="w-full h-full" />
                                </div>
                                <div className="h-1/5 pt-6">
                                    <h1 className="text-xl font-semibold text-center">Sarah K.</h1>
                                    <p className="text-center font-normal">UX Designer</p>
                                </div>
                                <div className="h-1/5 border-t flex items-center justify-center gap-4">
                                    <img src="../img/twitter.png" alt="" />
                                    <img src="../img/instagram.png" alt="" />
                                    <img src="../img/any.png" alt="" />
                                </div>
                            </div>
                            <div className="min-h-[450px] col-span-1 rounded-3xl bg-white">
                                <div className="h-3/5">
                                    <img src="../img/profile2.png" alt="" className="w-full h-full" />
                                </div>
                                <div className="h-1/5 pt-6">
                                    <h1 className="text-xl font-semibold text-center">Michael L.</h1>
                                    <p className="text-center font-normal">Lead Designer</p>
                                </div>
                                <div className="h-1/5 border-t flex items-center justify-center gap-4">
                                    <img src="../img/twitter.png" alt="" />
                                    <img src="../img/instagram.png" alt="" />
                                    <img src="../img/any.png" alt="" />
                                </div>
                            </div>
                            <div className="min-h-[450px] col-span-1 rounded-3xl bg-white">
                                <div className="h-3/5">
                                    <img src="../img/profile3.png" alt="" className="w-full h-full" />
                                </div>
                                <div className="h-1/5 pt-6">
                                    <h1 className="text-xl font-semibold text-center">Lauren M.</h1>
                                    <p className="text-center font-normal">Product Designer</p>
                                </div>
                                <div className="h-1/5 border-t flex items-center justify-center gap-4">
                                    <img src="../img/twitter.png" alt="" />
                                    <img src="../img/instagram.png" alt="" />
                                    <img src="../img/any.png" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
const Form = () => {
    return (
        <div className='py-16 px-4'>
            <div className="container">
                <div className='lg:h-[470px] w-full rounded-2xl p-8 lg:p-14 bg-white'>
                    <h1 className='text-4xl font-semibold'>Let's get in touch</h1>
                    <p className='mt-5 font-normal'>Got questions about the Landing Page UI Kit? Our team is here to help. Contact us for quick and friendly support.</p>
                    <div className='w-full flex max-lg:flex-col gap-2 mt-16'>
                        <div className='basis-1/2'>
                            <ul className='font-thin space-y-3'>
                                <li className='flex gap-2'>
                                    <img src="../img/phone.png" alt="" />
                                    <h3>+0123456789</h3>
                                </li>
                                <li className='flex gap-2'>
                                    <img src="../img/msg.png" alt="" />
                                    <h3>Hello@animaapp.com</h3>
                                </li>
                            </ul>
                            <div className='mt-10'>
                                <h1 className='text-2xl font-semibold'>Connect with us</h1>
                                <div className="flex gap-5 pt-4">
                                    <img src="../img/twitter.png" alt="" />
                                    <img src="../img/instagram.png" alt="" />
                                    <img src="../img/any.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='basis-1/2 space-y-4 max-lg:mt-4'>
                            <div className='w-full lg:w-2/3 rounded-xl flex items-center gap-3 border px-4'>
                                <img src="../img/user.png" alt="" />
                                <input type="text" className='py-3 w-full font-light outline-none' />
                            </div>
                            <div className='w-full lg:w-2/3 rounded-xl flex items-center gap-3 border px-4'>
                                <img src="../img/envelope.png" alt="" />
                                <input type="text" className='py-3 w-full font-light outline-none' />
                            </div>
                            <button className='w-48 bg-primaryGreen py-4 rounded-2xl text-white'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;
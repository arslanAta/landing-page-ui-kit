const Footer = () => {
    const path = window.location.href
    return (
        <div className='h-[80px] bg-textPrimary px-4'>
            <div className="container h-full">
                <div className='h-full text-white flex max-lg:flex-col-reverse items-start justify-center lg:justify-between lg:items-center'>
                    <div>
                        <h1>© 2023 Anima’s Landing Page Ui Kit. </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <img src={`${path}./img/footer-youtube.png`} alt="" />
                        <img src={`${path}./img/footer-instagram.png`} alt="" />
                        <img src={`${path}./img/footer-github.png`} alt="" />
                        <img src={`${path}./img/footer-linkedin.png`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
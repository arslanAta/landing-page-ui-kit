const Footer = () => {
  return (
    <div className='h-[80px] bg-textPrimary px-4'>
        <div className="container h-full">
            <div className='h-full text-white flex max-lg:flex-col-reverse items-start justify-center lg:justify-between lg:items-center'>
                <div>
                    <h1>© 2023 Anima’s Landing Page Ui Kit. </h1>
                </div>
                <div className="flex items-center gap-4">
                    <img src="../img/footer-youtube.png" alt="" />
                    <img src="../img/footer-instagram.png" alt="" />
                    <img src="../img/footer-github.png" alt="" />
                    <img src="../img/footer-linkedin.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
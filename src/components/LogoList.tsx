interface logoItem {
    id: number,
    img: string
}
const logos: logoItem[] = [
    {
        id: 1,
        img: "./img/airbnb.png"
    },
    {
        id: 2,
        img: "./img/google.png"
    },
    {
        id: 3,
        img: "./img/amazon.png"
    },
    {
        id: 4,
        img: "./img/microsoft.png"
    },
    {
        id: 5,
        img: "./img/fedex.png"
    },
    {
        id: 6,
        img: "./img/hubspot.png"
    }
]
const LogoList = () => {
    const path = window.location.href
    return (
        <div className="py-10">
            <div className='h-[150px] border-t border-b'>
                <div className="container h-full">
                    <div className="h-full flex flex-wrap justify-center lg:justify-between items-center">
                        {
                            logos?.map(logo => {
                                return <div key={logo.id} className="max-lg:basis-1/3">
                                    <img src={`${path}${logo.img}`} alt="" />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoList
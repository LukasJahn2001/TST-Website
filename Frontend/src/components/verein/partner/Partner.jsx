import partnerjpg from './Partner.jpg';


const Partner = () => {
    return(
        <div className={'abstandcontainer'}>
            <h1 className={'text-center'}>Werde Partner!</h1>
            <h6 className={'text-center'}>Willst du Partner werden und die Turnerschaft Thiersheim unterstützen? Dann melde dich
                unter folgender E-Mail: TST@idk.de</h6>
            <div className={'text-center'}>
                <img src={partnerjpg}
                     className="img-fluid img-thumbnail"
                     alt="Bild der Partner"
                     width="50%"
                />
            </div>
        </div>
    )
}

export default Partner

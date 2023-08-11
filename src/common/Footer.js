const Footer = () =>{
    let curdate = new Date().getFullYear();
    return(
        <>
            <div className="footer">
                    <p>© {curdate} Mind Digital Group</p>
            </div>
        </>
    )
}

export default Footer;
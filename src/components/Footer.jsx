import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer=()=>{
    return(
        <div className="Footer">
            <h6 className="Footer2">GamingStore © - Todos los derechos reservados</h6> 
            <h6 className="Footer2"> <a className='linkIg' href="https://www.instagram.com/compragamer_oficial/" target="_blank"><InstagramIcon fontSize='medium'/> <span className='link3'>GamingStore</span></a><br></br><br></br> 
                                    <a className='linkTw' href="https://twitter.com/compragamerok?lang=es" target="_blank"><TwitterIcon fontSize='medium'/><span className='link3'>GamingStore</span></a> <br></br><br></br>
                                    <a className='linkFb' href="https://www.facebook.com/compragamer/" target="_blank"><FacebookIcon fontSize='medium'/><span className='link3'>GamingStore</span></a>
             </h6> 
        </div>
    )
}

export default Footer;
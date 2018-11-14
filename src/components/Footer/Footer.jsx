import './Footer.css';
import React from 'react';

export default function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer-wrapper">  
                <hr/>              
                <div className="footer_contacts">
                    <p className="footer_par">Develop by: &nbsp;</p> 
                    <p className="footer_par">
                        <a href="https://t.me/vgpetrov_tag">@vgpetrov_tag</a>  &middot; <a href="https://t.me/MVIGB">@MVIGB</a> &middot; <a href="https://t.me/paulGBcwc">@paulGBcwc</a>
                    </p>
                </div>
                <p className="footer_contacts text-muted">&copy; 2018 CWC-project</p> 
            </div>                 
        </footer>
    );
};
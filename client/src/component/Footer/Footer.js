import React from 'react';
import Brand from '../../image/logo.png';
import FooterCol from '../FooterCol/FooterCol';
import './footer.css';

const footerData1 = [
    { id: 1, title: 'Website', link: '/website' },
    { id: 2, title: 'Social Media', link: '/social' },
    { id: 3, title: 'Branding', link: '/branding' },
];

const footerData2 = [
    { id: 1, title: 'Why us', link: '/why us' },
    { id: 2, title: 'Carrers', link: '/carrer' },
    { id: 3, title: 'Our Work', link: '/our work' },
];

const footerData3 = [
    { id: 1, title: 'Need Help', link: '/help' },
    { id: 2, title: 'Support Request', link: '/request' },
    { id: 3, title: 'Contact', link: '/contact' },
];

const Footer = () => (
    <section className="footer container" id="help">
        <div className="footerSec">
            <div className="leftF">
                <div className="navBrands">
                    <img src={Brand} alt="brand" />
                    <h4>Easy finder</h4>
                </div>

                <h6 className="text-muted">
                    If you are interested in our partnership information, one of our advisors is
                    exited to help.{' '}
                </h6>
            </div>

            <div className="rightF">
                <div className="mainFooter">
                    <FooterCol colHeader="Partnership" colData={footerData1} />
                    <FooterCol colHeader="About" colData={footerData2} />
                    <FooterCol colHeader="Support" colData={footerData3} />
                </div>
            </div>
        </div>
    </section>
);

export default Footer;

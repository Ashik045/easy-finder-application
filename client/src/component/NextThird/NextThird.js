import Avatar from '@mui/material/Avatar';
import React from 'react';
import man1 from '../../image/man1.jpg';
import man2 from '../../image/man2.jpg';
import man3 from '../../image/man3.jpg';
import man4 from '../../image/man4.jpg';
import man5 from '../../image/man5.jpg';
import man6 from '../../image/man6.jpg';
import nthree from '../../image/nthree.jpg';
import star from '../../image/star.jpg';
import NextCommon from '../NextCommon/NextCommon';
import './nextThird.css';

const NextThird = () => {
    const header = 'Talk on your team';
    const mutedTxt =
        'Message multiple employers while kepping all comunication in one, across hundreds of different healthcare convenient place';
    const btnTxt = 'Chat with us';
    return (
        <div className="nextThirdRow">
            <div className="leftSide">
                <img src={nthree} alt="dd" />

                <div className="smBox">
                    <div className="avatxt1">
                        <Avatar alt="Travis Howard" src={man1} />
                        <div className="avatxtt">
                            <p>Lorem ipsum dolor.</p>
                            <p>Loremipsum</p>
                        </div>
                    </div>

                    <div className="avatxt2">
                        <div className="avatxtt">
                            <p>Lorem ipsum dolor.</p>
                            <p>Loremipsum</p>
                        </div>
                        <Avatar alt="Travis Howard" src={man2} />
                    </div>
                </div>

                <div className="bgBox">
                    <img className="box2Img" src={star} alt="aa" />
                    <div className="fava1">
                        <Avatar alt="Travis Howard" src={man5} />
                    </div>

                    <div className="innerBox">
                        <div className="inner1 inner ">
                            <Avatar alt="Travis Howard" src={man3} sx={{ width: 24, height: 24 }} />
                            <div className="inntxt">
                                <p>hellobaby</p>
                                <p>hello are you man</p>
                            </div>
                        </div>

                        <div className="inner2 inner">
                            <Avatar alt="Travis Howard" src={man4} sx={{ width: 24, height: 24 }} />
                            <div className="inntxt">
                                <p style={{ color: 'blueviolet' }}>hellobaby</p>
                                <p style={{ color: 'blueviolet' }}>hello are you man</p>
                            </div>
                        </div>

                        <div className="inner3 inner">
                            <Avatar alt="Travis Howard" src={man1} sx={{ width: 24, height: 24 }} />
                            <div className="inntxt">
                                <p>hellobaby</p>
                                <p>hello are you man</p>
                            </div>
                        </div>
                    </div>
                    <div className="fava2">
                        <Avatar alt="Travis Howard" src={man6} />
                    </div>
                </div>
            </div>

            <div className="rightSide">
                <NextCommon header={header} mutedTxt={mutedTxt} btnTxt={btnTxt} />
            </div>
        </div>
    );
};
export default NextThird;

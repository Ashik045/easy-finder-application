import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BiCheckDouble } from 'react-icons/bi';
import nOnePic from '../../image/man1.jpg';
import nOne from '../../image/none.jpg';
import NextCommon from '../NextCommon/NextCommon';
import './nextFirst.css';

const NextFirst = () => {
    // commonsec data
    const headerData = 'Create one profile';
    const mutedTxt =
        'Build your reputation with a universal profile that works across hundreds of different healthcare employers';
    const btnData = 'Create Profile';

    return (
        <div className="nestFrow">
            <div className="nfLeft">
                <div className="nfImg">
                    <img src={nOne} alt="aa" />

                    <div className="nfDiv1">
                        <img src={nOnePic} alt="a" />
                        <div className="ntxt">
                            <h5>Sahed Mahmud</h5>
                            <p className="text-muted">Neuro Specialist</p>
                        </div>
                    </div>

                    <div className="nfDiv2">
                        <p>
                            <BiCheckDouble />
                        </p>
                        <div className="ntxt2">
                            <h5>Successfull Verified</h5>
                            <p className="text-muted">Your job certification</p>
                        </div>
                    </div>

                    <div className="nfDiv3">
                        <p>
                            <CircularProgressbar value={75} text="75%" />
                        </p>
                        <div className="ntxt3">
                            <h5>Your job experience</h5>
                            <p className="text-muted">Tell us your experience</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nfRight">
                <NextCommon header={headerData} mutedTxt={mutedTxt} btnTxt={btnData} />
            </div>
        </div>
    );
};
export default NextFirst;

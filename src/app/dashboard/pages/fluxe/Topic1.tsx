// import '../Day1Module.css';

import two from '../../../../../public/Images/5.1.1.png';
import three from '../../../../../public/Images/5.1.2.png';
import four from '../../../../../public/Images/5.1.2.1.png';
import five from '../../../../../public/Images/5.1.3.png';
import six from '../../../../../public/Images/5.1.11.png';
import seven from '../../../../../public/Images/5.1.5.png';
import eight from '../../../../../public/Images/5.1.6.png';
import nine from '../../../../../public/Images/5.1.7.png';
import ten from '../../../../../public/Images/5.1.8.png';
import eleven from '../../../../../public/Images/5.1.9.png';
import twelve from '../../../../../public/Images/5.1.10.png';
import thirteen from '../../../../../public/Images/5.1.4.png';
import Bulb from '../../../../../public/Images/bulb.png';
import short from '../../../../../public/Images/shortcut.png';


import Image from 'next/image';

export default function FirstTopic() {
    return (
        <>


            {/* <h2 className="h2"><strong>Introduction to FLUXE</strong></h2> */}
            <p className="p">
                Fluxe is the tool on which you will be collecting data to train Ace.</p>
            <br />
            <a className="fluxe-download" href="/FluxeInstaller.pkg" download>
                Click here to download Fluxe
            </a>

            <div className='Textarea-Hover'>
                <div className='Textarea-Wrapper'>
                    <Image width={50} height={50} src={Bulb} alt=''></Image>
                    <p>
                        Fluxe is a screen recording/data collection tool which records the video, and registers mouse and keyboard actions, during your data creation process.
                    </p>
                </div>
            </div>

            {/* <figure className='img-51'>
                <Image src={one} width={0} height={0} alt="Logo" />
            </figure> */}
            <hr />
            <p className="p"> While installing Fluxe, if you are not able to open the installer , follow these steps:
                <br />
                <br />
                Go into &apos;Privacy & Security&apos;,</p>
            <figure className='img-52'>
                <Image className='Image-Tag' src={two} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p className="p">and then scroll down to the bottom in &quot;Privacy and Security section&quot; ,</p>
            <br />
            <figure className='img-53'>
                <Image className='Image-Tag' src={three} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p className="p"> you&apos;ll see a button saying &apos;Open Anyway&apos;; after that , you can try opening the
                Fluxe app again.</p>
            <br />
            <figure>
                <Image className='Image-Tag' src={four} width={700} height={0} alt="Logo" />
            </figure>
            <br />
            <p className="p">Instead of &quot;OpenOffice&quot;, it will say Fluxe, Select &apos;Open Anyway&apos; for Fluxe, and it
                should work!
            </p>
            <hr />
            <p className='p'>Fluxe looks like this on your &quot;Applications&quot; page</p>
            <br />
            <figure className='img-55'>
                <Image className='Image-Tag' src={five} width={0} height={0} alt="Logo" />
            </figure>
            <p className="p"> When active, it looks like this on your toolbar</p>
            <br />
            <figure>
                <Image className='Image-Tag' src={six} width={800} height={0} alt="Logo" />
            </figure>
            <br />
            <hr />

            <h2 className="h2">How To Use Fluxe</h2>
            <ol className="ol">
                <li>
                    Click on the Hammer icon on your tool bar
                    <br />
                    <figure>
                        <Image className='Image-Tag' src={seven} width={0} height={0} alt="Logo" />
                    </figure>

                </li>
                <li>
                    It will open the Fluxe interface like this
                    <br />
                    <figure className='img-52'>
                        <Image className='Image-Tag' src={eight} width={0} height={0} alt="Logo" />
                    </figure>

                </li>
                <li>
                    Type in/Paste the prompt you wish to record like this:
                    <br />
                    <figure className='img-52'>
                        <Image className='Image-Tag' src={nine} width={0} height={0} alt="Logo" />
                    </figure>

                </li>
                <li>
                    Once you have typed/pasted the prompt, click on the &quot;Show Settings&quot; button to open the tags menu, which will show up like this:
                    <br />
                    <figure className='img-52'>
                        <Image className='Image-Tag' src={ten} width={0} height={0} alt="Logo" />
                    </figure>

                </li>
                <li>
                    After selecting the relevant tag, (for instance , for this prompt it will be &quot;op-follow-people&quot;), click on the &quot;Exit Settings&quot;,

                </li>
                <li>
                    Click on &quot;Start Recording&quot;,
                    <br />
                    <figure className='img-52'>
                        <Image className='Image-Tag' src={eleven} width={0} height={0} alt="Logo" />
                    </figure>
                    and a countdown will start counting down from 3,
                    <figure className='img-52'>
                        <Image className='Image-Tag' src={twelve} width={0} height={0} alt="Logo" />
                    </figure>

                    Once the countdown finishes , Fluxe is actively recording your data.
                    <br />
                    While recording a new icon will show up on your toolbar,like this:
                    <br />
                    <figure>
                        <Image className='Image-Tag' src={thirteen} width={0} height={0} alt="Logo" />
                    </figure>

                </li>


                <li>
                    <div className="inline-container" style={{ display: "flex", alignItems: 'center', gap: '10px' }}>
                        <span>To stop a recording use the shortcut :</span>
                        <figure className='short' style={{  display: "flex", alignItems: "center", margin: "0" }}>
                            <Image src={short} width={300} height={80} alt="Shortcut" style={{ borderRadius: "7px" , verticalAlign: "middle" }} />
                        </figure>
                    </div>

                    <div className='Textarea-Hover' style={{ backgroundColor: 'orange' }}>
                        <div className='Textarea-Wrapper'>
                            <div style={{ marginTop: "5px", marginRight: "10px" }}>
                                <Image width={70} height={0} src={Bulb} alt='Bulb Icon'></Image>
                            </div>
                            <div>
                                <p className='p'>1. ENSURE TO STOP YOUR RECORDING USING THE SHORTCUT MENTIONED. DO NOT USE THE &quot;STOP RECORDING&quot; BUTTON ON FLUXE TO STOP THE RECORDING.</p>
                                <p className='p'>2. Using the &quot;STOP RECORDING&quot; button causes issues in our data processing. So you should avoid using that.</p>
                            </div>
                        </div>
                    </div>
                </li>






            </ol>

            <h2 className='h2'>Thats it ! As simple as that . You can start creating Data to train Ace now!</h2>

            <h2 className='h2'>Let&apos;s Get To Understanding Engine Now!</h2>


            <br />

        </>
    );
}

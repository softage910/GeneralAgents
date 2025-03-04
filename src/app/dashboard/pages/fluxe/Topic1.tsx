// import '../Day1Module.css';
import one from '../../../../../public/Images/5.0.png';
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


import Image from 'next/image';

export default function FirstTopic() {
    return (
        <>


            <h2 className="h2"><strong>Introduction To FLUXE</strong></h2>
            <p>
                Fluxe is the tool on which you will be collecting data to train ACE.</p>
                <br />
                <a className="fluxe-download" href="/FluxeInstaller.pkg" download>
        Click here to download Fluxe
      </a>
                <figure className='img-51'> 
                <Image src={one} width={0} height={0} alt="Logo" />
                </figure>
                <br />
               <p> While installing Fluxe, if you are not able to open the installer, follow these
                steps:
                Go into &apos;Privacy & Security&apos;,</p>
                <figure className='img-52'>
                    <Image src={two} width={0} height={0} alt="Logo" />
                </figure>
                <br />
                <p>and then scroll down to the botton in &quot;Privacy and Security section&quot; ,</p>
                <figure className='img-53'>
                    <Image src={three} width={0} height={0} alt="Logo"/>
                </figure>
                <br />
               <p> you&apos;ll see a button saying &apos;Open Anyway&apos; -- after that you can try opening the
                Fluxe app again.</p>
                <br />
                <figure className='img-51'>
                    <Image src={four} width={0} height={0} alt="Logo"/>
                </figure>
                <br />
                <p>Instead of &quot;OpenOffice, it will say Fluxe, Select Open Anyway for Fluxe, and it
                should work!
                Fluxe looks like this on your &quot;Applications&quot; page</p>
                <br />
                <figure className='img-55'>
                    <Image src={five} width={0} height={0} alt="Logo" />
                </figure>
               <p> When active, it looks like this on your toolbar</p>
                <br />
                <figure className='img-51'>
                    <Image src={six} width={0} height={0} alt="Logo" />
                </figure>
                <br />
                <h2 className="h2">How To Use Flux</h2>
                <ol className="ol">
                    <li>
                     <strong>Click on the Hammer icon on your tool bar</strong>
                        <br />
                        <figure>
                    <Image src={seven} width={0} height={0} alt="Logo"/>
                </figure>
                        <br />
                    </li>
                    <li>
                        <strong>It will open the Fluxe interface like this</strong>
                        <br />
                        <figure className='img-52'>
                    <Image src={eight} width={0} height={0} alt="Logo"/>
                </figure>
                        <br />
                    </li>
                    <li>
                        <strong>Type in/Paste the prompt you wish to record like this:</strong>
                        <br />
                        <figure className='img-52'>
                    <Image src={nine} width={0} height={0} alt="Logo"/>
                </figure>
                        <br />
                    </li>
                    <li>
                        <strong>Once you have typed/pasted the prompt, click on the &quot;Show Settings&quot; button to open the tags menu, which will show up like this:</strong>
                        <br />
                        <figure className='img-52'>
                    <Image src={ten} width={0} height={0} alt="Logo"/>
                </figure>
                        <br />
                    </li>
                    <li>
                        <strong>After selecting the relevant tag, (for instance , for this prompt it will be &quot;op-follow-people&quot;), click on the &quot;Exit Settings&quot;, </strong>
                        
                    </li>
                    <li>
                        <strong>Click on &quot;Start Recording&quot;, and a countdown will start counting down from 3.</strong>
                        <br />
                        <figure className='img-52'>
                    <Image src={eleven} width={0} height={0} alt="Logo" />
                </figure>
                <figure className='img-52'>
                    <Image src={twelve} width={0} height={0} alt="Logo" />
                </figure>
                        <br />
                    </li>
                    <li>
                        <strong>Once the countdown finishes , Fluxe is actively recording your data. While recording, a new icon will show up on your toolbar,like this:</strong>
                        <br />
                        <figure className='img-51'>
                    <Image src={thirteen} width={0} height={0} alt="Logo"/>
                </figure>
                        <br />
                    </li>
                    <li>
                        <strong>To stop a recording use the shortcut use the shortcut</strong>
                        <br />
                        <br />
  
                    </li>
                    <li>
                    <strong>Thats it ! As simple as that . You can start creating Data to train ACE now!</strong>
                    </li>




                </ol>



            <br />

        </>
    );
}
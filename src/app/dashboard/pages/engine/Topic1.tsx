// import '../Day1Module.css';

import one from '../../../../../public/Images/5.2.0.png';
import two from '../../../../../public/Images/5.2.1.png';
import three from '../../../../../public/Images/5.2.2.png';
import four from '../../../../../public/Images/5.2.3.png';
import five from '../../../../../public/Images/5.2.4.png';
import six from '../../../../../public/Images/5.2.5.png';
import seven from '../../../../../public/Images/5.2.6.png';
import eight from '../../../../../public/Images/5.2.0.1.png';
import nine from '../../../../../public/Images/5.2.8.png';
import ten from '../../../../../public/Images/5.2.9.png';
import eleven from '../../../../../public/Images/5.2.10.png';
import twelve from '../../../../../public/Images/5.2.11.png';
import thirteen from '../../../../../public/Images/5.2.12.png';
import fourteen from '../../../../../public/Images/5.2.13.png';

import fifteen from '../../../../../public/Images/5.2.14.png';
import sixteen from '../../../../../public/Images/5.0.16.0.png';

import seventeen from '../../../../../public/Images/5.2.15.png';

import eighteen from '../../../../../public/Images/5.2.16.png';






import Image from 'next/image';

export default function SecondTopic() {
    return (
        <>

            <h2 className="h2"><strong>Introduction To ENGINE</strong></h2>
            <p>
                The data you create on FLUXE can now be accessed for reviewing, annotating
                or flagging on ENGINE.</p>
            <br />
            <figure className='img-510'>
                <Image src={one} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p>Once you log in, the Engine interface will show up like this:</p>
            <br />
            <figure className='img-511'>
                <Image src={two} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p>You can view Recordings and Executions by clicking on the respective
                highlighted links</p>
            <br />
            <figure className='img-511'>
                <Image src={three} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p>You can filter your recordings by tags to check the recordings of specific tags.</p>
            <br />
            <figure className='img-510'>
                <Image src={four} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p>You can also search for specific recordings, either by keywords, or by putting in
                the whole prompt, in the &quot;search instructions text box</p>
            <br />
            <figure className='img-510'>
                <Image src={five} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p>You can also filter your recordings using a date range, as shown here</p>
            <br />
            <figure className='img-510'>
                <Image src={six} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p>Your recordings will show up on the engine page as displayed:</p>
            <br />
            <figure className='img-511'>
                <Image src={seven} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p>You can click on specific recordings to see your created data</p>
            <br />
            <figure className='img-510'>
                <Image src={eight} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p>In case of incorrect/undesirable actions in a recording, you can flag it by
                selecting the flag icon</p>
            <br />
            <figure className='img-510'>
                <Image src={nine} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p>On clicking the flag icon, you will encounter this pop-up</p>
            <br />
            <figure className='img-510'>
                <Image src={ten} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p>You can type and explain your reason(s) for flagging the recording here</p>
            <br />
            <figure className='img-510'>
                <Image src={eleven} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p>After flagging, the recordings will show up as greyed out on your recordings
                page
                <br />
                <br />
            </p>
            <h2 className="h2"><strong>Annotations</strong></h2>
            <p>
                You can annotate specific parts of your recordings to give detailed instructions
                per segment. This is particularly useful when your recording has a mix of
                features while performing one task. Take this recording of a data creator
                collecting data on chess for example:</p>
            <br />
            <figure className='img-51'>
                <Image src={twelve} width={0} height={0} alt="logo" />
                <br />
</figure>
                <p>Here you can see events marked with red/blue dots on this timeline of the
                    recording, under which you can see &quot;Set Start&quot; and &quot;Set End&quot; buttons, with a
                    text box to write instructions for the selected segment, and an option to save
                    the annotated segment.</p>
                <br />
                <figure className='img-510'>
                    <Image src={thirteen} width={0} height={0} alt="Logo" />
                </figure>
                <br />
                <p>Select a Starting point and an end point, and put in your instructions for this
                    particular segments, and save it.</p>
                <br />
                <figure className='img-510'>
                    <Image src={fourteen} width={0} height={0} alt="Logo" />
                </figure>
                <br />

                <p>You can do multiple annotations on the same recording, distinguished by either
                    actions, or different verbiage for the same action.</p>

                <br />
                <figure className='img-51'>
                    <Image src={fifteen} width={0} height={0} alt="Logo" />
                </figure>
                <br />
                <br />
                <figure className='img-51'>
                    <Image src={sixteen} width={0} height={0} alt="Logo" />
                </figure>
                <br />

                <p> Lets take a look at another example, in this task, the data creator is recording
                    data to train ACE on Microsoft Word, the instruction is &quot;center align the &apos;next
                    steps&apos; section and apply green shading in project report.docx&quot;.</p>
                <br />
                <figure className='img-510'>
                    <Image src={seventeen} width={0} height={0} alt="Logo" />
                </figure>
                <br />

                <p> Here we can annotate two actions, to mark Align and Intend selection, and the
                    action of selecting a shade. Adding two annotations here, will make ACE
                    understand the specific steps you have taken to reach the intended conclusion
                    of the recording; which is &quot;center align the &apos;next steps&apos; section and apply green
                    shading in project report.docx&quot;.</p>
                <br />
                <figure className='img-51'>
                    <Image src={eighteen} width={0} height={0} alt="Logo" />
                </figure>
                <br />





                <h2 className="h2"><strong>Let&apos;s get to creating data now!!</strong></h2>
            </>
            );
}
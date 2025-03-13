// import '../Day1Module.css';

import two from '../../../../../public/Images/5.2.1.png';
import three from '../../../../../public/Images/5.2.2.png';
import four from '../../../../../public/Images/5.2.3.png';
import five from '../../../../../public/Images/5.2.4.png';
import six from '../../../../../public/Images/5.2.5.png';
import seven from '../../../../../public/Images/5.2.6.png';

import nine from '../../../../../public/Images/5.2.8.png';
import ten from '../../../../../public/Images/5.2.9.png';
import eleven from '../../../../../public/Images/5.2.10.png';
import twelve from '../../../../../public/Images/5.2.11.png';
import thirteen from '../../../../../public/Images/5.2.12.png';
import fourteen from '../../../../../public/Images/5.2.13.png';

import fifteen from '../../../../../public/Images/5.2.14.png';


import seventeen from '../../../../../public/Images/5.2.15.png';

import eighteen from '../../../../../public/Images/5.2.16.png';
import Bulb from '../../../../../public/Images/bulb.png';






import Image from 'next/image';

export default function SecondTopic() {
    return (
        <>

            {/* <h2 className="h2"><strong>Introduction To ENGINE</strong></h2> */}
            <p className="p">
            The data you create on Fluxe can now be accessed for reviewing, annotating or flagging on Engine.</p>
            <br />
           
                <a className="fluxe-download" href="https://engine.generalagents.co" download>
        Click Here To Access Engine
      </a>
      <br/>
            <br />
            <p className="p">Once you log in, the Engine interface will show up like this:</p>
            <br />
            <figure>
                <Image className='Image-Tag' src={two} width={1200} height={0} alt="Logo" />
            </figure>
            <br />
            <p className="p">You can view Recordings and Executions by clicking on the respective highlighted links</p>
            <br />
            <figure className='img-511'>
                <Image className='Image-Tag' src={three} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p className="p">You can filter your recordings by tags to check the recordings of specific tags.</p>
            <br />
            <figure className='img-510'>
                <Image className='Image-Tag' src={four} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p className="p">You can also search for specific recordings, either by keywords, or by putting in
                the whole prompt, in the &quot;search instructions text box&quot;</p>
            <br />
            <figure className='img-510'>
                <Image className='Image-Tag' src={five} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p className="p">You can also filter your recordings using a date range, as shown here

</p>
            <br />
            <figure className='img-510'>
                <Image className='Image-Tag' src={six} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p className="p">Your recordings will show up on the engine page as displayed:

</p>
            <br />
            <figure className='img-511'>
                <Image className='Image-Tag' src={seven} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p className="p">You can click on specific recordings to see your created data

</p>
            <br />

            <div className='Textarea-Hover'>
                <div className='Textarea-Wrapper'>
                    <Image width={50} height={50} src={Bulb} alt=''></Image>
                    <p>
                    Only you can access your recordings on the Engine. You won&apos;t be able to view any other user&apos;s recordings.</p>
                </div>
            </div>

            <br />
            <p className="p">In case of incorrect/undesirable actions in a recording, you can flag it by selecting the flag icon

</p>
            <br />
            <figure className='img-510'>
                <Image className='Image-Tag' src={nine} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p className="p">On clicking the flag icon, you will encounter this pop-up

</p>
            <br />
            <figure className='img-510'>
                <Image className='Image-Tag' src={ten} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p className="p">You can type and explain your reason(s) for flagging the recording here

</p>
            <br />
            <figure className='img-510'>
                <Image className='Image-Tag' src={eleven} width={0} height={0} alt="Logo" />
            </figure>
            <br />
            <p className="p">After flagging, the recordings will show up as greyed out on your recordings page


                <br />
                <br />
            </p>
            <hr />
            <h2 className="h2"><strong>Annotations</strong></h2>
            <p className="p">
            You can annotate specific parts of your recordings to give detailed instructions per segment. This is particularly useful when your recording has a mix of features while performing one task. Take this recording of a domain expert collecting data on chess, for example:</p>
            <br />
            <figure>
                <Image className='Image-Tag' src={twelve} width={700} height={0} alt="logo" />
                <br />
</figure>
                <p className="p">Here you can see events marked with red/blue dots on this timeline of the
                    recording, under which you can see &quot;Set Start&quot; and &quot;Set End&quot; buttons, with a
                    text box to write instructions for the selected segment, and an option to save
                    the annotated segment.</p>
                <br />
                <figure className='img-510'>
                    <Image className='Image-Tag' src={thirteen} width={0} height={0} alt="Logo" />
                </figure>
                <br />
                <p className="p">Select a Starting point and an endpoint, put in your instructions for this particular segment, and save it.

</p>
                <br />
                <figure className='img-510'>
                    <Image className='Image-Tag' src={fourteen} width={0} height={0} alt="Logo" />
                </figure>
                <br />

                <p className="p">You can do multiple annotations on the same recording, distinguished by either actions, or different verbiage for the same action.</p>

                <br />
                <figure>
                    <Image className='Image-Tag' src={fifteen} width={800} height={0} alt="Logo" />
                </figure>
                <br />
          

                <div className='Textarea-Hover'>
                <div className='Textarea-Wrapper'>
                    <Image width={50} height={50} src={Bulb} alt=''></Image>
                    <p>
                    Annotating specific segments helps Ace learn more targeted actions, which adds to the value of the recording you are creating!                    </p>
                </div>
            </div>

                <br />

                <p className="p"> Lets take a look at another example. In this task, the domain expert records data to train Ace on Microsoft Word. The instruction is &quot;center align the &apos;next
                    steps&apos; section and apply green shading in project report.docx&quot;.</p>
                <br />
                <figure className='img-510'>
                    <Image className='Image-Tag' src={seventeen} width={0} height={0} alt="Logo" />
                </figure>
                <br />

                <p className="p"> Here we can annotate two actions, to mark Align and Intend selection, and the action of selecting a shade. Adding two annotations here will make Ace understand the specific steps you have taken to reach the intended conclusion of the recording, which is to &quot;center align the &apos;next steps&apos; section and apply green shading in project report.docx&quot;.
                    </p>
                <br />
                <figure>
                    <Image className='Image-Tag' src={eighteen} width={800} height={0} alt="Logo" />
                </figure>
                <br />





                <h2 className="h2"><strong>Now that you know about Fluxe and Engine, let&apos;s move on to understanding the Data Creation Process!!</strong></h2>
            </>
            );
}

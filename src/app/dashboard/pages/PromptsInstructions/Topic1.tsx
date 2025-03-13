import '../General.css';
import Bulb from '../../../../../public/Images/bulb.png';
import Image from 'next/image';
import PromptsAsana from '../../../../../public/Images/PromptAsana.jpg';
import Annotation from '../../../../../public/Images/AnnotationsAsana.png';




export default function FirTopic() {

    return (
        <>
            <p className="p">When working with Fluxe, remember that Instructional Prompts and Annotation
            Prompts are what guide the model. Let&apos;s break it down:
            </p>
                 <br/>
            <ol className='ol'>
                <li><strong>Instruction Prompt: </strong>
                  <p>
                  This is what you feed into Fluxe before you start recording. Think of an
Instructional prompt as a clear, concise instruction that tells the model what
task to perform. The instructional prompt should appear under the &quot;Instruction&quot;
section on the Engine. Make sure every recording you make has a
Instructional prompt. 
                   

                  </p>
                  <br />
                  <figure>
                    <Image className='ins-img1' src={PromptsAsana} width={800} height={0} alt="Logo" />
                </figure>
                  <br />
                  <p className='p'>
                  Here, the prompt is &quot;establish dependencies and timeline view for a multi-step
                  project&quot;, and the tag for this recording is &quot;unsupervised-asana&quot;
                  </p>
           
                </li>

                <li><strong>Annotation Prompts: </strong>
                    <p className='p'>
                    Annotations work similarly to Instructional prompts but are best used when you&apos;re recording
longer sessions. They allow you to break down a large task into smaller tasks.
For shorter recordings, typically around one minute or so, annotations might not
be necessary since the task is straightforward. But for longer recordings, they
are necessary to break down the complex task into smaller tasks.


For the instructional prompt &quot;establish dependencies and timeline view for a
multi-step project&quot;, these will be the annotations, which will be smaller prompts
in itself.
                    </p>
                    <br />
                <figure>
                    <Image className='ins-img1' src={Annotation} width={800} height={0} alt="Logo" />
                </figure>
                    <br />


                </li>
                <li><strong>Key Distinction: </strong>
                <ul className='ul'>
                    <li>Instruction Prompt: 
                    The prompt that represents the overall, larger task.

                    </li>
                    <li>Annotation Prompt: 
                    Prompts that break down the larger task into smaller
tasks.

                    </li>
            <div className='Textarea-Hover'>
                <div className='Textarea-Wrapper'>
                    <Image width={50} height={50} src={Bulb} alt=''></Image>
                    <p>
                    In practice, both are prompts, distinguished by this one key
                    difference.
                    </p>
                </div>
            </div>
  
                    <br />
                </ul>


                </li>
                <br />

                <li>
                    <strong>Remember: </strong>
                    For smaller recordings of duration of upto 2 minutes, you do not
need to add annotation prompts, as the instructional prompt you put into Fluxe
will suffice.
For longer recordings of upwards of 2 minutes, or which have more than 1
complex task involved, you will need to add annotation prompts, which will be
breaking down the big task into smaller tasks



By keeping your tasks clearly labelled, you can effectively guide the model
through both simple and complex tasks. This ensures that every part of your
recording is clear and that the model receives consistent, helpful instructions
throughout the process.
                </li>

            </ol>


           

        </>
    );
}
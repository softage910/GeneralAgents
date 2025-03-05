// import '../Day1Module.css';
import one from '../../../../../public/Images/5.3.png';
import two from '../../../../../public/Images/5.3.1.png';
import three from '../../../../../public/Images/5.3.png';
import four from '../../../../../public/Images/5.3.1.png';
import Image from 'next/image';

export default function FirTopic() {
    return (
        <>


            

            <h2 className="h2"><strong>Guidelines</strong></h2>
            <br />
            <p>
                Welcome to the ACE Data Collection Project! Our mission is to gather clean,
                precise recordings of tasks to train ACE, our computer control agent. As a data
                creator, youll play a key role in shaping ACE into the best computer control
                agent.
                These guidelines are designed to help you understand our goals and
                processes. We encourage you to read Introduction to Fluxe and Introduction
                to Engine along with this guideline to understand the process thoroughly.
                These guidelines are broken into 11 key sections, each addressing an essential
                aspect of the recording process.
            </p>
<br />

            <h2 className="h2"><strong>Prompts & Annotations</strong></h2>
            
            <ol className='ol'>
                <li><strong>Prompts</strong>
                    <ul className='ul'>
                        <li>
                            What is a Prompt?
                        </li>

                        <li>
                            A prompt is the instruction to guide ACE on the task you want to complete.
                            Think of it as a clear and complete set of directions outlining what you&apos;re
                            doing during your recording. A well-crafted prompt usually includes the
                            intended action and the expected outcome, expressed in straightforward,
                            technical terms.
                        </li>
                        <li>
                            Creating Actionable Tasks
                        </li>
                        <li>
                            Imagine prompts as tasks youd give to a human assistant — keep them
                            short, clear, and direct. Avoid using filler words to ensure your instructions
                            are easy to follow and effective.
                        </li>

                        <li>
                            Refer to Section 8 for some examples of good, actionable prompts.
                        </li>


                    </ul>
                </li>

                <li><strong>What Are Annotations</strong>
                    <ul className='ul'>
                        <li>
                            Annotations involve labelling the smaller actions in your recordings to break
                            down how you&apos;re fulfilling each task. By adding annotations to specific
                            parts of your recordings, you provide detailed instructions for each
                            segment. This helps ACE understand the exact steps you took to reach the
                            intended outcome. Annotations are essential, so be sure to highlight the key
                            steps that are crucial for completing the task.
                        </li>
                        <li>
                            An important point to keep in mind is that annotations also have the same
                            structure and functionality as prompts, think of annotations as smaller
                            tasks/prompts, whereby you will be breaking down larger recordings to
                            standalone as smaller recordings with specific annotations/prompts.
                        </li>
                        <li>
                            Key Steps Only Focus on the main steps that are essential to completing
                            the task in the prompt—avoid over-detailing every click.
                        </li>
                        <li>
                            For more details on annotations and instructions on how to add them,
                            please refer to the &quot;Introduction to Engine.pdf&quot;.
                        </li>


                    </ul>


                </li>
            </ol>


            <hr/>

            <h2 className="h2"><strong>Recording Instructions</strong></h2>
            <br />

            <ol className='ol'>
                <li><strong>Optimal Actions</strong>
                    <ul className='ul'>
                        <li>
                            Optimal actions are your goal while performing recordings to train ACE.
                        </li>

                        <li>
                            When executing tasks, aim to follow the shortest and most natural path. For
                            example, if an action can be completed with 3 clicks instead of 5, choos&apos;
                            the 3-click method. This efficiency helps ACE learn more effectively.
                        </li>
                        <li>
                            Incorporate Keyboard shortcuts wherever necessary. This step also
                            ensures that you take a more reliable path while recording.
                        </li>
                        <p>
                            Let us demonstrate the importance of Optimal Actions and Keyboard Shortcuts
                            with this example:
                        </p>
                        <li>
                            To archive the highlighted card on this Trello board, you have two options:
                        </li>
                        <br />
                        <figure className='img-5-3'>
                        <Image src={one} width={0} height={0} alt="Logo" />
                        </figure>


                        <br />
                        <li>
                            Right-Click Method Right-click the card and select Archive from the
                            dropdown menu.
                        </li>
                        <li>
                            Keyboard Shotcut Press the &quot;C&quot; key on your keyboard to archive the card
                            instantly.
                        </li>

                        <p>
                            Which method is more optimal?
                            Using the keyboard shortcut (&quot;C&quot;) is the more efficient way to archive a card.
                            It reduces the number of clicks and speeds up your workflow, and ACE also
                            needs to learn that!
                        </p>

                        <br />
                        <figure className='img-5-3'>
                        <Image src={two} width={0} height={0} alt="Logo" />
                        </figure>

                        <br />


                    </ul>
                </li>

                <li><strong>Screen Size and View Modes</strong>
                    <ul className='ul'>
                        <li>
                        Resolutions Use the default resolution setting while recording.
Additionally, vary between windowed and full-screen modes occasionally
to provide diverse data.
                        </li>
                        <li>
                        Why Exposing ACE to different screen layouts helps it learn to navigate
                        consistently across various setups and configurations.
                        </li>
                


                    </ul>


                </li>
                <li><strong>Mouse Movements</strong>
                    <ul className='ul'>
                        <li>
                        Minimize Unnecessary Movement: Keep your mouse movements steady
and avoid dragging it around the screen unnecessarily. This helps create
clean recordings that are easy to follow and reduces potential confusion or
lag/noise.
                        </li>
            
                


                    </ul>


                </li>
                <li><strong>Lag</strong>
                    <ul className='ul'>
                        <li>
                        Acceptable Waits If a task inherently takes a few seconds to process (e.g.,
loading a file), its okay to wait in the recording. Use your judgment to
ensure that the final video remains clean and free of unnecessary delays.
                        </li>
                        
            
                


                    </ul>


                </li>
            </ol>


            <hr/>

            <h2 className="h2"><strong>Creating Realistic Accounts</strong></h2>
            <br />
            <ol className='ol'>
                <li>
                  Populate with Realistic Data:
                </li>
                <p>
                Use &quot;test&quot; or &quot;fake&quot; data in apps like Canva, Asana, and others to make
your screen look authentic and varied. Having multiple files with realsounding names in your boards, projects, and workspaces helps ACE
understand the dynamic nature of different users patterns and habits.
                </p>
                <br />
                <li>
                Refresh Regularly
                </li>
                <p>
                Change or add new data every day to ensure ACE sees diverse account
                states. Regular updates keep your recordings varied and reflective of realworld usage.
                </p>
            </ol>

<hr/>

            <h2 className="h2"><strong>Tagging Your Recordings</strong></h2>
            <br />
            <ol className='ol'>
                <li>
                    Each tool you work with will be labeled with a tag in the format &quot;tool-
                    (tool_name)&quot;, and the tasks you perform will be tagged as &quot;op-
                    (tool_name)-(feature_name)&quot;. For example:
                    <br />
                    <br />
                    <ul className='ul'>
                        <li>
                            If you&apos;re recording a task using the Background Removal Tool in Adobe
                            Photoshop, the tags would be &quot;tool-ps&quot; and &quot;op-ps-backgroundremoval&quot;.
                        </li>
                        <li>
                            For a task like Formatting in Google Sheets, the tags would be &quot;toolsheets&quot; and &quot;op-sheets-formatting&quot;.
                        </li>

                    </ul>
                </li>
                <li>
                    Multiple Tags per Tool : A single tool may have numerous tags based on its features. For instance, if
                    a tool has 85 features, there will be 85 unique tags representing each
                    feature.

                </li>


                <li>
                    Refer to Introduction to Fluxe.pdf to understand the process of choosing
                    tags in Fluxe.
                </li>

            </ol>

            <hr/>


            <h2 className="h2"><strong>Flagging Recordings</strong></h2>
            <ol className='ol'>
                <li>When To Flag : Flag recordings if you encounter major mistakes such as typos, misclicks,
or disrupted workflows. In these cases, its best to halt and restart the
recording to ensure accuracy.</li>
                <li>
                    Minor Mouse Movements : Slightly off-target clicks are acceptable if they dont cause confusion in the
                    final steps.
                </li>
                <li>
                    How To Flag : The flagging process is detailed in the Introduction To Engine.pdf. We
recommend referring to this document for step-by-step instructions on
properly flagging your recordings.
                </li>

            </ol>

            <hr/>

            <h2 className="h2"><strong>Your Role-Ensuring Quality & Integrity</strong></h2>
            <ol className='ol'>
                <li>Your Responsibility As A Recorder : As a recorder, your goal is to produce clean and error-free data. Every
                    accurate action you record helps ACE learn the best ways to complete various tasks effectively.</li>
                <li>
                    Continuous Evaluation Of Ace : We evaluate ACEs performance on a weekly basis to identify any patterns
                    or gaps in its learning. This ongoing assessment allows us to refine our
                    instructions and improve the data collection process as needed.
                </li>


            </ol>

            <hr/>


            <h2 className="h2"><strong>Examples</strong></h2>
        <p>Sample Prompts - Short, direct prompts are preferred. Here are few examples from different tools:</p>
            <ol className='ol'>
                <li>
                Adobe Premiere Pro : &quot;apply a faded vintage look to wedding_ps_2009.mp4
by decreasing blacks to +20, reducing contrast to -15 and adding 5 percent
noise&quot;.
                </li>
                <li> Excel : &quot;limit entries in h5:h20 to dates between january 1 2024 and
                december 31 2024&quot;.</li>
                <li>Adobe Photoshop : &quot;use the darken blending mode to merge the shadow
                layer in adobe photoshop&quot;.</li>
                <li>Canva : &quot;place animated fireworks in the background and overlay bold white
                text &quot;Celebrate&quot; in the center&quot;</li>
                <li>PowerBi : &quot;create a dax measure called &apos;average quantity sold per order&apos; to
compute the average quantity of products sold per order from the &apos;order
details&apos; table&quot;</li>
                <li>
                Figma: &quot;transform the cf1 image in order d frame by 34 and set the
                position to 4,407&quot;.
                </li>
                <li>
                Asana: &quot;add a task server migration plan assigning to
elijah.twx@outlook.com in the project IT operations. use header called
action plan with bullet points: backup all critical data, test new server
configurations, schedule downtime during low-traffic hours&quot;. 
                </li>
                <li>Git: &quot;use vs code to initialize a git repository for project task-manager&quot;</li>


            </ol>

            <hr/>

            <h2 className="h2"><strong>FAQs</strong></h2>

<ol className='ol'>
    <li>
        <strong>I can&apos;t find the tag relevant to my task. What do I do?</strong>
        <ul className='ul'>
            <li>If you can&apos;t find a tag that matches your task, you can continue
                recording and reach out to us to request the addition of the specific tag.
                Tagging is an ongoing process, and we encourage you to keep creating
                data even if the appropriate tag isnt available yet. You can note down
                the tags you want added and contact us.</li>
        </ul>


    </li>
    <li>
        <strong>I have some concerns about my sensitive personal data being recorded.
            What should I do?</strong>
        <ul className='ul'>
            <li>Your recordings are private and only visible to you. You cannot access
                other users recordings, and others cannot see yours. Your data is
                processed securely on our cloud and integrated into our large data
                repository. However, if there is confidential data you do not wish to
                record anywhere, we advise you to create a dummy
                account/profile/user where necessary and populate it to appear natural.</li>
        </ul>

    </li>
    <li>
        <strong> I am having trouble using Fluxe; it shows me an error saying &quot;[Error ID]&quot;,
        and I am not able to record.</strong>
        <ul className='ul'>
            <li>Check for Updates Ensure that Fluxe is updated to the latest version.</li>
                <li>Active Uploads : We strongly encourage you to keep your Mac active
with Fluxe running to finish uploading your recordings. Sometimes
recordings upload slower owing to slow upload speeds on the data
creators side. Download an app like Caffeine, and keep your Mac on for
some time until the data completes uploading.</li>
                <li>
                If the issue persists after these steps, please contact our support team
                with the specific error ID for further assistance. 
                </li>
        </ul>

    </li>

    <li>
        <strong>I flagged a recording by mistake. Can I un-flag a recording?</strong>
        <ul className='ul'>
            <li>Unfortunately, a recording cannot be unflagged once it has been
flagged. Please review your recording carefully before flagging to avoid
accidental flags.</li>
        </ul>

    </li>
    <li>
    <strong>I started working on [tool_name] and have made a few recordings. How
    do I ensure I have achieved even coverage on [tool_name]?</strong>
        <ul className='ul'>
            <li>To ensure comprehensive coverage of [tool_name], create a featurewise list of the tools functionalities. Track the features youve recorded
using a Google Sheet or similar tool. This method helps you monitor
which features have been covered and identify any gaps, ensuring that
ACE receives thorough training on all aspects of [tool_name].</li>
        </ul>

    </li>



</ol>

<hr/>

<h2 className="h2"><strong>Closing Notes</strong></h2>
            <ol className='ol'>
                <li>Teaching ACE from your Expertise : Your mission is to teach ACE your areas of expertise, guiding it step by step
to master the tasks you perform. We are confident that by working together,
you can help ACE become the best computer control agent possible.</li>
                <li>
                   Practice Tasks : We&apos;ll share sample tasks for you to try before you begin official recordings.
                   This helps you get comfortable with our workflow.
                </li>
                <li>Remember : A well-executed, clean recording (with minimal extra steps) is key to
training ACE effectively. If in doubt, re-record rather than submit a flawed
session.</li>
            </ol>
            <br />
            <p>
            Thank you for contributing to ACEs development! If you have any questions or
need clarification on these guidelines, dont hesitate to reach out. By following
these principles, well build a robust dataset that helps ACE learn to navigate
and execute tasks with precision.  
            </p>


            <hr/>

            <h2 className="h2"><strong>Terms To Remember</strong></h2>
            <ol className='ol'>
                <li>Fluxe : The data collection tool used for recording your tasks and interactions.</li>
                <li>Engine : Your recordings dashboard, where you annotate and review your
                recordings.</li>
                <li>ACE : Our computer control agent that learns and improves through the data you
                provide.</li>
                <li>Prompt : The instruction you input into Fluxe to guide ACE on the specific task to be
                completed.</li>
                <li>Annotation : Labels/prompts used to mark smaller actions within your recordings,
                helping to train ACE more effectively.</li>
                <li>Starting Condition : The screen context at the beginning of your recording, interchangeable
                with &quot;Screen Context&quot;.</li>

            </ol>

   
        </>
    );
}
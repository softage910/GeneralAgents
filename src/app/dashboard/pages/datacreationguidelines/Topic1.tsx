import '../General.css';
import one from '../../../../../public/Images/5.3.png';

import Image from 'next/image';
import Bulb from '../../../../../public/Images/bulb.png';
import {  useState } from 'react';


export default function FirTopic() {
    const [openIndex, setOpenIndex] = useState<number | null>(null); // Specify type

    const toggleFAQ = (index: number) => {
      setOpenIndex(openIndex === index ? null : index); // Only toggle the clicked FAQ
    };
    return (
        <>




            <h2 className="h2"><strong>Guidelines</strong></h2>

            <p className="p">These guidelines are designed to help you understand our goals and processes.
            </p>
            
            <p className='p'>There are 10 <strong>key sections</strong> in this guide, each addressing an essential aspect of the data creation process.

            </p>
            <hr />
     

            <h2 className="h2"><strong>Prompts, Instructions & Annotations</strong></h2>

            <ol className='ol'>
                <li><strong>Prompts</strong>
                    <ul className='ul'>
                        <li>
                            <strong>What is a Prompt?</strong>
                        </li>

                        <li>
                        A prompt is the instruction to guide Ace on the task you want to complete. 
                        Think of it as a clear and complete set of directions outlining what you&apos;re doing during your recording. 
                        A well-crafted prompt usually includes the intended action and the expected outcome, expressed in straightforward, technical terms.
                        </li>
                        <li>
                        Imagine prompts as tasks you&apos;d give to a human assistant — keep them short, clear, and direct. 
                        Avoid using filler words to ensure your instructions are easy to follow and effective.
                        </li>

                        <li>
                        There is a dedicated section called <strong>Prompting Basics</strong>, refer to it for more information on prompts.
                        </li>


                    </ul>
                </li>

                <li><strong>Instruction Prompts and Annotation Prompts</strong>
                    <ul className='ul'>
                        <li>
                        Instruction Prompts are what you feed into Fluxe.
                        </li>
                        <li>
                        Annotations work similarly to instructional prompts but are best used when you&apos;re recording longer sessions. 
                        They allow you to break down a large task into smaller tasks.
                        </li>
                        <li>
                        In essence, annotations are prompts used to mark smaller tasks in your recordings.
                        </li>
              
                        <li>Please refer to the Engine section of the website for more details on annotations and instructions on how to add them.
                            And refer to Prompts: Instructions and Annotations section for more details on both, and Prompting Basics section to understand prompts in detail.</li>


                    </ul>


                </li>
            </ol>


            <hr />

            <h2 className="h2"><strong>Recording Instructions</strong></h2>


            <ol className='ol'>
                <li><strong>Optimal Actions</strong>
                    <ul className='ul'>
                        <li>
                            Optimal actions are your goal while performing recordings to train Ace.
                        </li>

                        <li>
                            When executing tasks, aim to follow the shortest and most natural path. For
                            example, if an action can be completed with <strong>3 clicks</strong> instead of <strong>5</strong>, choose &apos;
                            the <strong>3-click</strong> method &apos;. This efficiency helps Ace learn more effectively.
                        </li>
                        <li>
                            Incorporate <strong>Keyboard shortcuts</strong> wherever necessary. This step also
                            ensures that you take a more reliable path while recording.
                        </li>
                        <p className="p">
                            Let us demonstrate the importance of Optimal Actions and Keyboard Shortcuts
                            with this example:
                        </p>
                        <li>
                            To archive the highlighted card on this Trello board, you have two options:
                        </li>
                        <br />
{/*                         <figure className='img-5-3'>
                            <Image src={one} width={0} height={0} alt="Logo" />
                        </figure> */}

                                               <figure className='img-5-3'>
                            <Image className='Image-Tag' src={one} width={0} height={0} alt="Logo" />
                        </figure>


                        <br />
                        <li>
                            <strong>Right-Click Method:</strong> Right-click the card and select <strong>Archive</strong> from the
                            dropdown menu.
                        </li>
                        <li>
                            <strong>Keyboard Shotcut:</strong> Press the <strong>&quot;C&quot;</strong> key on your keyboard to archive the card
                            instantly.
                        </li>

                        <p className="p">
                            <strong>Which method is more optimal?</strong><br />
                            Using the <strong>keyboard shortcut (&quot;C&quot;)</strong> is the more efficient way to archive a card.
                            It reduces the number of clicks and speeds up your workflow, and Ace also
                            needs to learn that!
                        </p>

                        <br />

                        <div className='Textarea-Hover'>
                            <div className='Textarea-Wrapper'>
                                <Image width={50} height={50} src={Bulb} alt=''></Image>
                                <p>
                                    Following these steps ensures that Ace learns the most optimal and efficient ways to execute the tasks you&apos;re teaching!                    </p>
                            </div>
                        </div>

                        <br />


                    </ul>
                </li>

                <li><strong>Screen Size and View Modes</strong>
                    <ul className='ul'>
                        <li>
                            <strong>Resolutions:</strong> Use the <strong>&quot;default&quot;</strong> resolution setting while recording.
                            Additionally, <strong>vary</strong> between <strong>windowed</strong> and <strong>full-screen</strong> modes occasionally
                            to provide diverse data.
                        </li>
                        <li>
                            <strong>Why:</strong> Exposing Ace to different screen layouts helps it learn to navigate
                            consistently across various setups and configurations.
                        </li>



                    </ul>


                </li>
                <li><strong>Mouse Movements</strong>
                    <ul className='ul'>
                        <li>
                            <strong>Minimize Unnecessary Movement:</strong> Keep your mouse movements steady
                            and avoid dragging it around the screen unnecessarily. This helps create
                            <strong>clean</strong> recordings that are easy to follow and reduces potential confusion or
                            lag/noise.
                        </li>




                    </ul>


                </li>
                <li><strong>Lag</strong>
                    <ul className='ul'>
                        <li>
                            <strong>Acceptable Waits:</strong> If a task inherently takes a few seconds to process (e.g.,
                            loading a file), its okay to wait in the recording. Use your judgment to
                            ensure that the final video remains <strong>clean</strong> and free of unnecessary delays.
                        </li>





                    </ul>


                </li>
            </ol>


            <hr />



            <h2 className="h2"><strong>Starting Conditions</strong></h2>

            <ol className='ol'>
                <li>
                    <strong>Definition:</strong> This is the &quot;00:00&quot; point of every video—where your system is when you begin recording.
                </li>
                <li>
                    <strong>Vary the Setup:</strong>
                    <ul className='ul'>
                        <li>Occasionally, several applications are open, whether overlapping or in the background. This diversity helps create more varied and realistic recordings.</li>
                        <li>Use different datasets or arrange your windows in various layouts. The goal is to mimic real users environments. For instance, starting with a blank projects page or with only one project visible doesn&apos;t represent someone who frequently uses the tool.</li>
                        <li>Avoid Repeating the Same Environment. Try not to begin every recording in the exact same setup. Mixing things up ensures that Ace is exposed to a wide range of starting points.</li>
                    </ul>
                </li>
                <li>If you&apos;re doing something that requires full-screen mode (e.g., a design app that only works maximized), that&apos;s acceptable. Otherwise, vary it to show Ace different possible starting points.</li>
            </ol>

            <div className='Textarea-Hover'>
                <div className='Textarea-Wrapper'>
                    <div style={{marginTop: "25px" , marginRight: "10px"}}>
                    <Image width={70} height={0} src={Bulb} alt=''></Image>
                    </div>
                    <div><h2 className='h2'>
                        <strong>Moving the Cursor After Countdown</strong></h2>
                    <ol className='ol'>
                        <li><strong>Wait for the Countdown</strong>
                            <ul className='ul'>
                                <li>Please wait until the countdown from Fluxe reaches zero before moving your cursor. This ensures that the data is processed accurately.</li>
                            </ul>
                        </li>
                        <li><strong>Why It&apos;s Important</strong>
                            <ul className='ul'>
                                <li>Moving your cursor before the countdown ends can disrupt data processing, which may affect the quality of your recordings. We want to avoid any issues to ensure the best results for Ace.</li>
                            </ul>
                        </li>
                    </ol></div>

                </div>
            </div>



            <h2 className="h2"><strong>Creating Realistic Accounts</strong></h2>

            <ol className='ol'>
                <li>
                    Populate with Realistic Data
                </li>
                <p className="p">
                    Use &quot;test&quot; or &quot;fake&quot; data in apps like Canva, Asana, and others to make
                    your screen look authentic and varied. Having multiple files with real-sounding names in your boards, projects, and workspaces helps Ace
                    understand the dynamic nature of different users patterns and habits.
                </p>
                <br />
                <li>
                    Refresh Regularly
                </li>
                <p className="p">
                    Change or add new data every day to ensure Ace sees diverse account
                    states. Regular updates keep your recordings varied and reflective of realworld usage.
                </p>
            </ol>

            <hr />

            <h2 className="h2"><strong>Tagging Your Recordings</strong></h2>

            <ol className='ol'>
                <li>
                    Each tool you work with will be labeled with a tag in the format <strong>&quot;tool-
                        (tool_name)&quot;</strong>, and the tasks you perform will be tagged as <strong>&quot;op-
                            (tool_name)-(feature_name)&quot;</strong>. For example:

                    <br />
                    <ul className='ul'>
                        <li>
                            If you&apos;re recording a task using the Background Removal Tool in Adobe
                            Photoshop, the tags would be &quot;tool-ps&quot; and &quot;op-ps-backgroundremoval&quot;.
                        </li>
                        <li>
                            For a task like <strong>Formatting</strong> in <strong>Google Sheets</strong>, the tags would be &quot;toolsheets&quot; and &quot;op-sheets-formatting&quot;.
                        </li>

                    </ul>
                </li>
                <li>
                    Multiple Tags per Tool : A single tool may have numerous tags based on its features. For instance, if
                    a tool has <strong>85 features</strong>, there will be <strong>85 unique tags</strong> representing each
                    feature.

                </li>


                <li>
                    Refer to the Introduction to Fluxe section to understand the process of choosing tags in Fluxe.
                </li>

            </ol>

            <hr />


            <h2 className="h2"><strong>Flagging Recordings</strong></h2>
            <ol className='ol'>
                <li><strong>When To Flag:</strong> Flag recordings if you encounter major mistakes such as typos, misclicks,
                    or disrupted workflows. In these cases, its best to halt and restart the
                    recording to ensure accuracy.</li>
                <li>
                    <strong>Minor Mouse Movements:</strong> Slightly off-target clicks are acceptable if they don&apos;t cause confusion in the
                    final steps.
                </li>
                <li>
                    <strong>How To Flag:</strong> The flagging process is detailed in the <strong>Introduction To Engine</strong> section. We
                    recommend referring to this document for step-by-step instructions on
                    properly flagging your recordings.
                </li>

            </ol>

            <hr />

            <h2 className="h2"><strong>Your Role - Ensuring Quality & Integrity</strong></h2>
            <ol className='ol'>
                <li><strong>Your Responsibility As A Recorder:</strong> As a recorder, your goal is to produce <strong>clean and error-free</strong> data. Every
                    accurate action you record helps Ace learn the best ways to complete various tasks effectively.</li>
                <li>
                    <strong>Continuous Evaluation Of Ace:</strong> We evaluate Ace&apos;s performance on a weekly basis to identify any patterns
                    or gaps in its learning. This ongoing assessment allows us to refine our
                    instructions and improve the data collection process as needed.
                </li>


            </ol>

            <hr />


            <h2 className="h2"><strong>Examples</strong></h2>
            <p className="p">Sample Prompts</p>
            <br />
        

            <p className='p'>Short, direct prompts are preferred. Here are few examples from different tools:</p>
            <br />
            <ol className='ol'>
                <li>
                    <strong>Adobe Premiere Pro:</strong> &quot;apply a faded vintage look to wedding_ps_2009.mp4
                    by decreasing blacks to +20, reducing contrast to -15 and adding 5 percent
                    noise&quot;.
                </li>
                <li> <strong>Excel:</strong> &quot;limit entries in h5:h20 to dates between january 1 2024 and
                    december 31 2024&quot;.</li>
                <li><strong>Adobe Photoshop:</strong> &quot;use the darken blending mode to merge the shadow
                    layer in adobe photoshop&quot;.</li>
                <li><strong>Canva:</strong> &quot;place animated fireworks in the background and overlay bold white
                    text &quot;Celebrate&quot; in the center&quot;</li>
                <li><strong>PowerBi:</strong> &quot;create a dax measure called &apos;average quantity sold per order&apos; to
                    compute the average quantity of products sold per order from the &apos;order
                    details&apos; table&quot;</li>
                <li>
                    <strong>Figma:</strong> &quot;transform the cf1 image in order d frame by 34 and set the
                    position to 4,407&quot;.
                </li>
                <li>
                    <strong>Asana:</strong> &quot;add a task server migration plan assigning to
                    elijah.twx@outlook.com in the project IT operations. use header called
                    action plan with bullet points: backup all critical data, test new server
                    configurations, schedule downtime during low-traffic hours&quot;.
                </li>
                <li><strong>Git:</strong> &quot;use vs code to initialize a git repository for project task-manager&quot;</li>


            </ol>

            <hr />

            <h2 className="h2"><strong>FAQs</strong></h2>

            <ol className="ol">
      {/* First FAQ */}
      <li className="faq-item">
        <strong className="faq-question" onClick={() => toggleFAQ(0)}>
          I can&apos;t find the tag relevant to my task. What do I do?
          <span
            style={{
              marginLeft: "10px",
              fontSize: "30px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              transform: openIndex === 0 ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            &#9662;
          </span>
        </strong>
        {openIndex === 0 && (
          <ul className="ul" style={{ borderBottom: "solid white 1px", borderLeft: "solid white 1px", borderRight: "solid white 1px",listStyle: "none", padding: "10px" }}>
            <li>
            If you can&apos;t find a tag that matches your task, you can continue recording and contact us to request the addition of the specific tag. Tagging is an ongoing process, and we encourage you to keep creating data even if the appropriate tag isn&apos;t available yet. You can note down the tags you want added and contact us.
            </li>
          </ul>
        )}
      </li>

      {/* Second FAQ */}
      <li className="faq-item">
        <strong className="faq-question" onClick={() => toggleFAQ(1)}>
          I have some concerns about my sensitive personal data being recorded. What should I do?
          <span
            style={{
              marginLeft: "10px",
              fontSize: "30px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              transform: openIndex === 1 ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            &#9662;
          </span>
        </strong>
        {openIndex === 1 && (
          <ul className="ul" style={{ borderBottom: "solid white 1px", borderLeft: "solid white 1px", borderRight: "solid white 1px", listStyle: "none", padding: "10px" }}>
            <li>
            Your recordings are private and only visible to you. You cannot access other users&apos; recordings, and others cannot see yours. Your data is processed securely on our cloud and integrated into our large data repository. However, if there is confidential data you do not wish to record anywhere, we advise you to create a dummy account/profile/user where necessary and populate it to appear natural.
            </li>
          </ul>
        )}
      </li>

      {/* Third FAQ */}
      <li className="faq-item">
        <strong className="faq-question" onClick={() => toggleFAQ(2)}>
          I am having trouble using Fluxe; it shows me an error saying &quot;[Error ID]&quot;, and I am not able to record.
          <span
            style={{
              marginLeft: "10px",
              fontSize: "30px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              transform: openIndex === 2 ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            &#9662;
          </span>
        </strong>
        {openIndex === 2 && (
          <ul className="ul" style={{ borderBottom: "solid white 1px", borderLeft: "solid white 1px", borderRight: "solid white 1px", listStyle: "none", padding: "10px" }}>
            <li>
              <strong>Check for Updates:</strong> Ensure that Fluxe is updated to the latest version.
            </li>
            <li>
              <strong>Active Uploads:</strong> We strongly encourage you to keep your Mac active with Fluxe running to finish uploading your recordings. Sometimes recordings upload slower owing to slow upload speeds on the data creators&apos; side. Download an app like Caffeine, and keep your Mac on for some time until the data completes uploading.
            </li>
            <li>
            If the issue persists after these steps, please contact our support team with the specific error ID for further assistance.
            </li>
          </ul>
        )}
      </li>

      {/* Fourth FAQ */}
      <li className="faq-item">
        <strong className="faq-question" onClick={() => toggleFAQ(3)}>
          I flagged a recording by mistake. Can I un-flag a recording?
          <span
            style={{
              marginLeft: "10px",
              fontSize: "30px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              transform: openIndex === 3 ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            &#9662;
          </span>
        </strong>
        {openIndex === 3 && (
          <ul className="ul" style={{ borderBottom: "solid white 1px", borderLeft: "solid white 1px", borderRight: "solid white 1px", listStyle: "none", padding: "10px" }}>
            <li>
            Unfortunately, a recording cannot be unflagged once it has been flagged. Please review your recording carefully before flagging to avoid accidental flags.
            </li>
          </ul>
        )}
      </li>

      {/* Fifth FAQ */}
      <li className="faq-item">
        <strong className="faq-question" onClick={() => toggleFAQ(4)}>
          I started working on [tool_name] and have made a few recordings. How do I ensure I have achieved even
          coverage on [tool_name]?
          <span
            style={{
              marginLeft: "10px",
              fontSize: "30px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
              transform: openIndex === 4 ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            &#9662;
          </span>
        </strong>
        {openIndex === 4 && (
          <ul className="ul" style={{ borderBottom: "solid white 1px", borderLeft: "solid white 1px", borderRight: "solid white 1px", listStyle: "none", padding: "10px" }}>
            <li>
            To ensure comprehensive coverage of [tool_name], create a function mapper for the tool’s functionalities. Track the features you’ve recorded using the Google Sheet of the same. This method helps you monitor which features have been covered and identify any gaps, ensuring that Ace receives thorough training on all aspects of [tool_name]. Refer to the <strong>Extensive Tool Coverage and Function Mapper</strong> section for more information on this topic.
            </li>
          </ul>
        )}
      </li>
    </ol>

            <hr />

            <h2 className="h2"><strong>Closing Notes</strong></h2>
            <ol className='ol'>
                <li><strong>Teaching Ace from your Expertise</strong> <br /> Your mission is to teach Ace your areas of expertise, guiding it step by step to master the tasks you perform. We are confident that by working together, you can help Ace become the best computer control agent possible.</li>
                <li>
                    <strong>Practice Tasks</strong> <br /> We&apos;ll share sample tasks for you to try before you begin official recordings.
                    This helps you get comfortable with our workflow.
                </li>
                <li><strong>Remember</strong> <br /> A well-executed, clean recording (with minimal extra steps) is key to training Ace effectively. If in doubt, re-record rather than submit a flawed session.</li>
            </ol>
            <br />
            <p className="p">
                <strong>Thank you</strong> for contributing to Ace&apos;s development! Don&apos;t hesitate to reach out if you have any questions or need clarification on these guidelines. By following these principles, we&apos;ll build a robust dataset that helps Ace learn to navigate and execute tasks with precision.
            </p>


           

        </>
    );
}



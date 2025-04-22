// import '../General.css';
// import one from '../../../../../public/Images/5.3.png';

// import Image from 'next/image';
// import Bulb from '../../../../../public/Images/bulb.png';
// import {  useState } from 'react';


// export default function FirTopic() {
//     const [openIndex, setOpenIndex] = useState<number | null>(null); // Specify type

//     const toggleFAQ = (index: number) => {
//       setOpenIndex(openIndex === index ? null : index); // Only toggle the clicked FAQ
//     };
//     return (
//         <>




//             <h2 className="h2"><strong>Guidelines</strong></h2>

//             <p className="p">These guidelines are designed to help you understand our goals and processes.
//             </p>
            
//             <p className='p'>There are 10 <strong>key sections</strong> in this guide, each addressing an essential aspect of the data creation process.

//             </p>
//             <hr />
     

//             <h2 className="h2"><strong>Prompts, Instructions & Annotations</strong></h2>

//             <ol className='ol'>
//                 <li><strong>Prompts</strong>
//                     <ul className='ul'>
//                         <li>
//                             <strong>What is a Prompt?</strong>
//                         </li>

//                         <li>
//                         A prompt is the instruction to guide Ace on the task you want to complete. 
//                         Think of it as a clear and complete set of directions outlining what you&apos;re doing during your recording. 
//                         A well-crafted prompt usually includes the intended action and the expected outcome, expressed in straightforward, technical terms.
//                         </li>
//                         <li>
//                         Imagine prompts as tasks you&apos;d give to a human assistant — keep them short, clear, and direct. 
//                         Avoid using filler words to ensure your instructions are easy to follow and effective.
//                         </li>

//                         <li>
//                         There is a dedicated section called <strong>Prompting Basics</strong>, refer to it for more information on prompts.
//                         </li>


//                     </ul>
//                 </li>

//                 <li><strong>Instruction Prompts and Annotation Prompts</strong>
//                     <ul className='ul'>
//                         <li>
//                         Instruction Prompts are what you feed into Fluxe.
//                         </li>
//                         <li>
//                         Annotations work similarly to instructional prompts but are best used when you&apos;re recording longer sessions. 
//                         They allow you to break down a large task into smaller tasks.
//                         </li>
//                         <li>
//                         In essence, annotations are prompts used to mark smaller tasks in your recordings.
//                         </li>
              
//                         <li>Please refer to the Engine section of the website for more details on annotations and instructions on how to add them.
//                             And refer to Prompts: Instructions and Annotations section for more details on both, and Prompting Basics section to understand prompts in detail.</li>


//                     </ul>


//                 </li>
//             </ol>


//             <hr />

//             <h2 className="h2"><strong>Recording Instructions</strong></h2>


//             <ol className='ol'>
//                 <li><strong>Optimal Actions</strong>
//                     <ul className='ul'>
//                         <li>
//                             Optimal actions are your goal while performing recordings to train Ace.
//                         </li>

//                         <li>
//                             When executing tasks, aim to follow the shortest and most natural path. For
//                             example, if an action can be completed with <strong>3 clicks</strong> instead of <strong>5</strong>, choose &apos;
//                             the <strong>3-click</strong> method &apos;. This efficiency helps Ace learn more effectively.
//                         </li>
//                         <li>
//                             Incorporate <strong>Keyboard shortcuts</strong> wherever necessary. This step also
//                             ensures that you take a more reliable path while recording.
//                         </li>
//                         <p className="p">
//                             Let us demonstrate the importance of Optimal Actions and Keyboard Shortcuts
//                             with this example:
//                         </p>
//                         <li>
//                             To archive the highlighted card on this Trello board, you have two options:
//                         </li>
//                         <br />
// {/*                         <figure className='img-5-3'>
//                             <Image src={one} width={0} height={0} alt="Logo" />
//                         </figure> */}

//                                                <figure className='img-5-3'>
//                             <Image className='Image-Tag' src={one} width={0} height={0} alt="Logo" />
//                         </figure>


//                         <br />
//                         <li>
//                             <strong>Right-Click Method:</strong> Right-click the card and select <strong>Archive</strong> from the
//                             dropdown menu.
//                         </li>
//                         <li>
//                             <strong>Keyboard Shotcut:</strong> Press the <strong>&quot;C&quot;</strong> key on your keyboard to archive the card
//                             instantly.
//                         </li>

//                         <p className="p">
//                             <strong>Which method is more optimal?</strong><br />
//                             Using the <strong>keyboard shortcut (&quot;C&quot;)</strong> is the more efficient way to archive a card.
//                             It reduces the number of clicks and speeds up your workflow, and Ace also
//                             needs to learn that!
//                         </p>

//                         <br />

//                         <div className='Textarea-Hover'>
//                             <div className='Textarea-Wrapper'>
//                                 <Image width={50} height={50} src={Bulb} alt=''></Image>
//                                 <p>
//                                     Following these steps ensures that Ace learns the most optimal and efficient ways to execute the tasks you&apos;re teaching!                    </p>
//                             </div>
//                         </div>

//                         <br />


//                     </ul>
//                 </li>

//                 <li><strong>Screen Size and View Modes</strong>
//                     <ul className='ul'>
//                         <li>
//                             <strong>Resolutions:</strong> Use the <strong>&quot;default&quot;</strong> resolution setting while recording.
//                             Additionally, <strong>vary</strong> between <strong>windowed</strong> and <strong>full-screen</strong> modes occasionally
//                             to provide diverse data.
//                         </li>
//                         <li>
//                             <strong>Why:</strong> Exposing Ace to different screen layouts helps it learn to navigate
//                             consistently across various setups and configurations.
//                         </li>



//                     </ul>


//                 </li>
//                 <li><strong>Mouse Movements</strong>
//                     <ul className='ul'>
//                         <li>
//                             <strong>Minimize Unnecessary Movement:</strong> Keep your mouse movements steady
//                             and avoid dragging it around the screen unnecessarily. This helps create
//                             <strong>clean</strong> recordings that are easy to follow and reduces potential confusion or
//                             lag/noise.
//                         </li>




//                     </ul>


//                 </li>
//                 <li><strong>Lag</strong>
//                     <ul className='ul'>
//                         <li>
//                             <strong>Acceptable Waits:</strong> If a task inherently takes a few seconds to process (e.g.,
//                             loading a file), its okay to wait in the recording. Use your judgment to
//                             ensure that the final video remains <strong>clean</strong> and free of unnecessary delays.
//                         </li>





//                     </ul>


//                 </li>
//             </ol>


//             <hr />



//             <h2 className="h2"><strong>Starting Conditions</strong></h2>

//             <ol className='ol'>
//                 <li>
//                     <strong>Definition:</strong> This is the &quot;00:00&quot; point of every video—where your system is when you begin recording.
//                 </li>
//                 <li>
//                     <strong>Vary the Setup:</strong>
//                     <ul className='ul'>
//                         <li>Occasionally, several applications are open, whether overlapping or in the background. This diversity helps create more varied and realistic recordings.</li>
//                         <li>Use different datasets or arrange your windows in various layouts. The goal is to mimic real users environments. For instance, starting with a blank projects page or with only one project visible doesn&apos;t represent someone who frequently uses the tool.</li>
//                         <li>Avoid Repeating the Same Environment. Try not to begin every recording in the exact same setup. Mixing things up ensures that Ace is exposed to a wide range of starting points.</li>
//                     </ul>
//                 </li>
//                 <li>If you&apos;re doing something that requires full-screen mode (e.g., a design app that only works maximized), that&apos;s acceptable. Otherwise, vary it to show Ace different possible starting points.</li>
//             </ol>

//             <div className='Textarea-Hover'>
//                 <div className='Textarea-Wrapper'>
//                     <div style={{marginTop: "25px" , marginRight: "10px"}}>
//                     <Image width={70} height={0} src={Bulb} alt=''></Image>
//                     </div>
//                     <div><h2 className='h2'>
//                         <strong>Moving the Cursor After Countdown</strong></h2>
//                     <ol className='ol'>
//                         <li><strong>Wait for the Countdown</strong>
//                             <ul className='ul'>
//                                 <li>Please wait until the countdown from Fluxe reaches zero before moving your cursor. This ensures that the data is processed accurately.</li>
//                             </ul>
//                         </li>
//                         <li><strong>Why It&apos;s Important</strong>
//                             <ul className='ul'>
//                                 <li>Moving your cursor before the countdown ends can disrupt data processing, which may affect the quality of your recordings. We want to avoid any issues to ensure the best results for Ace.</li>
//                             </ul>
//                         </li>
//                     </ol></div>

//                 </div>
//             </div>



//             <h2 className="h2"><strong>Creating Realistic Accounts</strong></h2>

//             <ol className='ol'>
//                 <li>
//                     Populate with Realistic Data
//                 </li>
//                 <p className="p">
//                     Use &quot;test&quot; or &quot;fake&quot; data in apps like Canva, Asana, and others to make
//                     your screen look authentic and varied. Having multiple files with real-sounding names in your boards, projects, and workspaces helps Ace
//                     understand the dynamic nature of different users patterns and habits.
//                 </p>
//                 <br />
//                 <li>
//                     Refresh Regularly
//                 </li>
//                 <p className="p">
//                     Change or add new data every day to ensure Ace sees diverse account
//                     states. Regular updates keep your recordings varied and reflective of realworld usage.
//                 </p>
//             </ol>

//             <hr />

//             <h2 className="h2"><strong>Tagging Your Recordings</strong></h2>

//             <ol className='ol'>
//                 <li>
//                     Each tool you work with will be labeled with a tag in the format <strong>&quot;tool-
//                         (tool_name)&quot;</strong>, and the tasks you perform will be tagged as <strong>&quot;op-
//                             (tool_name)-(feature_name)&quot;</strong>. For example:

//                     <br />
//                     <ul className='ul'>
//                         <li>
//                             If you&apos;re recording a task using the Background Removal Tool in Adobe
//                             Photoshop, the tags would be &quot;tool-ps&quot; and &quot;op-ps-backgroundremoval&quot;.
//                         </li>
//                         <li>
//                             For a task like <strong>Formatting</strong> in <strong>Google Sheets</strong>, the tags would be &quot;toolsheets&quot; and &quot;op-sheets-formatting&quot;.
//                         </li>

//                     </ul>
//                 </li>
//                 <li>
//                     Multiple Tags per Tool : A single tool may have numerous tags based on its features. For instance, if
//                     a tool has <strong>85 features</strong>, there will be <strong>85 unique tags</strong> representing each
//                     feature.

//                 </li>


//                 <li>
//                     Refer to the Introduction to Fluxe section to understand the process of choosing tags in Fluxe.
//                 </li>

//             </ol>

//             <hr />


//             <h2 className="h2"><strong>Flagging Recordings</strong></h2>
//             <ol className='ol'>
//                 <li><strong>When To Flag:</strong> Flag recordings if you encounter major mistakes such as typos, misclicks,
//                     or disrupted workflows. In these cases, its best to halt and restart the
//                     recording to ensure accuracy.</li>
//                 <li>
//                     <strong>Minor Mouse Movements:</strong> Slightly off-target clicks are acceptable if they don&apos;t cause confusion in the
//                     final steps.
//                 </li>
//                 <li>
//                     <strong>How To Flag:</strong> The flagging process is detailed in the <strong>Introduction To Engine</strong> section. We
//                     recommend referring to this document for step-by-step instructions on
//                     properly flagging your recordings.
//                 </li>

//             </ol>

//             <hr />

//             <h2 className="h2"><strong>Your Role - Ensuring Quality & Integrity</strong></h2>
//             <ol className='ol'>
//                 <li><strong>Your Responsibility As A Recorder:</strong> As a recorder, your goal is to produce <strong>clean and error-free</strong> data. Every
//                     accurate action you record helps Ace learn the best ways to complete various tasks effectively.</li>
//                 <li>
//                     <strong>Continuous Evaluation Of Ace:</strong> We evaluate Ace&apos;s performance on a weekly basis to identify any patterns
//                     or gaps in its learning. This ongoing assessment allows us to refine our
//                     instructions and improve the data collection process as needed.
//                 </li>


//             </ol>

//             <hr />


//             <h2 className="h2"><strong>Examples</strong></h2>
//             <p className="p">Sample Prompts</p>
//             <br />
        

//             <p className='p'>Short, direct prompts are preferred. Here are few examples from different tools:</p>
//             <br />
//             <ol className='ol'>
//                 <li>
//                     <strong>Adobe Premiere Pro:</strong> &quot;apply a faded vintage look to wedding_ps_2009.mp4
//                     by decreasing blacks to +20, reducing contrast to -15 and adding 5 percent
//                     noise&quot;.
//                 </li>
//                 <li> <strong>Excel:</strong> &quot;limit entries in h5:h20 to dates between january 1 2024 and
//                     december 31 2024&quot;.</li>
//                 <li><strong>Adobe Photoshop:</strong> &quot;use the darken blending mode to merge the shadow
//                     layer in adobe photoshop&quot;.</li>
//                 <li><strong>Canva:</strong> &quot;place animated fireworks in the background and overlay bold white
//                     text &quot;Celebrate&quot; in the center&quot;</li>
//                 <li><strong>PowerBi:</strong> &quot;create a dax measure called &apos;average quantity sold per order&apos; to
//                     compute the average quantity of products sold per order from the &apos;order
//                     details&apos; table&quot;</li>
//                 <li>
//                     <strong>Figma:</strong> &quot;transform the cf1 image in order d frame by 34 and set the
//                     position to 4,407&quot;.
//                 </li>
//                 <li>
//                     <strong>Asana:</strong> &quot;add a task server migration plan assigning to
//                     elijah.twx@outlook.com in the project IT operations. use header called
//                     action plan with bullet points: backup all critical data, test new server
//                     configurations, schedule downtime during low-traffic hours&quot;.
//                 </li>
//                 <li><strong>Git:</strong> &quot;use vs code to initialize a git repository for project task-manager&quot;</li>


//             </ol>

//             <hr />

//             <h2 className="h2"><strong>FAQs</strong></h2>

//             <ol className="ol">
//       {/* First FAQ */}
//       <li className="faq-item">
//         <strong className="faq-question" onClick={() => toggleFAQ(0)}>
//           I can&apos;t find the tag relevant to my task. What do I do?
//           <span
//             style={{
//               marginLeft: "10px",
//               fontSize: "30px",
//               cursor: "pointer",
//               transition: "transform 0.3s ease",
//               transform: openIndex === 0 ? "rotate(180deg)" : "rotate(0deg)",
//             }}
//           >
//             &#9662;
//           </span>
//         </strong>
//         {openIndex === 0 && (
//           <ul className="ul" style={{ borderBottom: "solid white 1px", borderLeft: "solid white 1px", borderRight: "solid white 1px",listStyle: "none", padding: "10px" }}>
//             <li>
//             If you can&apos;t find a tag that matches your task, you can continue recording and contact us to request the addition of the specific tag. Tagging is an ongoing process, and we encourage you to keep creating data even if the appropriate tag isn&apos;t available yet. You can note down the tags you want added and contact us.
//             </li>
//           </ul>
//         )}
//       </li>

//       {/* Second FAQ */}
//       <li className="faq-item">
//         <strong className="faq-question" onClick={() => toggleFAQ(1)}>
//           I have some concerns about my sensitive personal data being recorded. What should I do?
//           <span
//             style={{
//               marginLeft: "10px",
//               fontSize: "30px",
//               cursor: "pointer",
//               transition: "transform 0.3s ease",
//               transform: openIndex === 1 ? "rotate(180deg)" : "rotate(0deg)",
//             }}
//           >
//             &#9662;
//           </span>
//         </strong>
//         {openIndex === 1 && (
//           <ul className="ul" style={{ borderBottom: "solid white 1px", borderLeft: "solid white 1px", borderRight: "solid white 1px", listStyle: "none", padding: "10px" }}>
//             <li>
//             Your recordings are private and only visible to you. You cannot access other users&apos; recordings, and others cannot see yours. Your data is processed securely on our cloud and integrated into our large data repository. However, if there is confidential data you do not wish to record anywhere, we advise you to create a dummy account/profile/user where necessary and populate it to appear natural.
//             </li>
//           </ul>
//         )}
//       </li>

//       {/* Third FAQ */}
//       <li className="faq-item">
//         <strong className="faq-question" onClick={() => toggleFAQ(2)}>
//           I am having trouble using Fluxe; it shows me an error saying &quot;[Error ID]&quot;, and I am not able to record.
//           <span
//             style={{
//               marginLeft: "10px",
//               fontSize: "30px",
//               cursor: "pointer",
//               transition: "transform 0.3s ease",
//               transform: openIndex === 2 ? "rotate(180deg)" : "rotate(0deg)",
//             }}
//           >
//             &#9662;
//           </span>
//         </strong>
//         {openIndex === 2 && (
//           <ul className="ul" style={{ borderBottom: "solid white 1px", borderLeft: "solid white 1px", borderRight: "solid white 1px", listStyle: "none", padding: "10px" }}>
//             <li>
//               <strong>Check for Updates:</strong> Ensure that Fluxe is updated to the latest version.
//             </li>
//             <li>
//               <strong>Active Uploads:</strong> We strongly encourage you to keep your Mac active with Fluxe running to finish uploading your recordings. Sometimes recordings upload slower owing to slow upload speeds on the data creators&apos; side. Download an app like Caffeine, and keep your Mac on for some time until the data completes uploading.
//             </li>
//             <li>
//             If the issue persists after these steps, please contact our support team with the specific error ID for further assistance.
//             </li>
//           </ul>
//         )}
//       </li>

//       {/* Fourth FAQ */}
//       <li className="faq-item">
//         <strong className="faq-question" onClick={() => toggleFAQ(3)}>
//           I flagged a recording by mistake. Can I un-flag a recording?
//           <span
//             style={{
//               marginLeft: "10px",
//               fontSize: "30px",
//               cursor: "pointer",
//               transition: "transform 0.3s ease",
//               transform: openIndex === 3 ? "rotate(180deg)" : "rotate(0deg)",
//             }}
//           >
//             &#9662;
//           </span>
//         </strong>
//         {openIndex === 3 && (
//           <ul className="ul" style={{ borderBottom: "solid white 1px", borderLeft: "solid white 1px", borderRight: "solid white 1px", listStyle: "none", padding: "10px" }}>
//             <li>
//             Unfortunately, a recording cannot be unflagged once it has been flagged. Please review your recording carefully before flagging to avoid accidental flags.
//             </li>
//           </ul>
//         )}
//       </li>

//       {/* Fifth FAQ */}
//       <li className="faq-item">
//         <strong className="faq-question" onClick={() => toggleFAQ(4)}>
//           I started working on [tool_name] and have made a few recordings. How do I ensure I have achieved even
//           coverage on [tool_name]?
//           <span
//             style={{
//               marginLeft: "10px",
//               fontSize: "30px",
//               cursor: "pointer",
//               transition: "transform 0.3s ease",
//               transform: openIndex === 4 ? "rotate(180deg)" : "rotate(0deg)",
//             }}
//           >
//             &#9662;
//           </span>
//         </strong>
//         {openIndex === 4 && (
//           <ul className="ul" style={{ borderBottom: "solid white 1px", borderLeft: "solid white 1px", borderRight: "solid white 1px", listStyle: "none", padding: "10px" }}>
//             <li>
//             To ensure comprehensive coverage of [tool_name], create a function mapper for the tool’s functionalities. Track the features you’ve recorded using the Google Sheet of the same. This method helps you monitor which features have been covered and identify any gaps, ensuring that Ace receives thorough training on all aspects of [tool_name]. Refer to the <strong>Extensive Tool Coverage and Function Mapper</strong> section for more information on this topic.
//             </li>
//           </ul>
//         )}
//       </li>
//     </ol>

//             <hr />

//             <h2 className="h2"><strong>Closing Notes</strong></h2>
//             <ol className='ol'>
//                 <li><strong>Teaching Ace from your Expertise</strong> <br /> Your mission is to teach Ace your areas of expertise, guiding it step by step to master the tasks you perform. We are confident that by working together, you can help Ace become the best computer control agent possible.</li>
//                 <li>
//                     <strong>Practice Tasks</strong> <br /> We&apos;ll share sample tasks for you to try before you begin official recordings.
//                     This helps you get comfortable with our workflow.
//                 </li>
//                 <li><strong>Remember</strong> <br /> A well-executed, clean recording (with minimal extra steps) is key to training Ace effectively. If in doubt, re-record rather than submit a flawed session.</li>
//             </ol>
//             <br />
//             <p className="p">
//                 <strong>Thank you</strong> for contributing to Ace&apos;s development! Don&apos;t hesitate to reach out if you have any questions or need clarification on these guidelines. By following these principles, we&apos;ll build a robust dataset that helps Ace learn to navigate and execute tasks with precision.
//             </p>


           

//         </>
//     );
// }





import '../General.css';
// import one from '../../../../../public/Images/5.3.png';

// import Image from 'next/image';
// import Bulb from '../../../../../public/Images/bulb.png';
// import {  useState } from 'react';


export default function FirTopic() {
    // const [openIndex, setOpenIndex] = useState<number | null>(null); // Specify type

    // const toggleFAQ = (index: number) => {
    //   setOpenIndex(openIndex === index ? null : index); // Only toggle the clicked FAQ
    // };
    return (
        <>




            {/* <h2 className="h2"><strong>Guidelines for Training Ace effectively</strong></h2> */}

            <p className="p">This guide will help you understand our goals and processes for creating high-quality training data for Ace. Following these guidelines ensures that your recordings contribute effectively to Ace&apos;s learning.
            </p>
            
            {/* <p className='p'>There are 10 <strong>key sections</strong> in this guide, each addressing an essential aspect of the data creation process.

            </p> */}
            <hr />
     

            {/* <h2 className="h2"><strong>Prompts, Instructions & Annotations</strong></h2> */}

        <ol className='ol'>
          <li><strong>Testing Ace and Addressing Failures</strong>
            <p className='p'>As an Agent Trainer, you play a crucial role in both testing Ace and creating
              targeted data to address its limitations.</p>
            <ul className='ul'>
              <li>
                <strong>Testing Process:</strong>
                <ul className='ul'>
                  <li>
                    Document both successful executions and failures in detail
                  </li>
                  <li>
                    Use a structured approach to systematically explore Ace&apos;s capabilities
                  </li>
                </ul>
              </li>

              <li>
              <strong>Handling Test Results:</strong>
                <ul className='ul'>
                  <li>
                    <strong>For Successful Tests:</strong>
        
                  <ul className='ul'>
                    <li>Continue testing with more complex variations of the task</li>
                    <li>Gradually increase difficulty to find the boundaries of Ace&apos;s capabilities</li>
                    <li>Document successful strategies that Ace employs</li>
                  </ul>
                  </li>
                  <li>
                    <strong>For Failed Tests:</strong>
                  
                  <ul className='ul'>
                    <li>Create targeted training data to address specific failure points</li>
                    <li><strong>Follow the 5:1 Rule:</strong>Create at least 5 distinct datapoints to teach Ace for
                    each failure encountered</li>
                    <li>Ensure these datapoints represent diverse scenarios to prevent overfitting</li>
                  </ul>
                  </li>
                </ul>
              </li>
              <li><strong>Creating Diverse Training Data:</strong>
              
              <p>When creating data to address failures, vary the following elements:</p>
              <ul className='ul'>
                  <li>
                  <strong>Starting conditions:</strong> Different initial states of applications and desktop                  </li>
                  <li>
                  <strong>Resolutions:</strong> Various screen resolutions and aspect ratios
                  </li>
                  <li>
                  <strong>Visual elements:</strong> Different themes, color schemes, and UI layouts
                  </li>
                  <li>
                  <strong>Methods:</strong> Alternative approaches to accomplish the same task
                  </li>
                  <li>
                  <strong>Content:</strong> Varied text, files, and data structures
                  </li>
                </ul>
              </li>

              <li><strong>Preventing Overfitting:</strong>
              
              <ul className='ul'>
                  <li>
                  Avoid making all training examples too similar to each other                  </li>
                  <li>
                  Deliberately introduce variations in environment and execution                  </li>
                  <li>
                  Change non-essential elements while maintaining the core task requirements</li>
                  <li>
                  Use different user accounts, window arrangements, or background applications</li>
                </ul>

                <p>This targeted approach to addressing failures helps Ace develop robust,
generalizable skills rather than memorizing specific patterns. Remember that
diversity in your training data is key to building an agent that can adapt to the
wide range of scenarios it will encounter in real-world use.</p>

<p><strong>              Here is a video demonstration of how the workflow will look like:
</strong></p>
<ul className='ul'>
                <li>
                <p>Testing Ace on a task in Figma:</p>
                <div className='VideoFrame'>
    <iframe
        width="560"
        height="315"
        src="https://iframe.mediadelivery.net/embed/393476/cc5c62f8-ebdc-4206-8172-ce2a1d0b5087?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
    </iframe>
</div>
                <p>As seen here, it fails to do the task;</p>
                </li>
                <li>
                <p>Next step is teaching it the task, here are 5 examples of how you can teach Ace</p>
                <div className='VideoFrame'>
    <iframe
        width="560"
        height="315"
        src="https://iframe.mediadelivery.net/embed/393476/6b724973-a75d-4998-8e45-39fe28adbe2a?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
    </iframe>
</div>                <div className='VideoFrame'>
    <iframe
        width="560"
        height="315"
        src="https://iframe.mediadelivery.net/embed/393476/de39910a-a1b4-4be1-957f-b897555d6a41?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
    </iframe>
</div>                <div className='VideoFrame'>
    <iframe
        width="560"
        height="315"
        src="https://iframe.mediadelivery.net/embed/393476/36ba3edb-2ae5-449c-9e2b-9980948d47da?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
    </iframe>
</div>                <div className='VideoFrame'>
    <iframe
        width="560"
        height="315"
        src="https://iframe.mediadelivery.net/embed/393476/9ec1739d-8f4d-40bf-91f6-a470429ed4c5?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
    </iframe>
</div>                <div className='VideoFrame'>
    <iframe
        width="560"
        height="315"
        src="https://iframe.mediadelivery.net/embed/393476/c770302e-f4ee-4f51-a15a-c18ffbd7282b?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
    </iframe>
</div>                <p>As you can see here, the diversity in teaching process, helps Ace learn, and generalise faster!</p>
                </li>
              </ul>
              </li>
            </ul>
          </li>

          <li><strong>Prompts, Instructions & Annotations</strong>
                    <ul className='ul'>
                        <li>
                            <strong>What is a Prompt?</strong>
                            <p>A prompt is the instruction that guides Ace on the task you want to complete.
Think of it as a clear and complete set of directions outlining what you&apos;re doing
during your recording.</p>
                        </li>

                        <li><strong>Characteristics of Effective Prompts:</strong>
                        <ul className='ul'>
                          <li>Short, clear, and direct</li>
                          <li>Includes the intended action and expected outcome</li>
                          <li>Uses straightforward, technical terms</li>
                          <li>Avoids filler words</li>
                        </ul>
                        </li>
                        <li><strong>Types of Prompts:</strong>
                        <ul className='ul'>
                          <li><strong>Instruction Prompts:</strong>The overall task entered into Fluxe before recording</li>
                          <li><strong>Annotation Prompts:</strong>Used to break down larger recordings into smaller,
                          focused segments</li>
                        </ul>
                        </li>


                    </ul>
                    <p>For detailed guidance on creating effective prompts, see the &quot;Prompting
                    Basics&quot; section.</p>
                </li>

                <hr/>


                <li><strong>Recording Instructions</strong>
                <ul className='ul'>
                  <li><strong>Optimal Actions</strong>
                    <p>Always aim to follow the shortest and most natural path when executing tasks.
                    This efficiency helps Ace learn more effectively.</p>
                    <ul className='ul'>
                      <li>If an action can be completed with 3 clicks instead of 5, choose the 3-click
                      method</li>
                      <li>Incorporate keyboard shortcuts where appropriate</li>
                      <li>Follow the most reliable and efficient path to complete tasks</li>
                    </ul>
                  </li>

                  <p><strong>Example:</strong></p>
                  <p>To archive a card on a Trello board, you could:</p>

                  <ul className='ul'>
                    <li>To archive a card on a Trello board, you could:</li>
                    <li>Press the &quot;C&quot; key to archive the card instantly (more optimal)</li>
                  </ul>
                  <p>Press the &quot;C&quot; key to archive the card instantly (more optimal)</p>
                  

                  <li><strong>Screen Size and View Modes</strong>
                  <ul className='ul'>
                    <li>Vary the resolutions while recording</li>
                    <li>Vary between windowed and full-screen modes occasionally to provide
                    diverse data</li>
                    <li>This exposure helps Ace learn to navigate consistently across various
                    screen layouts</li>
                  </ul>
                  </li>

                  <li><strong>Mouse Movements</strong>
                  <ul className='ul'>
                    <li>Keep mouse movements steady and purposeful</li>
                    <li>Avoid dragging the cursor around the screen unnecessarily</li>
                    <li>Clean, precise movements create recordings that are easier for Ace to learn
                    from</li>
                  </ul>
                  </li>

                  <li><strong>Handling Lag</strong>
                  <ul className='ul'>
                    <li>If a task inherently takes a few seconds to process (e.g., loading a file), it&apos;s
                    acceptable to wait</li>
                    <li>Use your judgment to ensure the final recording remains clean and free of
                    unnecessary delays</li>
                  </ul>
                  </li>
                </ul>
                </li>
                <hr/>


                <li><strong>Starting Conditions</strong>
                <p>The &quot;starting condition&quot; is the state of your system when you begin recording.</p>
                <ul className='ul'>
                  <strong>Best Practices:</strong>
                  <li><strong>Vary the Setup:</strong>Sometimes have several applications open, whether
                  overlapping or in the background</li>
                  <li><strong>Use different datasets</strong>or arrange windows in various layouts</li>
                  <li><strong>Avoid repeating the exact same environment</strong>for every recording</li>
                  <li>For apps that require full-screen mode, that&apos;s acceptable; otherwise, vary
                  window states</li>
                </ul>
                <p>These variations help Ace learn to navigate different starting points effectively.</p>
                </li>
                <hr/>


                <li><strong>Moving the Cursor After Countdown</strong>
                <ul className='ul'>
                  <li><strong>Wait for the Countdown:</strong>Allow Fluxe&apos;s countdown to reach zero before
                  moving your cursor</li>
                  <li><strong>Why It&apos;s Important:</strong>Moving your cursor before the countdown ends can
                  disrupt data processing and affect recording quality</li>
                </ul>
                </li>
                <hr/>


                <li><strong>Creating Realistic Accounts</strong>
                <p><strong>Populate with Realistic Data</strong></p>
                <ul className='ul'>
                  <li>Use &quot;test&quot; or &quot;fake&quot; data that makes your screen look authentic and varied</li>
                  <li>Create multiple files with real-sounding names in boards, projects, and
                  workspaces</li>
                  <li>This diversity helps Ace understand different users patterns and habits</li>
                </ul>
                <p><strong>Refresh Regularly</strong></p>
                <ul className='ul'>
                  <li>Change or add new data every day to ensure Ace sees diverse account
                  states</li>
                  <li>Regular updates keep your recordings varied and reflective of real-world
                  usage</li>
                </ul>
                </li>
                <hr/>


                <li><strong>Tagging Your Recordings</strong>
                <ul className='ul'>
                  <li>Each tool gets a tag in the format &quot;tool-(tool_name)&quot;</li>
                  <li>Each task gets a tag in the format &quot;op-(tool_name)-(feature_name)&quot;</li>
                </ul>
                <strong>Examples:</strong>
                <ul className='ul'>
                  <li>For a Background Removal task in Adobe Photoshop: &quot;tool-ps&quot; and &quot;op-ps-
                  backgroundremoval&quot;</li>
                  <li>For a Formatting task in Google Sheets: &quot;tool-sheets&quot; and &quot;op-sheets-
                  formatting&quot;</li>
                </ul>
                <p>A single tool may have numerous tags based on its features. Refer to the
                Introduction to Fluxe section for details on selecting tags.</p>
                </li>
                <hr/>


                <li><strong>Flagging Recordings</strong>
                <p><strong>When to Flag:</strong></p>
                <ul className='ul'>
                  <li>Major mistakes such as typos or misclicks</li>
                  <li>Disrupted workflows</li>
                  <li>Technical issues during recording</li>
                </ul>
                <p>Minor mouse movements that are slightly off-target are acceptable if they don&apos;t
                cause confusion in the final steps.</p>
                <p>For instructions on how to flag recordings, see the Introduction to Engine
                section.</p>
                </li>
                <hr/>


                <li><strong>Your Role - Ensuring Quality & Integrity</strong>
                <p>As a recorder, your goal is to produce clean and error-free data. Every accurate
action you record helps Ace learn the best ways to complete various tasks
effectively.</p>
<p>We evaluate Ace&apos;s performance weekly to identify patterns and gaps in its
learning. This ongoing assessment allows us to refine our instructions and
improve the data collection process.</p>
                </li>
                <hr/>


                <li><strong>Sample Prompts</strong>
                <p>Short, direct prompts are preferred. Here are examples from different tools:</p>
                <ul className='ul'>
                  <li><strong>Adobe Premiere Pro:</strong>&quot;apply a faded vintage look to wedding_ps_2009.mp4
by decreasing blacks to 20, reducing contrast to 15 and adding 5 percent
noise&quot;</li>
<li><strong>Excel:</strong>&quot;limit entries in h5:h20 to dates between january 1 2024 and
december 31 2024&quot;</li>
<li><strong>Canva:</strong>&quot;place animated fireworks in the background and overlay bold white
text &apos;Celebrate&apos; in the center&quot;</li>
<li><strong>Figma:</strong>&quot;transform the cf1 image in order d frame by 34 and set the position
to 4,407&quot;</li>
                </ul>
                </li>

                <hr/>


                <li><strong>Final Reminders</strong>
                <ul className='ul'>
                  <li><strong>Teaching Ace from your Expertise:</strong>Your mission is to guide Ace step by
                  step to master the tasks you perform</li>
                  <li><strong>Practice Tasks:</strong>Sample tasks help you get comfortable with our workflow
                  before official recordings</li>
                  <li><strong>Quality Matters:</strong>A well-executed, clean recording is key to training Ace
                  effectively</li>
                  <li><strong>When in Doubt:</strong>If unsure about a recording&apos;s quality, it&apos;s better to re-record
                  than to submit a flawed session</li>
                </ul>
                <p>Thank you for contributing to Ace&apos;s development! By following these
guidelines, you&apos;ll help build a robust dataset that enables Ace to navigate and
execute tasks with precision.</p>
                </li>

                <hr/>

                <li><strong>Closing Note</strong>
                <p>Remember that every detail matters in creating quality training data. Your
expertise and attention to detail are invaluable in teaching Ace to become the
best computer control agent possible.</p>
                </li>


            </ol>
           

        </>
    );
}




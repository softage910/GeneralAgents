import Image from "next/image";
import Bulb from '../../../../../public/Images/bulb.png';
export default function FirstTopic() {
    return (

        <>
            <h1 className="h1" style={{ textAlign: "left" }}><strong>Objective: Mastering Prompt creation</strong></h1>

            <h2 className="h2" style={{ textAlign: "left" }}>Crafting Actionable Prompts for Computer Agents</h2>
            <p className="p" style={{ textAlign: "left" }}>
                This module will guide you through the essentials of writing clear, effective, and executable prompts for computer-use agents. Follow these guidelines and complete the exercises to refine your prompt-writing skills.
            </p>

            <hr />

            <h2 className="h2" style={{ textAlign: "left" }}><strong>Understanding Prompts for Computer Use Agents</strong></h2>

            <h3 className="h3" style={{ textAlign: "left" }}>Definition and Purpose</h3>
            <p className="p" style={{ textAlign: "left" }}>
                Prompts designed for computer use agents are the digital equivalent of clear, concise instructions given to a highly skilled personal assistant. These prompts serve as the bridge between human intent and AI execution, enabling seamless automation of tasks across various digital platforms.
            </p>
            <h3 className="h3" style={{ textAlign: "left" }}>Key aspects of computer use agent prompts:</h3>
            <ol className="ol" style={{ textAlign: "left" }}>
                <li><strong>Task-oriented:</strong>
                    <ul className="ul">
                        <li>Each prompt is focused on accomplishing a specific, actionable task.</li>
                    </ul>
                </li>
                <li><strong>Precise language:</strong>
                    <ul className="ul">
                        <li>Uses clear, direct language and action verbs (e.g., &quot;schedule&quot;, &quot;send&quot;, &quot;organize&quot;) to avoid misinterpretation.</li>
                    </ul>
                </li>
                <li><strong>Context-aware:</strong>
                    <ul className="ul">
                        <li>Includes the necessary environmental or situational details (tools, timelines, platforms).</li>
                    </ul>
                </li>
                <li><strong>Parameter-driven:</strong>
                    <ul className="ul">
                        <li>Specifies required inputs, constraints, or conditions for task execution (time limits, formats, priorities).</li>
                    </ul>
                </li>
                <li><strong>Platform-specific:</strong>
                    <ul className="ul">
                        <li>Tailored to work within the confines and capabilities of particular software systems or tools.</li>
                    </ul>
                </li>
            </ol>
            <br />

            <h3 className="h3">Basic Prompt Structure</h3>
            <ul className="ul" style={{ textAlign: "left" }}>
                <li>[Action Verb] + [Task Object] + [Location/Platform] + [Timing] + [Additional Parameters]</li>
            </ul>

            <h3 className="h3">Key Prompt Element</h3>
            <table className='Day1Table' style={{ textAlign: "left" }}>
                <thead>
                    <tr>
                        <th>Element</th>
                        <th>Intention</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Action</td>
                        <td>Clearly define the task to be performed</td>
                        <td>&quot;Send a payment reminder email...&quot;</td>
                    </tr>
                    <tr>
                        <td>Context</td>
                        <td>Provide relevant environmental or situational information</td>
                        <td>&quot;...using HubSpot templates, targeting overdue invoices more than 30 days&quot;</td>
                    </tr>
                    <tr>
                        <td>Constraints</td>
                        <td>Specify any limitations or requirements</td>
                        <td>&quot;Exclude clients with pending disputes; flag accounts more than 60 days overdue&quot;</td>
                    </tr>
                </tbody>
            </table>

            <br />

            <h3 className="h3" style={{ textAlign: "left" }}>Examples by Task Type</h3>

            <ol className="ol" style={{ textAlign: "left" }}>
                <li><strong>Scheduling</strong>
                    <ul className="ul">
                        <li>Good: &quot;schedule a team meeting for next tuesday at 2 PM on Zoom.&quot;</li>
                        <li>Bad: &quot;set up a meeting on Zoom.&quot;</li>
                    </ul>
                </li>
                <li><strong>Reminders</strong>
                    <ul className="ul">
                        <li>&quot;remind me to call mom tomorrow at 6 pm.&quot;</li>
                        <li>&quot;remind me about the call later.&quot;</li>
                    </ul>
                </li>

                <li><strong>File Management</strong>
                    <ul className="ul">
                        <li>&quot;move all pdf files from downloads folder to work documents folder.&quot;</li>
                        <li>&quot;organize all of my files.&quot;</li>
                    </ul>
                </li>

                <li><strong>Emails</strong>
                    <ul className="ul">
                        <li>&quot;send a thank you email to matthewjohn09@gmail.com for the dolphin project proposal.&quot;</li>
                        <li>&quot;email John about about the proposal.&quot;</li>
                    </ul>
                </li>

                <li><strong>Social Media</strong>
                    <ul className="ul">
                        <li>&quot;post the image &apos;DSC0047.jpg&apos; on our facebook page at 3 pm with the caption &apos;New product alert!&apos;&quot;</li>
                        <li>&quot;put the image on social media about the product.&quot;</li>
                    </ul>
                </li>
            </ol>

            <br />

            <h3 className="h3" style={{ textAlign: "left" }}>Best Practices</h3>

            <ol className="ol" style={{ textAlign: "left" }}>
                <li><strong>Do&apos;s:</strong>
                    <ul className="ul">
                        <li>Use simple, natural and conversational prompts</li>
                        <li>Use tool-specific jargons and syntax (e.g., @mention in Slack, #tags in Asana)</li>
                        <li>Name files or folders exactly: &quot;Q4_Report.docx&quot; not just &quot;the report&quot;</li>
                    </ul>
                </li>
                <li><strong>Don&apos;ts:</strong>
                    <ul className="ul">
                        <li>Use vague terms: ❌ &quot;Handle files sometime today&quot; → ✅ &quot;Move *.csv files to Backup folder by 5 PM&quot;</li>
                        <li>Assuming the agent knows context without specifying.</li>
                    </ul>
                </li>
            </ol>
            <br />

            <h2 className="h2"><strong>Use Cases</strong></h2>
            <p className="p">
                Use cases demonstrate the practical application of action agents in real-world situations, highlighting their ability to interpret instructions, process relevant data, and execute actions to achieve desired outcomes efficiently and accurately.</p><br />

            <p className="p" >The concept of use cases for action agents is inherently fluid and multifaceted and constantly evolving. Instead of fitting into predefined categories, their applications are better understood as a spectrum of possibilities driven by the specific problems they are designed to solve.</p><br />

            <p className="p" >Essentially, a use case for an action agent emerges from the intersection of its capabilities—perception, decision-making, and action—with a particular domain&apos;s needs and constraints. This means that the same underlying principles of autonomous action can manifest in vastly different ways depending on the context.</p>
            <br />

            <h2 className="h2"><strong>Contextual vs. Non-Contextual actions</strong></h2>

            <ul className="ul">
                <li>Contextual task: You can start working on it immediately in your current view or screen. Essentially, no extra steps are required before you can begin the task.
                </li>
                <br />
                <li>Non-contextual task: You have to do some setup or navigation first—go to another page, change a mode, or perform certain steps—before you can start the task.</li>
                <br />
                <li>A simpler way to understand this in regards to data creation is to see if the task you will be performing, are there steps that need to be taken to reach/start the task, or if you can start performing the task directly. If you need to do certain steps to reach the point of starting the task (navigating, setting up), then it is most likely a non-contextual task. If you can start performing directly on the screen you are in; then it is a contextual task.</li>
            </ul>
            <br />

            <h3 className="h3">Example:</h3>
            <p className="p">Take a look at these identical tasks executed both contextually and non-contextually to understand the concept further.</p>
            <p className="p">Lets look at two identical Canva tasks:</p>
            <br />

            <ol className="ol">
                <li><strong>Contextual</strong>
                <br />
                    <ul className="ul">
                        <li>Prompt: Change the font of eco-conscious heading to sigher</li>
                        {/* <a href="https://drive.google.com/file/d/1RLkJpB_Cbtghni7dPt_-2igiUK6hPJrt/view?usp=drive_link" target="_blank">                                <button className='Watch-Button'>
                                    Link to the Video
                                </button>
                            </a> */}
                        <div className="Onboarding-Content">
                            <div className="Content-Video">
                                {/* <h1>(Space For Onboarding Video)</h1> */}
                                <div style={{ position: "relative", paddingTop: "56.25%" }}><iframe src="https://iframe.mediadelivery.net/embed/394091/6549b683-2ee4-4b2a-ba5d-3f6afa0c5dcd?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" style={{position:"absolute",top:"0",height:"100%", width: "100%" }} allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"></iframe></div>
                            </div>
                        </div>
                    </ul>
                </li>


                <li><strong>Non-Contextual</strong>
                <br />
                    <ul className="ul">
                        <li>Prompt: change the font of eco-conscious heading to sigher on canva</li>
                        {/* <a href="https://drive.google.com/file/d/1qPOJXCRLCuk7YurGGsdxpNPbGtI-j9nY/view?usp=drive_link" target="_blank">                                <button className='Watch-Button'>
                                    Link to the Video
                                </button>
                            </a> */}
                        <div className="Onboarding-Content">
                            <div className="Content-Video">
                                {/* <h1>(Space For Onboarding Video)</h1> */}
                                <div style={{ position: "relative", paddingTop: "56.25%" }}><iframe src="https://iframe.mediadelivery.net/embed/394091/ac15a9bb-caa5-4d13-8a91-a6d40d4a5b03?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" style={{position:"absolute",top:"0",height:"100%", width: "100%"}} allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"></iframe></div>
                            </div>
                        </div>
                    </ul>
                </li>
            </ol>

            <p className="p">Notice the change in starting condition and in the prompt here?</p>
            <p className="p">For the contextual recording, we start with the design already open in Canva.</p>
            <p className="p">For the non-contextual recording, we start from the desktop, you can start from anywhere apart from the design to do a non-contextual recording. Also, , the prompt mentions &quot;on canva&quot;, this distinction also helps Ace understand some navigation.</p>
            <br />
            <br />
            <p className="p">Now lets look at another example, this time on Trello</p>

            <ol className="ol">
                <li><strong>Contextual</strong>
                <br />
                    <ul className="ul">
                        <li>mark as complete the refactor api error handling card under to-do list</li>
                        <div className="Onboarding-Content">
                            <div className="Content-Video">
                                {/* <h1>(Space For Onboarding Video)</h1> */}
                                <div style={{ position: "relative", paddingTop: "56.25%" }}><iframe src="https://iframe.mediadelivery.net/embed/394091/3b85cba3-62b5-48ac-8789-353457b17c11?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" style={{position:"absolute",top:"0",height:"100%", width: "100%" }} allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"></iframe></div>
                            </div>
                        </div>
                    </ul>
                </li>


                <li><strong>Non-Contextual</strong>
                <br />
                    <ul className="ul">
                        <li>mark as complete the refactor api error handling card under to-do list in seasonal promotions board</li>
                        <div className="Onboarding-Content">
                            <div className="Content-Video">
                                {/* <h1>(Space For Onboarding Video)</h1> */}
                                <div style={{ position: "relative", paddingTop: "56.25%" }}><iframe src="https://iframe.mediadelivery.net/embed/394091/66425a1d-06fc-4f5b-9767-fd53235d740d?autoplay=false&loop=false&muted=false&preload=true&responsive=true" loading="lazy" style={{position:"absolute",top:"0",height:"100%", width: "100%" }} allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"></iframe></div>
                            </div>
                        </div>
                    </ul>
                </li>
            </ol>

            <p className="p">You can see the similarities here as well,</p>
            <p className="p">In the contextual recording; the recording starts from the board itself, and in the non-contextual variation the recording starts from the Home section of Trello, and then the expert navigates to the board.</p>


            <div className='Textarea-Hover'>
                <div className='Textarea-Wrapper'>
                    <Image width={50} height={50} src={Bulb} alt=''></Image>
                    <p>
                        Non-Contextual recordings play a key role in teaching Ace navigation on complex Ul, or even from complicated starting conditions.
                        The idea is to imagine a homing signal, which will guide Ace to the correct point required to execute the task properly</p>
                </div>
            </div>





        </>
    );
}
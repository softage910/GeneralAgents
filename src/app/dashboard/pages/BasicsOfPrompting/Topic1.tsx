
export default function FirstTopic() {
    return (
        <>
            <h2 className="h2">Objective: Mastering Prompt creation</h2>

            <h2 className="h2"><strong>Training Module: Crafting Actionable Prompts for Computer Agents</strong></h2>
            <p>
                Welcome to the AIOperations team training on prompt generation at SoftAge Information Technology
                Limited! This module will guide you through the essentials of writing clear, effective, and executable
                prompts for computer use agents. Follow these guidelines and complete the exercises to refine your
                prompt-writing skills.
            </p><br />

            <h2 className="h2">Understanding Prompts for Computer Use Agents</h2>

<h2 className="h2"><strong>Definition and Purpose</strong></h2>
<p>
    Prompts designed for computer use agents are the digital equivalent of clear, concise instructions
    given to a highly skilled personal assistant. These prompts serve as the bridge between human intent
    and AI execution, enabling seamless automation of tasks across various digital platforms.
</p><br />
<h3 className="h3">Key aspects of computer use agent prompts:</h3>
<ol className="ol">
    <li><strong>Task-oriented:</strong>
        <ul className="ul">
            <li>Each prompt is focused on accomplishing a specific, actionable task.</li>
        </ul>
    </li>
    <li><strong>Precise language:</strong>
        <ul className="ul">
            <li>Uses clear, direct language and action verbs (e.g., &quot;schedule, &quot;send,
                &quot;organize) to avoid misinterpretation.</li>

        </ul>
    </li>
    <li><strong>Context-aware</strong>
        <ul className="ul">
            <li>Includes the necessary environmental or situational details (tools, timelines,
                platforms).</li>

        </ul>
    </li>
    <li><strong>Parameter-driven</strong>
        <ul className="ul">
            <li>
                Specifies required inputs, constraints, or conditions for task execution (time
                limits, formats, priorities).
            </li>

        </ul>
    </li>
    <li><strong>Platform-specific</strong>
        <ul className="ul">
            <li>Tailored to work within the confines and capabilities of particular software
                systems or tools.</li>

        </ul>
    </li>
</ol>
<br />


    <strong>Basic Prompt Structure</strong><br /><br />
    <ul className="ul">
        <li>[Action Verb] + [Task Object] + [Location/Platform] + [Timing] + [Additional Parameters]</li>

    </ul>



<br />

<table className='Day1Table'>
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
            <td>Clearly define the task to be performed </td>
            <td>&quot;Send a payment reminder email...&quot;</td>
        </tr>
        <tr>
            <td>Context</td>
            <td>Provide relevant environmental or
            situational information</td>
            <td>&quot;...using HubSpot templates, targeting
            overdue invoices 30 days&quot;</td>
        </tr>
        <tr>
            <td>Constraints</td>
            <td>Specify any limitations or requirements</td>
            <td>&quot;Exclude clients with pending disputes; flag
            accounts 60 days overdue&quot;</td>
        </tr>
       
    </tbody>
</table>


<h3 className="h3">Examples by Task Type</h3>

<ol className="ol">
    <li><strong>Scheduling:</strong>
        <ul className="ul">
            <li>Good: &quot;schedule a team meeting for next tuesday at 2 pm on Zoom.&quot;</li>
            <li>Bad: &quot;Set up a meeting on Zoom.&quot;</li>
        </ul>
    </li>
    <li><strong>Reminders:</strong>
        <ul className="ul">
            <li>&quot;remind me to call mom tomorrow at 6 pm.&quot;</li>
            <li> &quot;remind me about the call later.&quot;</li>

        </ul>
    </li>
    <li><strong>File Management</strong>
        <ul className="ul">
            <li>Good: &quot;move all pdf files from downloads folder to work documents folder.&quot;</li>
            <li>Bad: &quot;organize all of my files.&quot;</li>

        </ul>
    </li>
    <li><strong>Emails:</strong>
        <ul className="ul">
            <li>
            Good: &quot;send a thank you email to matthewjohn09@gmail.com for the dolphin project proposal.&quot;
            </li>
            <li>
            Bad: &quot;email John about about the proposal.&quot;
            </li>

        </ul>
    </li>
    <li><strong>Social Media:</strong>
        <ul className="ul">
            <li>Good: &quot;post the image &apos;DSC0047.jpg&apos; on our facebook page at 3 pm with the caption &apos;New
            product&apos; alert!&quot;</li>
            <li>Bad: &quot;put the image on social media about the product.&quot;</li>

        </ul>
    </li>
</ol>


<h2 className="h2">Best Practices</h2>
            <br />

            <ol className="ol">
                <li><strong>Dos:</strong>
                    <ul className="ul">
                        <li>Use simple, natural and conversational prompts.</li>
                        <li>Use tool-specific jargons and syntax (e.g., @mention in Slack, #tags in Asana).</li>
                        <li>Name files or folders exactly: &quot;Q4_Report.docx not just&quot; &quot;the report&quot;.</li>
                    </ul>
                </li>
                <li><strong>Don&apos;t&apos;s:</strong>
                    <ul className="ul">
                        <li>Use vague terms: ❌ &quot;Handle files sometime today → ✅ &quot;Move *.csv files to Backup folder by 5
                            PM&quot;.</li>
                        <li>Overload single prompts: Split &quot;Schedule meeting AND draft report&quot; into separate tasks.</li>
                        <li>Assuming the agent knows context without specifying.</li>

                    </ul>
                </li>

            </ol>
            <br />
            <h2 className="h2"><strong>Use Cases</strong></h2>
            <p>
                Use cases demonstrate the practical application of action agents in real-world situations, highlighting
                their ability to interpret instructions, process relevant data, and execute actions to achieve desired
                outcomes efficiently and accurately.
                The concept of use cases for action agents is inherently fluid and multifaceted and constantly
                evolving. Instead of fitting into predefined categories, their applications are better understood as a
                spectrum of possibilities driven by the specific problems they are designed to solve.
                Essentially, a use case for an action agent emerges from the intersection of its capabilities—
                perception, decision-making, and action—with a particular domains needs and constraints. Thismeans that the same underlying principles of autonomous action can manifest in vastly different ways
                depending on the context.
                For instance, an action agents use case could involve navigating a physical environment
                autonomously in one scenario and making real-time decisions in a financial trading system in another
                (think of it like a human hand - it can be used for everything from delicate surgery to heavy lifting).
                The core functionality remains consistent—taking actions based on perceived information—but the
                specific implementation and objective vary greatly.
                While the specifics vary, here are some broad areas where action agents are making a difference:
                Automation: Taking over repetitive tasks, from scheduling meetings to managing inventory.
                Personal Assistance: Helping users with tasks like providing information, recommendations,
                booking travel or managing their finances.
                Process Optimization: Analyzing data and making changes to improve efficiency.
                Creative Augmentation: Assisting with content creation and design.
                Order management: Track orders, process returns, etc
                That said, some use cases require simple actions in structured environments, while others involve
                complex decision-making in unpredictable situations.
            </p><br />
            <h2 className="h2"><strong>What Action Agents Do</strong></h2>
            <p>
                At their core, action agents are about enabling AI to do things, not just provide information. This
                means they can:
                Interact with the real world: This could be through software (like changing settings, sending emails) or
                physical actions (like moving a robot arm).
                Make decisions: Based on their understanding of the environment and their goals, they can choose
                the best course of action.
                Learn and adapt: They can improve their performance over time by analyzing the results of their
                actions.
            </p><br />

            <h2 className="h2"><strong>Example:</strong></h2>


            <ol className="ol">
                <li><strong>Contextual actions:</strong>
                    <ul className="ul">
                        <li>Right-clicking on file shows options like &quot;open&quot;, &quot;rename&quot;, or &quot;delete&quot;.</li>
                        <li>Selecting text reveals options like &quot;copy&quot;, &quot;cut&quot;, or &quot;format&quot;.</li>
                        <li>Viewing a product displays actions like &quot;add to cart&quot; or &quot;save for later&quot;.</li>
                    </ul>
                </li>
                <li><strong>Non-contextual actions:</strong>
                    <ul className="ul">
                        <li>Show the help menu.</li>
                        <li>Open settings.</li>


                    </ul>
                </li>

            </ol>
            <br />

            <h2 className="h2"><strong>Additional Reading Materials:</strong></h2>

            <ol className="ol">
   

                <li>
                <a href="https://drive.google.com/file/d/1qRY4-6-QoNCwBp3vhX60gZmC4xzZeWxY/view?usp=share_link" target="_blank">                                <button className='Watch-Button'>
                                    Resource1
                                </button>
                            </a>
                </li>

                <li>
                <a href="https://drive.google.com/file/d/1qRY4-6-QoNCwBp3vhX60gZmC4xzZeWxY/view?usp=share_link" target="_blank">                                <button className='Watch-Button'>
                                    Resource2
                                </button>
                            </a>

                </li>

            </ol>



            





        </>
    );
}
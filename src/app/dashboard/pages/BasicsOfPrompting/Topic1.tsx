
export default function FirstTopic() {
    return (
        <>
<h1 className="h1" style={{ textAlign: "left" }}><strong>Objective: Mastering Prompt Creation</strong></h1>

<h2 className="h2" style={{ textAlign: "left" }}>Training Module: Crafting Actionable Prompts for Computer Agents</h2>
<p className="p" style={{ textAlign: "left" }}>
    This module will guide you through the essentials of writing clear, effective, and executable
    prompts for computer use agents. Follow these guidelines and complete the exercises to refine your
    prompt-writing skills.
</p>

<hr/>

<h2 className="h2" style={{ textAlign: "left" }}><strong>Understanding Prompts for Computer Use Agents</strong></h2>

<h3 className="h3" style={{ textAlign: "left" }}>Definition and Purpose</h3>
<p className="p" style={{ textAlign: "left" }}>
    Prompts designed for computer use agents are the digital equivalent of clear, concise instructions
    given to a highly skilled personal assistant. These prompts serve as the bridge between human intent
    and AI execution, enabling seamless automation of tasks across various digital platforms.
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
            <td>&quot;...using HubSpot templates, targeting overdue invoices 30 days&quot;</td>
        </tr>
        <tr>
            <td>Constraints</td>
            <td>Specify any limitations or requirements</td>
            <td>&quot;Exclude clients with pending disputes; flag accounts 60 days overdue&quot;</td>
        </tr>
    </tbody>
</table>

<br/>

<h3 className="h3" style={{ textAlign: "left" }}>Examples by Task Type</h3>

<ol className="ol" style={{ textAlign: "left" }}>
    <li><strong>Scheduling:</strong>
        <ul className="ul">
            <li>Good: &quot;Schedule a team meeting for next Tuesday at 2 PM on Zoom.&quot;</li>
            <li>Bad: &quot;Set up a meeting on Zoom.&quot;</li>
        </ul>
    </li>
    <li><strong>Reminders:</strong>
        <ul className="ul">
            <li>&quot;Remind me to call Mom tomorrow at 6 PM.&quot;</li>
            <li>&quot;Remind me about the call later.&quot;</li>
        </ul>
    </li>
</ol>

<br/>

<h3 className="h3" style={{ textAlign: "left" }}>Best Practices</h3>

<ol className="ol" style={{ textAlign: "left" }}>
    <li><strong>Dos:</strong>
        <ul className="ul">
            <li>Use simple, natural, and conversational prompts.</li>
            <li>Use tool-specific jargon and syntax (e.g., @mention in Slack, #tags in Asana).</li>
            <li>Name files or folders exactly: &quot;Q4_Report.docx&quot; not just &quot;the report.&quot;</li>
        </ul>
    </li>
    <li><strong>Don&apos;ts:</strong>
        <ul className="ul">
            <li>Use vague terms: ❌ &quot;Handle files sometime today&quot; → ✅ &quot;Move *.csv files to Backup folder by 5 PM.&quot;</li>
            <li>Overload single prompts: Split &quot;Schedule meeting AND draft report&quot; into separate tasks.</li>
            <li>Assuming the agent knows context without specifying.</li>
        </ul>
    </li>
</ol>
<br />

<h2 className="h2"><strong>Use Cases</strong></h2>
            <p className="p">
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
            <p className="p">
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
                        <li>Right-clicking on file shows options like &quot;open &quot;,  &quot;rename &quot;, or  &quot;delete &quot;.</li>
                        <li>Selecting text reveals options like  &quot;copy &quot;,  &quot;cut &quot;, or  &quot;format &quot;.</li>
                        <li>Viewing a product displays actions like  &quot;add to cart &quot; or  &quot;save for later &quot;.</li>
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
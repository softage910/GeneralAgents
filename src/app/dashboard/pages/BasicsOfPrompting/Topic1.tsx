
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


        </>
    );
}
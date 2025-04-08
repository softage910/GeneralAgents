// import '../Day1Module.css';



export default function Glossary() {
    return (

        <>
            <ol className="ol" style={{ textAlign: "left" }}>
                <li>
                    <strong>Fluxe:</strong> The data collection tool used for recording your tasks and interactions
                </li>
                <br />
                <li><strong>Engine:</strong> Your recordings dashboard, where you annotate and review your
                    recordings.
                </li>
                <br />
                <li><strong>Ace:</strong> Our computer control agent that learns and improves through the data
                    you provide.
                </li>
                <br />
                <li><strong>Prompt:</strong> The instruction used to guide AI Models.
                </li>
                <br />
                <li><strong>Instructional Prompts:</strong> Prompts given to Fluxe to initiate a recording.
                    These prompts define the task to be completed.
                </li>
                <br />
                <li>
                    <strong>Annotation Prompts:</strong> Prompts to be added on Engine for longer recordings
                    that break the larger (more complex) task into smaller tasks. These are
                    critical for helping Ace understand and replicate specific actions.
                </li>
                <br />
                <li>
                    <strong>Tags:</strong> Identifiers used to categorize recordings by tool and operation,
                    aiding in the organization, retrieval, and analysis of data within Engine.
                </li>
                <br />
                <li><strong>Starting Condition:</strong> The screen context at the beginning of your recording,
                    interchangeable with &quot;Screen Context&quot;.</li>
                <br />
                <li>
                    <strong>Optimal Actions:</strong> Recommended methods for executing tasks that
                    maximize efficiency and effectiveness. These actions typically involve
                    shortcuts and streamlined procedures to minimize effort and maximize
                    output, teaching Ace the most efficient ways to operate.

                </li>
                <br />
                <li>
                <strong>Evals:</strong> Regular assessments of Ace&apos;s performance to identify strengths
and areas for improvement. These evaluations help refine training
strategies and improve the model&apos;s ability to handle complex tasks.
                </li>
                <br />
                <li>
                <strong>Data Population:</strong> Hypothetical or real-life situations used to emulate
common users. These scenarios help ensure that Ace is trained on diverse
and realistic tasks, improving its ability to function in varied contexts. Lack
of data population limits Ace&apos;s ability to adapt to different situations.
                </li>
                <br />
                <li>
                <strong>Function Mapper:</strong> A detailed catalog of all clickable elements and
interactive features within an application, used to ensure that every function
is considered and covered in data collection.
                </li>
            </ol>


        </>
    );
}
// import '../Day1Module.css';

export default function EleTopic() {
    return (
        <>
            <h2 className="h2"><strong>Closing Notes</strong></h2>
            <ol className='ol'>
                <li>Teaching ACE from your Expertise : Your mission is to teach ACE your areas of expertise, guiding it step by step
to master the tasks you perform. We are confident that by working together,
you can help ACE become the best computer control agent possible.</li>
                <li>
                   Practice Tasks : We'll share sample tasks for you to try before you begin official recordings.
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
                with "Screen Context".</li>

            </ol>
            
        </>
    );
}
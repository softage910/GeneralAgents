// import '../Day1Module.css';

export default function FifTopic() {
    return (
        <>
            <h2 className="h2"><strong>Creating Realistic Accounts</strong></h2>
            <br />
            <ol className='ol'>
                <li>
                  Populate with Realistic Data:
                </li>
                <p>
                Use "test" or "fake" data in apps like Canva, Asana, and others to make
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
                    Each tool you work with will be labeled with a tag in the format "tool-
                    (tool_name)", and the tasks you perform will be tagged as "op-
                    (tool_name)-(feature_name)". For example:
                    <br />
                    <br />
                    <ul className='ul'>
                        <li>
                            If you're recording a task using the Background Removal Tool in Adobe
                            Photoshop, the tags would be "tool-ps" and "op-ps-backgroundremoval".
                        </li>
                        <li>
                            For a task like Formatting in Google Sheets, the tags would be "toolsheets" and "op-sheets-formatting".
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
                    How To Flag : The flagging process is detailed in the “Introduction To Engine.pdf. We
recommend referring to this document for step-by-step instructions on
properly flagging your recordings.
                </li>

            </ol>
        </>
    );
}
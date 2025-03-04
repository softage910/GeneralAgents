// import '../Day1Module.css';

export default function ThirTopic() {
    return (
        <>

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
                            example, if an action can be completed with 3 clicks instead of 5, choose
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
                            <img src='../images/5.3.png'/>
                        </figure>


                        <br />
                        <li>
                            Right-Click Method Right-click the card and select Archive from the
                            dropdown menu.
                        </li>
                        <li>
                            Keyboard Shortcut Press the "C" key on your keyboard to archive the card
                            instantly.
                        </li>

                        <p>
                            Which method is more optimal?
                            Using the keyboard shortcut ("C") is the more efficient way to archive a card.
                            It reduces the number of clicks and speeds up your workflow, and ACE also
                            needs to learn that!
                        </p>

                        <br />
                        <figure className='img-5-3'>
                            <img src='../images/5.3.1.png'/>
                        </figure>

                        <br />


                    </ul>
                </li>

                <li><strong>Screen Size and View Modes</strong>
                    <ul className='ul'>
                        <li>
                        Resolutions Use the “default resolution setting while recording.
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




        </>
    );
}
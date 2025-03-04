// import '../Day1Module.css';

export default function FourTopic() {
    return (
        <>
            <h2 className="h2"><strong>Starting Conditions</strong></h2>
            <br />
            <ol className='ol'>
                <li>
                    Definition This is the "00:00" point of every video—where your system is
                    at the moment you begin recording.
                </li>
                <li>Vary the Setup:
                    <ul className='ul'>
                        <li>
                            Occasionally, have several applications open, whether they're
                            overlapping or in the background. This diversity helps create more
                            varied and realistic recordings.
                        </li>
                        <li>
                            Use different datasets or arrange your windows in various layouts. The
                            goal is to mimic real users environments. For instance, starting with a
                            blank projects page or with only one project visible doesnt represent
                            someone who frequently uses the tool. Refer to Section 4 for more
                            details.


                        </li>
                        <li>
                            Avoid Repeating the Same Environment. Try not to begin every
                            recording in the exact same setup. Mixing things up ensures that ACE is
                            exposed to a wide range of starting points.

                        </li>
                    </ul>
                </li>
                <li>
                If you're doing something that requires full-screen mode (e.g., a design app
that only works maximized), thats acceptable. Otherwise, vary it to show
ACE different possible starting points.
                </li>
            </ol>
            <br />
            <figure className='img-5-3'>
                            <img src='../images/5.3.2.png'/>
                        </figure>


        </>
    );
}
// import '../Day1Module.css';

export default function TenTopic() {
    return (
        <>
            <h2 className="h2"><strong>FAQs</strong></h2>

            <ol className='ol'>
                <li>
                    <strong>I can't find the tag relevant to my task. What do I do?</strong>
                    <ul className='ul'>
                        <li>If you can't find a tag that matches your task, you can continue
                            recording and reach out to us to request the addition of the specific tag.
                            Tagging is an ongoing process, and we encourage you to keep creating
                            data even if the appropriate tag isnt available yet. You can note down
                            the tags you want added and contact us.</li>
                    </ul>


                </li>
                <li>
                    <strong>I have some concerns about my sensitive personal data being recorded.
                        What should I do?</strong>
                    <ul className='ul'>
                        <li>Your recordings are private and only visible to you. You cannot access
                            other users recordings, and others cannot see yours. Your data is
                            processed securely on our cloud and integrated into our large data
                            repository. However, if there is confidential data you do not wish to
                            record anywhere, we advise you to create a dummy
                            account/profile/user where necessary and populate it to appear natural.</li>
                    </ul>

                </li>
                <li>
                    <strong> I am having trouble using Fluxe; it shows me an error saying “[Error ID]",
                    and I am not able to record.</strong>
                    <ul className='ul'>
                        <li>Check for Updates Ensure that Fluxe is updated to the latest version.</li>
                            <li>Active Uploads : We strongly encourage you to keep your Mac active
with Fluxe running to finish uploading your recordings. Sometimes
recordings upload slower owing to slow upload speeds on the data
creators side. Download an app like Caffeine, and keep your Mac on for
some time until the data completes uploading.</li>
                            <li>
                            If the issue persists after these steps, please contact our support team
                            with the specific error ID for further assistance. 
                            </li>
                    </ul>

                </li>
 
                <li>
                    <strong>I flagged a recording by mistake. Can I un-flag a recording?</strong>
                    <ul className='ul'>
                        <li>Unfortunately, a recording cannot be unflagged once it has been
flagged. Please review your recording carefully before flagging to avoid
accidental flags.</li>
                    </ul>

                </li>
                <li>
                <strong>I started working on [tool_name] and have made a few recordings. How
                do I ensure I have achieved even coverage on [tool_name]?</strong>
                    <ul className='ul'>
                        <li>To ensure comprehensive coverage of [tool_name], create a featurewise list of the tools functionalities. Track the features youve recorded
using a Google Sheet or similar tool. This method helps you monitor
which features have been covered and identify any gaps, ensuring that
ACE receives thorough training on all aspects of [tool_name].</li>
                    </ul>

                </li>



            </ol>
        </>
    );
}
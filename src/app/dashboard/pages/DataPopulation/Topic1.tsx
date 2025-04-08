import '../General.css';


import Image from 'next/image';
import Bulb from '../../../../../public/Images/bulb.png';
import Canva_BadDesign from '../../../../../public/Images/Canva_BadDesign.png';
import Canva_GoodDesign from '../../../../../public/Images/Canva_GoodDesign.png';
import Gsheet1 from '../../../../../public/Images/G-Sheets_PoorlyPopulated.png';
import Gsheet2 from '../../../../../public/Images/G-Sheets_WellPopulated.png';
import Trello1 from '../../../../../public/Images/Trello_PoorlyPopulatedBoard.png';
import Trello2 from '../../../../../public/Images/Trello_WellPopulatedBoard.png';





export default function FirTopic() {
    return (
        <>
        <p className="p">When creating data to train Ace, it is important to have a full-fledged, &apos;real&apos;
                workspace/account on the tool of your choice. If creating a new account to
                train Ace, then ensure that it is populated as you would be using it if it was a
                personal account
        </p>
        <hr/>
                <ol className='ol'>
                <li><strong>Objective</strong>
                    <ul className='ul'>
                        <li>
                            To ensure Ace is exposed to a wide range of user scenarios by
                            emulating realistic workspaces, accounts, and usage patterns. This
                            diversity is critical for Ace to learn how to navigate and manage the
                            varying complexities found in real-life setups.
                        </li>
                    </ul>
                </li>

                <br/>

                <li><strong>Rationale</strong>
                    <ul className='ul'>
                        <li>
                            <strong>Emulating Complexity:</strong>
                            <p className='p'>
                            Creating dummy accounts with rich, diverse data allows Ace to
                            understand and process the intricate configurations that different
                            individuals and organizations may have. </p>
                            <br/>
                            <p className='p'>If you are creating a new account specifically for data creation, then
                            take some time and customize it to be more representative of a
                            normal/common user. Do not leave fields blank or skip over subtle
                            things that would tailor the tool to your ways of working. These can
                            include user settings and data to populate the tool.</p>
                        </li>

                        <br/>

                        <li>
                            <strong>Avoiding Data Homogeneity:</strong>
                            <p className='p'>Relying on minimal or repetitive data entries does not adequately
                            represent real user environments, potentially limiting Ace&apos;s ability to
                            handle varied contexts.</p>
                            <br/>
                            <p className='p'>Imagine yourself as a coach, who will guide Ace to its goal through
                            complex scenarios. If Ace faces no complications to execute actions,then it will turn out to be a weak agent! The training conditions are what
                            separate a robust-goal-driven agent who will tackle any situation that it
                            will be subject to from an agent who can complete tasks only under
                            IDEAL (simple) conditions. We want Ace to be a robust-goal-driven
                            agent who is equipped to tackle any situation.</p>
                        </li>
                        
                        <br />
                        <li>
                            <strong>Emulating different users:</strong>
                            <p className='p'>Leveraging online tutorials, templates, and role-based examples (such
                            as project managers, dieticians, or UX experts) ensures that Ace is
                            trained on comprehensive and realistic datasets.</p>
                        <br />
                        <p className='p'>Think of all the different types of users who will use the tool; think of
                            how differently they will use it. Try to emulate these different conditions
                            in your recordings. </p>
                        </li>
                    </ul>
                 </li>

                 <br/>

                <li><strong>A checklist to follow</strong>
                    <ul className='ul'>
                        <li><strong>Account Setup:</strong>
                            <ul className='ul'>
                                <li>Establish dummy accounts across various platforms (social media,
                                    streaming, project management, etc.) to mimic a broad spectrum of
                                    real user accounts.</li>
                                <li>Customize these accounts using diverse fields to reflect different
                                    roles and contexts.</li>
                            </ul>
                        </li>
                        <br/>
                        <li><strong>workspace Customization:</strong>
                            <ul className='ul'>
                                <li>Tailor workspaces or boards to represent multiple user types and
                                    scenarios.</li>
                                <li>Utilize online resources and existing templates to guide the
                                    customization process, ensuring a realistic representation of various
                                    user environments.</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <br/>


                <li><strong>Best Practices</strong>
                    <ul className='ul'>
                        <li><strong>Regular Updates:</strong>
                            <p className='p'>Periodically refresh and update the dummy accounts and data to
                                expose Ace to evolving user states and avoid learning from static,
                                repetitive data. </p>
                            <ul className='ul'>
                                <li>A basic rule to follow here is to refresh/re-align the data everyday
                                    before you start recording.</li>
                            </ul>
                        </li>
                        <br/>
                        <li><strong>Attention to Detail:</strong>
                            <p className='p'>Experts should avoid filling in generic keywords. Instead, invest time in
                                curating detailed, role-specific, and contextually rich data. </p>
                            <ul className='ul'>
                                <li>In text boxes, or address bars, fill in unique values that you can
                                    execute in your recordings. </li>
                            </ul>
                        </li>
                        <br/>
                        <li><strong>Use the internet to help with data population:</strong>
                            <ul className='ul'>
                                <li>Use LLMs like ChatGpt to generate huge excel datasets to use in
                                    your recordings, use StackOverflow to pick up codes for
                                    debugging, use Reddit to understand the different types of users&apos;
                                    facing complications while performing tasks. Do some research to
                                    ensure that the data you are adding is relevant and representative or
                                    real-world usage.</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <br/>

                <li><strong>Illustrative Examples</strong>
                    <ul className='ul'>
                        <li><strong>Google Sheets</strong>
                            <p className='p'>Prompt: Remove the rows where the Sales date is before 2024</p>
                            <br />
                            <ul className='ul'>
                                <li>Example of a well-populated Google Sheet:</li>
                                <div className='figure img-511'>
                <Image className='Image-Tag' src={Gsheet2} width={0} height={0} alt="Logo" />
            </div>
                                <div className='Textarea-Hover'>
                                    <div className='Textarea-Wrapper'>
                                    <div style={{marginTop: "5px" , marginRight: "10px"}}>

                                        <Image width={50} height={0} src={Bulb} alt=''></Image>
                                        </div>                                        <p>
                                            In this Google Sheet, there are different columns with Dates,
                                            and the sheet has enough data to make it a complex data set!</p>
                                    </div>
                                </div>
                                <br />
                                <li>Example of a poorly populated Google Sheet:</li>
                                <div className='figure img-511'>
                <Image className='Image-Tag' src={Gsheet1} width={0} height={0} alt="Logo" />
            </div>
                                <div className='Textarea-Hover'>
                                    <div className='Textarea-Wrapper'>
                                    <div style={{marginTop: "5px" , marginRight: "10px"}}>

                                        <Image width={50} height={0} src={Bulb} alt=''></Image>
                                        </div>
                                        <p>
                                            In this Google Sheet, there is only one column with dates, and
                                            the compilation of data is relatively poor, this will be an &quot;easy&quot;
                                            task for Ace!</p>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <br/>
                        <li><strong>Trello</strong>
                            <p className='p'>Prompt: move the card expense reports from Q2 key initiatives to the
                                short-term priorities list, after manage time chaos card</p>
                                <br />
                            <ul className='ul'>
                                <li>Example of a well-populated board:</li>
                                <div className='figure img-511'>
                <Image className='Image-Tag' src={Trello2} width={0} height={0} alt="Logo" />
            </div>
                                <div className='Textarea-Hover'>
                                    <div className='Textarea-Wrapper'>
                                    <div style={{marginTop: "5px" , marginRight: "10px"}}>
                                        <Image width={90} height={0} src={Bulb} alt=''></Image>
                                        </div>
                                        <p>
                                            In this Trello Board, there are multiple lists with fully fleshed
                                            out content, the implication is that Ace will have to search and
                                            find the correct card, and even after finding the correct card, it
                                            will need to figure out where the card needs to be moved! This
                                            is a well populated Trello workspace.</p>
                                    </div>
                                </div>
                                <br />
                                <li>Example of a poorly populated board:</li>
                                <div className='figure img-511'>
                <Image className='Image-Tag' src={Trello1} width={0} height={0} alt="Logo" />
            </div>
                                <div className='Textarea-Hover'>
                                    <div className='Textarea-Wrapper'>
                                    <div style={{marginTop: "5px" , marginRight: "10px"}}>

                                        <Image width={50} height={0} src={Bulb} alt=''></Image>
                                        </div>                                        <p>
                                            In this board, there is just one card under Q2 Key Initiatives list,
                                            which won&apos;t be a complex task at all, and the final intended
                                            location for the card is also pretty straightforward, Hence this is a
                                            poorly prepared board.</p>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <br/>
                        <li><strong>Canva</strong>
                            <p className='p'>Prompt: Update the font style of Navigate the path to increased sales to
                                Anaktoria</p>
                                <br />
                            <ul className='ul'>
                                <li>Example of a well-populated design:</li>
                                <div className='figure img-511'>
                <Image className='Image-Tag' src={Canva_GoodDesign} width={0} height={0} alt="Logo" />
            </div>
                                <div className='Textarea-Hover'>
                                    <div className='Textarea-Wrapper'>
                                    <div style={{marginTop: "5px" , marginRight: "10px"}}>

                                        <Image width={50} height={0} src={Bulb} alt=''></Image>
                                        </div>                                        <p>
                                            In this design, there are 4 sentences of text, and the text to be
                                            altered is in the middle. Which in itself is relatively complex.</p>
                                    </div>
                                </div>
                                <br />
                                <li>Example of a poorly populated design:</li>
                                <div className='figure img-511'>
                <Image className='Image-Tag' src={Canva_BadDesign} width={0} height={0} alt="Logo" />
            </div>
                                <div className='Textarea-Hover'>
                                    <div className='Textarea-Wrapper'>
                                    <div style={{marginTop: "5px" , marginRight: "10px"}}>

                                        <Image width={50} height={0} src={Bulb} alt=''></Image>
                                        </div>                                        <p>
                                            In this design, there is just one line of text, and that line of text
                                            is supposed to be altered. This is a poorly prepared design
                                            with no efforts put in for design population.</p>
                                    </div>
                                </div>
                            </ul>
                        </li>
                    </ul>
                </li>

                <br/>

                <li><strong> Implications for Ace Training</strong>
                    <ul className='ul'>
                        <li>
                            <strong>Enhanced Adaptability:</strong>
                            <p className='p'>Exposure to a wide array of data setups and user environments enables
                                Ace to better adapt to real-world challenges.</p>
                        </li>
                        <br/>
                        <li>
                            <strong>Improved Navigation:</strong>
                            <p className='p'>The diversity in data fields and user scenarios trains Ace to efficiently
                                manage and operate within complex digital ecosystems.</p>
                        </li>
                        <br/>
                        <li>
                            <strong>Robust Learning:</strong>
                            <p className='p'>A well-rounded dataset that accurately reflects the diversity of user
                                interactions helps prevent potential oversights in Ace&apos;s learning
                                process, leading to more reliable and comprehensive performance.</p>
                        </li>
                    </ul>
                </li>
            </ol>

            <br/>

            <p className='p'>By focusing on real, diverse data, you&apos;re not just filling in boxes—you&apos;re setting
                up Ace to tackle real-world challenges head-on. Every thoughtful detail you
                add helps build an agent that&apos;s ready to adapt and thrive in any situation. Your
                work makes all the difference in creating a robust system that can handle the
                complexities of everyday digital interactions.</p>


        </>
    );
}



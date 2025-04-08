// import '../Day1Module.css';

import table1 from '../../../../../public/Images/Table1.jpg';
import table2 from '../../../../../public/Images/Table2.jpg';

import Image from 'next/image';


export default function FirstTopic() {
    return (
        <>

            <p className="p">These guidelines incorporate the concept of a function mapper, ensuring systematic coverage of a tool&apos;s features and functions.</p>

            <br />

            <ol className='ol'>
                <li><strong>Understanding the Function Mapper</strong>
                <p className="p">A function mapper is a systematic process that involves extracting all clickable buttons and interactive elements from a website, tool, app, or service. This methodical approach ensures every function or feature is identified and catalogued, providing a comprehensive overview of the interface&apos;s interactive components. By mapping these elements:</p>

                    <ul className='ul'>
                        <li>
                        Experts can systematically create data prompts tied to each clickable feature.
                        </li>
                    </ul>
                    <p className="p">Key Benefit: A function mapper helps ensure no function is overlooked, leading to more robust training data and improved model performance.</p>
                </li>

                <hr/>
                <p className="p">Take a look at these two sample function mappers to understand further.</p>
                <p className="p">This is a function mapper for Asana</p>

                <figure className='img-5-3'>
                        <Image className='Image-Tag' src={table1} width={0} height={0} alt="Logo" />
                        </figure>

                <p className="p">Here is a function mapper for GitHub</p>

                        <figure className='img-5-3'>
                        <Image className='Image-Tag' src={table2} width={0} height={0} alt="Logo" />
                        </figure>

                <li><strong>Your Role as an Expert</strong>
                    <ul className='ul'>
                        <li>
                        Teach Ace Every Possible Action: As an expert, you have in-depth knowledge of the tool and its functionality. It is your responsibility to curate prompts and recordings covering all possible interactions.
                        </li>
                        <li>
                        Utilize a Function/Feature Mapper: To guarantee thorough coverage, request a detailed function mapper. This serves as a reference for which features have been covered and which still need data.
                        </li>
                


                    </ul>


                </li>

                <hr/>
                
                <li><strong>Steps to Follow with a Function Mapper</strong>
                    <ol className='ol'>
                        <li>
                        Create Prompts Based on the Function Mapper
                        <ul className='ul'>
                            <li>Use the map of all clickable elements and features to design training prompts.</li>
                            <li>Ensure the prompts correspond to specific functions.</li>
                        </ul>
                        </li>

                        <li>
                        Tabulate the Amount of Data Created
                            <ul className='ul'>
                                <li>Keep track of how many data points you generate for each feature.</li>
                                <li>Record this in the allocated column of your dataset for easy reference.</li>
                            </ul>
                        </li>
                        <li>
                        Handle Edge Cases
                            <ul className='ul'>
                                <li>If your task or tool has multiple features/functions explored simultaneously, document them in a dedicated section or table.</li>
                                <li>This approach ensures you capture complex interactions or overlapping functionalities without confusion.</li>
                            </ul>
                        </li>
                        <li>
                        Leverage Continuous Model Evaluations
                       
                            <ul className='ul'>
                                <li>Model evaluations typically occur weekly (or on a regular schedule).</li>
                                <li>Use the insights from these evaluations to understand where you need to focus additional data creation.</li>
                                <li>Update your function mapper and data coverage plan accordingly.</li>

                            </ul>
                        </li>

                    </ol>


                </li>
                <hr />
                <li><strong>Why This Matters</strong>
                    <ol className='ol'>
                    <li>
                    Comprehensive Coverage
                       
                            <ul className='ul'>
                                <li>By systematically logging every feature, you reduce the risk of missing crucial actions or edge cases that could limit your model&apos;s abilities.</li>


                            </ul>
                        </li>
                        <li>
                        Efficient Data Creation
                       
                            <ul className='ul'>
                                <li>The function mapper acts like a checklist, speeding up prompt generation and preventing duplication.</li>


                            </ul>
                        </li>
                        <li>
                        Targeted Improvements
                       
                            <ul className='ul'>
                                <li>Continuous evaluations pinpoint weak areas in the model, allowing you to revisit specific features in the mapper for deeper exploration.</li>

                            </ul>
                        </li>
                        
            
                


                    </ol>


                </li>
            </ol>

            <hr/>
            <h3 className='h3'>In Summary : </h3>

            <p className="p">Your primary objective is to teach the computer control agent all possible actions on the tool you specialize in. The function mapper is your strategic asset in this process, helping you systematically track, design, and update prompts for maximum coverage. Keep an eye on model evaluations to refine your dataset, ensuring the continuous improvement of the computer control agent&apos;s performance.</p>

        </>
    );
}

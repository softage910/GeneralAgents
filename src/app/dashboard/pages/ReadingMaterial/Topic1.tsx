"use client";

export default function FirstTopic() {
    return (
        <>

            <h2 className="h2"><strong>Suggested Reading Materials</strong></h2>

            <h3 className='h3'>Research Papers and Current Market Position</h3>
            <p>This section contains research papers on which some of our core concepts are defined. Reading them is completely optional, and skipping them will not affect your data creation journey with us in anyway.</p>


            <h4 className='h4'>WEB ARENA: A REALISTIC WEB ENVIRONMENT FOR BUILDING AUTONOMOUS AGENTS</h4>
            <a href="https://arxiv.org/pdf/2307.13854" target="_blank">                                <button className='Watch-Button'>
                                    Resource
                                </button>
                            </a>
            <p>This paper introduces WEB ARENA, a simulation environment that mirrors realistic web interactions for the development and evaluation of autonomous agents. It provides a robust platform where agents can be trained, tested, and benchmarked against dynamic, real-world-like web challenges.</p>


            <h4 className='h4'>WorkArena: How Capable Are Web Agents at Solving Common Knowledge Work Tasks?</h4>
            <a href="https://arxiv.org/pdf/2403.07718" target="_blank">                                <button className='Watch-Button'>
                                    Resource
                                </button>
                            </a>
            <p>This paper introduces WorkArena, a testing platform designed to evaluate web agents on a broad range of common knowledge work tasks, from information retrieval to complex problem-solving. Through comprehensive experiments, the study sheds light on the strengths and limitations of current web agents, outlining avenues for future improvements in automating routine cognitive tasks.</p>


            <h4 className='h4'>The Dawn of GUI Agent: A Preliminary Case Study with Claude 3.5 Computer Use</h4>
            <a href="https://arxiv.org/pdf/2411.10323" target="_blank">                                <button className='Watch-Button'>
                                    Resource
                                </button>
                            </a>
            <p>This paper introduces a GUI agent powered by Claude 3.5, designed to simplify computer interactions and streamline complex tasks. Preliminary case studies reveal promising performance improvements and point to future enhancements for AI-driven user interfaces.</p>

            <h3 className='h3'>Additional reading:</h3>
            <h4 className='h4'>Igniting Language Intelligence: The Hitchhiker&apos;s Guide From Chain-of-Thought Reasoning to Language Agents</h4>
            <a href="https://arxiv.org/pdf/2311.11797" target="_blank">                                <button className='Watch-Button'>
                                    Resource
                                </button>
                            </a>
            <p>This paper explores how integrating chain-of-thought reasoning can elevate the problem-solving capabilities of language models, effectively transforming them into more autonomous language agents. It serves as a comprehensive guide detailing the progression from basic reasoning techniques to advanced task-solving agents in modern AI systems.</p>


            <h4 className='h4'>Gemini: A Family of Highly Capable Multimodal Models</h4>
            <a href="https://arxiv.org/pdf/2312.11805" target="_blank">                                <button className='Watch-Button'>
                                    Resource
                                </button>
                            </a>
            <p>This paper introduces Gemini, a suite of advanced multimodal models that seamlessly integrate text and visual information to tackle a diverse range of tasks. Experimental evaluations showcase Gemini&apos;s robust performance and versatility, marking a significant step forward in the development of capable and flexible AI systems.</p>
            
            <hr/>

            <h3 className='h3'>Articles and videos about computer use agents:</h3>
            <h4 className='h4'>Claude Computer Use</h4>
            <a href="https://www.anthropic.com/news/3-5-models-and-computer-use" target="_blank">                                <button className='Watch-Button'>
                                    Resource1
                                </button>
                            </a>
            <p>Claude language model can be integrated into computer systems to streamline user interactions and automate tasks. By leveraging natural
            language processing for real-world computing challenges, it demonstrates enhanced efficiency and intuitive system control.</p>

          

<div className='VideoFrame'>
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/watch?v=ODaHJzOyVCQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
    </iframe>
</div>


            <h4 className='h4'>OpenAI Operator</h4>
            <a href="https://openai.com/index/introducing-operator/" target="_blank">                                <button className='Watch-Button'>
                                    Resource
                                </button>
                            </a>
            <p>OpenAI unveils a new tool that leverages advanced language models to directly control and interact with computer systems using natural language. By translating high-level instructions into precise actions, Operator aims to simplify complex workflows and usher in a new era of intuitive, AI-powered human-computer interaction.</p>

     

<div className='VideoFrame'>
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/watch?v=gYqs-wUKZsM"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
    </iframe>
</div>



        </>
    );
}
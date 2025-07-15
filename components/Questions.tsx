import React from 'react';

export default function Questions() {
    return (
        <>
            <section id='questions' className='bg-P2Gray/30 py-20'>
                <div className='maxW'>
                    <h2 className='font-medium tracking-widest text-center uppercase'>Dúvidas</h2>
                    <h1 className='font-semibold text-4xl mt-4 text-center'>Dúvidas Frequentes</h1>

                    <article className='mt-10 max-w-[1000px] mx-auto'>
                         {/* ASKS */}
                            <details className="">
                                <summary className="text-P2BlueD border border-P2BlueD rounded-t-xl cursor-pointer p-4 font-semibold">A blefaroplastia sem cortes substitui a cirurgia?</summary>
                                <p className="text-P2BlueD font-Poppins border-x border-b border-P2BlueD cardLinear p-4">
                                    Em muitos casos, sim. Para pacientes com flacidez leve a moderada, o laser de CO₂ híbrido oferece uma alternativa eficaz, com melhora no excesso de pele, linhas e textura da pálpebra, sem cortes ou pontos.
                                </p>
                            </details>

                            <details className="mt-4">
                                <summary className="text-P2BlueD border border-P2BlueD rounded-t-xl cursor-pointer p-4 font-semibold">O procedimento dói?</summary>
                                <p className="text-P2BlueD font-Poppins border-x border-b border-P2BlueD cardLinear p-4">A sessão é bem tolerada e realizada com anestesia tópica. A sensação é semelhante a um leve aquecimento da pele, seguido de vermelhidão e formação de crostinhas finas por alguns dias.</p>
                            </details>

                            <details className="mt-4">
                                <summary className="text-P2BlueD border border-P2BlueD rounded-t-xl cursor-pointer p-4 font-semibold">Quantas sessões são necessárias?</summary>
                                <p className="text-P2BlueD font-Poppins border-x border-b border-P2BlueD cardLinear p-4">Em geral, 1 a 2 sessões são suficientes, dependendo do grau de flacidez e da resposta individual da pele.</p>
                            </details>

                            <details className="mt-4">
                                <summary className="text-P2BlueD border border-P2BlueD rounded-t-xl cursor-pointer p-4 font-semibold">Quanto tempo dura o resultado?</summary>
                                <p className="text-P2BlueD font-Poppins border-x border-b border-P2BlueD cardLinear p-4">Os resultados podem durar anos, especialmente quando associados a cuidados com a pele e manutenção da saúde geral. O colágeno estimulado continua sendo produzido por meses após o procedimento.</p>
                            </details>

                            <details className="mt-4">
                                <summary className="text-P2BlueD border border-P2BlueD rounded-t-xl cursor-pointer p-4 font-semibold">É necessário afastamento das atividades?</summary>
                                <p className="text-P2BlueD font-Poppins border-x border-b border-P2BlueD cardLinear p-4">A recuperação é rápida. Pode haver vermelhidão e crostinhas finas que duram de 5 a 7 dias, mas o retorno às atividades costuma ser rápido, com alguns cuidados.</p>
                            </details>
                    </article>
                </div>
            </section>
        </>
    );
}
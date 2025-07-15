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
                                <summary className="text-P2BlueD border border-P2BlueD rounded-t-xl cursor-pointer p-4 font-semibold">Qual o prazo de entrega?</summary>
                                <p className="text-P2BlueD font-Poppins border-x border-b border-P2BlueD cardLinear p-4">
                                    O tempo estimado para a conclusão do seu site pode variar de acordo com nossa programação e as exigências do projeto. No orçamento, será indicada uma data provável de entrega. No entanto, esse prazo pode se estender ou ser reduzido conforme o volume de informações e a complexidade das funcionalidades solicitadas.

                                    <span className="block mt-4">
                                        Para projetos menores, como landing pages, o prazo costuma ser de até 5 dias. Sites institucionais geralmente levam até 10 dias, enquanto lojas virtuais podem levar até 60 dias, dependendo do tamanho e da complexidade do projeto.
                                    </span>
                                </p>
                            </details>

                            <details className="mt-4">
                                <summary className="text-P2BlueD border border-P2BlueD rounded-t-xl cursor-pointer p-4 font-semibold">Quais as formas de pagamento?</summary>
                                <p className="text-P2BlueD font-Poppins border-x border-b border-P2BlueD cardLinear p-4">Aceitamos PIX, boleto e cartão de crédito.</p>
                            </details>

                            <details className="mt-4">
                                <summary className="text-P2BlueD border border-P2BlueD rounded-t-xl cursor-pointer p-4 font-semibold">Quero atrair mais clientes, um site vai fazer isso?</summary>
                                <p className="text-P2BlueD font-Poppins border-x border-b border-P2BlueD cardLinear p-4">Sim! O site é uma peça fundamental para o sucesso de sua empresa no digital, dessa forma um site profissional com designer atraente pode te ajudar a conquistar mais clientes.</p>
                            </details>

                            <details className="mt-4">
                                <summary className="text-P2BlueD border border-P2BlueD rounded-t-xl cursor-pointer p-4 font-semibold">Meu site aparecerá no Google?</summary>
                                <p className="text-P2BlueD font-Poppins border-x border-b border-P2BlueD cardLinear p-4">Sim, está incluso em nosso trabalho de desenvolvimento de sites cadastrar seu site no Google e otimizar ele de acordo com as boas práticas de SEO.</p>
                            </details>

                            <details className="mt-4">
                                <summary className="text-P2BlueD border border-P2BlueD rounded-t-xl cursor-pointer p-4 font-semibold">Existem custos mensais obrigatórios após a conclusão do meu site?</summary>
                                <p className="text-P2BlueD font-Poppins border-x border-b border-P2BlueD cardLinear p-4">Após a conclusão do seu site, os custos mensais dependem do plano escolhido:
                                <span className="block mt-4">Plano de Assinatura: Você paga apenas a mensalidade combinada, sem custos adicionais.</span>
                                <span className="block mt-4">Plano Sob Medida: Pode haver custos trimestrais com a manutenção, que inclui hospedagem e domínio. Se optar por não pagar a manutenção, você será responsável por esses custos, geralmente pagos anualmente.</span>
                                </p>
                            </details>
                    </article>
                </div>
            </section>
        </>
    );
}
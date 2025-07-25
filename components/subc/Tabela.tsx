import React from 'react';

export default function Tabela() {
    // Dados do tratamento - substitua pelos dados específicos de cada página
    const tratamentoInfo = {
        nome: "Nome do Tratamento",
        duracao: "60 min",
        sessoes: "4-6 sessões",
        intervalo: "30 dias",
        resultados: "4-6 semanas",
        indicacao: "Descrição das indicações",
        preparo: "Instruções de preparo",
        cuidados: "Cuidados pós-procedimento"
    };

    return (
        <>
         
                <div className="maxW max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="bg-P2BlueD px-6 py-4">
                            <h2 className="text-xl uppercase text-white text-center lg:text-left">
                                Informações do Tratamento
                            </h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 bg-gray-100">
                                            <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                                                Tratamento
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium text-gray-900">
                                                {tratamentoInfo.nome}
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 bg-gray-100">
                                            <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                                                Duração
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-700">
                                                {tratamentoInfo.duracao}
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 bg-gray-100">
                                            <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                                                Número de Sessões
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-700">
                                                {tratamentoInfo.sessoes}
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 bg-gray-100">
                                            <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                                                Intervalo entre Sessões
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-700">
                                                {tratamentoInfo.intervalo}
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 bg-gray-100">
                                            <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                                                Tempo para Resultados
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-700">
                                                {tratamentoInfo.resultados}
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 bg-gray-100">
                                            <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                                                Cuidados Pós-Procedimento
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-700">
                                                {tratamentoInfo.cuidados}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gray-50 px-6 py-4">
                            <p className="text-xs text-gray-500 text-center mb-3">
                                * Os resultados podem variar de acordo com cada paciente
                            </p>
                            <div className="text-center">
                                <button className=" text-white font-semibold py-2 px-6 rounded-lg bg-P2BlueD uppercase">
                                    Agendar Consulta
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
         
        </>
    );
}
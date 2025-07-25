import React from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

export default function Tabela() {
    const t = useTranslations();
    const router = useRouter();
    
    // Pega o slug da URL atual
    const slug = router.query.slug as string;
    
    // Se não tiver slug, usa dados padrão
    const defaultData = {
        nome: t('treatmentInfo.labels.treatment'),
        duracao: "60 min",
        sessoes: "1 sessão",
        intervalo: "30 dias",
        resultados: "4-6 semanas"
    };

    // Busca os dados do tratamento específico ou usa dados padrão
    let tratamentoInfo = defaultData;
    
    if (slug) {
        try {
            const treatmentData = t.raw(`treatmentInfo.data.${slug}`);
            if (treatmentData) {
                tratamentoInfo = treatmentData;
            }
        } catch (error) {
            console.warn(`Treatment data not found for: ${slug}`);
        }
    }

    return (
        <>
            <div className="mt-10 bg-P2Brown text-white px-4 py-20 lg:px-10 lg:w-1/2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-P2BlueD px-6 py-4">
                        <h2 className="text-xl uppercase text-white text-center lg:text-left">
                            {t('treatmentInfo.title')}
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50 transition-colors duration-200">
                                    <td className="px-6 py-4 bg-gray-100">
                                        <div className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                                            {t('treatmentInfo.labels.treatment')}
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
                                            {t('treatmentInfo.labels.duration')}
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
                                            {t('treatmentInfo.labels.sessions')}
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
                                            {t('treatmentInfo.labels.interval')}
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
                                            {t('treatmentInfo.labels.results')}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-700">
                                            {tratamentoInfo.resultados}
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div className="bg-gray-50 px-6 py-4">
                        <p className="text-xs text-gray-500 text-center mb-3">
                            {t('treatmentInfo.disclaimer')}
                        </p>
                        <div className="text-center">
                            <button className="text-white font-semibold py-2 px-6 rounded-lg bg-P2BlueD uppercase">
                                {t('treatmentInfo.scheduleButton')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
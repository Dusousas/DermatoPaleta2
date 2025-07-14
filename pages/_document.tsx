import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <title>Leonardo Martinelli | Dermatologia</title>
        <meta name="description" content="Dermatologia com tecnologia de ponta, tratamentos naturais e personalizados com atendimento em São Paulo e Torrinha. Cuide da sua pele com excelência médica." />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="dermatologista São Paulo, dermatologista Torrinha, tratamentos dermatológicos, estética facial, rejuvenescimento, botox, peeling, CO2 fracionado, cuidados com a pele, clínica dermatológica, dermatologia SP, dermatologia interior SP" />
        <meta name="author" content="Agência You on" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Leonardo Martinelli | Dermatologia" />
        <meta property="og:description" content="Tratamentos dermatológicos modernos com resultados naturais em São Paulo e Torrinha. Agende sua consulta com Dr. Leonardo Martinelli." />
        <meta property="og:url" content="https://www.seusite.com.br" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:locale" content="pt_BR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Leonardo Martinelli | Dermatologia" />
        <meta name="twitter:description" content="Tratamentos dermatológicos modernos com resultados naturais em São Paulo e Torrinha. Agende sua consulta com Dr. Leonardo Martinelli." />
        <meta name="twitter:image" content="/logo.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>
      
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

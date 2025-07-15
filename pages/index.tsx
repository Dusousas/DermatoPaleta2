import About from "@/components/About";
import Contact from "@/components/Contact";
import Doctor from "@/components/Doctor";
import LineCta from "@/components/LineCta";
import Main from "@/components/Main";
import Portfolio from "@/components/Portfolio";
import Questions from "@/components/Questions";
import Services from "@/components/Services";
import { GetStaticPropsContext } from "next";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Portfolio />
      <LineCta />
      <Services />
      <Doctor />
      <Questions />
      <Contact />
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`/messages/${locale}.json`)).default,
      locale,
    },
  };
}

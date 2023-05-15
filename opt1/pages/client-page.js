import Link from "next/link";

import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const ClientPage = () => {
  const { t, ready } = useTranslation(["client-page", "footer"]);
  if (!ready) return "loading translations...";
  // but because of this ready return, you may see a warning like this: "Expected server HTML to contain a matching text node for..."

  return (
    <>
      <main>
        <Header heading={t("h1")} title={t("title")} />
        <Link href='/'>
          <button type='button'>{t("back-to-home")}</button>
        </Link>
      </main>
      <Footer />
    </>
  );
};

// ADVICE: I suggest you don't use this client-side only approach, but use the lazy-reload approach instead!
//
// Without the getStaticProps or getServerSideProps function,
// the translsations are loaded via configured i18next backend.
//
// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['client-page', 'footer']),
//   },
// })

export default ClientPage;

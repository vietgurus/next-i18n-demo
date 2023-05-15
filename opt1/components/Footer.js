import pkg from "next-i18next/package.json";
import { useTranslation } from "next-i18next";

export const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <>
    <hr/>
    <footer>
      <p>{t("description")}</p>
      <p>next-i18next v{pkg.version}</p>
    </footer>
    </>
  );
};

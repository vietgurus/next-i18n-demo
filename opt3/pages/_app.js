import { I18NContext } from "@/hooks/Contexts";
import "@/styles/globals.css";
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { db } from '../lib/firebase';

export default function App({ Component, pageProps }) {
  const [i18n, setI18N] = useState(null);  
  

  const i18nInitial = {
    data: i18n,
  };

  useEffect(() => {
    const i18nRef = ref(db, "i18n/");
    onValue(i18nRef, (snapShot) => {
      const i18nData = snapShot.val();
      console.log('onValue');
      console.log(i18nData);
      setI18N(i18nData);
    });
  }, []);

  return (
    <I18NContext.Provider value={i18nInitial}>
      <Component {...pageProps} />
    </I18NContext.Provider>
  );
}

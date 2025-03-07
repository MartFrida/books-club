/* eslint-disable no-unused-vars */
import React from 'react'
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-slate-950 text-white py-6 w-full">
      <div className="container mx-auto text-center w-full">
        <p>&copy; {t("footer")}</p>
      </div>
    </footer>
  )
}

export default Footer
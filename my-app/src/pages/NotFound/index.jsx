import React from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import style from "./style.module.scss";

export default function Index() {
  return (
    <>
      <header className={style.header}>
        <Header />
      </header>
      <div>
        <h1 className={style.title}> </h1>
      </div>
      <main className={style.main}>
      </main>
      <footer className={style.footer}>
        <Footer/>
      </footer>
    </>
  );
}

import Footer from "@/components/footer";
import Header from "@/components/header";
import TeacherInfo from "@/components/teacher-info";
import React from "react";

import "@/app/globals.css"
import Head from "@/components/matrix-record/head";

export default function MatrixRecord() {
  return (
    <>
      <Header />
      <Head />
      <TeacherInfo />
      <Footer />
    </>
  );
}

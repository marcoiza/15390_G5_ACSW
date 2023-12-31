import Header from "@/components/header";
import Head from "@/components/matrix-record/head";
import TeacherInfo from "@/components/matrix-record/teacher-info";
import Footer from "@/components/footer";
import "@/app/globals.css"
import WorkSchedule from "@/components/matrix-record/work-schedule";
import ClassSchedule from "@/components/matrix-record/class-schedule";
import ActivitiesList from "@/components/matrix-record/activities-list";
import Summary from "@/components/matrix-record/summary";

export default function MatrixRecord() {
  return (
    <>
      <Header />
      <Head />
      <TeacherInfo />
      <WorkSchedule />
      <ClassSchedule />
      <ActivitiesList />
      <Summary />
      <Footer />
    </>
  );
}

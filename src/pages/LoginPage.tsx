import { ReactNode } from "react";
import Header from "../components/Header";
import PageLayout from "../components/PageLayout";
import Login from "../components/Login";

export default function LoginPage() {
  return (
    <PageLayout>
      <Header />
      <Login />
    </PageLayout>
  )
}




import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import PageLayout from "../components/PageLayout";
import Login from "../components/Login";

export default function MainPage() {
  return (
    <PageLayout>
      <Header />
      <Login />
    </PageLayout>
  )
}

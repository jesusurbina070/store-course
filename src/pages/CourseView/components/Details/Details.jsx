import React from "react";
import { useCourseView } from "../../context/CourseViewContext";
import { Header } from "../../../../components";
import { Title, User } from "../../../../components/Header/components";

export default function Details() {
  const { course } = useCourseView();

  return (
    <>
      <Header>
        <Title title={course?.name} />
        <User />
      </Header>
      <div>
        <div>
          <span></span>
          <p></p>
        </div>
      </div>
    </>
  );
}

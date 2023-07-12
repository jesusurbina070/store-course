import React from "react";
import { useCourseView } from "../../context/CourseViewContext";
import { Header } from "../../../../components";
import { Title, User } from "../../../../components/Header/components";
import "./Details.scss";
import AddButton from "../AddButton/AddButton";
import { useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";

export default function Details() {
  const { course, isBought } = useCourseView();

  return (
    <>
      <Header>
        <Title title={course?.name} />
        <User />
      </Header>
      <section className="Details">
        <section className="Details__info">
          <div className="Details__row">
            <div className="Details__categorie">
              <div className="Details__doubt"></div>
              <p>{course?.categories[0]}</p>
            </div>
            <p className="Details__price">{course?.price}$</p>
          </div>
          <p className="Details__description">{course?.description}</p>
          {isBought ? null : <AddButton id={course?.id} style={"AddButton"} />}
        </section>
        <figure className="Details__imageContainer">
          <img className="Details__image" src={course?.image?.url} alt="" />
          <div className="Details__vector">
            <FaPlay />
          </div>
        </figure>
      </section>
    </>
  );
}

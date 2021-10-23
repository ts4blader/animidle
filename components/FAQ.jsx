import React, { useMemo, useState, useRef, useCallback } from "react";
import faqData from "../data/faqs.json";
import Icon from "./Icon";
import SubscribeForm from "./SubscribeForm";

const Capsule = ({ content }) => {
  const [toggle, setToggle] = useState(false);
  const headRef = useRef(null);
  const bodyRef = useRef(null);

  const body = useMemo(() => {
    return content.body.split("\n");
  }, []);

  return (
    <div
      className="capsule"
      data-toggle={toggle}
      style={
        toggle
          ? { height: `${headRef.current.clientHeight}px` }
          : {
              height: `${
                headRef.current.clientHeight + bodyRef.current.clientHeight
              }px`,
            }
      }
    >
      <div
        className="capsule__head"
        ref={headRef}
        onClick={() => setToggle((prev) => !prev)}
      >
        <p className="text">{content.header}</p>
        <Icon src="close.png" alt="toggle" />
      </div>
      <div className="capsule__body" ref={bodyRef}>
        {body.map((item, index) => (
          <p key={index} className="text">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default function FAQ() {
  return (
    <section className="faq">
      <h4 className="faq__title">Frequently Asked Questions</h4>
      <ul className="faq-list">
        {faqData.map((item) => {
          return (
            <li key={item.id} className="capsule-wrapper">
              <Capsule content={item} />
            </li>
          );
        })}
      </ul>
      <SubscribeForm />
    </section>
  );
}

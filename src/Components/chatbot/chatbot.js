import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

import style from "./Contenido.module.css";

const Chatbot = () => {
  const theme = {
    background: "#f5f8fb",
    headerBgColor: "#4e82ea",
    headerFontColor: "#fff",
    headerFontSize: "20px",
    botBubbleColor: "#f4f4f4",
    botFontColor: "#222",
    userBubbleColor: "#f4f4f4",
    userFontColor: "#222",
  };

  const steps = [
    {
      id: 1,
      message:
        "Welcome to the Linking Future chatbot, to begin with, tell me your name.",
      trigger: 2,
    },
    {
      id: 2,
      user: true,
      validator: (value) => {
        if (
          /^[a-z]{3,16}$/.test(value) ||
          /^[A-Z]{1}[a-z]{2,15}$/.test(value) ||
          /^[A-Z]{3,16}$/.test(value)
        ) {
          return true;
        } else {
          return "Enter a valid name.";
        }
      },
      trigger: 3,
    },
    {
      id: 3,
      message: `Hi {previousValue}! Tell me where I can help you?`,
      trigger: 4,
    },
    {
      id: 4,
      options: [
        { value: 1, label: "What is future linking?", trigger: "4a" },
        { value: 2, label: "It is safe?", trigger: "4b" },
        { value: 3, label: "How do I donate?", trigger: "4c" },
        {
          value: 4,
          label: "What are the types of users?",
          trigger: "4d",
        },
        { value: 5, label: "How do I subscribe?", trigger: "4e" },
        {
          value: 6,
          label: "I want to speak with a staff of the NGO",
          trigger: "4f",
        },
      ],
    },
    {
      id: "4a",
      message:
        "linking future is a platform that seeks to help connect NGO's with people who want to help in various causes.",
      trigger: 5,
    },
    {
      id: "4b",
      message:
        "Of course! The linking future team is in charge of verifying that the NGO's are real and that the donations are safe.",
      trigger: 5,
    },
    {
      id: "4c",
      message:
        "You can donate from the page of the initiative you want to help through PayPal.",
      trigger: 5,
    },
    {
      id: "4d",
      message:
        "You can find two classes of users on our page, the FIRST one that is aimed at users who represent a community, which will have a section to be able to propose a project to help a community, and the SECOND class of user, which It is intended for people interested in helping in pending causes through donations and being informed of all the progress of the project involved.",
      trigger: 5,
    },
    {
      id: "4e",
      message:
        "You can subscribe by means of a monthly payment in PayPal, in this way you can make sure that you will support an NGO every month.",
      trigger: 5,
    },
    {
      id: "4f",
      message:
        "I'm sorry if I couldn't help you, leave your message and a linking future member will contact you as soon as possible via email, I'll leave the link below ⬇️ ",
      trigger: "5a",
    },
    {
      id: "5a",
      component: (
        <div className="flex flex-col items-start justify-center gap-4">
          <a href="mailto:futurelinking19@gmail.com">
            <button className={style.button}>Link</button>
          </a>
        </div>
      ),
      end: true,
    },
    {
      id: 5,
      message: "Have I been able to help you?",
      trigger: 6,
    },
    {
      id: 6,
      options: [
        { value: 1, label: "Yeah! Thank you.", trigger: "7" },
        { value: 2, label: "No, I want to talk to a staff", trigger: "4f" },
      ],
    },
    {
      id: 7,
      message: "Can I help you in any way?",
      trigger: 8,
    },
    {
      id: 8,
      options: [
        { value: 1, label: "¡Yes!", trigger: "9" },
        { value: 2, label: "No, thanks.", trigger: "9b" },
      ],
    },
    {
      id: 9,
      message: "Tell me, how can I help you?",
      trigger: 4,
    },
    {
      id: "9b",
      message: "I hope I have helped you, see you later!",
      end: true,
    },
  ];

  return (
    <div className="fixed bottom-4 right-4">
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          floating="true"
          headerTitle="Linking Future Bot"
          placeholder="Escribe tu pregunta"
        />
      </ThemeProvider>
    </div>
  );
};

export default Chatbot;

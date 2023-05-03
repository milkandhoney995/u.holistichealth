import Head from "next/head";
import { Fragment } from "react";

export default function Home() {

  return (
    <>
      <Fragment>
        <Head>
          <title>u.holistichealth</title>
          <meta name="description" content="this is u.holistichealth's website." />
        </Head>
        <div className="main">
          Hi! I'm <strong>Utano Harada</strong>, a Web Front-end Engineer.
          Making the most of components in Vue/React.js and Sass styles, I would change the tedious scripts more easy to read, and give them higher maintainability.
          <br />
          <br />
          I have worked on several open source apps, and been in charge of <strong>ensuring reusablility and componentizing React/Vue apps.</strong>
          <br />
          <br />
          I'm passionate about simplifying and optimizing the intricate and lengthy script. I also have implemented new function(authentication, etc),  in previous project.
          <br />
          <strong>I'm currently looking for the Web/Mobiledevelopment.</strong>
        </div>
      </Fragment>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      layout: "web",
      title: "Home"
    },
  };
}

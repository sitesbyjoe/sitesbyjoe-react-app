import React from 'react';
import { useSelector } from "react-redux";
import Highlight from './Highlight';
import Content from './Content';
import ContactBar from './ContactBar';

const Home = (props) => {

  const application = useSelector(state => state.application);

  return (
    <div className="homepage">

      <Highlight application={application} />

      <Content />

      <ContactBar />

    </div>
  )

};

export default Home;
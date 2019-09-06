import React, { Component, useState } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

import Works from "./works";
import SkillCard from "./sub-components/skillCard";

function Skills() {
  const [skillCards, setSkillCard] = useState([
    {
      skill: "JavaScript",
      experience: "2 years",
      description: "Sed dictum semper bibendum. In quis solicitudin ante, which ex. Aenean nec elit nec felis dictum bibendum. Maecenas justo dui, fermentum in mi sed, gravid egestas lacus. Suspendisse magna velit, pulvinar nec nulla quis, tincidunt sollicitudin mauris. Sed and eros id orci egestas scelerisk non id nisi. Fusce aliquet neque has felis accumsan congue. Donec id malesuada ligula. In convallis ex id nis venenatis, placeat tempor purus auctor. Mauris and mollis enim. Nulla carried ante commodo velit faucibus, which blandit neque lacinia. Pellentesque commodo orci in metus aliquam viverra. Donec lobortis lobortis lorem vel pulvinar. Ut nec lacus ut dui rutrum rhoncus sit amet consectetur dolor. Vivamus sit amet is in magna finibus venenatis. In hac habitasse platea dictumst.",

    },
    {
      skill: "HTML",
      experience: "2 years",
      description: "Sed dictum semper bibendum. In quis solicitudin ante, which ex. Aenean nec elit nec felis dictum bibendum. Maecenas justo dui, fermentum in mi sed, gravid egestas lacus. Suspendisse magna velit, pulvinar nec nulla quis, tincidunt sollicitudin mauris. Sed and eros id orci egestas scelerisk non id nisi. Fusce aliquet neque has felis accumsan congue. Donec id malesuada ligula. In convallis ex id nis venenatis, placeat tempor purus auctor. Mauris and mollis enim. Nulla carried ante commodo velit faucibus, which blandit neque lacinia. Pellentesque commodo orci in metus aliquam viverra. Donec lobortis lobortis lorem vel pulvinar. Ut nec lacus ut dui rutrum rhoncus sit amet consectetur dolor. Vivamus sit amet is in magna finibus venenatis. In hac habitasse platea dictumst.",
    },
    {
      skill: "React",
      experience: "1 year",
      description: "Sed dictum semper bibendum. In quis solicitudin ante, which ex. Aenean nec elit nec felis dictum bibendum. Maecenas justo dui, fermentum in mi sed, gravid egestas lacus. Suspendisse magna velit, pulvinar nec nulla quis, tincidunt sollicitudin mauris. Sed and eros id orci egestas scelerisk non id nisi. Fusce aliquet neque has felis accumsan congue. Donec id malesuada ligula. In convallis ex id nis venenatis, placeat tempor purus auctor. Mauris and mollis enim. Nulla carried ante commodo velit faucibus, which blandit neque lacinia. Pellentesque commodo orci in metus aliquam viverra. Donec lobortis lobortis lorem vel pulvinar. Ut nec lacus ut dui rutrum rhoncus sit amet consectetur dolor. Vivamus sit amet is in magna finibus venenatis. In hac habitasse platea dictumst.",
    }
  ]);

  function readMore(isExpanded) {
    console.log(isExpanded);
  }

  return (
    <div className="Skills">
        <h1 className="title">Skills</h1>

        <div>
          <ul className="card-list">
          {skillCards.map((e, i) => {
            return <li className="card-item">
              <SkillCard skill={e.skill} experience={e.experience} description={e.description} readMore={readMore}/>
            </li>
          })}
          </ul>
          
        </div>



      </div>
    );
  }


export default Skills;

import React, { Component, useState } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import {
  Card,
  CardSubtitle,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";
import Works from "../works";

function SkillCard(props) {



  return (
    <div className="Skills">

        <Card className="skill-card">
          <CardHeader className="card-header">{props.skill}</CardHeader>
          <CardBody>

            <CardSubtitle>
              <p className="card-subtitle">experience: {props.experience}</p>
            </CardSubtitle>

            <p className="card-description">

              <ShowMoreText
                lines={3}
                more='Show more'
                less='Show less'
                anchorClass=''
                onClick={props.readMore}
                expanded={false}>
                  {props.description}
              </ShowMoreText>

            </p>
            <Router>
              <Link className="btn btn-primary" to="/projects/" >To Projects</Link>

              <Route path="/projects/" component={Works}></Route>
            </Router>
          </CardBody>
        </Card>

      </div>
    );
  }

  export default SkillCard;
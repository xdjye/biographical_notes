import React from 'react';
import MainTitle from "./title";
import PersonalInfoForm from "./personalInfoForm";
import JobHuntState from "./jobHuntState";
import Advantage from "./advantage";
import JobHuntDesire from "./jobHuntDesire";
import WorkExperience from './workExperience';
import ProjectExperience from './projectExperience';
import EducationExperience from './educationExperience';
import { MainWrapper } from "./styled";

export default function Main() {
  return (
    <MainWrapper>
      <MainTitle/>
      <PersonalInfoForm/>
      <JobHuntState/>
      <Advantage/>
      <JobHuntDesire/>
      <WorkExperience/>
      <ProjectExperience/>
      <EducationExperience/>
    </MainWrapper>
  )
}

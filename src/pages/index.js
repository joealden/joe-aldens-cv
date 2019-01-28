// @ts-check

import React from "react";
import styled from "styled-components";

import GlobalStyles from "../components/GlobalStyles";

const CV = () => (
  <>
    <CVWrapper>
      <Paper>
        <MainContent>
          <Header />
          <ProfessionalExperienceSection />
          <EducationSection />
          <PersonalProjectsSection />
        </MainContent>
      </Paper>
    </CVWrapper>
    <GlobalStyles />
  </>
);

export default CV;

const CVWrapper = styled.main`
  display: flex;
  justify-content: center;
`;

const Paper = styled.div`
  margin: 30px;
  border: 1px solid black;
  width: 100%;
  max-width: 1240px;
  min-height: 1754px;
`;

const MainContent = styled.div`
  margin: 30px;
`;

const Header = () => (
  <HeaderWrapper>
    <div>
      <div>
        <h1>Joe Alden</h1>
        <h2>me@joealden.com</h2>
      </div>
      <div>
        <div>
          Website:
          <a
            href="https://joealden.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            https://joealden.com
          </a>
        </div>
        <div>
          Github:
          <a
            href="https://github.com/joealden"
            rel="noreferrer noopener"
            target="_blank"
          >
            https://github.com/joealden
          </a>
        </div>
      </div>
    </div>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    > div:first-child {
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 1.5rem;
      }

      h2 {
        font-size: 1.25rem;
        color: #9b9b9b;
      }
    }

    > div:last-child {
      > div {
        display: flex;
        justify-content: flex-end;
        color: black;

        a {
          color: grey;
          display: block;
          margin-left: 5px;
          transition: color 0.3s ease;

          &:hover {
            color: black;
          }
        }
      }
    }
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    margin-top: 25px;
    height: 1px;
    background-color: #9b9b9b;
  }
`;

const ProfessionalExperienceSection = () => (
  <Section>
    <h3>Professional Experience</h3>
    <Item>
      <ItemHeading>
        <div>
          <h4>Remote Work</h4>
          <span>(2018 - Present)</span>
        </div>
      </ItemHeading>
      <ItemSubSection>
        <ItemSubSectionHeading>
          <h4>
            <span>Listed</span> - Design Resource Site (
            <a
              href="https://listed.design"
              rel="noreferrer noopener"
              target="_blank"
            >
              https://listed.design
            </a>
            )
          </h4>
          <span>Q4 2018 - Jan 2019</span>
        </ItemSubSectionHeading>
        <ItemSubSectionList>
          <ul>
            <li>What I did</li>
            <li>What I did</li>
            <li>What I did</li>
          </ul>
        </ItemSubSectionList>
      </ItemSubSection>
      <ItemSubSection>
        <ItemSubSectionHeading>
          <h4>
            <span>Umoro</span> - E-commerce Site (
            <a
              href="https://umoro.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              https://umoro.com
            </a>
            )
          </h4>
          <span>Q2 2018</span>
        </ItemSubSectionHeading>
        <ItemSubSectionList>
          <ul>
            <li>What I did</li>
            <li>What I did</li>
            <li>What I did</li>
          </ul>
        </ItemSubSectionList>
      </ItemSubSection>
    </Item>
  </Section>
);

const EducationSection = () => (
  <Section>
    <h3>Education</h3>
    <Item>
      <ItemSubSection>
        <ItemSubSectionHeading>
          <h4>
            <span>A Levels</span> - Bexhill College
          </h4>
          <span>Sept 2016 - June 2018</span>
        </ItemSubSectionHeading>
        <ItemSubSectionList>
          <ul>
            <li>
              <span>A*</span>
              Electronics
            </li>
            <li>
              <span>A</span>
              Computer Science
            </li>
            <li>
              <span>C</span>
              Mathematics
            </li>
          </ul>
        </ItemSubSectionList>
      </ItemSubSection>
      <ItemSubSection>
        <ItemSubSectionHeading>
          <h4>
            <span>GCSEs</span> - Claverham Community College
          </h4>
          <span>Sept 2011 - July 2016</span>
        </ItemSubSectionHeading>
        <ItemSubSectionList>
          <ul>
            <li>
              <span>A*</span>
              Mathematics
            </li>
            <li>
              <span>A*</span>
              Computer Science
            </li>
            <li>
              <span>A*</span>
              Spanish
            </li>
            <li>
              <span>A*</span>
              History
            </li>
            <li>
              <span>A*</span>
              Religous Studies
            </li>
            <li>
              <span>A</span>
              Physics
            </li>
            <li>
              <span>A</span>
              Chemistry
            </li>
            <li>
              <span>A</span>
              Biology
            </li>
            <li>
              <span>A</span>
              Art &amp; Graphic Design
            </li>
            <li>
              <span>A</span>
              English (Literature)
            </li>
            <li>
              <span>B</span>
              English (Language)
            </li>
            <li>
              <span>C</span>
              French
            </li>
          </ul>
        </ItemSubSectionList>
      </ItemSubSection>
    </Item>
  </Section>
);

const PersonalProjectsSection = () => (
  <Section>
    <h3>Personal Projects</h3>
    <Item>
      <ItemSubSection>
        <ItemSubSectionHeading>
          <h4>
            <span>Listed</span> - Design Resource Site (
            <a
              href="https://listed.design"
              rel="noreferrer noopener"
              target="_blank"
            >
              https://listed.design
            </a>
            )
          </h4>
          <span>Q4 2018 - Jan 2019</span>
        </ItemSubSectionHeading>
        <ItemSubSectionList>
          <ul>
            <li>What I did</li>
            <li>What I did</li>
            <li>What I did</li>
          </ul>
        </ItemSubSectionList>
      </ItemSubSection>
      <ItemSubSection>
        <ItemSubSectionHeading>
          <h4>
            <span>Umoro</span> - E-commerce Site (
            <a
              href="https://umoro.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              https://umoro.com
            </a>
            )
          </h4>
          <span>Q2 2018</span>
        </ItemSubSectionHeading>
        <ItemSubSectionList>
          <ul>
            <li>What I did</li>
            <li>What I did</li>
            <li>What I did</li>
          </ul>
        </ItemSubSectionList>
      </ItemSubSection>
    </Item>
  </Section>
);

const Section = styled.div`
  margin: 20px 0;

  h3 {
    background-color: lightgrey;
    font-size: 1.2rem;
    padding: 5px;
  }
`;

const Item = styled.div`
  margin: 25px 0;
`;

const ItemHeading = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 20px;

  > div {
    display: flex;

    h4 {
      margin-right: 8px;
    }

    span {
      color: #9b9b9b;
    }
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    margin-top: 5px;
    height: 1px;
    background-color: #9b9b9b;
  }
`;

const ItemSubSection = styled.div`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const ItemSubSectionHeading = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    span {
      font-weight: bold;
    }
  }

  a {
    color: #9b9b9b;
    transition: color 0.3s ease;

    &:hover {
      color: black;
    }
  }
`;

const ItemSubSectionList = styled.div`
  ul {
    list-style: square;
    margin: 10px 0 0 0;

    li {
      span {
        display: inline-block;
        font-weight: bold;

        min-width: 30px;
      }
    }
  }
`;

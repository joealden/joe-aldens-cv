// @ts-check

import React from "react";
import styled from "styled-components";

import GlobalStyles from "../components/GlobalStyles";

const CV = () => (
  <>
    <CVWrapper>
      <Paper>
        <PageNumber>1</PageNumber>
        <MainContent>
          <Header />
          <ProfessionalExperienceSection />
          <EducationSection />
          <PersonalProjectsSection />
        </MainContent>
        <OnlineCVLink>
          Visit this CV online at&nbsp;
          <a href="https://cv.joealden.com">https://cv.joealden.com</a>
        </OnlineCVLink>
      </Paper>
      <Paper>
        <PageNumber>2</PageNumber>
        <MainContent>
          <Header />
          <SelfStudySection />
          <InterestsSection />
        </MainContent>
        <OnlineCVLink>
          Visit this CV online at&nbsp;
          <a href="https://cv.joealden.com">https://cv.joealden.com</a>
        </OnlineCVLink>
      </Paper>
    </CVWrapper>
    <GlobalStyles />
  </>
);

export default CV;

const CVWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Paper = styled.div`
  margin: 30px;
  border: 1px solid black;
  width: 100%;
  max-width: 1240px;
  min-width: 1240px;
  height: 1779px;
  position: relative;
`;

const PageNumber = styled.div`
  display: none;

  @media print {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px 12px;
    font-size: 1.2rem;
    background-color: lightgrey;
  }
`;

const MainContent = styled.div`
  margin: 30px;
  position: relative;

  > span {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const OnlineCVLink = styled.div`
  display: none;

  @media print {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 8px 12px;
    font-size: 1.2rem;
    background-color: lightgrey;

    a {
      color: black;
    }
  }
`;

const Header = () => (
  <HeaderWrapper>
    <div>
      <div>
        <h1>Joe Alden</h1>
        <h2>
          <a href="mailto:me@joealden.com">me@joealden.com</a>
        </h2>
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

  a {
    color: #9b9b9b;
    display: block;
    transition: color 0.3s ease;

    &:hover {
      color: black;
    }
  }

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
          margin-left: 5px;
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
            <span>Talq</span> - A Real Time Communication Platform (
            <a
              href="https://talq.joealden.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              https://talq.joealden.com
            </a>
            &nbsp;&amp;&nbsp;
            <a
              href="https://talq-api.joealden.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              https://talq-api.joealden.com
            </a>
            )
          </h4>
          <span>Q3 2018</span>
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
            <span>px-to-vw</span> - A Pixel to Viewport Width Converter (
            <a
              href="https://vw.joealden.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              https://vw.joealden.com
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
      <ItemSubSection>
        <ItemSubSectionHeading>
          <h4>
            <span>Corum</span> - A Community Moderated Forum (
            <a
              href="https://corum.joealden.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              https://corum.joealden.com
            </a>
            )
          </h4>
          <span>Q3 2017 - Q1 2018</span>
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

/* ------------------------------ Page 2 -------------------------- */

const SelfStudySection = () => (
  <Section>
    <h3>Self Study</h3>
    <Item>
      <ItemHeading>
        <div>
          <h4>Online Courses</h4>
          <span>(2015 - 2018)</span>
        </div>
      </ItemHeading>
      <ItemSubSection>
        <ItemSubSectionHeading>
          <h4>
            <span>FrontendMasters</span> - (
            <a
              href="https://frontendmasters.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              https://frontendmasters.com
            </a>
            )
          </h4>
          <span>2017 - 2018</span>
        </ItemSubSectionHeading>
        <ItemSubSectionList>
          <ul>
            <li>
              Introduction to Vue.js - (
              <a
                href="https://twitter.com/sarah_edo"
                rel="noreferrer noopener"
                target="_blank"
              >
                Sarah Drasner
              </a>
              )
            </li>
            <li>
              Functional-Light JavaScript, v2 - (
              <a
                href="https://twitter.com/getify"
                rel="noreferrer noopener"
                target="_blank"
              >
                Kyle Simpson
              </a>
              )
            </li>
            <li>
              Deep JavaScript Foundations - (
              <a
                href="https://twitter.com/getify"
                rel="noreferrer noopener"
                target="_blank"
              >
                Kyle Simpson
              </a>
              )
            </li>
            <li>
              Rethinking Asynchronous JavaScript - (
              <a
                href="https://twitter.com/getify"
                rel="noreferrer noopener"
                target="_blank"
              >
                Kyle Simpson
              </a>
              )
            </li>
            <li>
              Advanced React Patterns - (
              <a
                href="https://twitter.com/kentcdodds"
                rel="noreferrer noopener"
                target="_blank"
              >
                Kent C. Dodds
              </a>
              )
            </li>
            <li>
              TypeScript Fundamentals - (
              <a
                href="https://twitter.com/michaellnorth"
                rel="noreferrer noopener"
                target="_blank"
              >
                Mike North
              </a>
              )
            </li>
          </ul>
        </ItemSubSectionList>
      </ItemSubSection>
      <ItemSubSection>
        <ItemSubSectionHeading>
          <h4>
            <span>EggHead</span> - (
            <a
              href="https://egghead.io/"
              rel="noreferrer noopener"
              target="_blank"
            >
              https://egghead.io
            </a>
            )
          </h4>
          <span>2017 - 2018</span>
        </ItemSubSectionHeading>
        <ItemSubSectionList>
          <ul>
            <li>
              Flexbox Fundamentals - (
              <a
                href="https://twitter.com/garthdb"
                rel="noreferrer noopener"
                target="_blank"
              >
                Garth Braithwaite
              </a>
              )
            </li>
            <li>
              Build Complex Layouts with CSS Grid Layout - (
              <a
                href="https://twitter.com/alan0buchanan"
                rel="noreferrer noopener"
                target="_blank"
              >
                Rory Smith
              </a>
              )
            </li>
            <li>
              The Beginner's Guide to React - (
              <a
                href="https://twitter.com/kentcdodds"
                rel="noreferrer noopener"
                target="_blank"
              >
                Kent C. Dodds
              </a>
              )
            </li>
            <li>
              Get Started with Reason - (
              <a
                href="https://twitter.com/nikgraf"
                rel="noreferrer noopener"
                target="_blank"
              >
                Nik Graf
              </a>
              )
            </li>
            <li>
              Using WebAssembly with Rust - (
              <a
                href="https://twitter.com/nikgraf"
                rel="noreferrer noopener"
                target="_blank"
              >
                Nik Graf
              </a>
              )
            </li>
          </ul>
        </ItemSubSectionList>
      </ItemSubSection>
      <ItemSubSection>
        <ItemSubSectionHeading>
          <h4>
            <span>Lynda.com (now LinkedIn Learning)</span> - (
            <a
              href="https://www.lynda.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              https://www.lynda.com
            </a>
            )
          </h4>
          <span>2015 - 2017</span>
        </ItemSubSectionHeading>
        <ItemSubSectionList>
          <ul>
            <li>
              Web Development Foundations: Web Technologies - (
              <a
                href="https://twitter.com/jameswillweb"
                rel="noreferrer noopener"
                target="_blank"
              >
                James Williamson
              </a>
              )
            </li>
            <li>
              HTML Essential Training - (
              <a
                href="https://twitter.com/jameswillweb"
                rel="noreferrer noopener"
                target="_blank"
              >
                James Williamson
              </a>
              )
            </li>
            <li>
              CSS Essential Training - (
              <a
                href="https://twitter.com/christinatruong"
                rel="noreferrer noopener"
                target="_blank"
              >
                Christina Truong
              </a>
              )
            </li>
            <li>
              JavaScript Essential Training - (
              <a
                href="https://twitter.com/mor10"
                rel="noreferrer noopener"
                target="_blank"
              >
                Morten Rand-Hendriksen
              </a>
              )
            </li>
            <li>
              Node.js Essential Training - (
              <a
                href="https://twitter.com/moontahoe"
                rel="noreferrer noopener"
                target="_blank"
              >
                Alex Banks
              </a>
              )
            </li>
            <li>
              Learning Git and GitHub - (
              <a
                href="https://twitter.com/planetoftheweb"
                rel="noreferrer noopener"
                target="_blank"
              >
                Ray Villalobos
              </a>
              )
            </li>
            <li>
              React.js Essential Training - (
              <a
                href="https://twitter.com/eveporcello"
                rel="noreferrer noopener"
                target="_blank"
              >
                Eve Porcello
              </a>
              )
            </li>
          </ul>
        </ItemSubSectionList>
      </ItemSubSection>
      <ItemHeading
        style={{
          marginTop: "25px"
        }}
      >
        <div>
          <h4>Podcasts</h4>
          <span>(2017 - Present)</span>
        </div>
      </ItemHeading>
      <ItemSubSection>
        <ItemSubSectionHeading>
          <h4>
            <span>Syntax</span> - (
            <a
              href="https://syntax.fm/"
              rel="noreferrer noopener"
              target="_blank"
            >
              https://syntax.fm
            </a>
            )
          </h4>
        </ItemSubSectionHeading>
      </ItemSubSection>
      <ItemSubSection>
        <ItemSubSectionHeading>
          <h4>
            <span>Late Night Linux</span> - (
            <a
              href="https://latenightlinux.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              https://latenightlinux.com
            </a>
            )
          </h4>
        </ItemSubSectionHeading>
      </ItemSubSection>
    </Item>
  </Section>
);

const InterestsSection = () => (
  <Section>
    <h3>Interests</h3>
    <Item>
      <ItemSubSection>
        <ItemSubSectionList>
          <ul>
            <li>FOSS (Free and Open Source Software)</li>
            <li>Linux and Related Projects</li>
            <li>Programming Language Design</li>
            <li>Computer Hardware</li>
            <li>PC + Console Gaming</li>
            <li>Hip-Hop Music</li>
            <li>Streetwear Fashion</li>
            <li>Politics</li>
            <li>Cycling</li>
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

      a {
        color: #9b9b9b;
        transition: color 0.3s ease;

        &:hover {
          color: black;
        }
      }
    }
  }
`;

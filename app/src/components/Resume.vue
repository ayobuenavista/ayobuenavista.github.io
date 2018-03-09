<template>
  <div class="resume">
    <Particles
      :particleOpacity="0.7"
      linesColor="#3EE6C1"
      :particlesNumber="30"
      shapeType="circle"
      :particleSize="3"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="0.3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </Particles>

    <div class="leftCol m_box">
      <div class="shadow"></div>
      <div class="section-headline">
        CONTACT
      </div>
      <div class="item">
        <div class="icon">
          <i class="fa fa-map-marker"></i>
        </div>
        <div class="text">
          <ul>
            <li> {{ person.location }}</li>
          </ul>
        </div>
      </div>

      <div v-if="person.contact.street" class="item">
        <div class="icon">
          <i class="material-icons fa-city">location_city</i>
        </div>
        <div class="text">
          <ul>
            <li>{{ person.contact.street }}</li>
            <li>{{ person.contact.city }}</li>
          </ul>
        </div>
      </div>

      <a v-if="person.contact.phone" :href="'tel:'+person.contact.phone">
        <div class="item">
          <div class="icon">
            <i class="material-icons">phone</i>
          </div>
          <div class="text">
            {{person.contact.phone}}
          </div>
        </div>
      </a>

      <a v-if="person.contact.email" :href="'mailto:'+person.contact.email">
        <div class="item">
          <div class="icon">
            <i class="material-icons">email</i>
          </div>
          <div class="text">
            {{person.contact.email}}
          </div>
        </div>
      </a>

      <a :href="'https://twitter.com/'+person.contact.twitter">
        <div class="item">
          <div class="icon">
            <i class="fa fa-twitter"></i>
          </div>
          <div class="text">
            @{{ person.contact.twitter }}
          </div>
        </div>
      </a>

      <a :href="'https://t.me/'+person.contact.telegram">
        <div class="item">
          <div class="icon">
            <i class="fa fa-telegram"></i>
          </div>
          <div class="text">
            @{{ person.contact.telegram }}
          </div>
        </div>
      </a>

      <a v-if="person.contact.github" :href="'https://github.com/'+person.contact.github" target="_blank">
        <div class="item">
          <div class="icon">
            <i class="fa fa-github"></i>
          </div>
          <div class="text">
            <span>@{{person.contact.github}}</span>
            <span>github.com/{{person.contact.github}}</span>
          </div>
        </div>
      </a>

      <a v-if="person.contact.website" :href="person.contact.website" target="_blank">
        <div class="item">
          <div class="icon">
            <i class="material-icons">language</i>
          </div>
          <div class="text">
            <span>{{ person.contact.website }}</span>
          </div>
        </div>
      </a>

      <div v-if="person.contact.fingerprint" class="item">
        <div class="icon">
          <i class="fa fa-key"></i>
        </div>
        <div class="text">
          <span>{{ person.contact.fingerprint }}</span>
        </div>
      </div>

      <div class="item">
        <div class="section-headline">
          SKILLS
        </div>
        <div class="infos" v-for="skill in person.skills" :key="skill.group">
          <div class="right skills">
            <span>{{ skill.group }}</span>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="section-headline">
          PERSONAL PROJECTS
        </div>
        <div class="infos" v-for="personal_projects in person.personal_projects" :key="personal_projects.project">
          <div class="right">
            <span class="subheadline">{{ personal_projects.project }}</span>
            <div class="block-helper"></div>
            <div class="description">
              <span>{{ personal_projects.description }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="item last">
        <div class="section-headline">
          OPEN SOURCE CONTRIBUTIONS
        </div>
        <div class="infos" v-for="opensource in person.open_source" :key="opensource.project">
          <div class="right">
            <span>{{ opensource.project }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="rightCol">
      <div class="title">
        <span id="hackergotchi"></span>
        <h2>{{ person.name.first }} {{ person.name.middle }} {{ person.name.last }}</h2>
        <div>{{ person.position }}</div>
      </div>

      <div class="section-headline">EXPERIENCE</div>
      <div class="block" v-for="experience in person.experience" :key="experience.company">
        <div class="block-helper"></div>
        <h3>{{ experience.position }}</h3>
        <h3 class="headline">{{ experience.company }}</h3>
        <div class="subheadline left">{{ experience.timeperiod }}</div>
        <div class="subheadline right">{{ experience.location }}</div>
        <div style="clear:both;"></div>
        <p class="info" v-for="tasks in experience.tasks" :key="tasks.task">
          <span class="icon"><i class="fa fa-circle"></i></span> {{ tasks.task }}
        </p>
        <p class="lists-headline" v-if="experience.projects">Notable Projects:</p>
        <p class="list" v-for="projects in experience.projects" :key="projects.project">
          {{ projects.project }}
        </p>
      </div>

      <div class="section-headline">EDUCATION</div>
      <div class="block" v-for="education in person.education" :key="education.degree">
        <div class="block-helper"></div>
        <h3>{{ education.degree }}</h3>
        <h3 class="headline">{{ education.university }}</h3>
        <div class="subheadline left">{{ education.timeperiod }}</div>
        <div class="subheadline right">{{ education.location }}</div>
        <div style="clear:both;"></div>
        <p class="lists-headline">Awards:</p>
        <p class="list" v-for="awards in education.awards" :key="awards.award">
          {{ awards.award }}
        </p>
      </div>
    </div>

    <div id="resume-footer">
      <div v-if="person.about">
        <h3>About me</h3>
        <p>{{ person.about }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import yaml from 'js-yaml';
import { DETAILS } from '@/resume/data.yml';

export default {
  name: 'Resume',
  data() {
    return {
      person: yaml.load(DETAILS),
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '../assets/main.scss';

  .resume {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    font-family: 'Roboto' !important;
    background: $white;
  }

  #particles-js {
    z-index: 9999;
    background-size: cover;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  a {
    cursor: pointer;
  }

  .title {
    h2 {
      float: right;
      text-transform: uppercase;
      display: block;
      -webkit-margin-start: 0;
      -webkit-margin-end: 0;
      color: rgba(0, 0, 0, 0.7);
      padding-top: 0;
      margin-top: 0;
      font-weight: 400;
    }
    div {
      float: right;
      margin-top: 0;
      margin: 0;
      padding: 0;
      font-weight: 500;
      color: rgba(63, 61, 60, 0.71);
      display: block;
      -webkit-margin-start: 0;
      -webkit-margin-end: 0;
      padding-top: 0;
      text-transform: uppercase;
      opacity: 0.8;
    }
    span {
      float: left;
      background-color: white;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
    }
    p {
      float: right;
      font-weight: 300;
      text-align: justify;
      color: rgba(0, 0, 0, 0.7);
      display: block;
    }
  }

  .section-headline {
    text-transform: uppercase;
    font-weight: 500;
    opacity: 0.8;
    color: $dark-blue;
  }

  .c {
    clear: both;
  }

  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  p {
    margin-top: 0;
    font-family: $font-normal;
    font-weight: 300;
  }

  .m_box {
    box-shadow: $box-shadow;
  }

  .fa, .material-icons {
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h3, h5, h6 {
    font-weight: 400;
    margin: 0;
  }

  h2 {
    font-weight: 500;
    margin: 0;
    margin: 0;
  }

  h4 {
    font-weight: 400;
    margin: 0;
    opacity: 1;
  }

  .rightCol {
    height: 100%;
    .block {
      width: 90%;
      position: relative;
      background-color: $white;
      display: inline-block;
      box-shadow: $box-shadow;
      .headline {
        font-weight: 300;
        display: block;
        color: rgba(0, 0, 0, 0.870588);
      }
      .subheadline {
        color: rgba(0, 0, 0, 0.541176);
        display: block;
        font-weight: 300;
      }
      .left {
        float: left;
      }
      .right {
        float: right;
      }
      .info {
        color: rgba(0, 0, 0, 0.870588);
        margin-bottom: 0;
        text-align: justify;
      }
      .lists-headline {
        font-weight: 400;
        color: $dark;
        margin-bottom: 0;
        text-align: left;
      }
      .list {
        color: rgba(0, 0, 0, 0.870588);
        margin-bottom: 0;
        text-align: left;
      }
      .icon {
        float: left;
        .fa, .material-icons {
          text-align: center;
          display: block;
          color: $material;
        }
      }
    }
  }

  .leftCol {
    padding: 0;
    text-align: left;
    color: $white;
    background-color: $background;
    overflow: hidden;
    .section-headline {
      color: $section-headline;
    }
    a {
      color: $white;
      text-decoration: none;
    }
    .heading {
      background-color: white;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
      width: 100%;
    }
    .item {
      width: 100%;
      float: left;
      .fa, .material-icons {
        display: inherit;
        text-align: center;
      }
      .icon {
        float: left;
      }
      .text {
        float: right;
        display: block;
        font-weight: 300;
        li {
          padding-top: 0;
          display: block;
          font-weight: 300;
        }
      }
      span {
        font-weight: 300;
      }
      .infos {
        clear: both;
        color: $white;
        text-align: justify;
        .description {
          color: rgba(255, 255, 255, 0.59);
        }
        .left {
          float: left;
          i:nth-child(2) {
            float: left;
            padding-top: 4px;
          }
        }
        .right {
          float: right;
        }
        .skills {
          background-color: $dark;
          text-align: left;
        }
        .subheadline {
          display: block;
          font-weight: 400;
        }
      }
    }
    .item.last .text {
      border-bottom-style: none;
      padding-bottom: 0;
    }
  }

  #hackergotchi {
    background-image: url('../resume/id.jpg');
    color: black;
  }

  #resume-footer {
    color: $white;
    color: rgba(255, 255, 255, 0.59);
    background-color: $material;
    box-sizing: border-box;
    position: relative;
    text-align: justify;
    width: 100%;
    h3, p {
      color: $white;
      font-weight: 400;
      margin-bottom: 0;
    }
  }

  @media ($xxs-only) {
    .resume {
      flex-direction: column;
    }
    .title {
      padding-top: 20px;
      padding-right: 13px;
      h2 {
        font-size: 18px;
        letter-spacing: 3px;
      }
      div {
        letter-spacing: 3px;
        font-size: 16px;
      }
      span {
        width: 100px;
        height: 100px;
      }
      p {
        padding-right: 8px;
        letter-spacing: 1px;
        font-size: 8pt;
      }
    }

    .section-headline {
      clear: both;
      letter-spacing: 3px;
      font-size: 10pt;
      margin-left: 20px;
      margin-bottom: 10px;
      padding-top: 15px;
    }

    li {
      padding-top: 9px;
    }

    p {
      margin-bottom: 25px;
      font-size: 10pt;
      line-height: 17pt;
    }

    .fa, .material-icons {
      line-height: 1;
      font-size: 26px;
    }

    h2 {
      font-size: 22pt;
      line-height: 37pt;
    }

    h4 {
      font-size: 12pt;
      line-height: 20pt;
    }

    .rightCol {
      order: 2;
      padding-left: 10px;
      padding-bottom: 10px;
      .block {
        padding: 10px;
        padding-left: 20px;
        margin-top: 5px;
        margin-bottom: 5px;
        .headline {
          font-size: 15px;
        }
        .subheadline {
          font-size: 14px;
        }
        .info {
          font-size: 14px;
          padding-top: 10px;
        }
        .lists-headline {
          font-size: 14px;
          padding-top: 10px;
        }
        .list {
          font-size: 14px;
        }
        .icon {
          width: 3%;
          margin-left: -15px;
          padding-top: 6px;
          .fa, .material-icons {
            font-size: 7pt;
          }
        }
      }
    }

    .leftCol {
      order: 3;
      padding-bottom: 15px;
      .section-headline {
        margin-top: 20px;
        margin-bottom: 10px;
      }
      .heading {
        height: 277px;
      }
      .item {
        margin-top: 13px;
        .icon {
          width: 20%;
          .fa-city {
            padding-top: 8px;
          }
          .fa-github {
            padding-top: 3px;
          }
          .fa-key {
            padding-top: 9px;
          }
        }
        .text {
          width: 70%;
          padding-right: 10%;
          padding-top: 5px;
          font-size: 17px;
          li {
            font-size: 17px;
          }
        }
        span {
          font-weight: 300;
        }
        .infos {
          width: 97%;
          padding-top: 10px;
          .description {
            font-size: 17px;
          }
          .left {
            width: 10%;
            padding-top: 3px;
            i:nth-child(2) {
              padding-top: 4px;
            }
          }
          .right {
            width: 93%;
            font-size: 17px;
          }
          .skills {
            border-radius: 5px;
            padding: 8px;
          }
          .subheadline {
            padding-bottom: 10px;
          }
        }
      }
    }

    #githubIcon {
      width: 25px;
      padding-left: 17px;
    }

    #resume-footer {
      order: 4;
      padding: 10px 40px;
      h3, p {
        padding: 5px;
      }
      p {
        font-size: 17px;
        font-weight: 300;
      }
    }
  }
  @media ($xs-only) {
    .resume {
      flex-direction: column;
    }
    .title {
      padding-top: 20px;
      padding-right: 25px;
      h2 {
        font-size: 18px;
        letter-spacing: 3px;
      }
      div {
        clear: right;
        letter-spacing: 3px;
        font-size: 16px;
      }
      span {
        width: 100px;
        height: 100px;
      }
      p {
        padding-right: 8px;
        letter-spacing: 1px;
        font-size: 8pt;
      }
    }

    .section-headline {
      clear: both;
      letter-spacing: 3px;
      font-size: 10pt;
      margin-left: 20px;
      margin-bottom: 10px;
      padding-top: 15px;
    }

    li {
      padding-top: 9px;
    }

    p {
      margin-bottom: 25px;
      font-size: 10pt;
      line-height: 17pt;
    }

    .fa, .material-icons {
      line-height: 1;
      font-size: 26px;
    }

    h2 {
      font-size: 22pt;
      line-height: 37pt;
    }

    h4 {
      font-size: 12pt;
      line-height: 20pt;
    }

    .rightCol {
      order: 2;
      padding-left: 10px;
      padding-bottom: 10px;
      .block {
        padding: 10px;
        padding-left: 20px;
        margin-top: 5px;
        margin-bottom: 5px;
        .headline {
          font-size: 15px;
        }
        .subheadline {
          font-size: 14px;
        }
        .info {
          font-size: 14px;
          padding-top: 10px;
        }
        .lists-headline {
          font-size: 14px;
          padding-top: 10px;
        }
        .list {
          font-size: 14px;
        }
        .icon {
          width: 3%;
          margin-left: -15px;
          padding-top: 6px;
          .fa, .material-icons {
            font-size: 7pt;
          }
        }
      }
    }

    .leftCol {
      order: 3;
      padding-bottom: 15px;
      .section-headline {
        margin-top: 20px;
        margin-bottom: 10px;
      }
      .heading {
        height: 277px;
      }
      .item {
        margin-top: 13px;
        .icon {
          width: 20%;
          .fa-city {
            padding-top: 8px;
          }
          .fa-github {
            padding-top: 3px;
          }
          .fa-key {
            padding-top: 9px;
          }
        }
        .text {
          width: 70%;
          padding-right: 10%;
          padding-top: 5px;
          font-size: 17px;
          li {
            font-size: 17px;
          }
        }
        span {
          font-weight: 300;
        }
        .infos {
          width: 97%;
          padding-top: 10px;
          .description {
            font-size: 17px;
          }
          .left {
            width: 10%;
            padding-top: 3px;
            i:nth-child(2) {
              padding-top: 4px;
            }
          }
          .right {
            width: 93%;
            font-size: 17px;
          }
          .skills {
            border-radius: 5px;
            padding: 8px;
          }
          .subheadline {
            padding-bottom: 10px;
          }
        }
      }
    }

    #githubIcon {
      width: 25px;
      padding-left: 17px;
    }

    #resume-footer {
      order: 4;
      padding: 10px 40px;
      h3, p {
        padding: 5px;
      }
      p {
        font-size: 17px;
        font-weight: 300;
      }
    }
  }
  @media ($sm-only) {
    .resume {
      flex-direction: column;
    }
    .title {
      padding-top: 20px;
      padding-right: 43px;
      h2 {
        font-size: 20px;
        letter-spacing: 3px;
      }
      div {
        clear: right;
        letter-spacing: 3px;
        font-size: 18px;
      }
      span {
        width: 120px;
        height: 120px;
      }
      p {
        padding-right: 8px;
        letter-spacing: 1px;
        font-size: 8pt;
      }
    }

    .section-headline {
      clear: both;
      letter-spacing: 3px;
      font-size: 10pt;
      margin-left: 20px;
      margin-bottom: 10px;
      padding-top: 15px;
    }

    li {
      padding-top: 9px;
    }

    p {
      margin-bottom: 25px;
      font-size: 10pt;
      line-height: 17pt;
    }

    .fa, .material-icons {
      line-height: 1;
      font-size: 26px;
    }

    h2 {
      font-size: 22pt;
      line-height: 37pt;
    }

    h4 {
      font-size: 12pt;
      line-height: 20pt;
    }

    .rightCol {
      order: 2;
      padding-left: 50px;
      padding-right: 10px;
      padding-bottom: 10px;
      .block {
        width: 86%;
        padding: 30px;
        margin-top: 5px;
        margin-bottom: 5px;
        .headline {
          font-size: 15px;
        }
        .subheadline {
          font-size: 14px;
        }
        .info {
          font-size: 14px;
          padding-top: 10px;
        }
        .lists-headline {
          font-size: 14px;
          padding-top: 10px;
        }
        .list {
          font-size: 14px;
        }
        .icon {
          width: 3%;
          margin-left: -15px;
          padding-top: 6px;
          .fa, .material-icons {
            font-size: 7pt;
          }
        }
      }
    }

    .leftCol {
      order: 3;
      padding-bottom: 15px;
      .section-headline {
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .heading {
        height: 277px;
      }
      .item {
        margin-top: 13px;
        .icon {
          width: 10%;
          padding-left: 56px;
          .fa-city {
            padding-top: 5px;
          }
          .fa-github {
            padding-top: 0;
          }
          .fa-key {
            padding-top: 0;
          }
        }
        .text {
          width: 72%;
          padding-right: 10%;
          padding-top: 1px;
          font-size: 17px;
          li {
            font-size: 17px;
          }
        }
        span {
          font-weight: 300;
        }
        .infos {
          width: 93%;
          padding-top: 10px;
          .description {
            font-size: 17px;
          }
          .left {
            width: 10%;
            padding-top: 3px;
            i:nth-child(2) {
              padding-top: 4px;
            }
          }
          .right {
            width: 91%;
            font-size: 17px;
          }
          .skills {
            border-radius: 5px;
            padding: 10px;
          }
          .subheadline {
            padding-bottom: 10px;
          }
        }
      }
    }

    #githubIcon {
      width: 25px;
      padding-left: 17px;
    }

    #resume-footer {
      order: 4;
      padding: 10px 40px;
      h3, p {
        padding: 5px;
      }
      p {
        font-size: 17px;
        font-weight: 300;
      }
    }
  }
  @media ($md-only) {
    .title {
      right: 25px;
      padding-top: 20px;
      bottom: 25px;
      h2 {
        font-size: 16px;
        letter-spacing: 5px;
      }
      div {
        margin-top: -5px;
        line-height: 15pt;
        letter-spacing: 2px;
        font-size: 14px;
      }
      span {
        width: 120px;
        height: 120px;
      }
      p {
        padding-right: 8px;
        letter-spacing: 1px;
        font-size: 8pt;
      }
    }

    .section-headline {
      letter-spacing: 3px;
      font-size: 10pt;
      margin-left: 20px;
      margin-top: 25px;
      margin-bottom: 10px;
    }

    li {
      padding-top: 9px;
    }

    p {
      margin-bottom: 25px;
      font-size: 10pt;
      line-height: 17pt;
    }

    .fa, .material-icons {
      line-height: 1;
      font-size: 26px;
    }

    h2 {
      font-size: 22pt;
      line-height: 37pt;
    }

    h4 {
      font-size: 12pt;
      line-height: 20pt;
    }

    .rightCol {
      margin-left: auto;
      float: left;
      display: flex;
      flex-direction: column;
      padding-left: 23px;
      padding-right: 9%;
      width: 38.5%;
      .block {
        padding: 20px;
        margin-top: 5px;
        margin-bottom: 5px;
        .headline {
          font-size: 15px;
        }
        .subheadline {
          font-size: 14px;
        }
        .info {
          font-size: 14px;
          padding-top: 10px;
        }
        .lists-headline {
          font-size: 14px;
          padding-top: 10px;
        }
        .list {
          font-size: 14px;
        }
        .icon {
          width: 3%;
          margin-left: -15px;
          padding-top: 6px;
          .fa, .material-icons {
            font-size: 7pt;
          }
        }
      }
    }

    .leftCol {
      flex-direction: column;
      flex-grow: 1;
      margin-right: auto;
      float: left;
      padding-left: 21%;
      padding-right: 15px;
      width: 16%;
      .section-headline {
        margin-top: 40px;
        margin-bottom: 10px;
      }
      .heading {
        height: 277px;
      }
      .item {
        margin-top: 13px;
        .icon {
          width: 20%;
          .fa-city {
            padding-top: 6px;
          }
          .fa-github {
            padding-top: 6px;
          }
          .fa-key {
            padding-top: 9px;
          }
        }
        .text {
          width: 69%;
          padding-right: 10%;
          padding-top: 5px;
          font-size: 15px;
          li {
            font-size: 15px;
          }
        }
        span {
          font-weight: 300;
        }
        .infos {
          width: 97%;
          padding-top: 10px;
          .description {
            font-size: 14px;
          }
          .left {
            width: 10%;
            padding-top: 3px;
            i:nth-child(2) {
              padding-top: 4px;
            }
          }
          .right {
            width: 93%;
          }
          .skills {
            border-radius: 5px;
            padding: 8px;
          }
          .subheadline {
            padding-bottom: 10px;
          }
        }
      }
    }

    #githubIcon {
      width: 25px;
      padding-left: 17px;
    }

    #resume-footer {
      padding: 10px 40px;
      h3, p {
        padding: 5px;
      }
    }
  }
  @media ($lg-only) {
    .title {
      right: 25px;
      padding-top: 20px;
      bottom: 25px;
      h2 {
        font-size: 20px;
        letter-spacing: 7px;
      }
      div {
        margin-top: -5px;
        line-height: 15pt;
        letter-spacing: 4px;
        font-size: 18px;
      }
      span {
        width: 120px;
        height: 120px;
      }
      p {
        padding-right: 8px;
        letter-spacing: 1px;
        font-size: 8pt;
      }
    }

    .section-headline {
      letter-spacing: 3px;
      font-size: 10pt;
      margin-left: 20px;
      margin-top: 25px;
      margin-bottom: 10px;
    }

    li {
      padding-top: 9px;
    }

    p {
      margin-bottom: 25px;
      font-size: 10pt;
      line-height: 17pt;
    }

    .fa, .material-icons {
      line-height: 1;
      font-size: 26px;
    }

    h2 {
      font-size: 22pt;
      line-height: 37pt;
    }

    h4 {
      font-size: 12pt;
      line-height: 20pt;
    }

    .rightCol {
      margin-left: auto;
      float: left;
      display: flex;
      flex-direction: column;
      padding-left: 23px;
      padding-right: 9%;
      width: 38.5%;
      .block {
        padding: 20px;
        margin-top: 5px;
        margin-bottom: 5px;
        .headline {
          font-size: 15px;
        }
        .subheadline {
          font-size: 14px;
        }
        .info {
          font-size: 14px;
          padding-top: 10px;
        }
        .lists-headline {
          font-size: 14px;
          padding-top: 10px;
        }
        .list {
          font-size: 14px;
        }
        .icon {
          width: 3%;
          margin-left: -15px;
          padding-top: 6px;
          .fa, .material-icons {
            font-size: 7pt;
          }
        }
      }
    }

    .leftCol {
      flex-direction: column;
      flex-grow: 1;
      margin-right: auto;
      float: left;
      padding-left: 26%;
      padding-right: 15px;
      width: 16%;
      .section-headline {
        margin-top: 40px;
        margin-bottom: 10px;
      }
      .heading {
        height: 277px;
      }
      .item {
        margin-top: 13px;
        .icon {
          width: 20%;
          .fa-city {
            padding-top: 6px;
          }
          .fa-github {
            padding-top: 6px;
          }
          .fa-key {
            padding-top: 9px;
          }
        }
        .text {
          width: 69%;
          padding-right: 10%;
          padding-top: 5px;
          font-size: 15px;
          li {
            font-size: 15px;
          }
        }
        span {
          font-weight: 300;
        }
        .infos {
          width: 97%;
          padding-top: 10px;
          .description {
            font-size: 14px;
          }
          .left {
            width: 10%;
            padding-top: 3px;
            i:nth-child(2) {
              padding-top: 4px;
            }
          }
          .right {
            width: 93%;
          }
          .skills {
            border-radius: 5px;
            padding: 8px;
          }
          .subheadline {
            padding-bottom: 10px;
          }
        }
      }
    }

    #githubIcon {
      width: 25px;
      padding-left: 17px;
    }

    #resume-footer {
      padding: 10px 40px;
      h3, p {
        padding: 5px;
      }
    }
  }
  @media ($xl-up) {
    .title {
      right: 25px;
      padding-right: 25px;
      padding-top: 20px;
      bottom: 25px;
      h2 {
        font-size: 1.2em;
        letter-spacing: 10px;
      }
      div {
        margin-top: -5px;
        padding-right: 8px;
        line-height: 15pt;
        letter-spacing: 3px;
        font-size: 12pt;
      }
      span {
        width: 120px;
        height: 120px;
      }
      p {
        padding-right: 8px;
        letter-spacing: 1px;
        font-size: 8pt;
      }
    }

    .section-headline {
      letter-spacing: 3px;
      font-size: 10pt;
      margin-left: 20px;
      margin-top: 25px;
      margin-bottom: 10px;
    }

    li {
      padding-top: 9px;
    }

    p {
      margin-bottom: 25px;
      font-size: 10pt;
      line-height: 17pt;
    }

    .fa, .material-icons {
      line-height: 1;
      font-size: 26px;
    }

    h2 {
      font-size: 22pt;
      line-height: 37pt;
    }

    h4 {
      font-size: 12pt;
      line-height: 20pt;
    }

    .rightCol {
      margin-left: auto;
      float: left;
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      padding-right: 17%;
      width: 32.5%;
      .block {
        padding: 20px;
        margin-top: 5px;
        margin-bottom: 5px;
        .headline {
          font-size: 15px;
        }
        .subheadline {
          font-size: 14px;
        }
        .info {
          font-size: 14px;
          padding-top: 10px;
        }
        .lists-headline {
          font-size: 14px;
          padding-top: 10px;
        }
        .list {
          font-size: 14px;
        }
        .icon {
          width: 3%;
          margin-left: -15px;
          padding-top: 6px;
          .fa, .material-icons {
            font-size: 7pt;
          }
        }
      }
    }

    .leftCol {
      flex-direction: column;
      flex-grow: 1;
      margin-right: auto;
      float: left;
      padding-left: 30%;
      width: 16%;
      .section-headline {
        margin-top: 40px;
        margin-bottom: 10px;
      }
      .heading {
        height: 277px;
      }
      .item {
        margin-top: 13px;
        .icon {
          width: 20%;
          .fa-city {
            padding-top: 6px;
          }
          .fa-github {
            padding-top: 6px;
          }
          .fa-key {
            padding-top: 9px;
          }
        }
        .text {
          width: 69%;
          padding-right: 10%;
          padding-top: 5px;
          font-size: 15px;
          li {
            font-size: 15px;
          }
        }
        span {
          font-weight: 300;
        }
        .infos {
          width: 97%;
          padding-top: 10px;
          .description {
            font-size: 14px;
          }
          .left {
            width: 10%;
            padding-top: 3px;
            i:nth-child(2) {
              padding-top: 4px;
            }
          }
          .right {
            width: 93%;
          }
          .skills {
            border-radius: 5px;
            padding: 8px;
          }
          .subheadline {
            padding-bottom: 10px;
          }
        }
      }
    }

    #githubIcon {
      width: 25px;
      padding-left: 17px;
    }

    #resume-footer {
      padding: 10px 40px;
      h3, p {
        padding: 5px;
      }
    }
  }
</style>

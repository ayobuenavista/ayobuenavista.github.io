<template>
  <div class="resume">
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
        <span id="myselfpic"></span>
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

<style lang="less" scoped>
  .resume {
    font-family: 'Roboto' !important;
    background: #ffffff;
  }

  a {
    cursor: pointer;
  }

  .description-personal {
    margin-left: 20px;
    margin-top: 20px;
    padding-right: 40px;
    text-align: justify;
    font-family: Roboto;
  }

  .title {
    right: 25px;
    padding-right: 25px;
    padding-top: 20px;
    bottom: 25px;
    h2 {
      float: right;
      text-transform: uppercase;
      display: block;
      font-size: 1.2em;
      -webkit-margin-start: 0;
      -webkit-margin-end: 0;
      color: white;
      color: rgba(0, 0, 0, 0.7);
      padding-top: 0;
      margin-top: 0;
      letter-spacing: 10px;
      font-weight: 400;
    }
    div {
      float: right;
      margin-top: -5px;
      margin-top: 0;
      margin: 0;
      padding: 0;
      padding-right: 8px;
      line-height: 15pt;
      font-weight: 500;
      letter-spacing: 2px;
      letter-spacing: 3px;
      color: white;
      color: #16151c;
      color: rgba(63, 61, 60, 0.71);
      display: block;
      font-size: 0.7em;
      font-size: 12pt;
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
      width: 120px;
      height: 120px;
    }
    p {
      float: right;
      padding-right: 8px;
      letter-spacing: 1px;
      font-weight: 300;
      text-align: justify;
      color: rgba(0, 0, 0, 0.7);
      display: block;
      font-size: 0.7em;
      font-size: 8pt;
    }
  }

  .section-headline {
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 3px;
    font-size: 10pt;
    opacity: 0.8;
    margin-left: 20px;
    margin-top: 25px;
    margin-bottom: 10px;
    color: #2D3B8E;
  }

  .c {
    clear: both;
  }

  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding-top: 9px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  p {
    margin-top: 0;
    margin-bottom: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 10pt;
    line-height: 17pt;
  }

  .m_box {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .fa, .material-icons {
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 26px;
  }

  h1, h3, h5, h6 {
    font-weight: 400;
    margin: 0;
  }

  h2 {
    font-weight: 400;
    font-weight: 500;
    margin: 0;
    margin: 0;
    font-size: 22pt;
    line-height: 37pt;
  }

  h4 {
    font-weight: 400;
    margin: 0;
    font-size: 12pt;
    line-height: 20pt;
    opacity: 1;
  }

  .rightCol {
    margin-left: auto;
    width: 32.5%;
    height: 100%;
    padding-left: 10px;
    padding-right: 17%;
    float: left;
    display: flex;
    flex-direction: column;
    .block {
      width: 90%;
      position: relative;
      background-color: #ffffff;
      padding: 20px;
      margin-top: 5px;
      margin-bottom: 5px;
      display: inline-block;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
      .headline {
        font-weight: 300;
        display: block;
        font-size: 15px;
        color: rgba(0, 0, 0, 0.870588);
      }
      .subheadline {
        color: rgba(0, 0, 0, 0.541176);
        display: block;
        font-size: 14px;
        font-weight: 300;
      }
      .left {
        float: left;
      }
      .right {
        float: right;
      }
      .info {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.870588);
        margin-bottom: 0;
        padding-top: 10px;
        text-align: justify;
      }
      .lists-headline {
        font-size: 14px;
        font-weight: 400;
        color: #2A4552;
        margin-bottom: 0;
        padding-top: 10px;
        text-align: left;
      }
      .list {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.870588);
        margin-bottom: 0;
        text-align: left;
      }
      .icon {
        width: 3%;
        float: left;
        margin-left: -15px;
        padding-top: 6px;
        .fa, .material-icons {
          text-align: center;
          display: block;
          font-size: 7pt;
          color: #2A9A8D;
        }
      }
      .content {
        width: 80%;
        position: absolute;
        height: 96%;
        left: 17%;
        padding-right: 3%;
        text-align: left;
        display: flex;
        flex-direction: column;
        .item {
          border-bottom: 1px solid #bdbdbd;
          flex: 1;
          width: 97%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align: left;
          padding-top: 0;
          span {
            color: #d8ab94;
            margin-top: 0;
            font-size: 10pt;
            line-height: 16pt;
          }
          p {
            margin-top: 5px;
          }
        }
        .item:last-of-type {
          border-bottom-style: none;
          border-bottom-style: none;
        }
      }
    }
  }

  .leftCol {
    flex-direction: column;
    flex-grow: 1;
    margin-right: auto;
    width: 16%;
    float: left;
    padding: 0;
    padding-left: 30%;
    text-align: left;
    color: #ffffff;
    background-color: #2B5569;
    overflow: hidden;
    // display: block;
    .section-headline {
      color: #47D6A2;
      margin-top: 40px;
      margin-bottom: 10px;
    }
    a {
      color: #ffffff;
      text-decoration: none;
    }
    .heading {
      background-color: white;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
      width: 100%;
      height: 277px;
    }
    .item {
      width: 100%;
      margin-top: 13px;
      float: left;
      .fa, .material-icons {
        display: inherit;
        text-align: center;
      }
      .icon {
        width: 20%;
        float: left;
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
        float: right;
        width: 69%;
        padding-right: 10%;
        padding-top: 5px;
        display: block;
        font-size: 15px;
        font-weight: 300;
        li {
          padding-top: 0;
          display: block;
          font-size: 15px;
          font-weight: 300;
        }
      }
      span {
        font-weight: 300;
      }
      .infos {
        clear: both;
        width: 97%;
        padding-top: 10px;
        color: #ffffff;
        text-align: justify;
        .description {
          color: rgba(255, 255, 255, 0.59);
          font-size: 14px;
        }
        .left {
          float: left;
          width: 10%;
          padding-top: 3px;
          i:nth-child(2) {
            float: left;
            padding-top: 4px;
          }
        }
        .right {
          float: right;
          width: 93%;
        }
        .skills {
          background-color: #2A4552;
          border-radius: 5px;
          padding: 8px;
          text-align: left;
        }
        .subheadline {
          display: block;
          font-weight: 400;
          padding-bottom: 10px;
        }
      }
    }
    .item.last .text {
      border-bottom-style: none;
      padding-bottom: 0;
    }
  }

  #myselfpic {
    background-image: url('../resume/id.jpg');
    color: black;
  }

  #githubIcon {
    width: 25px;
    padding-left: 17px;
  }

  #resume-footer {
    padding: 10px 40px;
    color: #ffffff;
    color: rgba(255, 255, 255, 0.59);
    background-color: #2A9A8D;
    box-sizing: border-box;
    position: relative;
    text-align: justify;
    width: 100%;
    h3, p {
      color: #ffffff;
      padding: 5px;
      font-weight: 400;
      margin-bottom: 0;
    }
  }
</style>

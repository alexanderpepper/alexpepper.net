<template lang="pug">
  v-container(fluid)
    v-slide-y-transition(mode='out-in')
      #resume
        v-layout.name(wrap)
          v-flex.right-side(sm10, offset-sm2)
            v-flex(xs12)
              h1
        v-layout.summary(wrap)
          v-flex.left-side.pr-2(sm2) summary
          v-flex.right-side(sm10)
            v-flex(xs12) Software engineer with a strong background in object-oriented design, relational databases, application security, and mobile and web app development. Experienced in providing estimates, planning architecture, test-driven development, source control, conducting code reviews, and iterative development. Particularly interested in UI/UX and building with emergent mobile and web technologies.
        v-layout.links(wrap)
          v-flex.left-side.pr-2(sm2) links
          v-flex.right-side(sm10)
            v-layout(wrap)
              v-flex(sm6, xs12)
                a(href='https://alexpepper.us') alexpepper.us
              v-flex(sm6, xs12)
                a(href='https://github.com/alexanderpepper') github.com/alexanderpepper
              v-flex(sm6, xs12)
                a(href='https://www.codeschool.com/users/alexpepper') codeschool.com/users/alexpepper
              v-flex(sm6, xs12)
                a(href='http://itunes.com/alexanderpepper') itunes.com/alexanderpepper
              v-flex(sm6, xs12)
                a(href="http://itunes.com/brianwalker") itunes.com/brianwalker
              v-flex(sm6, xs12)
                a(href="https://play.google.com/store/apps/developer?id=Brian+Browne+Walker") play.google.com/BrianBrowneWalker
        v-layout.technology(wrap)
          v-flex.left-side.pr-2(sm2) technology
          v-flex.right-side(sm10)
            v-layout(wrap)
              v-flex.technology-column(xs3)
                .technology-header languages
                ul
                  li Java
                  li C#
                  li Objective-C
                  li Swift
                  li SQL
                  li PL/SQL
                  li JavaScript
                  li ES6
                  li TypeScript
                  li JSX
                  li HTML5
                  li Pug
                  li CSS3
                  li SASS
              v-flex.technology-column(xs3)
                .technology-header frameworks
                ul
                  li Cocoa Touch
                  li Android SDK
                  li ReactNative
                  li Node.js
                  li ExpressJS
                  li LoopBack
                  li Spring/Hibernate
                  li AngularJS
                  li Angular Material
                  li Ionic
                  li VueJS
                  li Vuetify
                  li Bootstrap
                  li FabricJS
                  li Three.js

              v-flex.technology-column(xs3)
                .technology-header systems
                ul
                  li MongoDB
                  li Oracle Database
                  li MySQL
                  li Git
                  li Linux
                  li Apache Web Server
                  li nginx
                  li Tomcat
                  li AWS S3
                  li AWS Route53
                  li DigitalOcean
                  li Twilio
                  li DialogFlow
                  li LetsEncrypt
                  li Gitlab
              v-flex.technology-column(xs3)
                .technology-header tools
                ul
                  li WebStorm
                  li IntelliJ
                  li AppCode
                  li Rider
                  li Xcode
                  li Android Studio
                  li Affinity Designer
                  li NPM
                  li Bower
                  li Gulp
                  li Webpack
                  li ESLint
                  li PM2
                  li Unity
                  li Vuforia
        v-layout.experience(wrap)
          v-flex.left-side.pr-2(sm2) experience
          v-flex.right-side(sm10)
            v-layout(wrap)
              v-flex.company(xs8) H-E-B Grocery, San Antonio, TX
              v-flex.timespan(xs4) Apr 2018 – Present
              v-flex.description(xs12)
                .job-title Senior Developer
        v-layout.experience(wrap)
          v-flex.right-side(sm10, offset-sm2)
            v-layout(wrap)
              v-flex.company(xs8) Harland Clarke Holdings, San Antonio, TX
              v-flex.timespan(xs4) Jan 2016 – Apr 2018
              v-flex.description(xs12)
                .job-title Application Engineer IV
                ul
                  li Supported innovation efforts by independently designing and implementing applications prototypes
                  li Rapidly developed dozens of full-stack web apps and native and cross-platform mobile apps
                  li Conducted evaluations of technologies from companies under consideration for mergers and acquisitions
                  li Worked closely with business and IT resources across the organizations under the holdings company
                  li Created a chatbot platform with an Angular Material interface, LoopBack server, NLP capabilities, and analytics
                  li Produced an AR marketing platform with a Unity/Vuforia mobile app and a LoopBack/VuetifyJS/FabricJS web app
                  li Managed Apple and Google app store accounts and deployed both public and internal enterprise mobile apps
                  li Maintained Ubuntu virtual private servers on DigitalOcean for hosting web apps and services
                  li Used AWS for content management, domain registration, DNS management, and sending email notifications

        v-layout.experience(wrap)
          v-flex.right-side(sm10, offset-sm2)
            v-layout(wrap)
              v-flex.company(xs8) Denim Group, LLC, San Antonio, TX
              v-flex.timespan(xs4) Feb 2012 – Aug 2015
              v-flex.description(xs12)
                .job-title Senior Application Development and Security Consultant
                ul
                  li Consultant for clients in a wide array of sectors including entertainment, military, government, energy, and banking
                  li Developed the native iOS and Android app components of a location-based, social commerce service
                  li Implemented new features and fixed bugs in all layers of large-scale Grails and Spring/Hibernate web apps
                  li Produced an iOS app and its corresponding Spring/Hibernate web service for a major sporting organization
                  li Performed application security audits of mobile and web apps using automated software and manual techniques
                  li Conducted interviews with candidates and participated regularly in meetings and demos with clients
        v-layout.experience(wrap)
          v-flex.right-side(sm10, offset-sm2)
            v-layout(wrap)
              v-flex.company(xs8) Independent Work, San Antonio, TX
              v-flex.timespan(xs4) Nov 2010 – Present
              v-flex.description(xs12)
                .job-title Mobile App Producer
                ul
                  li Taught self iOS and Android development with native frameworks and published 8 iOS and 4 Android apps:
                  li
                    v-layout.apps(wrap)
                      v-flex.app(xs3)
                        .app-name MusicWatch
                        .app-info iOS: Feb 2011
                      v-flex.app(xs3)
                        .app-name BookWatch
                        .app-info iOS: May 2011
                      v-flex.app(xs3)
                        .app-name AppWatch
                        .app-info iOS: Nov 2011
                      v-flex.app(xs3)
                        .app-name All Flags
                        .app-info iOS: Jan 2014
                      v-flex.app(xs3)
                        .app-name I Ching
                        .app-info iOS: Nov 2011
                        .app-info Android: Feb 2012
                      v-flex.app(xs3)
                        .app-name Tao Te Ching
                        .app-info iOS: Dec 2011
                        .app-info Android: Feb 2012
                      v-flex.app(xs3)
                        .app-name Hua Hu Ching
                        .app-info iOS: Dec 2011
                        .app-info Android: Feb 2012
                      v-flex.app(xs3)
                        .app-name Art of War
                        .app-info iOS: Dec 2011
                        .app-info Android: Feb 2012
                  li Responsible for the UI/UX, implementation, testing, deployment, store presence, and continued improvement of all apps

        v-layout.experience(wrap)
          v-flex.right-side(sm10, offset-sm2)
            v-layout(wrap)
              v-flex.company(xs8) eVenture Technologies, LLC, New Orleans, LA
              v-flex.timespan(xs4) Mar 2008 – Mar 2010
              v-flex.description(xs12)
                .job-title Programmer/Analyst
                ul
                  li Created and maintained Oracle Forms, Reports, and PL/SQL procedures for a mission-critical project
                  li Helped to ensure sustainability of a legacy Oracle Forms project by creating a conversion prototype using JDeveloper 11g
                  li Wrote standards for and hundreds of pages of software specification documents to facilitate the conversion process
        v-layout.experience(wrap)
          v-flex.right-side(sm10, offset-sm2)
            v-layout.unrelated-positions(wrap)
              v-flex.unrelated.mb-2(md4, sm6, xs12)
                .unrelated-timespan Aug 2006 – May 2007
                .unrelated-job-title Researcher/Java Developer
                .unrelated-company Naval Research Labs,
                .unrelated-company NASA Stennis Space Center, MS
              v-flex.unrelated.mb-2(md4, sm6, xs12)
                .unrelated-timespan Jun 2006 – Aug 2006
                .unrelated-job-title Java Help Desk
                .unrelated-company UNO Computer Science Dept,
                .unrelated-company New Orleans, LA
              v-flex.unrelated.mb-2(md4, sm6, xs12)
                .unrelated-timespan Jun 2005 – May 2006
                .unrelated-job-title Researcher/Java Developer
                .unrelated-company Naval Research Labs,
                .unrelated-company NASA Stennis Space Center, MS
              v-flex.unrelated.mb-2(md4, sm6, xs12)
                .unrelated-timespan Oct 2010 – Nov 2010
                .unrelated-job-title Document Scanning Contractor
                .unrelated-company Cambias AllState, Metairie, LA
              v-flex.unrelated.mb-2(md4, sm6, xs12)
                .unrelated-timespan Oct 2005 – Apr 2006
                .unrelated-job-title Directory Assistance Operator
                .unrelated-company INFONXX, San Antonio, TX
              v-flex.unrelated.mb-2(md4, sm6, xs12)
                .unrelated-timespan Apr 2001 – Jun 2005
                .unrelated-job-title Cook, Relief Kitchen Manager
                .unrelated-company Remoulade Inc, New Orleans, LA
          v-layout.education(wrap)
            v-flex.left-side.pr-2(sm2) education
            v-flex.right-side(sm10)
              v-layout(wrap)
                v-flex.achievement(xs7)
                  .degree Bachelor of Science in Computer Science
                  .university Fall 2007, University of New Orleans
                v-flex.achievement(xs5)
                  a.certification(href='https://www.youracclaim.com/badges/74394436-ad53-4fa2-9be7-ca3c00d648e1/public_url')
                    .degree Oracle Certified Associate
                    .university Jan 2014, Java SE 7 Programmer
</template>

<script>
  export default {
    props: ['setTitle'],
    created () {
      this.setTitle('Resume')
    }
  }
</script>

<style scoped>
  .name {
    margin-bottom: 15px;
    margin-top: 5px;
  }

  .education, .technology, .experience, .summary, .links, .unrelated-positions {
    margin-bottom: 16px;
  }

  .education .certification {
    text-align: right;
  }

  .left-side {
    text-align: right;
    padding: 0;
    font-size: 20px;
    font-weight: bold;
  }

  .technology .left-side {
    margin-top: -5px;
  }

  .experience .left-side,
  .education .left-side,
  .summary .left-side,
  .links .left-side {
    margin-top: -7px;
  }

  .right-side {
    text-align: left;
  }

  .experience .company,
  .experience .timespan,
  .experience .location {
    font-style: italic;

  }

  .experience .location {
    text-align: center;
    padding: 0;
  }

  .experience .timespan {
    text-align: right;
  }

  .experience ul,
  .technology ul,
  .summary ul {
    padding: 0;
    list-style-type: none;
  }

  .experience ul li {
    margin: 8px 0 0 0;
  }


  .experience .job-title,
  .education .degree,
  .experience .position {
    font-weight: 500;
  }

  .experience .job-title {
    margin-bottom: 8px;
  }

  .experience .description {
    border-top: 1px dashed black;
  }

  .technology .technology-header {
    font-weight: 500;
    font-size: 16px;
  }

  .technology ul li {
    line-height: 1.24;
  }

  .education .university {
    font-style: italic;
  }

  .experience .app {
    margin-bottom: 8px;
    padding: 0;
  }

  .experience .app-name {
    font-weight: 500;
  }

  .experience .app-info {
    font-style: italic;
  }

  .experience .unrelated-timespan,
  .experience .unrelated-company {
    font-style: italic;
  }

  .experience .unrelated-job-title {
    font-weight: 500;
  }

  .experience .unrelated {
    margin-bottom: 16px;
  }

  .name h1::after{
    content: "[Henry] Alex(ander) Pepper";
  }

  @media screen and (max-width: 420px) {
    .name h1::after{
      content: "Alex Pepper";
    }
  }

  @media screen and (max-width: 632px) {
    .education .achievement {
      max-width: 100%;
      flex-basis: 100%;
      margin-bottom: 8px;
    }
    .education .certification {
      text-align: left;
    }
  }


  @media screen and (max-width: 700px) {
    .left-side {
      margin-bottom: 4px;
      max-width: 100%;
      flex-basis: 100%;
      text-align: left;
    }

    .right-side {
      margin-left: 0;
      max-width: 100%;
      flex-basis: 100%;
    }

    .name .right-side {
      text-align: center;
      max-width: 100%;
      flex-basis: 100%;
      margin-left: 0;
    }
  }
  @media screen and (max-width: 624px) {
    .experience .company,
    .experience .timespan {
      max-width: 100%;
      flex-basis: 100%;
    }

    .experience .timespan {
      text-align: left;
    }
  }

  @media screen and (max-width: 550px) {
    .technology .technology-column {
      flex-basis: 50%;
      max-width: 50%;
      margin-bottom: 8px;
    }
  }

  @media screen and (max-width: 650px) {
    .experience .app {
      flex-basis: 33.333333%;
      max-width: 33.333333%;
    }
  }

  @media screen and (max-width: 450px) {
    .experience .app {
      flex-basis: 50%;
      max-width: 50%;
    }
  }
</style>

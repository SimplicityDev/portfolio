import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import moment from 'moment'
const About = (props) =>
    <div className="about" id="about">
        <div className="heading">
            <h1><FormattedMessage id="about.title"
                defaultMessage="About"
                description="About header" /></h1>
            <div className="bar" />
        </div>
        <div className="flex">
            <Me />
            <Beliefs />
        </div>
        <Education/>
    </div>

const MugShot = () =>
    <div className="mugshot" />
const Me = () =>
    <div className="me half-col">
        <div id="who">
            <h2 className="bot-left">
                <FormattedMessage
                    id="app.me.who"
                    defaultMessage="Who is this guy?"
                    description="question who"
                />
            </h2>
            <MugShot />
            <p>
                <FormattedHTMLMessage
                    id="app.me.about"
                    defaultMessage="I'm a {age} year old with a passion for development, be it development to make the work easier for myself, for others or development towards building beautiful things."
                    description="About me"
                    values={{ age: moment('1996-07-17T12:59-0500').fromNow().split(" ")[0] }}
                />
            </p>
        </div>
        <br />
        <Skills />
        <Interests />
    </div>
const Beliefs = () =>
    <div className="beliefs half-col">
        <h2 className="bot-left">
            <FormattedMessage
                id="beliefs.heading"
                defaultMessage="My beliefs"
                description="beliefs heading"
            />
        </h2>
        <div className="skill">
            <div className="left">
                <Hexagon icon="speedometer" />
            </div>
            <div className="right">
                <p className="skill_desc">
                    <FormattedMessage id="skill.speed.desc"
                        defaultMessage="When talking about speed, my personal ideal is a fast loading, lag free experience for every user. Whatever their client, whatever their connection. Ofcourse, this only applies to a certain extent, but it won't keep me from working towards an experience as described before for at least most of the cases."
                        desc="Skill desc speed"
                    />
                </p>
            </div>

        </div>
        <div className="skill">
            <div className="left">
                <Hexagon icon="responsive" />
            </div>
            <div className="right">
                <p className="skill_desc">
                    <FormattedMessage id="skill.responsive.desc"
                        defaultMessage="Nowadays, you can't just make a website compatible with computers and be done with it. No sir, nowadays, you make them for every device thinkable. Desktops, laptops, phones, tablets even smartwatches are joining in on the fun. All these devices have a different surface area on which they can display a website, which is where the challenge lies, this being: ``How do I make sure this application is visible across all devices?``. The answer is simple, responsivesness. A lovely challenge if you ask me."
                        desc="Skill responsive speed"
                    />
                </p>
            </div>
        </div>
        <div className="skill">
            <div className="left">
                <Hexagon icon="lightbulb" />
            </div>
            <div className="right">
                <p className="skill_desc">
                    <FormattedMessage id="skill.inventive.desc"
                        defaultMessage="I'm a huge supporter of the use of state-of-the-art techniques to ensure a secure and easy-to-use application. Not only will this contribute to the client, but also to the workload of a programmer. If set up correctly, the latest and greatest techniques focus on reusability and extendability. Which in the long term, will save a programmer a lot of time and effort."
                        desc="Skill desc speed"
                    />
                </p>
            </div>
        </div>
        <div className="skill">

            <div className="left">
                <Hexagon icon="rocket" />
            </div>
            <div className="right">
                <p className="skill_desc">
                    <FormattedMessage id="skill.dynamic.desc"
                        defaultMessage="Who doesn't love a website where they can dynamically change what the user sees, be it user specific or be it general information. Dynamic content is beautiful, I personally, highly dislike static pages, what if something changes? What if it's dynamic, but is displayed on a static page? Are we really going to reload the entire thing? Let's not. Dynamic content is the way to go if you ask me."
                        desc="Skill desc speed"
                    />
                </p>
            </div>
        </div>
    </div>

const Hexagon = (props) =>
    <div className="hexagon">
        <i className={`mdi mdi-${props.icon}`}></i>
    </div>

const languages = [
    {
        "name": "HTML",
        "knowledge": 90
    },
    {
        "name": "CSS",
        "knowledge": 80
    },
    {
        "name": "JS",
        "knowledge": 60
    },
    {
        "name": "React",
        "knowledge": 30
    },
    {
        "name": "PHP",
        "knowledge": 75
    },
    {
        "name": "MySQL",
        "knowledge": 70
    }
]
const Skills = () =>
    <div className="skills">
        <h2 className="bot-left">
            <FormattedMessage id="programming.languages.title"
                defaultMessage="Programming languages"
                desc="programming languages title"
            />
        </h2>
        <div className="languages">
            {languages.map((language, i) =>
                <div className="language" key={i}>
                    <div className="label">
                        {language.name}
                    </div>
                    <div className="progress" data-progress={`${language.knowledge}%`} data-label={language.name}>
                        <div className="inner" style={{ width: `${language.knowledge}%` }}></div>
                    </div>
                </div>
            )}
        </div>
    </div>

const Interests = () =>
    <div className="interests">
        <h2 className="bot-left">
            <FormattedMessage id="interests.heading"
                defaultMessage="Interested in learning"
                description="interests heading"
            />
        </h2>
        <div className="languages">
            <i className="devicon-swift-plain colored"></i>
            <i className="devicon-react-plain colored"></i>
            <i className="devicon-android-plain colored"></i>
        </div>
    </div>

const Education = () =>
    <section id="timeline">
        
    </section>

export default About
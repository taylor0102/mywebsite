import "./Skills.css";
import FadeUp from "../../utils/FadeUp";
import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  ReactIcon,
  NodeIcon,
  TsIcon,
  NextIcon,
  PhpIcon,
  MysqlIcon,
  MongoIcon,
  FlaskIcon,
  GdriveIcon,
  SocketIoIcon,
  RestApiIcon,
  CppIcon,
  FigmaIcon,
  GitIcon,
  NpmIcon,
  VsCodeIcon,
  ExpressIcon,
  PythonIcon,
  TailwindIcon,
  ReduxIcon,
  NextAuthIcon,
  NanostoresIcon,
  FirebaseIcon,
  D3JsIcon,
  VueIcon,
  AngularIcon,
	AWSIcon,
	HerokuIcon,
	GCPIcon,
	DockerIcon,
	AzureIcon,
	DjangoIcon,
	PostgreIcon
} from "../../assets/Icons";
import SkillGrid from "../../utils/SkillGrid";

const Skills = () => {
  const FrontendStack = [
    {
      name: "HTML",
      icon: HtmlIcon,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS",
      icon: CssIcon,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: JsIcon,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "TypeScript",
      icon: TsIcon,
      link: "https://www.typescriptlang.org/",
    },
    { name: "React.js", icon: ReactIcon, link: "https://react.dev/" },
    { name: "Next.js", icon: NextIcon, link: "https://nextjs.org/" },
    { name: "Vue", icon: VueIcon, link: "https://vuejs.org/" },
    { name: "Angular", icon: AngularIcon, link: "https://angular.io/" },
    { name: "Tailwind", icon: TailwindIcon, link: "https://tailwindcss.com/" },
    { name: "Redux", icon: ReduxIcon, link: "https://redux.js.org/" },
    { name: "D3.js", icon: D3JsIcon, link: "https://d3js.org/" },
    {
      name: "Nanostores",
      icon: NanostoresIcon,
      link: "https://github.com/nanostores/nanostores",
    },
  ];
  const BackendStack = [
    { name: "Node.js", icon: NodeIcon, link: "https://nodejs.org/" },
    { name: "Express.js", icon: ExpressIcon, link: "https://expressjs.com/" },
		{ name: "Django", icon: DjangoIcon, link: "https://www.djangoproject.com/" },
		{ name: "Flask", icon: FlaskIcon, link: "https://flask.palletsprojects.com/" },
    { name: "MongoDB", icon: MongoIcon, link: "https://www.mongodb.com/" },
		{ name: "PostgreSQL", icon: PostgreIcon, link: "https://www.postgresql.org/" },
    {
      name: "Firebase",
      icon: FirebaseIcon,
      link: "https://firebase.google.com/",
    },
    { name: "MySQL", icon: MysqlIcon, link: "https://www.mysql.com/" },
    { name: "PHP", icon: PhpIcon, link: "https://www.php.net/" },
    {
      name: "REST API",
      icon: RestApiIcon,
      link: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
    },
    {
      name: "Drive API",
      icon: GdriveIcon,
      link: "https://developers.google.com/drive",
    },
    {
      name: "NextAuth.js",
      icon: NextAuthIcon,
      link: "https://next-auth.js.org/",
    },
  ];

  const ProgrammingStack = [
    {
      name: "JavaScript",
      icon: JsIcon,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "TypeScript",
      icon: TsIcon,
      link: "https://developer.mozilla.org/en-US/docs/Web/TypeScript",
    },
    { name: "Python", icon: PythonIcon, link: "https://www.python.org/" },
    { name: "PHP", icon: PhpIcon, link: "https://www.php.net/" },
    { name: "C++", icon: CppIcon, link: "https://isocpp.org/" },
  ];

  const ToolsStack = [
    { name: "Socket.io", icon: SocketIoIcon, link: "https://socket.io/" },
    { name: "NPM", icon: NpmIcon, link: "https://www.npmjs.com/" },
    { name: "Git", icon: GitIcon, link: "https://git-scm.com/" },
    {
      name: "VS Code",
      icon: VsCodeIcon,
      link: "https://code.visualstudio.com/",
    },
    { name: "Figma", icon: FigmaIcon, link: "https://www.figma.com/" },
  ];

  const ServerlessStack = [
    { name: "AWS", icon: AWSIcon, link: "https://aws.amazon.com/" },
		{ name: "Azure", icon: AzureIcon, link: "https://azure.microsoft.com/" },
		{ name: "GCP", icon: GCPIcon, link: "https://cloud.google.com/" },
		{ name: "Heroku", icon: HerokuIcon, link: "https://www.heroku.com/" },
		{ name: "Docker", icon: DockerIcon, link: "https://www.docker.com/" },
  ];

  return (
    <section id="skills" className="Skills-Main flex col">
      <FadeUp width="100%">
        <h1 className="Title-Tag Opening flex">
          <span>{"<"}</span>
          <p>Tech Stack</p>
          <span>{"/>"}</span>
        </h1>
      </FadeUp>

      <div className="Skills-Container flex gap">
        <FadeUp
          width="100%"
          height="100%"
          className="Skills-Holder flex col gap"
        >
          <h2 className="Title-Tag Closing flex">
            <p>Front-End</p>
            <span>{"()"}</span>
          </h2>
          <SkillGrid stack={FrontendStack} />
        </FadeUp>

        <FadeUp
          width="100%"
          height="100%"
          className="Skills-Holder flex col gap"
        >
          <h2 className="Title-Tag Closing flex">
            <p>Back-End</p>
            <span>{"()"}</span>
          </h2>
          <SkillGrid stack={BackendStack} />
        </FadeUp>
      </div>

      <div className="Skills-Container flex gap">
        <FadeUp
          width="100%"
          height="100%"
          className="Skills-Holder flex col gap"
        >
          <h2 className="Title-Tag Closing flex">
            <p>DevOps && Serverless</p>
            <span>{"()"}</span>
          </h2>
          <SkillGrid stack={ServerlessStack} />
        </FadeUp>
        <FadeUp
          width="100%"
          height="100%"
          className="Skills-Holder flex col gap"
        >
          <h2 className="Title-Tag Closing flex">
            <p>Programming</p>
            <span>{"()"}</span>
          </h2>
          <SkillGrid stack={ProgrammingStack} />
        </FadeUp>
      </div>

      <div className="Skills-Container flex gap">
        <FadeUp
          width="100%"
          height="100%"
          className="Skills-Holder flex col gap"
        >
          <h2 className="Title-Tag Closing flex">
            <p>Tech & Tools</p>
            <span>{"()"}</span>
          </h2>
          <SkillGrid stack={ToolsStack} />
        </FadeUp>
      </div>
    </section>
  );
};

export default Skills;

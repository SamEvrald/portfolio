import { ArrowDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, BookOpen, Users, Award, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

const Index = () => {
  const { toast } = useToast();
  const [darkMode, setDarkMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("2O0oYc6DjDAiVk9pZ");
  }, []);

  // Animated counter for happy clients
  useEffect(() => {
    let start = 0;
    const end = 30;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 50); // Update every 50ms

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setClientCount(end);
        clearInterval(timer);
      } else {
        setClientCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
  const aboutText = `With over 5 years of experience at the dynamic intersection of education, technology, and innovation, I am a versatile Instructional Designer and Full Stack Software Developer. My unique ability lies in bridging complex learning needs with scalable technological solutions, crafting impactful digital experiences that drive both user engagement and organizational growth.

As an Instructional Designer, I specialize in end-to-end curriculum development using the ADDIE model, creating learner-centric solutions, managing robust LMS platforms like Moodle and Canvas, and ensuring comprehensive accessibility (WCAG, SCORM). Concurrently, as a Full Stack Developer, I build cutting-edge web applications and scalable REST APIs with Django, React, Node.js, and Java, focusing on performance optimization and robust system architecture. I've successfully deployed infrastructure on AWS, enhancing uptime and reducing costs.

My mission is to leverage this blended expertise to solve real-world challenges, enhance learning outcomes, and build durable, intuitive digital products.`;

  let currentIndex = 0;
  const typingSpeed = 10; // milliseconds per character

  const typeWriter = () => {
    if (currentIndex < aboutText.length) {
      setDisplayedText(aboutText.slice(0, currentIndex + 1));
      currentIndex++;
      setTimeout(typeWriter, typingSpeed);
    }
  };

  // Start typing animation after a delay
  const startDelay = setTimeout(() => {
    typeWriter();
  }, 1000);

  return () => {
    clearTimeout(startDelay);
  };
}, []);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS service - you'll need to set up your own service
      const result = await emailjs.send(
        'service_w02qg33', // Replace with your EmailJS service ID
        'template_2w2znsn', // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'msamevrald@gmail.com',
        }
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Message Failed to Send",
        description: "There was an error sending your message. Please try emailing me directly at msamevrald@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const softwareProjects = [
    {
      title: "Logbook App",
      description: "An advanced logbook system purpose-built for professional students in ISPO-accredited programs (Prosthetics & Orthotics) to track, submit, and sync their clinical activity logs with Moodle LMS all within a responsive, secure, and intuitive web app.",
      tech: ["React.js", "Node.js", "MySql", "Moodle", "Cloudinary", "PM2", "Express REST API", "NGINX"],
      image: "https://res.cloudinary.com/ducezuhlr/image/upload/v1753254699/logbookapp_qbiydo.png",
      liveUrl: "https://logbook.human-study.org",
      githubUrl: "https://github.com/SamEvrald/logbook-app-v2"
    },
    {
      title: "Personal Productivity and Job Application Tracker",
      description: "A comprehensive job application tracking and productivity management system designed to help job seekers stay organized, track their progress, and achieve their career goals.",
      tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Recharts", "Node.js", "Express.js", "Sequelize ORM", "MySQL", "RESTful API", "JWT Authentication"],
      image: "https://res.cloudinary.com/ducezuhlr/image/upload/v1753254990/personal_woboyc.png",
      liveUrl: "https://personal-app-fronten.vercel.app/",
      githubUrl: "https://github.com/SamEvrald/Personal-App"
    },
    {
      title: "Fresh Market",
      description: "Cross-platform app for Local fruits vendors to help them sell their products online enabling them to reach as many customers as possible, track their businesses and finances.",
      tech: ["React Native", "React", "PostgreSQL", "Node.js", "TypeScript", "TailwindCSS", "RESTAPI", "shadcn/ui", "Express.js", "AWS S3", "Stripe", "MTN Mobile Money"],
      image: "https://res.cloudinary.com/ducezuhlr/image/upload/v1753255755/fresh_arqdll.jpg",
      liveUrl: "",
      githubUrl: "https://github.com/SamEvrald/fresh-market"
    }
  ];

  const instructionalProjects = [
    {
      title: "Transforming Onboarding for Global Impact",
      description: "As the Lead Instructional Designer & Performance Consultant, I spearheaded the creation of a comprehensive, blended onboarding ecosystem for a global NGO operating in regions like Kigali, Rwanda. This initiative directly addressed critical challenges like high volunteer attrition, lengthy ramp-up times, and inconsistent mission articulation. The solution integrates engaging e-learning, critical performance support, and strategic evaluation, designed to build trust and empower field teams, ultimately fostering sustainable community partnerships and increasing volunteer retention by over 18%.",
      deliverables: ["Performance Consulting & Needs Analysis", "Blended Learning Ecosystem Blueprint", "Interactive Onboarding Module", "Field Supervisor Performance Support Toolkit", "Evaluation Plan & Impact Dashboard Concept"],
      client: "Hope & Harvest Collective",
      image: "https://res.cloudinary.com/ducezuhlr/image/upload/v1753107665/hope-harvest_eepesh.png"
    },
    {
      title: "USAID Tunoze Gusoma (Schools and Systems) Activity",
      description: "This project focused on enhancing pre-primary and lower primary education in Rwanda by improving Kinyarwanda literacy instruction, strengthening professional development for teachers, and integrating research-based instruction and assessments. As the E-Learning Co-ordinator for FHI 360, I collaborated with FHI 360, Save the Children International, and Florida State University, in partnership with the Rwanda Basic Education Board (REB) and the National Examinations and School Inspection Authority (NESA), to achieve these goals.",
      deliverables: ["5 Comprehensive Courses with 30+ Modules", "Customized and Managed REB E-learning Platform", "Developed Training Manuals and Delivered Training Sessions to 20,000+ teachers, 500+ Trainers of Trainers, 300+ ICT focal teachers and 100+ Local government officials", "Micro-credential Framework", "Research-based Instructional Strategies and Learning Materials", "Data Collection and Reporting"],
      client: ["USAID (Funder), REB, NESA, FSU, Save the Children International"],
      image: "https://res.cloudinary.com/ducezuhlr/image/upload/v1753256480/usaid_xfrdvo.png"
    }
    // {
    //   title: "Training Needs Analysis",
    //   description: "Comprehensive analysis and recommendations for organizational learning strategy transformation.",
    //   deliverables: ["Needs Assessment", "Gap Analysis", "Strategic Recommendations", "Implementation Roadmap"],
    //   client: "Healthcare Systems Inc",
    //   image: "photo-1486312338219-ce68d2c6f44d"
    // }
  ];

  const testimonials = [
    {
      name: "Nicolás Muñoz Buderus",
      role: "Head of Instructional Design",
      company: "Human Study e.V",
      content: "Sam consistently demonstrated a calm and thoughtful approach to his work and was always open to feedback. One of Sam’s standout qualities is his willingness to learn. He listens attentively, seeks to understand expectations, and makes a genuine effort to apply feedback and improve. Sam approaches his work with persistence and commitment to growth. I believe he will continue to develop his skills and contribute positively in the right environment.",
      avatar: "photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Emily Alex",
      role: "Product Manager",
      company: "Serve Me",
      content: "Sam led the end-to-end development of our SaaS-based logistics tracking system, a critical platform used by over 500 clients. His technical leadership was instrumental in not only delivering a robust and scalable solution but also significantly improving our delivery accuracy by 32%. He expertly navigated complex integrations, including payment gateways, and meticulously refactored legacy code, which drastically reduced our technical debt. Sam's ability to drive impactful results and his commitment to engineering excellence make him an exceptional software developer.",
      avatar: "photo-1486312338219-ce68d2c6f44d"
    },
    {
      name: "Mr. Kevin",
      role: "Senior Software Engineer",
      company: "CodeNest Technologies",
      content: "Sam was instrumental in developing our custom CRM platform using Django and React. His work directly contributed to a significant 25% increase in our client acquisition rate. Sam's ability to design and deploy scalable REST APIs was exceptional, supporting both our mobile and web applications seamlessly. Furthermore, he demonstrated a strong command of performance optimization, improving our frontend efficiency and notably reducing initial bundle size by 40%. His collaboration with our UX/UI designers was invaluable, and his expertise in migrating our infrastructure to AWS not only reduced hosting costs by 20% but also boosted our uptime to an impressive 99.9%. Sam is a highly skilled and results-oriented Full Stack Developer.",
      avatar: "photo-1581091226825-a6a2a5aee158"
    },
     {
      name: "Protogene Ndayaho (PMP)",
      role: "Chief of Part",
      company: "USAID Tunoze Gusoma",
      content: "Sam's commitment, expertise and diligent efforts have been instrumental in the success of the project designed to enable all pre-primary and lower primary schools and classroom environments to be of high quality, inclusive and focused on teaching and learning of foundational literacy skills.",
      avatar: "photo-1581091226825-a6a2a5aee158"
    }
  ];

  // Define clientCount for testimonials section
  const [clientCount, setClientCount] = useState(0);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-border dark:border-gray-700 z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Muyango Sam Evrald
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-primary transition-colors duration-200 hover:scale-105 transform">About</a>
              <a href="#projects" className="hover:text-primary transition-colors duration-200 hover:scale-105 transform">Projects</a>
              <a href="#testimonials" className="hover:text-primary transition-colors duration-200 hover:scale-105 transform">Testimonials</a>
              <a href="#contact" className="hover:text-primary transition-colors duration-200 hover:scale-105 transform">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                <Moon className="h-4 w-4" />
              </div>
              <a href="https://github.com/SamEvrald/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-200">
                  <Github className="h-5 w-5" />
                </Button>
              </a>

              <a
                href="https://linkedin.com/in/muyango-sam-evrald"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform duration-200">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>

            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-800 transition-colors duration-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="relative group">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300">
                    <img
                      src="/profilepicture.jpeg"
                      alt="Sam Evrald"
                      className="mx-auto w-32 h-32 rounded-full object-cover"
                    />

                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-fade-in">
                  <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>M</span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>u</span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>y</span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>a</span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>n</span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>g</span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>o</span>
                  <span className="inline-block mx-2"></span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: '0.7s' }}>S</span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: '0.8s' }}>a</span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: '0.9s' }}>m</span>
                  <span className="inline-block mx-2"></span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: '1.0s' }}>E</span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: '1.1s' }}>v</span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: '1.2s' }}>r</span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: '1.3s' }}>a</span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: '1.4s' }}>l</span>
                  <span className="inline-block animate-bounce" style={{ animationDelay: '1.5s' }}>d</span>
                </h1>
                <div className="text-xl md:text-2xl text-gray-300 dark:text-gray-200 mb-8 animate-fade-in overflow-hidden">

                  <div className="animate-[slide-in-right_1s_ease-out] delay-300">
                    Instructional Designer & Software Developer
                  </div>
                </div>
              </div>
            </div>
            {/* <p className="text-lg text-gray-300 dark:text-gray-200 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
              Bridging the gap between education and technology to create impactful learning experiences and innovative software solutions.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 hover:scale-105 transition-all duration-300 transform">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:msamevrald@gmail.com">Get In Touch</a>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-black dark:text-white hover:bg-gray-700 hover:scale-105 transition-all duration-300 transform">
                <a href="#projects">View My Work</a>
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white animate-fade-in">About Me</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
  {displayedText}
  <span className="animate-pulse">|</span>
</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-700 dark:bg-gray-800 hover:scale-105 transform animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg animate-pulse">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Instructional Design</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Leading the design and implementation of transformative learning experiences that elevate capability and achieve critical business objectives.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-blue-600" />
                    <span>Learning Ecosystem Design & Strategy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-blue-600" />
                    <span>Performance Consulting & Needs Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-blue-600" />
                    <span>Advanced Evaluation & Impact Measurement (Levels 3 & 4 Kirkpatrick)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-blue-600" />
                    <span>Learning Technology Architecture & Innovation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-700 dark:bg-gray-800 hover:scale-105 transform animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg animate-pulse">
                    <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">Software Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Driving the design and delivery of high-impact, scalable software solutions that propel business innovation and operational excellence.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Mysql</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">Django</Badge>
                  <Badge variant="secondary">API Development</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-purple-600" />
                    <span>Full Stack Software Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-purple-600" />
                    <span>AI Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-purple-600" />
                    <span>Cross-functional Problem Solving & Strategic Alignment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-purple-600" />
                    <span>DevOps & Cloud-Native Engineering</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900 dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white animate-fade-in">My Projects</h2>
            <p className="text-xl text-gray-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A showcase of my work in both software development and instructional design
            </p>
          </div>

          {/* Software Development Projects */}
          {/* <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3 text-white animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Code className="h-8 w-8 text-purple-400 animate-pulse" />
              Software Development
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softwareProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-gray-800 dark:bg-gray-700 hover:scale-105 transform animate-fade-in" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <img
                      src={`https://images.unsplash.com/${project.image}?w=400&h=250&fit=crop`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="outline">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div> */}

          {/* Software Development Projects */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3 text-white animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Code className="h-8 w-8 text-purple-400 animate-pulse" />
              Software Development
            </h3>

            {/* Animated Carousel Container */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll space-x-8" style={{
                animation: 'scroll 30s linear infinite',
                width: 'calc(200% + 2rem)'
              }}>
                {/* First set of projects */}
                {softwareProjects.map((project, index) => (
                  <Card key={`first-${index}`} className="flex-shrink-0 w-80 overflow-hidden hover:shadow-xl transition-all duration-300 bg-gray-800 dark:bg-gray-700 hover:scale-105 transform animate-fade-in" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                      <img
                        src={project.image.startsWith('http')
                          ? project.image
                          : `https://images.unsplash.com/${project.image}?w=400&h=250&fit=crop`
                        }
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-2 text-white dark:text-white">{project.title}</h4>
                      <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.slice(0, 4).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-muted-foreground mb-4 text-sm line-clamp-3">{tech}</Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge variant="outline" className="text-muted-foreground mb-4 text-sm line-clamp-3">+{project.tech.length - 4}</Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline" className="text-xs">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Live Demo
                          </Button>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline" className="text-xs">
                            <Github className="h-3 w-3 mr-1" />
                            Code
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Second set for seamless loop */}
                {softwareProjects.map((project, index) => (
                  <Card key={`second-${index}`} className="flex-shrink-0 w-80 overflow-hidden hover:shadow-xl transition-all duration-300 bg-gray-800 dark:bg-gray-700 hover:scale-105 transform animate-fade-in" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                      <img
                        src={project.image.startsWith('http')
                          ? project.image
                          : `https://images.unsplash.com/${project.image}?w=400&h=250&fit=crop`
                        }
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-2 text-white dark:text-white">{project.title}</h4>
                      <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.slice(0, 4).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-muted-foreground mb-4 text-sm line-clamp-3">{tech}</Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge variant="outline" className="text-muted-foreground mb-4 text-sm line-clamp-3">+{project.tech.length - 4}</Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline" className="text-xs">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Live Demo
                          </Button>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline" className="text-xs">
                            <Github className="h-3 w-3 mr-1" />
                            Code
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Third set for extra smooth transition */}
                {softwareProjects.map((project, index) => (
                  <Card key={`third-${index}`} className="flex-shrink-0 w-80 overflow-hidden hover:shadow-xl transition-all duration-300 bg-gray-800 dark:bg-gray-700 hover:scale-105 transform animate-fade-in" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                      <img
                        src={project.image.startsWith('http')
                          ? project.image
                          : `https://images.unsplash.com/${project.image}?w=400&h=250&fit=crop`
                        }
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-2 text-white dark:text-white">{project.title}</h4>
                      <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.slice(0, 4).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-muted-foreground mb-4 text-sm line-clamp-3">{tech}</Badge>
                        ))}
                        {project.tech.length > 4 && (
                          <Badge variant="outline" className="text-muted-foreground mb-4 text-sm line-clamp-3">+{project.tech.length - 4}</Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline" className="text-xs">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Live Demo
                          </Button>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline" className="text-xs">
                            <Github className="h-3 w-3 mr-1" />
                            Code
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Enhanced CSS for seamless infinite scroll */}
            {/* Enhanced CSS for seamless infinite scroll */}
            {/* Enhanced CSS for seamless infinite scroll */}
            <style>{`
  .animate-scroll {
    animation: scroll 30s linear infinite;
    animation-fill-mode: forwards;
    will-change: transform;
  }
  
  .animate-scroll-reverse {
    animation: scroll-reverse 25s linear infinite;
    animation-fill-mode: forwards;
    will-change: transform;
  }
  
  /* Pause animation on hover */
  .animate-scroll:hover {
    animation-play-state: paused !important;
  }
  
  .animate-scroll-reverse:hover {
    animation-play-state: paused !important;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  @keyframes scroll-reverse {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`}</style>
          </div>

          {/* Instructional Design Projects */}
          {/* Instructional Design Projects */}
          {/* Instructional Design Projects */}
          {/* <div>
  <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3 text-white animate-fade-in">
    <BookOpen className="h-8 w-8 text-blue-400 animate-pulse" />
    Instructional Design
  </h3>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {instructionalProjects.map((project, index) => (
      <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-gray-800 dark:bg-gray-700 hover:scale-105 transform animate-fade-in" style={{ animationDelay: `${1.2 + index * 0.2}s` }}>
        <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
          <img
            src={project.image.startsWith('http') 
              ? project.image 
              : `https://images.unsplash.com/${project.image}?w=400&h=250&fit=crop`
            }
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-6">
          <h4 className="text-xl font-bold mb-2">{project.title}</h4>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="mb-4">
            <p className="font-semibold text-sm text-blue-600 mb-2">Client: {project.client}</p>
            <div className="space-y-1">
              {project.deliverables.map((deliverable, delIndex) => (
                <div key={delIndex} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span className="text-sm">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
          {project.title === "Transforming Onboarding for Global Impact" ? (
            <a
              href="https://hope-project-ivory.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="outline" className="w-full">
                View Case Study
              </Button>
            </a>
          ) : project.title === "USAID Tunoze Gusoma (Schools and Systems) Activity" ? (
            <a
              href="https://fhi-project.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="outline" className="w-full">
                View Case Study
              </Button>
            </a>
          ) : (
            <Button size="sm" variant="outline" className="w-full">
              View Case Study
            </Button>
          )}
        </CardContent>
      </Card>
    ))}
  </div>
</div> */}

          {/* Instructional Design Projects */}
          {/* Instructional Design Projects */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3 text-white animate-fade-in">
              <BookOpen className="h-8 w-8 text-blue-400 animate-pulse" />
              Instructional Design
            </h3>

            {/* Animated Carousel Container - Moving Left to Right */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-reverse space-x-8" style={{
                animation: 'scroll-reverse 25s linear infinite',
                width: 'calc(200% + 2rem)'
              }}>
                {/* First set of projects */}
                {instructionalProjects.map((project, index) => (
                  <Card key={`first-${index}`} className="flex-shrink-0 w-80 overflow-hidden hover:shadow-xl transition-all duration-300 bg-gray-800 dark:bg-gray-700 hover:scale-105 transform animate-fade-in" style={{ animationDelay: `${1.2 + index * 0.2}s` }}>
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                      <img
                        src={project.image.startsWith('http')
                          ? project.image
                          : `https://images.unsplash.com/${project.image}?w=400&h=250&fit=crop`
                        }
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-2 text-white dark:text-white">{project.title}</h4>
                      <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{project.description}</p>
                      <div className="mb-4">
                        <p className="font-semibold text-sm text-blue-600 mb-2">Client: {project.client}</p>
                        <div className="space-y-1">
                          {project.deliverables.slice(0, 3).map((deliverable, delIndex) => (
                            <div key={delIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span className="text-muted-foreground mb-4 text-sm line-clamp-3 dark:text-gray-300">{deliverable}</span>
                            </div>
                          ))}
                          {project.deliverables.length > 3 && (
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span className="text-muted-foreground mb-4 text-sm line-clamp-3 dark:text-gray-300">+{project.deliverables.length - 3} more</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {project.title === "Transforming Onboarding for Global Impact" ? (
                        <a
                          href="https://hope-project-ivory.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline" className="w-full text-xs">
                            View Case Study
                          </Button>
                        </a>
                      ) : project.title === "USAID Tunoze Gusoma (Schools and Systems) Activity" ? (
                        <a
                          href="https://fhi-project.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline" className="w-full text-xs">
                            View Case Study
                          </Button>
                        </a>
                      ) : (
                        <Button size="sm" variant="outline" className="w-full text-xs">
                          View Case Study
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}

                {/* Second set for seamless loop */}
                {instructionalProjects.map((project, index) => (
                  <Card key={`second-${index}`} className="flex-shrink-0 w-80 overflow-hidden hover:shadow-xl transition-all duration-300 bg-gray-800 dark:bg-gray-700 hover:scale-105 transform animate-fade-in" style={{ animationDelay: `${1.2 + index * 0.2}s` }}>
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                      <img
                        src={project.image.startsWith('http')
                          ? project.image
                          : `https://images.unsplash.com/${project.image}?w=400&h=250&fit=crop`
                        }
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-2 text-white dark:text-white">{project.title}</h4>
                      <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{project.description}</p>
                      <div className="mb-4">
                        <p className="font-semibold text-sm text-blue-600 mb-2">Client: {project.client}</p>
                        <div className="space-y-1">
                          {project.deliverables.slice(0, 3).map((deliverable, delIndex) => (
                            <div key={delIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span className="text-muted-foreground mb-4 text-sm line-clamp-3 dark:text-gray-300">{deliverable}</span>
                            </div>
                          ))}
                          {project.deliverables.length > 3 && (
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span className="text-muted-foreground mb-4 text-sm line-clamp-3 dark:text-gray-300">+{project.deliverables.length - 3} more</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {project.title === "Transforming Onboarding for Global Impact" ? (
                        <a
                          href="https://hope-project-ivory.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline" className="w-full text-xs">
                            View Case Study
                          </Button>
                        </a>
                      ) : project.title === "USAID Tunoze Gusoma (Schools and Systems) Activity" ? (
                        <a
                          href="https://fhi-project.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline" className="w-full text-xs">
                            View Case Study
                          </Button>
                        </a>
                      ) : (
                        <Button size="sm" variant="outline" className="w-full text-xs">
                          View Case Study
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}

                {/* Third set for extra smooth transition */}
                {instructionalProjects.map((project, index) => (
                  <Card key={`third-${index}`} className="flex-shrink-0 w-80 overflow-hidden hover:shadow-xl transition-all duration-300 bg-gray-800 dark:bg-gray-700 hover:scale-105 transform animate-fade-in" style={{ animationDelay: `${1.2 + index * 0.2}s` }}>
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                      <img
                        src={project.image.startsWith('http')
                          ? project.image
                          : `https://images.unsplash.com/${project.image}?w=400&h=250&fit=crop`
                        }
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-2 text-white dark:text-white">{project.title}</h4>
                      <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{project.description}</p>
                      <div className="mb-4">
                        <p className="font-semibold text-sm text-blue-600 mb-2">Client: {project.client}</p>
                        <div className="space-y-1">
                          {project.deliverables.slice(0, 3).map((deliverable, delIndex) => (
                            <div key={delIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span className="text-muted-foreground mb-4 text-sm line-clamp-3 dark:text-gray-300">{deliverable}</span>
                            </div>
                          ))}
                          {project.deliverables.length > 5 && (
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span className="text-muted-foreground mb-4 text-sm line-clamp-3 dark:text-gray-300">+{project.deliverables.length - 3} more</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {project.title === "Transforming Onboarding for Global Impact" ? (
                        <a
                          href="https://hope-project-ivory.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline" className="w-full text-xs">
                            View Case Study
                          </Button>
                        </a>
                      ) : project.title === "USAID Tunoze Gusoma (Schools and Systems) Activity" ? (
                        <a
                          href="https://fhi-project.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="outline" className="w-full text-xs">
                            View Case Study
                          </Button>
                        </a>
                      ) : (
                        <Button size="sm" variant="outline" className="w-full text-xs">
                          View Case Study
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-800 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white animate-fade-in">What Clients Say</h2>

            {/* Happy Clients Count */}
            <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full">
                <Users className="h-5 w-5 text-white" />
                <span className="text-white font-bold text-lg">
                  <span className="tabular-nums">{clientCount}</span>+ Happy Clients
                </span>
              </div>
            </div>
            <p className="text-xl text-gray-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Testimonials from satisfied clients across both domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-700 dark:bg-gray-800 hover:scale-105 transform animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-blue-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-black dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white animate-fade-in">Get In Touch</h2>
            <p className="text-xl text-gray-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Ready to start your next project? Let's discuss how I can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <a href="mailto:msamevrald@gmail.com" className="hover:underline">
                    msamevrald@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>+250798646178</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>Available for remote work worldwide</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-white">Let's Connect</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/SamEvrald/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:scale-110 transition-all duration-200 transform">
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                  <a href="https://linkedin.com/in/muyango-sam-evrald" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:scale-110 transition-all duration-200 transform">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg bg-gray-700 dark:bg-gray-800 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black dark:bg-gray-900 border-t border-gray-700 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Muyango Sam Evrald. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

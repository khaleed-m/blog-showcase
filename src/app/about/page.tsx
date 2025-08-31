'use client'

import { Github, Linkedin, Code, Brain, Rocket, GraduationCap, Mail, MapPin, Calendar, BookOpen, Award, Target } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "Java", "C++", "TypeScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "AI/ML Technologies",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Natural Language Processing"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Web Development",
      items: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],
      color: "from-green-500 to-teal-500"
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Docker", "AWS", "Google Cloud", "Jupyter Notebooks"],
      color: "from-orange-500 to-red-500"
    }
  ]

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Maintaining high GPA in AI and Computer Science coursework",
      icon: GraduationCap,
      color: "bg-blue-500"
    },
    {
      title: "Project Portfolio",
      description: "Built multiple AI/ML projects and web applications",
      icon: Code,
      color: "bg-green-500"
    },
    {
      title: "Research Interest",
      description: "Exploring deep learning and computer vision applications",
      icon: Brain,
      color: "bg-purple-500"
    }
  ]

  const currentFocus = [
    "Machine Learning Algorithms",
    "Deep Learning & Neural Networks",
    "Computer Vision",
    "Natural Language Processing",
    "Full-Stack Web Development",
    "Cloud Computing & DevOps"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section with Profile */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl ring-8 ring-white dark:ring-gray-800 hover-lift">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                alt="Profile Picture"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg animate-bounce-gentle">
              <GraduationCap className="w-6 h-6" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hello, I'm a Developer
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 mb-6 text-lg text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span>BTech 2nd Year</span>
            </div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-600" />
              <span>AI Department</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Passionate about Artificial Intelligence and Machine Learning, currently pursuing my Bachelor's in Technology 
            with a focus on AI. I love building innovative projects that solve real-world problems using cutting-edge technology.
          </p>
          
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => window.open('https://github.com/khaleed-m', '_blank')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            >
              <Github className="w-5 h-5" />
              GitHub
            </button>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Current Focus */}
        <div className="mb-16 animate-slide-up animate-delay-200">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Current Focus Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {currentFocus.map((focus, index) => (
              <div key={focus} className={`bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-scale-in animate-delay-${index * 100}`}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16 animate-slide-up animate-delay-400">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={skillGroup.category} className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-in-right animate-delay-${index * 200}`}>
                <div className={`inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r ${skillGroup.color} text-white rounded-xl font-semibold`}>
                  <Code className="w-5 h-5" />
                  {skillGroup.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16 animate-slide-up animate-delay-600">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Achievements & Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={achievement.title} className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in animate-delay-${index * 200}`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 ${achievement.color} text-white rounded-xl mb-4`}>
                  <achievement.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center animate-slide-up animate-delay-800">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <Rocket className="w-16 h-16 mx-auto mb-6 animate-bounce-gentle" />
            <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing Together!</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              I'm always excited to collaborate on innovative AI/ML projects, web applications, 
              or any challenging technical problems. Let's connect and create something impactful!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:your.email@example.com" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                <BookOpen className="w-5 h-5" />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

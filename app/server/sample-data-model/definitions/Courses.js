defineCourses = function() {
  let sampleCourses = [
    {
      name: "Program Structure",
      slug: "ics212",
      number: "ICS 212",
      description: "Program organization paradigms, programming environments, implementation of a module from specifications, the C and C++ programming languages.",
      tags: ["software-engineering"]
    },
    {
      name: "nonICS 100-level course",
      slug: "nonICS-1xx",
      number: "nonICS 1xx",
      description: "Any non ICS course at the 100 level.",
      tags: []
    },
    {
      name: "Algorithms",
      slug: "ics311",
      number: "ICS 311",
      description: "Design and correctness of algorithms, including divide-and-conquer, greedy and dynamic programming methods.",
      tags: ["software-engineering", "silicon-valley"]
    },
    {
      name: "Introduction to Computer Science I",
      slug: "ics111",
      number: "ICS 111",
      description: "An overview of the fundamentals of computer science emphasizing problem solving, algorithm development, implementation, and debugging/testing using an object-oriented programming language.",
      tags: ["software-engineering", "silicon-valley"]
    },
    {
      name: "Basic Concepts of Computer Science",
      slug: "ics222",
      number: "ICS 222",
      description: "What is computer science about? What is the difference between computers and other machines? What are the limits of computation? Are there computers that are not machines? Understand the basic issues of computability, complexity, and network effects, and learn to apply them in the practice of computation.",
      tags: ["software-engineering", "introduction-cs", "silicon-valley"]
    },
    {
      name: "Introduction to Computer Science II",
      slug: "ics211",
      number: "ICS 211",
      description: "Reinforce and strengthen problem-solving skills using abstract data types and introduce software development practices. Emphasize the use of searching and sorting algorithms and their complexity, recursion, object-oriented programming, and data structures.",
      tags: ["software-engineering", "oo-programming", "silicon-valley"]
    },
    {
      name: "Software Engineering I",
      slug: "ics314",
      number: "ICS 314",
      description: "System specification, modeling and analysis, prototyping, hierarchal design, program design methods, cost estimation, project management, computer-aided software design. Team-oriented software-design project. Pre: 211 or consent.",
      tags: ["software-engineering", "testing", "silicon-valley"]
    },
    {
      name: "Software Engineering II",
      slug: "ics414",
      number: "ICS 414",
      description: "Continuation of 314. Project management, quality, and productivity control, testing and validation, team management. Team-oriented software-implementation project.",
      tags: ["software-engineering", "testing", "silicon-valley"]
    },
    {
      name: "Operating Systems",
      slug: "ics332",
      number: "ICS 332",
      description: "Operating system concepts and structure, processes and threads, CPU scheduling, memory management, scheduling, file systems, inter-process communication, virtualization, popular operating systems. A-F only.",
      tags: ["software-engineering", "operating-systems", "silicon-valley"]
    }
  ];

  _.each(sampleCourses, RadGrad.course.define);
};

defineTags = function() {

  let sampleTags = [
    {
      name: "Software Engineering",
      slug: "software-engineering",
      description: "The systematic application of scientific and technological knowledge, methods, and experience to the design, implementation, testing, and documentation of software",
      tagType: "cs-disciplines"
    },
    {
      name: "Psychology",
      slug: "psychology",
      description: "The scientific study of the human mind and its functions, especially those affecting behavior in a given context",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Silicon Valley",
      slug: "silicon-valley",
      description: "the southern portion of the San Francisco Bay Area, centering on the Santa Clara valley.",
      tagType: "locations"
    },
    {
      name: "Data Scientist",
      slug: "data-scientist",
      description: "Combine statistics, data mining, and predictive analytics to gain insight from large data sets.",
      tagType: "professional-goals"
    },
    {
      name: "Electrical Engineering",
      slug: "electrical-engineering",
      description: "A field of engineering that generally deals with the study and application of electricity, electronics, and electromagnetism.",
      tagType: "ee-disciplines"
    },
    {
      name: "Computer Engineering",
      slug: "computer-engineering",
      description: "A discipline that integrates several fields of electrical engineering and computer science required to develop computer hardware and software.",
      tagType: "ee-disciplines"
    },
    {
      name: "Introduction to CS",
      slug: "introduction-cs",
      description: "Focus on basic coding instructions.",
      tagType: "cs-disciplines"
    },
    {
      name: "Object Oriented Programming",
      slug: "oo-programming",
      description: "A programming paradigm based on the concept of objects, which are data structures that contain data, in the form of fields and code in the form of procedures, known as methods.",
      tagType: "cs-disciplines"
    },
    {
      name: "Testing",
      slug: "testing",
      description: "Learn how to catch bugs, create tests, and break your software.",
      tagType: "cs-disciplines"
    },
    {
      name: "Operating Systems",
      slug: "operating-systems",
      description: "System software that manages computer hardware and software resources and provides common services for computer programs.",
      tagType: "cs-disciplines"
    }
  ];

  _.each(sampleTags, RadGrad.tag.define);
};
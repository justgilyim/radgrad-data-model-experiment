defineDegreeGoals = function() {
  let sampleDegreeGoals = [
    {name: "Silicon Valley Tech", slug: "degree-goal-sv-tech", description: "TBD"},
    {name: "Ph.D. Prep", slug: "degree-goal-phd-prep", description: "TBD"},
    {name: "security", slug: "degree-goal-security", description: "TBD"},
    {name: "Network Engineer", slug: "degree-goal-network-engineer", description: "The field concerned with internetworking service requirements for switched telephone networks and developing the required hardware and software."},
    {name: "Video Game Developer", slug: "degree-goal-game-dev", description: "A software developer that specializes in video game development, the process and related disciplines of creating a video game."}
  ];

  _.each(sampleDegreeGoals, RadGrad.degreegoal.define);
};
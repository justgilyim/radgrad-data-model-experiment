defineStudentProfile = function() {
  let acID = RadGrad.user.findBySlug("anthonychriste")._id;

  let sampleWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 20, studentID: acID}
  ];

  let sampleWorkInstanceIDs = _.map(sampleWorkInstanceData, RadGrad.workinstance.define);

  let sampleCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: false, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "nonICS-1xx", verified: false, grade: "B", studentID: acID, note: "Art 132"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics212", verified: true, grade: "A", studentID: acID}
  ];

  let sampleCourseInstanceIDs = _.map(sampleCourseInstanceData, RadGrad.courseinstance.define);

  let sampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: acID},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: acID
    }
  ];

  let sampleOpportunityInstanceIDs = _.map(sampleOpportunityInstanceData, RadGrad.opportunityinstance.define);

  let sampleDegreePlan = RadGrad.degreeplan.define({
    courseInstanceIDs: sampleCourseInstanceIDs,
    opportunityInstanceIDs: sampleOpportunityInstanceIDs,
    workInstanceIDs: sampleWorkInstanceData,
    studentID: acID
  });

  RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);
  RadGrad.user.setDegreeGoalIDs(acID, [RadGrad.slug.getEntityID("degree-goal-sv-tech", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(acID, [RadGrad.slug.getEntityID("software-engineering", "Tag")]);
  RadGrad.user.setPicture(acID, "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/1eb/082/154da42.jpg");
  RadGrad.user.setAboutMe(acID, "I am a student at the [University of Hawaii](http://www.hawaii.edu/).");
  RadGrad.user.setSemesterID(acID, RadGrad.semester.get("Fall", 2018));

  //1st new student profile
  let gyID = RadGrad.user.findBySlug("gilbertyim")._id;

  let gysampleWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: gyID},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 20, studentID: gyID}
  ];

  let gysampleWorkInstanceIDs = _.map(gysampleWorkInstanceData, RadGrad.workinstance.define);

  let gysampleCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: false, grade: "B", studentID: gyID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "nonICS-1xx", verified: false, grade: "B", studentID: gyID, note: "Art 132"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics212", verified: true, grade: "A", studentID: gyID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics314", verified: true, grade: "A", studentID: gyID}
  ];

  let gysampleCourseInstanceIDs = _.map(gysampleCourseInstanceData, RadGrad.courseinstance.define);

  let gysampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: gyID},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: gyID
    },
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "ieee-manoa", verified: true, hrswk: 10, studentID: gyID},
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "hkn-manoa", verified: true, hrswk: 10, studentID: gyID}
  ];

  let gysampleOpportunityInstanceIDs = _.map(gysampleOpportunityInstanceData, RadGrad.opportunityinstance.define);

  let gysampleDegreePlan = RadGrad.degreeplan.define({
    courseInstanceIDs: gysampleCourseInstanceIDs,
    opportunityInstanceIDs: gysampleOpportunityInstanceIDs,
    workInstanceIDs: gysampleWorkInstanceData,
    studentID: gyID
  });

  RadGrad.user.setDegreePlanID(gyID, gysampleDegreePlan);
  RadGrad.user.setDegreeGoalIDs(gyID, [RadGrad.slug.getEntityID("degree-goal-game-dev", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(gyID, [RadGrad.slug.getEntityID("software-engineering", "Tag")]);
  RadGrad.user.setPicture(gyID, "https://i.vimeocdn.com/portrait/1677907_300x300.jpg");
  RadGrad.user.setAboutMe(gyID, "I am a student at the [University of Hawaii](http://www.hawaii.edu/).");
  RadGrad.user.setSemesterID(gyID, RadGrad.semester.get("Fall", 2018));

  //2nd new student profile
  let blID = RadGrad.user.findBySlug("bryantlee")._id;

  let blsampleWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: blID},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 20, studentID: blID}
  ];

  let blsampleWorkInstanceIDs = _.map(blsampleWorkInstanceData, RadGrad.workinstance.define);

  let blsampleCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: false, grade: "B", studentID: blID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "nonICS-1xx", verified: false, grade: "B", studentID: blID, note: "Art 132"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics212", verified: true, grade: "A", studentID: blID},
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics314", verified: true, grade: "A", studentID: blID}
  ];

  let blsampleCourseInstanceIDs = _.map(blsampleCourseInstanceData, RadGrad.courseinstance.define);

  let blsampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: blID},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: blID
    },
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "ieee-manoa", verified: true, hrswk: 10, studentID: blID},
    {semesterID: RadGrad.semester.get("Spring", 2016), opportunity: "hkn-manoa", verified: true, hrswk: 10, studentID: blID}
  ];

  let blsampleOpportunityInstanceIDs = _.map(blsampleOpportunityInstanceData, RadGrad.opportunityinstance.define);

  let blsampleDegreePlan = RadGrad.degreeplan.define({
    courseInstanceIDs: blsampleCourseInstanceIDs,
    opportunityInstanceIDs: blsampleOpportunityInstanceIDs,
    workInstanceIDs: blsampleWorkInstanceData,
    studentID: blID
  });

  RadGrad.user.setDegreePlanID(blID, blsampleDegreePlan);
  RadGrad.user.setDegreeGoalIDs(blID, [RadGrad.slug.getEntityID("degree-goal-security", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(blID, [RadGrad.slug.getEntityID("software-engineering", "Tag")]);
  RadGrad.user.setPicture(blID, "http://www.drawingsomeone.com/wp-content/uploads/2015/05/Red-Panda-Drawing-1.png");
  RadGrad.user.setAboutMe(blID, "I am a student at the [University of Hawaii](http://www.hawaii.edu/).");
  RadGrad.user.setSemesterID(blID, RadGrad.semester.get("Fall", 2018));
};


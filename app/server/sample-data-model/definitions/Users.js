defineUsers = function() {
  let sampleUsers = [
    {
      firstName: "Philip",
      middleName: "Meadows",
      lastName: "Johnson",
      slug: "philipjohnson",
      password: "foo",
      uhEmail: "johnson@hawaii.edu",
      role: RadGrad.role.admin
    },
    {
      firstName: "Henri",
      middleName: "",
      lastName: "Casanova",
      slug: "henricasanova",
      password: "foo",
      uhEmail: "henric@hawaii.edu",
      role: RadGrad.role.faculty
    },
    {
      firstName: "Aaron",
      middleName: "",
      lastName: "Ohta",
      slug: "aaronohta",
      password: "foo",
      uhEmail: "aohta@hawaii.edu",
      role: RadGrad.role.faculty
    },
    {
      firstName: "Wayne",
      middleName: "",
      lastName: "Shiroma",
      slug: "wayneshiroma",
      password: "foo",
      uhEmail: "shiromaw@hawaii.edu",
      role: RadGrad.role.faculty
    },
    {
      firstName: "Sergey",
      middleName: "",
      lastName: "Negrashov",
      slug: "sergeynegrashov",
      password: "foo",
      uhEmail: "sin8@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Anthony",
      middleName: "",
      lastName: "Christe",
      slug: "anthonychriste",
      password: "foo",
      uhEmail: "achriste@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Gilbert",
      middleName: "",
      lastName: "Yim",
      slug: "gilbertyim",
      password: "foo",
      uhEmail: "gyim@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Bryant",
      middleName: "",
      lastName: "Lee",
      slug: "bryantlee",
      password: "foo",
      uhEmail: "blee@hawaii.edu",
      role: RadGrad.role.student
    }
  ];

  _.each(sampleUsers, RadGrad.user.define);
}
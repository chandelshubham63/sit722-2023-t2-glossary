var express = require('express');
var router = express.Router();

const glossary_list = [
  { 'id': 1, 'Term': 'Agile Methodology', 'Description': 'Agile Methodology is a type of project management process, mainly used for software development, where demands and solutions evolve through the collaborative effort of self-organizing and cross-functional teams.', 'reference': 'Highsmith, J., & Cockburn, A. (2001). Agile software development: The business of innovation. Computer, 34(9), 120–127.' },
  { 'id': 2, 'Term': 'DevOps', 'Description': 'DevOps is a set of practices that combines software development and IT operations. It aims to shorten the system development life cycle and provide continuous delivery with high software quality.', 'reference': 'Loukides, M. (2012). What is DevOps? O\'Reilly Media.' },
  { 'id': 3, 'Term': 'Cloud Computing', 'Description': 'Cloud computing refers to the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.', 'reference': 'Mell, P., & Grance, T. (2011). The NIST definition of cloud computing. National Institute of Standards and Technology.' },
  { 'id': 4, 'Term': 'Microservices', 'Description': 'Microservices, or the microservices architectural style, is an approach to developing a single application as a suite of small services, each running its own process and communicating with lightweight mechanisms.', 'reference': 'Lewis, J., & Fowler, M. (2014). Microservices. https://martinfowler.com/articles/microservices.html' },
  { 'id': 5, 'Term': 'Command Line Interfaces (CLI)', 'Description': 'CLI is a means of interacting with a computer program where the user issues commands in the form of successive lines of text (command lines).', 'reference': 'Ritchie, D. M., & Thompson, K. (1974). The UNIX time-sharing system. Communications of the ACM, 17(7), 365-375.' },
  { 'id': 6, 'Term': 'Testing', 'Description': 'Testing is an empirical investigation conducted to provide stakeholders with information about the quality of the software product or service under test.', 'reference': 'Myers, G. J., Badgett, T., Thomas, T. M., & Sandler, C. (2004). The art of software testing. John Wiley & Sons.' },
  { 'id': 7, 'Term': 'Continuous Deployment', 'Description': 'Continuous Deployment is a software engineering approach in which software functionalities are delivered frequently through automated deployments.', 'reference': 'Fitzgerald, B., & Stol, K. J. (2017). Continuous software engineering: A roadmap and agenda. Journal of Systems and Software, 123, 176-189.' },
  { 'id': 8, 'Term': 'Continuous Integration', 'Description': 'Continuous Integration is a development practice that requires developers to integrate code into a shared repository several times a day.', 'reference': 'Duvall, P. M., Matyas, S. M., & Glover, A. (2007). Continuous integration: improving software quality and reducing risk. Pearson Education.' },
  { 'id': 9, 'Term': 'Behavior-Driven Design (BDD)', 'Description': 'BDD is an Agile software development process that encourages collaboration among developers, QA and non-technical or business participants in a software project.', 'reference': 'Adzic, G. (2011). Specification by example: How successful teams deliver the right software. Manning Publications Co.' },
  { 'id': 10, 'Term': 'Test-Driven Design (TDD)', 'Description': 'TDD is a software development process that relies on the repetition of a very short development cycle: first the developer writes an automated test case that defines a desired improvement or new function, then produces code to pass that test, and finally refactors the new code to acceptable standards.', 'reference': 'Beck, K. (2003). Test-driven development: by example. Addison-Wesley Professional.' },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Glossary', glossary: glossary_list });
});

module.exports = router;

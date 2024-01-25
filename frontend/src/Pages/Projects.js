// Projects.js

import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaHotel, FaSchool, FaHospital, FaUniversity, FaBriefcaseMedical, FaBuilding, FaShoppingCart } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import './Projects.css';



const projectsData = [
  {
    name: 'Southern Command Directory Management System',
    description: ( <>
      The Southern Command is India's oldest field army and spans over a
      period of two centuries.
      <br />
      Zealits designed a Directory Management System for the Southern
      Command - an Intranet application accessed within the Indian armys
      network of headquarters and camps all over India. The Directory
      Management system is an effective, accessable and relaible source of
      information about army officers across the network. It remains
      inaccessable to the public and uses state of the art technologies and
      highest levels of data encryption.
    </>),
    icon: <FaBriefcaseMedical className="icon" />,
  },
  {
    name: 'DealsBrowser',
    description: (
      <>
        Dealsbrowser is an online shopping center. It's a website that
        centralizes and displays the best shopping deals over the internet.
        They deal with major merchants including Amazon, Sony, Dell, HP.
        <br />
        Zealits initiated the design and development of this service and was
        actively involved in building relationships with online merchants and
        marketing the website. Emaculate site design and search engine
        optimization have been carried out by Zealits to build a
        customer-centric shopper's delight. It boasts of using the latest Web
        2.0 standards and technologies including HTML5, CSS3, and a highly
        RESTful architecture.
      </>
    ),
    icon: <FaShoppingCart className="icon" />,
  },
  {
    name: 'Patient Care Organization',
    description:( <> The Patient Care Organization maintains a database of public health records.<br/> Zealits designed and developed a customized Content Management System for PCO for maintaining patient records - diagonosis, prescriptions, track records and much more. It also helps as a notification system where patients are notified of appointments, prescription renewals and timely medical checkups.</> ),
    icon: <FaHospital className="icon" />,
  },
  {
    name: 'Jawahar Navodaya Vidhyalaya',
    description: (
      <>
        A division of the Navodaya Vidhyalaya Samiti, Jawahar Navoday
        Vidhyalaya (JNV) is a reputed school and college in Latur, India.
        <br />
        Zealits assisted them in building their complete online presence. We
        created a an online resource where students, faculties, and other
        functional departments can carry out their business online and paper
        free. The website helped students in enrolling for courses and created
        an accessable communication medium with their faculties and
        departments.
      </>
    ),
    icon: <FaSchool className="icon" />,
  },
  {
    name: 'Indian Empress Hotel',
    description: (
      <>
        The Indian Empress Hotel is based in Covetry, UK and caters to the
        exotic taste buds around Covertry - Binley, Stoke, Willinhall, City
        Center, Wyken and Walsgrave
        <br />
        Zealits designed and developed their online presence - an
        informational resource keeping up-to-date menu and daily specials. Its
        a unique XML based dynamic website.
      </>
    ),
    icon: <FaHotel className="icon" />,
  },
  {
    name: 'Pharmaexaminations',
    description: (
      <>
        Pharmaexaminations is an initiative of a group of professional
        pharmacists to help students achieve their goals at GPAT. They have
        come up with a unique preparation plan
        <br />
        Zealits was approached by and assisted in planning and implementation
        of the online system - A series of tests, monitoring progress,
        comparing it against other candidates. It follows the AICTE guidelines
        and will allow students to take interactive courses online, generating
        constructive feedback.
      </>
    ),
    icon: <FaUniversity className="icon" />,
  },
  {
    name: 'Triogenesys Technologies',
    description: (
      <>
        Triogenesys Technologies is a Business Transformation Consulting
        company that designs, implements and supports solutions that address
        complex business issues faced by small and large organizations.
      </>
    ),
    icon: <FaBuilding className="icon" />,
  },
];

const Projects = () => {

  const [projects, setProjects] = useState(projectsData);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px', // Adjust rootMargin based on when you want the animation to start
  });

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  const slideIn = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateX(0)' : 'translateX(-500px)',
  });

  // const slideIn = useSpring({
  //   opacity: 1,
  //   transform: 'translateX(0)',
  //   from: { opacity: 0, transform: 'translateX(-500px)' },
  //   reset: animate,
  //   onRest: () => setAnimate(false),
  // });


  

  return (
    <div ref={ref} className="table-container">
    <h2>Projects</h2>
    <table>
      <tbody>
        {projects.map((project, index) => (
          <tr key={index} className="project-row">
            <td className="icon-cell">{project.icon}</td>
            <td>
              <animated.h3 >{project.name}</animated.h3>
              <animated.p style={slideIn}>{project.description}</animated.p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default Projects;

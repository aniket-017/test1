import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faShoppingCart,
  faMoneyBillAlt,
  faBoxes,
  faUsers,
  faBullhorn,
  faCogs,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';
import "./Services.css"

const Services = () => {
  return (

    <div className='service-content'>
       <h2>Services</h2>
    
    <div className="services-container">
   
      <ServiceCard
        title="Website"
        services={['eCommerce', 'Blog', 'Forum', 'eLearning', 'LiveChat']}
        icon={faGlobe}
      />
      <ServiceCard
        title="Sales"
        services={['CRM', 'Sales', 'Point Of Sale', 'Subscription', 'Rental']}
        icon={faShoppingCart}
      />
       <ServiceCard
        title="Finance"
        services={['Accounting', 'Invoicing', 'Expenses', 'Documents', 'Spreadsheet', 'Sign']}
        icon={faMoneyBillAlt}
      />
      <ServiceCard
        title="Inventory"
        services={['Inventory', 'Manufacturing', 'PLM', 'Purchase', 'Maintenance', 'Quality']}
        icon={faBoxes}
      />
      <ServiceCard
        title="Human Resources"
        services={['Employees', 'Recruitment', 'Time Off', 'Appraisals', 'Referral', 'Fleet']}
        icon={faUsers}
      />
      <ServiceCard
        title="Marketing"
        services={['Marketing Automation', 'Email Marketing', 'SMS Marketing', 'Social Marketing', 'Events', 'Survey']}
        icon={faBullhorn}
      />
      <ServiceCard
        title="Services"
        services={['Projects', 'Timesheet', 'Field Service', 'Helpdesk', 'Planning', 'Appointments']}
        icon={faCogs}
      />
      <ServiceCard
        title="Productivity"
        services={['Discuss (Chat, Mail)', 'Approvals', 'Internet Of Things', 'VOIP', 'Knowledge']}
        icon={faTasks}
      />
      </div>
      {/* Add more ServiceCard components for other categories */}
    </div>
  );
};

const ServiceCard = ({ title, services, icon }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="service-details">
        <h3>{title}</h3>
        <ul>
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;

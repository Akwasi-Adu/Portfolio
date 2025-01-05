const projects = [
    {
        id: 1,
        title: "Full-Stack Developer | Ministry of Environment, Science, Technology & Innovation (MESTI), Ghana",
        duration: "Aug 2024 – Oct 2024",
        name: "Science, Technology & Innovation Management Information System (STI-MIS)",
        industry: ["Government", "Public Sector"],
        summary: "Successfully developed a comprehensive ASP.NET web application to support the Ministry's data management needs for Science, Technology, and Innovation (STI) initiatives.",
        details: [
            "Collaborated seamlessly with a multidisciplinary team of researchers and stakeholders to align technical development with research-driven requirements.",
            "Led the design and development of the entire application, including the MSSQL database, ensuring optimized schema design, query efficiency, and scalability.",
            "Developed advanced data configuration features allowing users to define formulae, create indicators, and link them to STI initiatives."
        ],
        highlights: [
            "<strong>Database Development:</strong> Designed and optimized the MSSQL database.",
            "<strong>Full-Stack Development:</strong> Delivered an end-to-end solution, including APIs, backend logic, and frontend interface using ASP.NET."
        ],
        outcome: "Rescued a delayed project, completed development on time, and exceeded client expectations.",
        logo: "images/mesti-logo.jpeg",
        screenshot: "images/mesti-logo.jpeg"
    },
    // {
    //     id: 2,
    //     title: "ERP Consultant | Central Bank of Liberia",
    //     duration: "Mar 2023 – Dec 2023",
    //     name: "Financial and Operational ERP Implementation",
    //     industry: "Banking",
    //     summary: "Led the implementation of a comprehensive ERP system to streamline financial operations.",
    //     details: [
    //         "Customized modules to address specific requirements of the Central Bank's operations.",
    //         "Provided hands-on training to staff for seamless adoption of the new system.",
    //         "Delivered ongoing support for system enhancements."
    //     ],
    //     highlights: [
    //         "<strong>Process Optimization:</strong> Improved operational efficiency by automating manual financial processes.",
    //         "<strong>Customization:</strong> Tailored ERP features to meet the bank's unique requirements."
    //     ],
    //     outcome: "Enhanced financial management capabilities and operational transparency at the Central Bank.",
    //     logo: "images/cbl-logo.jpg",
    //     screenshot: "images/cbl-screenshot.jpg"
    // },
    // {
    //     id: 3,
    //     title: "Retail Management System Specialist | Vodafone Ghana",
    //     duration: "Jan 2024 – Jul 2024",
    //     name: "Retail Management System Modernization",
    //     industry: "Telecommunications",
    //     summary: "Modernized Vodafone Ghana's retail management system to replace manual processes.",
    //     details: [
    //         "Implemented Microsoft Dynamics RMS, streamlining operations and enabling real-time retail management across all outlets.",
    //         "Trained staff and provided on-site support during the transition phase.",
    //         "Delivered ongoing support for system enhancements and troubleshooting."
    //     ],
    //     highlights: [
    //         "<strong>Process Modernization:</strong> Transitioned the company from manual to automated retail operations.",
    //         "<strong>Technology Integration:</strong> Delivered a robust solution using Microsoft Dynamics RMS."
    //     ],
    //     outcome: "Achieved significant operational efficiency and enhanced real-time visibility into retail operations.",
    //     logo: "images/vodafone-logo.jpg",
    //     screenshot: "images/vodafone-screenshot.jpg"
    // },
    {
        id: 4,
        title: "Full-Stack Developer | Inter-Con Security, Ghana",
        duration: "Nov 2024 – Dec 2024",
        name: "Customized Financial Reporting Application",
        industry: ["Security Services"],
        summary: "Developed a customized financial reporting application for Inter-Con Security, interfacing with the client's accounting software running on a Pervasive database.",
        details: [
            "Integrated the application with the client's Pervasive database, fetching real-time accounting transactions for reporting purposes.",
            "Designed and implemented a financial reporting module that generated multi-page and year-to-date reports, exportable in formats like Excel, CSV, PDF, and image.",
            "Built a comprehensive user management system with role-based access controls, password policies, and detailed audit trails."
        ],
        highlights: [
            "<strong>Data Integration:</strong> Seamlessly connected with the Pervasive database for real-time data retrieval and processing.",
            "<strong>Custom Reporting:</strong> Enabled exportable, drill-down project reports tailored to client-specific needs."
        ],
        outcome: "Delivered a scalable and user-friendly application that streamlined financial reporting processes for Inter-Con Security.",
        logo: "images/intercon-logo.png",
        screenshot: "images/intercon-logo.png"
    },
    {
        id: 5,
        title: "Full-Stack Developer | Harlequin International Limited & Harlequin Oil & Gas",
        duration: "Oct 2023 – Aug 2024",
        name: "Procurement Workflow Management System",
        industry: ["Oil & Gas"],
        summary: "Developed a procurement workflow application for Harlequin International Limited and Harlequin Oil & Gas, designed to streamline requisition and purchase order (PO) processes.",
        details: [
            "Designed and implemented a procurement workflow system enabling users to create, forward, and manage requisitions, and convert them into POs for approval and further processing.",
            "Developed a service to integrate with the ERP system, polling the database for new requisitions and processing them automatically.",
            "Built a robust email notification service to send real-time updates and alerts along the procurement chain."
        ],
        highlights: [
            "<strong>ERP Integration:</strong> Implemented a real-time integration service with MSSQL-based ERP systems for data synchronization.",
            "<strong>Notification System:</strong> Created a dynamic email service to automate stakeholder communication."
        ],
        outcome: "Delivered a robust, scalable application that streamlined procurement workflows and enhanced operational efficiency.",
        logo: "images/hog-logo.png",
        screenshot: "images/harlequin-logo.jpg"
    },
    {
        id: 6,
        title: "ERP Consultant | Lister Hospital and Fertility Centre",
        duration: "April 2018 – October 2020",
        name: "Sage 200 Evolution ERP Implementation and Fixed Assets Module",
        industry: ["Healthcare"],
        summary: "Successfully implemented Sage 200 Evolution ERP for Lister Hospital and Fertility Centre, upgrading the hospital from its previous accounting system to a comprehensive ERP solution.",
        details: [
            "Migrated Lister Hospital from its previous accounting system to Sage 200 Evolution, setting up the General Ledger, Payables, and Receivables modules.",
            "Provided templates for stakeholders to populate data, performed data cleansing, and migrated assets, financial records, and inventory into the ERP system.",
            "Configured and integrated inventory management in 2020 to enhance control and tracking of hospital resources."
        ],
        highlights: [
            "<strong>Full ERP Transition:</strong> Achieved a seamless upgrade from the previous accounting system, enabling improved financial operations and reporting.",
            "<strong>Fixed Assets and Inventory Integration:</strong> Delivered complete solutions for asset management and inventory control, supporting operational efficiency."
        ],
        outcome: "Successfully transitioned Lister Hospital to a modern ERP system, enhancing operational efficiency and financial management.",
        logo: "images/lister-logo.jpg",
        screenshot: "images/lister-logo.jpg"
    },
    {
        id: 7,
        title: "ERP Consultant | IBM Petroleum Limited",
        duration: "Feb 2018 – April 2018",
        name: "Sage 50 Cloud Pastel Partner Implementation",
        industry: ["Oil & Gas"],
        summary: "Provided consulting and technical expertise to implement an ERP system tailored to the operational and reporting needs of IBM Petroleum Limited.",
        details: [
            "Collaborated with stakeholders to design and configure the chart of accounts, customer, and supplier profiles to align with the company's business operations and financial reporting requirements.",
            "Customized Sage 50 Cloud Pastel Partner to meet the unique needs of the Oil & Gas sector, ensuring compliance with industry standards and financial regulations.",
            "Delivered comprehensive training sessions for all stakeholders, enabling efficient and accurate use of the ERP system."
        ],
        highlights: [
            "<strong>ERP Customization:</strong> Tailored Sage 50 Cloud Pastel Partner to meet IBM Petroleum's specific operational and reporting objectives.",
            "<strong>Stakeholder Engagement:</strong> Worked closely with company leadership and operational staff to understand requirements and deliver a solution that enhanced business operations."
        ],
        outcome: "Successfully implemented an ERP system that streamlined operations and improved financial oversight for a rapidly growing Oil & Gas company.",
        logo: "images/ibm-logo.jpg",
        screenshot: "images/ibm-logo.jpg"
    },
    {
        id: 8,
        title: "ERP Consultant | ECOWAS Brown Card Insurance Scheme, Ghana Office",
        duration: "Jan 2015 – March 2015",
        name: "ERP System Implementation for the ECOWAS Brown Card Scheme",
        industry: ["Insurance"],
        summary: "Implemented an ERP system to streamline the operations of the ECOWAS Brown Card Insurance Scheme in Ghana.",
        details: [
            "Designed the chart of accounts tailored to the scheme's financial structure.",
            "Configured modules for receivables, payables, and third-party liability management.",
            "Conducted stakeholder training to ensure effective adoption and utilization of the system."
        ],
        highlights: [
            "<strong>Membership and Subscription Management:</strong> Streamlined processes for tracking membership and subscription payments with real-time reporting capabilities.",
            "<strong>Customization:</strong> Tailored the ERP system to meet the unique needs of a trade association in the insurance sector."
        ],
        outcome: "Successfully deployed an ERP system that continues to support GIA's financial and operational needs.",
        logo: "images/ecowas-logo.jpg",
        screenshot: "images/ecowas-logo.jpg"
    },
    {
        id: 9,
        title: "ERP Consultant | National Communications Authority (NCA)",
        duration: "Feb 2015 – May 2015",
        name: "ERP System Implementation",
        industry: ["Telecommunications"],
        summary: "Implemented a comprehensive ERP system for the National Communications Authority (NCA), the regulatory body for electronic communications in Ghana.",
        details: [
            "Deployed the ERP system to manage all aspects of the Authority's operations, bringing all regional offices onto a centralized platform.",
            "Transitioned data from the previous accounting software to the new ERP system, ensuring continuity and accuracy.",
            "Set up modules for General Ledger, Accounts Receivable, Accounts Payable, and other essential financial and operational processes."
        ],
        highlights: [
            "<strong>Nationwide Integration:</strong> Unified the financial and operational processes of all regional offices into a centralized system for enhanced oversight and efficiency.",
            "<strong>Transition Expertise:</strong> Leveraged years of experience supporting the NCA's previous accounting software to ensure a smooth and seamless ERP implementation."
        ],
        outcome: "Successfully deployed an ERP system that streamlined operations, improved data accuracy, and enhanced decision-making across the NCA's nationwide offices.",
        logo: "images/nca-logo2.png",
        screenshot: "images/nca-logo2.png"
    },
    {
        id: 10,
        title: "ERP Consultant | Energy Commission of Ghana",
        duration: "Nov 2014 – May 2015",
        name: "Sage 200 Evolution ERP Implementation",
        industry: ["Energy", "Government", "Public Sector"],
        summary: "Implemented Sage 200 Evolution ERP for the Energy Commission of Ghana to enhance their operational efficiency and financial management.",
        details: [
            "Successfully pitched Sage 200 Evolution as a full ERP solution to address the Commission's broader operational needs, replacing the existing system.",
            "Configured the ERP system with a custom chart of accounts, Accounts Receivable and Payable modules, and dedicated databases to cater to specific operational aspects, such as the Energy Fund.",
            "Developed tailored reporting solutions to meet regulatory and organizational requirements, ensuring compliance and transparency."
        ],
        highlights: [
            "<strong>Multi-Database Setup:</strong> Designed dedicated company databases within Sage 200 Evolution to handle specialized funds and reporting requirements.",
            "<strong>ERP Customization:</strong> Adapted the system to align with the Energy Commission's regulatory, operational, and financial reporting needs."
        ],
        outcome: "Successfully transitioned the Energy Commission to a robust ERP system that improved operational and financial management capabilities.",
        logo: "images/energy-logo.jpg",
        screenshot: "images/energy-logo.jpg"
    },
    {
        id: 11,
        title: "ERP Consultant | Misyl Energy Company Limited",
        duration: "July 2014 – September 2014",
        name: "ERP System Implementation",
        industry: ["Oil & Gas"],
        summary: "Implemented a tailored ERP system for Misyl Energy Company Limited, a key player in Ghana's downstream petroleum sector.",
        details: [
            "Developed a comprehensive and industry-specific chart of accounts tailored to Misyl Energy's operations.",
            "Set up robust inventory management processes to handle various petroleum products, including LPG, automotive gas oil, and premium motor spirit.",
            "Configured receivables and payables systems to streamline financial transactions and vendor/customer management."
        ],
        highlights: [
            "<strong>Industry Customization:</strong> Tailored the ERP system to meet the unique regulatory and operational requirements of the downstream petroleum sector.",
            "<strong>Scalability:</strong> Designed the system to accommodate future growth and changes in operational scale."
        ],
        outcome: "Successfully deployed an ERP system that streamlined Misyl Energy's financial and operational processes, supporting the company's growth and compliance requirements.",
        logo: "images/misyl-logo.jpg",
        screenshot: "images/misyl-logo.jpg"
    },
    {
        id: 12,
        title: "ERP Consultant | Goldkey Properties Limited & Blackwell Realty Limited",
        duration: "Feb 2014 – May 2014",
        name: "Sage 200 Evolution ERP Implementation",
        industry: ["Real Estate"],
        summary: "Implemented Sage 200 Evolution ERP for Goldkey Properties Limited, a leading real estate developer, and its sister company, Blackwell Realty Limited.",
        details: [
            "Successfully migrated historical data from the previous accounting system, ensuring a seamless transition without data loss.",
            "Recreated the existing chart of accounts, accounts receivable, and accounts payable structures within Sage 200 Evolution ERP.",
            "Configured the ERP system to support multi-company operations, enabling centralized management of Goldkey Properties and Blackwell Realty."
        ],
        highlights: [
            "<strong>System Transition:</strong> Enabled a smooth transition from the previous accounting software to Sage 200 Evolution ERP.",
            "<strong>Customized Reporting:</strong> Delivered tailored reporting solutions to meet the operational and regulatory requirements of a high-profile real estate developer."
        ],
        outcome: "Successfully implemented an ERP system that enhanced operational efficiency and financial management for both companies.",
        logo: "images/goldkey-logo.jpg",
        screenshot: "images/goldkey-logo.jpg"
    },
    {
        id: 13,
        title: "ERP Consultant | Harlequin International (Ghana) Limited (HIT) & Harlequin Oil & Gas",
        duration: "Jan 2014 – April 2014",
        name: "Sage 200 Evolution ERP Implementation",
        industry: ["Engineering", "Oil & Gas"],
        summary: "Implemented and heavily customized Sage 200 Evolution ERP for Harlequin International (Ghana) Limited (HIT) and its sister company, Harlequin Oil & Gas.",
        details: [
            "Transitioned HIT from Sage 50 Accounting Partner to Sage 200 Evolution to accommodate their expanding operations and multi-departmental needs.",
            "Implemented a scalable multi-company setup, replicating the system for Harlequin Oil & Gas upon its establishment.",
            "Designed and integrated a comprehensive Job Costing module, supported by custom Business Intelligence reports for deep operational insights."
        ],
        highlights: [
            "<strong>Job Costing Module:</strong> Enabled precise cost tracking and reporting for engineering and fabrication projects.",
            "<strong>BI Reports:</strong> Delivered actionable insights into operations, enhancing decision-making capabilities."
        ],
        outcome: "Delivered a tailored ERP solution that became a core part of HIT's operational infrastructure, streamlining processes and enhancing efficiency.",
        logo: "images/harlequin-logo.jpg",
        screenshot: "images/harlequin-logo.jpg"
    },
    {
        id: 14,
        title: "ERP Consultant | Petroleum Warehousing & Supplies Ltd (BDC)",
        duration: "Jan 2014 – March 2014",
        name: "ERP System Implementation",
        industry: ["Oil & Gas"],
        summary: "Deployed a tailored ERP system for Petroleum Warehousing & Supplies Ltd, a Bulk Distribution Company (BDC) operating in Ghana's Oil & Gas sector.",
        details: [
            "Designed and implemented an ERP system aligned with industry regulations and operational requirements specific to the Oil & Gas sector.",
            "Configured modules to meet the client's monitoring and reporting needs, ensuring compliance with Ghana's regulatory standards.",
            "Delivered comprehensive stakeholder training to ensure effective adoption and use of the ERP system."
        ],
        highlights: [
            "<strong>Regulatory Compliance:</strong> Ensured the ERP system met all industry reporting and monitoring requirements.",
            "<strong>Customization:</strong> Adapted the solution to align with the unique operational demands of a BDC in the Oil & Gas sector."
        ],
        outcome: "Successfully deployed an ERP system that streamlined operations, enhanced regulatory compliance, and provided accurate monitoring and reporting capabilities.",
        logo: "images/petroleum-logo.jpg",
        screenshot: "images/petroleum-logo.jpg"
    },
    {
        id: 15,
        title: "ERP Consultant | Africopa Ghana Limited",
        duration: "Oct 2014 – Dec 2014",
        name: "Sage 50 Cloud Accounting Partner Implementation",
        industry: ["Retail","Duty-Free"],
        summary: "Implemented Sage 50 Cloud Accounting Partner for Africopa Ghana Limited, a Ghanaian company operating duty-free shops and promoting made-in-Ghana goods.",
        details: [
            "Designed and implemented a comprehensive chart of accounts, alongside Accounts Receivable and Payable modules tailored to Africopa's operational needs.",
            "Configured a robust inventory management system, emphasizing multi-store and warehouse locations with real-time tracking and reporting capabilities.",
            "Delivered training sessions to empower stakeholders with the skills needed to effectively operate the ERP system."
        ],
        highlights: [
            "<strong>Inventory Management:</strong> Implemented a scalable solution to handle diverse product categories and multiple warehouse locations, ensuring real-time accuracy.",
            "<strong>Customization:</strong> Adapted Sage 50 Cloud Accounting Partner to meet the operational and reporting requirements of a Free Zone Enterprise."
        ],
        outcome: "Successfully deployed an ERP system that improved financial management and inventory oversight, supporting Africopa's growth objectives.",
        logo: "images/africopa-logo.jpg",
        screenshot: "images/africopa-logo.jpg"
    },
    {
        id: 16,
        title: "ERP Consultant | Ghana Integrity Initiative (GII)",
        duration: "May 2015 – Aug 2015",
        name: "Sage 50 Cloud Accounting Partner Implementation",
        industry: ["Non-Profit"],
        summary: "Implemented Sage 50 Cloud Accounting Partner as the accounting system for Ghana Integrity Initiative (GII), the local chapter of Transparency International.",
        details: [
            "Collaborated with GII to design and implement a tailored chart of accounts that aligned with their operational needs and non-profit financial reporting standards.",
            "Configured the ERP system to facilitate accurate tracking and management of funds and expenses in line with donor and regulatory requirements.",
            "Conducted staff training sessions to ensure efficient system use and operational continuity."
        ],
        highlights: [
            "<strong>Customization:</strong> Adapted Sage 50 Cloud Accounting Partner to meet the specific operational and compliance needs of a non-profit organization.",
            "<strong>Capacity Building:</strong> Delivered effective training to enhance staff proficiency in managing and utilizing the accounting system."
        ],
        outcome: "Successfully implemented a robust accounting system that improved financial management and transparency.",
        logo: "images/gii-logo.jpg",
        screenshot: "images/gii-logo.jpg"
    },
    {
        id: 17,
        title: "ERP Consultant | Inter-Con Security Systems (Ghana, Togo, Benin)",
        duration: "July 2015 – September 2015",
        name: "Sage 50 Cloud Accounting Partner Implementation",
        industry: ["Security Services"],
        summary: "Implemented a customized ERP solution for Inter-Con Security Systems, a leading global security services provider, to address operational inefficiencies in their previous accounting system.",
        details: [
            "Conducted comprehensive stakeholder meetings to understand operational challenges and showcase successful ERP implementations for similar clients.",
            "Designed and implemented a tailored chart of accounts, ensuring alignment with Inter-Con's complex security service operations.",
            "Configured Accounts Receivable and Payable modules to streamline financial workflows and enhance accuracy in client and vendor management."
        ],
        highlights: [
            "<strong>ERP Customization:</strong> Tailored Sage 50 Cloud Accounting Partner to meet the unique operational and reporting needs of a multinational security services provider.",
            "<strong>Cloud Deployment:</strong> Enabled secure, centralized access across multiple West African offices through a cloud-based implementation."
        ],
        outcome: "Successfully transitioned Inter-Con Security Systems Ghana to a modern, robust ERP system, resolving inefficiencies in their previous accounting software.",
        logo: "images/intercon-logo.png",
        screenshot: "images/intercon-logo.png"
    },
    {
        id: 18,
        title: "ERP Consultant | Busara Africa",
        duration: "Aug 2015 – November 2015",
        name: "Sage 50 Cloud Accounting Partner Implementation",
        industry: ["Consulting", "Leadership Development"],
        summary: "Implemented a robust accounting system for Busara Africa, a Leadership Development Consulting Firm based in Accra, Ghana.",
        details: [
            "Collaborated with stakeholders to design and set up a tailored chart of accounts, ensuring alignment with Busara Africa's operational and reporting objectives.",
            "Configured Accounts Receivable and Payable modules, streamlining financial transactions and enabling efficient management of clients and vendors.",
            "Delivered training sessions to empower relevant staff with the skills needed to effectively operate Sage 50 Cloud Accounting Partner."
        ],
        highlights: [
            "<strong>Customization:</strong> Adapted Sage 50 Cloud Accounting Partner to meet the specific needs of a consulting firm, emphasizing accurate reporting and operational efficiency.",
            "<strong>Stakeholder Training:</strong> Focused on knowledge transfer to ensure user confidence and system mastery."
        ],
        outcome: "Successfully deployed an accounting system that improved Busara Africa's financial management and reporting capabilities.",
        logo: "images/busara-logo.jpg",
        screenshot: "images/busara-logo.jpg"
    },
    {
        id: 19,
        title: "ERP Consultant | Presbyterian Church of Ghana, General Assembly Office",
        duration: "Apr 2016 – June 2016",
        name: "Sage 50 Cloud Accounting Partner Implementation",
        industry: ["Non-Profit", "Religious"],
        summary: "Implemented a tailored ERP system for the Presbyterian Church of Ghana, General Assembly Office, a non-profit organization.",
        details: [
            "Successfully pitched and implemented Sage 50 Cloud Accounting Partner to meet the church's operational and reporting objectives.",
            "Designed and deployed inventory and point-of-sale modules to manage the sale of religious materials in church stores.",
            "Configured the ERP system on a cloud server environment, enabling centralized access and enhancing operational efficiency."
        ],
        highlights: [
            "<strong>Non-Profit Focus:</strong> Customized Sage 50 Cloud Accounting Partner to align with the unique objectives and operational requirements of a non-profit organization.",
            "<strong>Inventory Management:</strong> Implemented modules to streamline inventory tracking and point-of-sale operations, increasing efficiency in managing church store sales."
        ],
        outcome: "Successfully deployed a comprehensive ERP solution that continues to meet the church's financial and operational needs.",
        logo: "images/presby-logo.jpg",
        screenshot: "images/presby-logo.jpg"
    },
    {
        id: 20,
        title: "ERP Consultant | Economic Distribution Company Ghana Limited (EcoDi)",
        duration: "June 2016 – September 2016",
        name: "Sage 200 Evolution ERP Implementation",
        industry: ["Retail"],
        summary: "Implemented Sage 200 Evolution ERP for Economic Distribution Company Ghana Limited (EcoDi), a key player in Ghana's retail sector and the licensed operator of SPAR in Ghana.",
        details: [
            "Curated a customized chart of accounts to reflect EcoDi's financial structure and operational requirements.",
            "Configured and optimized receivables and payables systems for efficient management of customer and vendor transactions.",
            "Developed tailored reports to provide actionable insights for decision-making and compliance with industry standards."
        ],
        highlights: [
            "<strong>Scalable ERP Implementation:</strong> Deployed Sage 200 Evolution ERP to support EcoDi's growing operations, including their transformation into SPAR-branded stores.",
            "<strong>E-Commerce and Retail Integration:</strong> Supported EcoDi's retail operations and online grocery delivery capabilities by ensuring seamless ERP integration."
        ],
        outcome: "Successfully implemented an ERP system that streamlined financial and operational processes, supporting EcoDi's transformation and growth.",
        logo: "images/ecodi-logo.jpg",
        screenshot: "images/ecodi-logo.jpg"
    },
    {
        id: 21,
        title: "ERP Consultant | Nick Petroleum Ghana Limited",
        duration: "March 2016 – July 2016",
        name: "ERP System Implementation",
        industry: ["Oil & Gas"],
        summary: "Implemented a comprehensive ERP system for Nick Petroleum Ghana Limited, a new entrant in the downstream petroleum sector.",
        details: [
            "Designed and configured a customized General Ledger to reflect the financial structure and reporting needs of a petroleum retail business.",
            "Streamlined customer and vendor management with efficient tracking and reconciliation processes.",
            "Configured robust inventory systems for fuel and convenience store items, enabling accurate stock control and integration with retail operations across 11 service stations."
        ],
        highlights: [
            "<strong>Multi-Location Integration:</strong> Enabled centralized management of inventory, retail operations, and financial processes across service stations in multiple regions.",
            "<strong>Industry-Specific Customization:</strong> Tailored the ERP system to address specific requirements of the downstream petroleum sector, including fuel inventory and retail management."
        ],
        outcome: "Successfully deployed an ERP system that streamlined financial, inventory, and retail management processes for Nick Petroleum.",
        logo: "images/nick-logo.jpg",
        screenshot: "images/nick-logo.jpg"
    },
    {
        id: 22,
        title: "Full-Stack Developer | Ministry of Finance, Ghana",
        duration: "March 2022 – Oct 2022",
        name: "Climate Finance Tracking Web Application",
        industry: ["Government", "Finance"],
        summary: "Developed a web-based application for the Ministry of Finance, funded by UNDP, to streamline reporting on Climate Finance budgets and expenditures.",
        details: [
            "Collaborated with key stakeholders, including Ministry staff and UNDP representatives, to align the application's functionality with financial reporting needs.",
            "Designed and implemented a robust back-end system for managing data uploads, segment definitions, ledger accounts, and budget versions.",
            "Developed dynamic dashboards and custom reports, enabling users to analyze Climate Finance data by various dimensions and drill into details through interactive data grids."
        ],
        highlights: [
            "<strong>Data Integration:</strong> Seamlessly integrated the application with the GIFMIS system to fetch and process ERP data for financial reporting.",
            "<strong>Database Optimization:</strong> Designed and optimized the MSSQL database, including schema design, query tuning, and stored procedure development to handle large datasets efficiently."
        ],
        outcome: "Delivered a user-friendly system that transformed raw financial data into actionable insights, aiding decision-making for Climate Finance initiatives.",
        logo: "images/mof-logo.jpg",
        screenshot: "images/mof-logo.jpg"
    },
    {
        id: 23,
        title: "Full-Stack Developer | Energy Commission of Ghana",
        duration: "December 2021 – February 2022",
        name: "Financial Visualization and Reporting System",
        industry: ["Energy","Public Sector", "Government"],
        summary: "Developed a real-time financial visualization and reporting system for the Energy Commission of Ghana.",
        details: [
            "Designed and implemented a system for department and section management, enabling users to link general ledger accounts to specific organizational units.",
            "Developed dynamic dashboards featuring real-time chart visualizations and drill-down cross-tab grids, providing users with actionable insights.",
            "Ensured real-time data synchronization by creating backend services that fetched updates directly from the ERP system."
        ],
        highlights: [
            "<strong>Real-Time Integration:</strong> Designed and implemented mechanisms to fetch, process, and display real-time updates from the ERP system.",
            "<strong>Financial Reporting:</strong> Created modules for generating balance sheets, trend analyses, trial balances, and other financial reports with drill-down capabilities."
        ],
        outcome: "Delivered a scalable, intuitive system that streamlined financial reporting processes and improved operational efficiency.",
        logo: "images/energy-logo.jpg",
        screenshot: "images/energy-logo.jpg"
    },
    {
        id: 24,
        title: "ERP Consultant | Orica Senegal SARL",
        duration: "June 2012 – August 2012",
        name: "ERP System Implementation",
        industry: ["Mining"],
        summary: "Implemented a tailored ERP system for Orica Senegal SARL, a subsidiary of Orica Limited, a global leader in mining and infrastructure solutions.",
        details: [
            "Designed and implemented a custom chart of accounts, along with Accounts Receivable and Payable modules, to support Orica Senegal's financial and operational needs.",
            "Delivered training sessions to equip stakeholders with the skills required for effective use of the ERP system.",
            "Provided ongoing post-implementation support, addressing any updates or issues to ensure optimal system performance."
        ],
        highlights: [
            "<strong>Customization:</strong> Adapted the ERP system to meet the specific needs of a global mining and infrastructure solutions provider.",
            "<strong>Stakeholder Engagement:</strong> Focused on knowledge transfer and user empowerment to facilitate smooth adoption of the system."
        ],
        outcome: "Successfully deployed a robust ERP system that improved financial operations and reporting for Orica Senegal SARL.",
        logo: "images/orica-logo.jpg",
        screenshot: "images/orica-logo.jpg"
    },
    {
        id: 25,
        title: "ERP Consultant | West African Gas Pipeline Company Limited (WAPCo)",
        duration: "Feb 2012 – May 2012",
        name: "ERP System Implementation",
        industry: ["Energy", "Oil & Gas"],
        summary: "Implemented a comprehensive ERP system for the West African Gas Pipeline Company Limited (WAPCo), a joint venture dedicated to transporting natural gas from Nigeria to Benin, Togo, and Ghana.",
        details: [
            "Designed and deployed a tailored ERP system to manage accounting, payables, receivables, payroll, and operational reporting.",
            "Configured the ERP to align with multi-national requirements, addressing the unique needs of a joint venture spanning multiple countries.",
            "Delivered stakeholder training to ensure proficiency in the system across departments and roles."
        ],
        highlights: [
            "<strong>Comprehensive Functionality:</strong> Integrated modules for accounting, payroll, and reporting, ensuring seamless and efficient management of operations.",
            "<strong>International Standards Compliance:</strong> Ensured the system met the regulatory and operational needs of the multi-national joint venture."
        ],
        outcome: "Successfully deployed a robust ERP system that enhanced operational efficiency and financial oversight for WAPCo.",
        logo: "images/wapco-logo.jpg",
        screenshot: "images/wapco-logo.jpg"
    },
    {
        id: 26,
        title: "ERP Consultant | Ghana Insurers Association (GIA)",
        duration: "Jan 2012 – March 2012",
        name: "ERP System Implementation",
        industry: ["Insurance"],
        summary: "Implemented a tailored ERP system for the Ghana Insurers Association (GIA), the trade association representing insurance and reinsurance companies in Ghana.",
        details: [
            "Designed and configured a customized chart of accounts to align with GIA's operational and reporting requirements.",
            "Developed modules for managing membership and subscription processes, enabling efficient tracking and reporting.",
            "Created tailored reporting solutions to provide actionable insights and support decision-making."
        ],
        highlights: [
            "<strong>Membership and Subscription Management:</strong> Streamlined processes for tracking membership and subscription payments with real-time reporting capabilities.",
            "<strong>Customization:</strong> Tailored the ERP system to meet the unique needs of a trade association in the insurance sector."
        ],
        outcome: "Successfully deployed an ERP system that continues to support GIA's financial and operational needs.",
        logo: "images/gia-logo.jpg",
        screenshot: "images/gia-logo.jpg"
    },
    {
        id: 27,
        title: "ERP Consultant | Edison Chouest Offshore Ghana Limited (ECO Ghana)",
        duration: "August 2011 – Ongoing",
        name: "ERP System Implementation",
        industry: ["Marine", "Offshore Services"],
        summary: "Implemented a customized ERP system for Edison Chouest Offshore Ghana Limited (ECO Ghana), a subsidiary of the globally renowned Edison Chouest Offshore.",
        details: [
            "Designed and deployed a tailored ERP system to address the unique operational and financial reporting requirements of a global marine transportation leader.",
            "Configured modules for accounting, operations, and reporting, ensuring alignment with ECO Ghana's business processes.",
            "Delivered training sessions for stakeholders, ensuring effective adoption and efficient use of the ERP system."
        ],
        highlights: [
            "<strong>Customization:</strong> Adapted the ERP system to accommodate the specific operational demands of offshore support, port operations, and subsea services.",
            "<strong>Reporting Solutions:</strong> Developed tailored reports to provide management with actionable insights and enhance decision-making."
        ],
        outcome: "Successfully deployed an ERP system that enhanced operational efficiency and financial oversight for ECO Ghana.",
        logo: "images/edco-logo.jpg",
        screenshot: "images/edco-logo.jpg"
    },
    {
        id: 28,
        title: "ERP Consultant | Aero Surveys Limited (Starbow)",
        duration: "May 2011 – August 2011",
        name: "ERP System Implementation",
        industry: ["Aviation"],
        summary: "Implemented a tailored ERP system for Aero Surveys Limited (Starbow), a privately owned Ghanaian airline, to support its financial and operational management during a pivotal phase in its growth.",
        details: [
            "Designed and deployed a customized chart of accounts, ensuring alignment with the airline industry's operational and financial needs.",
            "Configured modules to manage accounts receivable and payable, payroll processing, and industry-specific financial reporting.",
            "Delivered comprehensive training sessions for stakeholders to ensure effective system adoption and use."
        ],
        highlights: [
            "<strong>Customization:</strong> Tailored the ERP system to accommodate the unique requirements of an airline, including specialized reporting and operational workflows.",
            "<strong>Reporting Solutions:</strong> Developed reporting capabilities to enhance financial oversight and support strategic decision-making."
        ],
        outcome: "Successfully implemented an ERP system that improved operational efficiency and financial management for Starbow.",
        logo: "images/starbow-logo.png",
        screenshot: "images/starbow-logo.png"
    },
    {
        id: 29,
        title: "ERP Consultant | HealthiLife Beverages Ltd.",
        duration: "Jan 2011 – April 2011",
        name: "ERP System Implementation",
        industry: ["Manufacturing"],
        summary: "Successfully implemented a comprehensive ERP system for HealthiLife Beverages Ltd., a leading Ghanaian beverage manufacturer and subsidiary of the Kina Group.",
        details: [
            "Designed and implemented a customized chart of accounts, aligning with the financial structure and reporting needs of a manufacturing business.",
            "Configured Accounts Payable and Receivable modules, streamlining financial workflows and improving efficiency in managing vendors and customers.",
            "Integrated a Bill of Materials (BOM) and Manufacturing module, enabling seamless management of production processes and cost tracking."
        ],
        highlights: [
            "<strong>Manufacturing Focus:</strong> Tailored the ERP system to incorporate BOM, production scheduling, and inventory control, meeting the demands of a large-scale manufacturing facility.",
            "<strong>Custom Reporting:</strong> Developed reports to support decision-making, covering production efficiency, inventory levels, and financial performance."
        ],
        outcome: "Successfully deployed a robust ERP system that enhanced production management, financial oversight, and inventory control for HealthiLife Beverages Ltd.",
        logo: "images/hbl-logo.jpg",
        screenshot: "images/hbl-logo.jpg"
    },
    {
        id: 30,
        title: "Retail Management System Specialist | Vodafone Ghana, Airtel-Tigo Ghana, Chad, and Congo",
        duration: "September 2009 – April 2010",
        name: "Microsoft Dynamics RMS Implementation",
        industry: ["Telecommunications"],
        summary: "Recruited to modernize Ghana Telecom, a former state-owned fixed-line and mobile operator, following its $900 million acquisition by Vodafone.",
        details: [
            "Participated in system rollout for Vodafone Ghana's Greater Accra and Ashanti Regions before leading implementations in the Central and Western Regions.",
            "Replaced manual retail processes with a real-time nationwide EPOS system across 50 stores, introducing new procedures for banking, billing systems, demand management, and stock control.",
            "Designed and deployed an automated purchase requisition system using SharePoint, including three-way matching for improved efficiency."
        ],
        highlights: [
            "<strong>Regional Rollout Leadership:</strong> Played a key role in the successful rollout of Microsoft Dynamics RMS across multiple regions.",
            "<strong>Automated Procurement:</strong> Introduced advanced automation tools for procurement, dealer management, and supply chain processes."
        ],
        outcome: "Delivered a robust retail management system for Vodafone Ghana, fostering a long-term partnership and setting the benchmark for similar implementations in other regions and countries.",
        logo: "images/vodafone-logo.jpg",
        screenshot: "images/vodafone-logo.jpg"
    },
    {
        id: 31,
        title: "Technical Support Specialist | Accounting Software Solutions for PwC Ghana and Sierra Leone",
        duration: "Ongoing since June 2012 (Ghana) and March 2017 (Sierra Leone)",
        name: "Accounting Software Solutions",
        industry: ["Professional Services","Consulting","Accounting"],
        summary: "Provided ongoing technical support, training, and replication of accounting software solutions for PwC Ghana and Sierra Leone, enabling them to efficiently prepare accounts for their clientele.",
        details: [
            "Delivered technical support services for PwC Ghana's accounting software since 2006, ensuring seamless operation and resolving technical issues promptly.",
            "Conducted regular training sessions for PwC staff to enhance their proficiency in the software and optimize their workflow.",
            "Successfully replicated and implemented the accounting software solution for PwC Sierra Leone in 2017, based on the success of the Ghana operations."
        ],
        highlights: [
            "<strong>Technical Support:</strong> Maintained a high level of client satisfaction by ensuring reliable system performance and user empowerment through training.",
            "<strong>International Expansion:</strong> Successfully expanded the solution to a new geographic location, earning commendation for the seamless replication and implementation in Sierra Leone."
        ],
        outcome: "Maintained a high level of client satisfaction by ensuring reliable system performance and user empowerment through training.",
        logo: "images/pwc-logo.png",
        screenshot: "images/pwc-logo.png"
    }
];
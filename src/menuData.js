import Accounting from './Images1/accounting.jpg';
import Android from './Images1/android.jpg';
import Back_End from './Images1/back_end.jpg';
import Bulk_SMS from './Images1/bulk.jpg';
import Business_Intelligence from './Images1/busines.jpg';
import Business_Cards from './Images1/business.jpg';
import Company_Law from './Images1/company.jpg';
import Content_Creation from './Images1/content.jpg';
import Cross_Platform from './Images1/cross.jpg';
import Custom_Illustrations from './Images1/custom.jpg';
import Customer_Sales from './Images1/customer.jpg';
import Dashboards from './Images1/dashboards.jpg';
import Data_Visualization from './Images1/data_visual.jpg';
import Data_Collection from './Images1/data.jpg';
import Email_Marketing from './Images1/email.jpg';
import Google from './Images1/google.jpg';
import Graphic from './Images1/Graphic.jpg';
import GST from './Images1/gst.jpg';
import Income_Tax from './Images1/income.jpg';
import Landing from './Images1/landing.jpg';
import CSR from './Images1/CSR.jpg';
import FCRA from './Images1/FCRA.jpg';
import Performance_Monitoring from './Images1/performance_monitoring.jpg';
import Performance_Optimization from './Images1/performance.jpg';
import Posters from './Images1/posters.jpg';
import SEO from './Images1/seo.jpg';
import Social_Media_Templates from './Images1/social_media.jpg';
import Social_Media_Strategy from './Images1/social.jpg';
import Trust from './Images1/trust.jpg';
import UI_UX from './Images1/ui_ux.jpg';
import Web from './Images1/web.jpg';
import Loan from './Images1/Loan.jpg';
import Trend from './Images1/Trend.jpg';
import Company_Registration from './Images1/Companyreg.jpg';



const menuData = [
    {
        id: 0,
        title:'Services',
        link: '#',
        items: {
          'Graphic Designing': [
                    {
                         name: 'Graphic Logo Design & Brand Guidelines',
                         image: Graphic,
                         description: "At our company, we offer expert <b>Graphic Logo Design</b> and comprehensive <b>Brand Guidelines</b> services that bring your brand’s identity to life. A well-crafted logo is more than just a symbol — it's the <b>visual cornerstone</b> of your brand. We help you create a strong, consistent, and memorable identity that sets you apart in a competitive market.Let us help you create a logo that communicates your story and a brand guideline that keeps it consistent everywhere."
                    },
                    {
                         name: 'Social Media Templates & Creatives',
                         image: Social_Media_Templates,
                         description: "We design professional, high-quality posters and templates that can be used across platforms such as <b>Instagram, Facebook, LinkedIn, Twitter, WhatsApp, and YouTube.</b> Whether it's for <b>event promotions, product launches, campaigns, webinars, achievements, announcements, or festive greetings,</b> our designs ensure your message stands out."
                    },
                    {
                         name: 'Posters, Flyers & Brochures',
                         image: Posters,
                         description: "we offer <b>customized Posters, Flyers, and Brochures design services</b> to help individuals, businesses, educational institutions, and organizations communicate their message effectively and creatively. Whether it’s for events, promotions, academic projects, branding, our design team ensures visually impactful and content-rich outputs that stand out."
                    },
                    {
                         name: 'Business Cards & Corporate Stationery',
                         image: Business_Cards,
                         description: "we understand that first impressions matter. Our <b>Business Cards & Corporate Stationery Services</b> are designed to help your brand stand out with style, professionalism, and consistency. Whether you're a startup, SME, or established enterprise, we offer tailored design and printing solutions that reflect your brand identity with precision.Let your brand speak for itself through every piece of communication. From your business card to your office notepad — we ensure <b>brand consistency, quality, and professionalism</b> at every touchpoint"
                    },
                    {
                         name: 'UI/UX Design for Web & App Interfaces',
                         image: UI_UX,
                         description: "we specialize in delivering intuitive and visually engaging <b>UI/UX design solutions</b> that enhance user satisfaction, drive engagement, and ensure seamless interaction across digital platforms. Our <b>UI/UX Design for Web & App Interfaces</b> service is tailored to meet the needs of modern businesses looking to create powerful, user-centered digital experiences.Our design team focuses on the perfect blend of <b>functionality, aesthetics, and usability,</b> ensuring every interface we build is not just beautiful—but also purposeful and user-friendly."
                    },
                    {
                         name: 'Custom Illustrations & Infographics',
                         image: Custom_Illustrations,
                         description: "we offer <b>Custom Illustrations & Infographics</b> as a creative service designed to <b>simplify complex ideas, enhance brand communication,</b> and engage your audience through visually compelling content. Whether you're presenting research data, educational material, marketing strategies, or technical workflows, our design team crafts tailored visuals that bring clarity, creativity, and impact to your message."
                    }
               ],
          'Web & App Development': [
                    {
                         name: 'Web Design & Development',
                         image:  Web,
                         description: "In today’s digital world, your website is often the first interaction your audience has with your brand. We make sure it creates a lasting impression — one that is professional, user-friendly, and aligned with your business objectives.we offer comprehensive <b>Web Design & Development services</b> tailored to help businesses establish a strong and effective digital presence. Our team of skilled designers and developers works closely with clients to create visually appealing, responsive, and functionally robust websites that meet their unique goals."

                    },
                    {
                         name: 'Landing Pages & Portfolio Sites',
                         image: Landing,
                         description: "In today’s digital-first world, a strong online presence is essential for businesses, professionals, and creatives alike. Our company offers <b>custom Landing Page and Portfolio Site development services</b> tailored to your goals, brand identity, and target audience.Whether you're looking to drive conversions, showcase your personal or professional work, or build a powerful digital brand, we provide creative, responsive, and high-performance web solutions that deliver results."
                    },
                    {
                         name: 'Android & iOS App Development',
                         image: Android,
                         description: "we offer comprehensive <b>Android and iOS App Development Services</b> to help businesses, startups, and institutions build powerful, user-friendly, and scalable mobile applications. Our expert development team delivers robust mobile solutions tailored to meet your specific needs — from idea to deployment and beyond. <h2>Industries We Serve</h2> <ul><li>E-commerce & Retail</li><li>Education & E-learning</li><li>Healthcare & Fitness</li><li>Logistics & Transportation</li><li>Finance & Fintech</li><li>Real Estate</li><li>Tourism & Hospitality</li><li>Startups & Innovation Labs</li></ul>"
                    },
                    {
                         name: 'Cross-Platform App Development',
                         image: Cross_Platform,
                         description: "<b>Cross-platform development</b> enables faster deployment, cost efficiency, and broader reach without compromising performance or user experience. It is ideal for businesses seekingIn today’s digital age, businesses need mobile applications that run seamlessly across devices and platforms. Our <b>Cross-Platform App Development Services</b> empower organizations to build high-performance apps that deliver a unified user experience across Android, iOS, and the web — all from a single codebase."
                    },
                    {
                         name: 'Backend Development & API Integration',
                         image: Back_End,
                         description: "We specialize in designing secure, modular, and high-performing backend systems tailored to meet your specific business needs. Whether you're building an enterprise-grade platform, a startup MVP, or a microservices-based architecture, our backend development team ensures smooth operation behind the scenes.we offer robust and scalable <b>Backend Development and API Integration services</b> that power modern web and mobile applications with efficiency, reliability, and performance. Our backend solutions are designed to handle complex business logic, manage data flow, and seamlessly integrate with third-party services and platforms."
                    },
                    {
                         name: 'Performance Optimization & Maintenance',
                         image: Performance_Optimization,
                         description: "The <b>Performance Optimization & Maintenance</b> is a core service designed to ensure that systems, infrastructure, applications, and equipment operate at their highest efficiency and reliability. Our solutions are focused on enhancing performance, reducing downtime, increasing lifespan, and lowering the total cost of ownership across technical and operational assets."
                    }
               ],
          'Digital Marketing': [
                    {
                         name: 'Social Media Strategy & Management',
                         image: Social_Media_Strategy,
                         description: "In today’s digital age, <b>social media is not just a platform — it’s a powerful tool</b> to connect, engage, and grow your brand. <b>Our Social Media Strategy & Management</b> service helps businesses build a strong online presence, create meaningful engagement, and drive measurable results through effective, data-driven strategiesOur comprehensive service includes end-to-end management of your social media presence across platforms such as <b>Facebook, Instagram, LinkedIn, Twitter, YouTube, and WhatsApp Business.</b>"
                    },
                    {
                         name: 'Search Engine Optimization',
                         image: SEO,
                         description: "In today's competitive digital landscape, simply having a website is not enough — <b>visibility matters.</b> Our company offers <b>comprehensive Search Engine Optimization (SEO) services</b> designed to enhance your online presence, attract organic traffic, and convert visitors into customers. We help businesses rank higher on search engines like Google, Bing, and Yahoo with proven SEO strategies tailored to your industry. <h3>Why SEO Matters</h3> <h3>Over 90% of online experiences begin with a search engine</h3> <h3>Over 90% of online experiences begin with a search engine</h3> <h3>Organic traffic is more trusted and cost-effective than paid ads</h3> Our SEO services ensure your business appears where your customers are looking."
                    },
                    {
                         name: 'Google Ads & Paid Campaigns',
                         image: Google,
                         description: "In today’s competitive digital landscape, having an online presence is not enough — you need <b>targeted visibility.</b> Our <b>Google Ads & Paid Campaigns,</b> service is designed to help businesses of all sizes attract the right audience, increase leads, and maximize ROI through strategic and data-driven advertising.Our team of certified digital marketing professionals creates and manages high-performance paid campaigns across Google’s advertising network. Whether your goal is to <b>generate leads, boost sales, or increase website traffic,</b> we design campaigns that deliver measurable results."

                    },
                    {
                         name: 'Email Marketing',
                         image: Email_Marketing,
                         description: "The <b>Email Marketing</b> remains one of the most powerful tools for direct customer engagement and conversion. Our company offers <b>end-to-end Email Marketing Services</b> tailored to help businesses build meaningful relationships, boost brand visibility, and drive measurable results.Our Email Marketing solutions are designed to support businesses of all sizes — from startups to enterprises — with personalized, automated, and data-driven campaigns."
                    },
                    {
                         name: 'Bulk SMS Campaigns',
                         image: Bulk_SMS,
                         description: "Our company offers <b>Bulk SMS Campaign Services</b> that provide a powerful and cost-effective solution for businesses and organizations to instantly connect with their customers, clients, or stakeholders. Whether you're promoting a product, sending alerts, or running a marketing campaign, our bulk SMS service ensures your message is delivered quickly, securely, and directly to mobile devices."
                    },
                    {
                         name: 'Content Creation & Scheduling',
                         image: Content_Creation,
                         description: "In the fast-paced digital world, content is not just king — it’s the <b>core of brand identity, customer engagement, and business growth.</b> Our <b>Content Creation & Scheduling services</b> are designed to help businesses build a consistent, creative, and impactful presence across all communication channels.Whether you need content for social media, blogs, websites, campaigns, or internal communication, we deliver tailored solutions that resonate with your audience and align with your brand goals."
                    },
                    {
                         name: 'Performance Monitoring & Analytics',
                         image: Performance_Monitoring,
                         description: "Our <b>Performance Monitoring & Analytics service</b> is designed to help organizations gain real-time insights into operations, improve decision-making, and enhance overall efficiency through data-driven strategies. By combining advanced analytics with intelligent monitoring tools, we empower businesses to track, measure, and optimize their performance across systems, teams, and processes.This service involves the continuous collection, analysis, and reporting of key performance metrics to ensure alignment with organizational goals. Whether you're managing infrastructure, applications, projects, or business processes, our analytics framework delivers actionable insights for smarter control and better outcomes."
                    }
               ],
          'Business Analytics': [
                    {
                         name: 'Data Collection & Cleaning',
                         image: Data_Collection,
                         description: "Accurate, reliable, and well-structured data is the backbone of any successful decision-making, research, or analytical process. Our <b>Data Collection & Cleaning Services</b> are designed to help businesses, researchers, and institutions acquire high-quality data and prepare it for meaningful analysis and insights.At our organization, we provide end-to-end data management solutions — from gathering raw data across multiple sources to cleaning, validating, and structuring it for ready use in analysis, machine learning, business intelligence, and reporting tools."

                    },
                    {
                         name: 'Dashboard Creation',
                         image: Dashboards,
                         description: "we offer <b>Dashboard Creation Services</b> that transform raw data into interactive, insightful, and visually compelling dashboards. Our dashboards empower businesses, institutions, and decision-makers with real-time visibility, performance tracking, and actionable analytics to drive informed decisions."

                    },
                    {
                         name: 'Customer & Sales Analytics',
                         image: Customer_Sales,
                         description: "In today’s data-driven business environment, understanding customer behavior and sales performance is crucial for sustainable growth. Our <b>Customer & Sales Analytics service</b> leverages advanced data analytics, machine learning, and visualization tools to help businesses gain a 360-degree view of their customer base and sales operations. We transform raw data into meaningful intelligence to uncover patterns, predict trends, and optimize sales strategies."
                    },
                    {
                         name: 'Predictive & Trend Analysis',
                         image: Trend,
                         description: 'Harness the power of <b>data</b> to anticipate future outcomes and stay ahead of the curve. Our <b>Predictive & Trend Analysis</b> service uses historical data, machine learning, and statistical modeling to forecast customer behavior, market trends, and operational risks. By identifying patterns and emerging opportunities early, we help you make data-driven decisions that drive <b>strategic growth</b> and competitive advantage.'
                    },
                    {
                         name: 'Data Visualization & Custom Reports',
                         image: Data_Visualization,
                         description: 'In today’s data-driven world, organizations need more than just raw data — they need insights that are <b>clear, actionable, and visually engaging.</b> Our <b>Data Visualization & Custom Reports service</b> transforms complex data into intuitive dashboards, infographics, and detailed reports that support <b>smart decision-making</b> and <b>strategic planning.</b>'
                    },
                    {
                         name: 'Business Intelligence Solutions',
                         image: Business_Intelligence,
                         description: "we provide <b>Business Intelligence (BI) Solutions</b> that transform raw data into actionable insights — empowering organizations to make data-driven decisions with speed, precision, and confidence. Our BI services are designed to help businesses uncover trends, monitor performance, identify opportunities, and drive strategic growth. <h2>Key Benefits</h2> <ul><li>Real-time access to business-critical insights</li><li>Improved operational efficiency and decision-making</li><li>Data-driven forecasting and strategic planning</li><li>Enhanced visibility across departments and workflows</li><li>Reduced reporting turnaround time and manual effort</li></ul>"
                    }
               ],
          'CA Services': [
                    {
                         name: 'Income Tax Services',
                         image: Income_Tax,
                         description: "Our company offers comprehensive <b>Income Tax Services</b> designed to meet the needs of individuals, professionals, startups, and businesses. We provide end-to-end support in planning, filing, compliance, and advisory to ensure our clients stay tax-efficient and fully compliant with the latest tax laws and regulations."
                    },
                    {
                         name: 'GST Services',
                         image: GST,
                         description: "we offer comprehensive <b>Goods and Services Tax (GST) services</b> tailored to meet the compliance and operational needs of businesses across sectors. With a team of experienced tax professionals and financial experts, we ensure seamless and error-free GST implementation, management, and advisory support. <h2>Why Choose Us</h2> <ul><li>Experienced tax professionals and certified consultants</li><li>Transparent pricing with dedicated client support</li><li>Latest software tools for GST computation and filings</li><li>100% confidentiality and data security</li></ul>"
                    },
                    {
                         name: 'Accounting & Bookkeeping',
                         image: Accounting,
                         description: "To simplify financial management and provide transparent, compliant, and real-time accounting solutions that support growth, planning, and operational efficiency. Our company offers reliable, accurate, and professional <b>Accounting & Bookkeeping Services</b> tailored to meet the financial management needs of businesses, startups, NGOs, educational institutions, and other organizations. With a team of experienced professionals and a commitment to precision, we help our clients maintain clean financial records, ensure compliance, and make informed business decisions."
                    },
                    {
                         name: 'Company Law & ROC Services',
                         image: Company_Law,
                         description: "Our firm offers <b>comprehensive Company Law and ROC (Registrar of Companies) Compliance Services,</b> designed to support businesses in meeting their statutory obligations under the <b>Companies Act, 2013</b> and related regulatory frameworks. We ensure that your business remains compliant, transparent, and legally protected throughout its lifecycle — from incorporation to ongoing governance and compliance."
                    },
                    {
                         name: 'Trusts, Societies & NGOs Registration',
                         image: Trust,
                         description: "Our company provides comprehensive support services to <b>Trusts, Societies, and Non-Governmental Organizations (NGOs)</b> to help them establish, operate, and grow in compliance with legal, financial, and strategic frameworks. Whether you're starting a charitable institution, running an educational trust, or managing a development-oriented NGO, we offer tailored solutions to ensure sustainable and impactful operations."
                    },
                    {
                         name: "Company Registration",
                         image:Company_Registration,
                         description:"<b>Turn your business idea into a legal entity with ease.</b> We handle the entire registration process — from choosing the right structure to final approvals — ensuring a smooth, compliant start to your entrepreneurial journey. <h2>Types of Registration</h2> <ul><li>Private Limited Company</li><li>Public Limited Company</li><li>Limited Liability Partnership (LLP)</li><li>One Person Company</li></ul>"
                    },
                    {
                         name: 'Project Report & Loan Documentation',
                         image: Loan,
                         description: 'we offer specialized <b>Project Report and Loan Documentation Services</b> to support entrepreneurs, startups, small and medium enterprises (SMEs), and business professionals in securing funding and institutional approvals. Our services are designed to meet the documentation standards of banks, financial institutions, and government loan schemes (including MSME, PMEGP, Startup India, and others).'
                    },
                    {
                         name:'CSR Advisory',
                         image: CSR,
                         description:"Our company offers specialized <b>Corporate Social Responsibility (CSR) Advisory Services</b> to help organizations design, implement, and evaluate impactful social responsibility initiatives that align with their business values and statutory obligations. We act as a strategic partner in driving socially responsible growth while contributing meaningfully to community development and sustainable outcomes. <h3>Why CSR Matters</h3> In today’s socially conscious world, CSR is not just a legal requirement — it is a <b>strategic investment</b> in people, planet, and purpose. An effective CSR program enhances brand reputation, strengthens stakeholder trust, and contributes to long-term business success."
                    },
                    {
                         name:'FCRA Sercvices',
                         image: FCRA,
                         description:"The <b>Foreign Contribution (Regulation) Act (FCRA)</b> governs the receipt and utilization of foreign contributions by individuals, associations, and organizations in India. Our company offers end-to-end <b>FCRA Services</b> to help NGOs, Trusts, Societies, and Section 8 Companies stay compliant with all legal requirements related to foreign funding.We ensure seamless management of all procedures — from registration to post-compliance — so that your organization can focus on its mission without administrative burdens."

                    }
               ]
        },
    }
];
export default menuData;

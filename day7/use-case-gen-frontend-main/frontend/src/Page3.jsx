import React from 'react';
import './Page3.css';
import IMG1 from './assets/IMG1.png';
import IMG2 from './assets/IMG2.png';
import IMG3 from './assets/IMG3.png';
import IMG4 from './assets/IMG4.png';
import IMG5 from './assets/IMG5.png';
import IMG6 from './assets/IMG6.png';


function Page3() {
  return (
    <div className="Page3-container">
      <h1>Website Knowledge for  <br/> <span style={{ color: '#701ABC' }}>improved decision making</span> </h1>
      <div className="content-container">
        <div className="text-content">
          <h2>Is Hosting Included with Web Design?</h2>
          <p> A creatively-designed website becomes accessible for everyone on the
web with a hosting provider. While some web designers offer services for
both hosting and web design, you should hire an expert in each field.
These experts will let you leverage the maximum benefit from both
services.</p>
        </div>
        <div className="image-content">
          <img src={IMG1} alt="IMG1" />
        </div>
        
      </div>
      <div className="content-container reversed">
      <div className="text-content">
          <h2>What is the Yearly Cost for Web Hosting?</h2>
          <p>
          There is no fixed cost for hosting. It varies depending on the website requirements. Consider the level of options and features, as well as the hosting environment type. Generally, the range for web hosting services starts from $150 and goes up to around $1500 per year.
          </p>
        </div>
        <div className="image-content">
          <img src={IMG2} alt="IMG2" />
        </div>
    
      </div>
      <div className="content-container">
        <div className="text-content">
          <h2>How Long Does it Take to Design a Website?</h2>
          <p>
          The average time taken to build a website from scratch is around 12 to 16 weeks. It starts with approximately 2 to 3 weeks spent in research and analysis, followed by another 4 to 6 weeks for web design. The next 3 to 4 weeks go into development processes like search engine optimization. Always remember to keep an additional 2 weeks for testing and changes and modifications.
          </p>
        </div>
        <div className="image-content">
          <img src={IMG3} alt="IMG3" />
        </div>
      </div>
      <div className="content-container reversed">
      <div className="text-content">
          <h2>What Is CSS?</h2>
          <p>
          CSS stands for Cascade Styling Sheets. It is a code that allows designers to edit the visual elements of the design. With the help of CSS, you can control the fonts, the colors, the layout, the structure, and the design on the whole. You can create a unique user experience so that customers are attracted to your website.
          </p>
        </div>
        <div className="image-content">
          <img src={IMG4} alt="IMG4" />
        </div>
        
      </div>
      <div className="content-container">
        <div className="text-content">
          <h2>How Much Do I Need to Pay for a One-Page-Website?</h2>
          <p>
          The cost of a one-page website is determined on the basis of several factors. These factors include the features, design elements, development processes, optimization, social media functionality, CMS integration, social media content, etc. A web design agency in Toronto will charge anywhere from $300 to $1200. Independent web designers may charge lesser, but you will also miss out on the expertise of the professionals at an agency.
          </p>
        </div>
        <div className="image-content">
          <img src={IMG5} alt="IMG5" />
        </div>
      </div>
      <div className="content-container reversed">
      <div className="text-content">
          <h2>What are the Monthly Costs for a Website?</h2>
          <p>
          The costs of website maintenance vary, depending on the type of website and its functionality. For smaller websites, the frequency of updates is low, while for enterprise-level or e-commerce websites, there is a higher frequency of edits and updates. Based on the scope of maintenance, the monthly charges for a website range from $250 to $4500 per month.
          </p>
        </div>
        <div className="image-content">
          <img src={IMG6} alt="IMG6" />
        </div>
        
      </div>
    </div>
  );
}

export default Page3;

import React from 'react';

// Timeline Section Component
export const TimelineSection: React.FC = () => {
  return (
    <section className="bg-slate-800">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-blue-300">Timeline</h2>
        <div className="space-y-8">
          <div className="flex">
            <div className="w-32 flex-shrink-0 text-blue-400 font-bold">2023 - Present</div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-white">MS in Statistical Practice</h3>
              <p className="text-slate-300">Boston University</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-32 flex-shrink-0 text-blue-400 font-bold">2018 - 2022</div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-white">BS in Statistics</h3>
              <p className="text-slate-300">University of California, Davis</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-32 flex-shrink-0 text-blue-400 font-bold">2022 - 2023</div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-white">Data Analyst</h3>
              <p className="text-slate-300">Tech Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Abstract Section Component
export const AbstractSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-blue-300">Abstract</h2>
        <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
          <p className="text-slate-200 leading-relaxed mb-4">
            As a graduate student in Statistical Practice at Boston University, I have developed expertise in statistical analysis, 
            data visualization, and machine learning. My portfolio showcases a diverse range of projects that demonstrate my 
            technical skills and ability to derive meaningful insights from complex datasets.
          </p>
          <p className="text-slate-200 leading-relaxed">
            From predictive modeling at Fidelity Investments to analyzing birefringence patterns in optical materials, 
            my work spans various domains including finance, healthcare, physics, and social sciences. Each project 
            highlights my commitment to rigorous methodology and innovative problem-solving approaches.
          </p>
        </div>
      </div>
    </section>
  );
};

// Fidelity Section Component
export const FidelitySection: React.FC = () => {
  return (
    <section className="bg-slate-800">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-blue-300">Fidelity Investments Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Predictive Modeling for Investment Strategies</h3>
            <p className="text-slate-300 mb-4">
              Developed machine learning models to predict market trends and optimize investment portfolios.
              Utilized time series analysis and regression techniques to identify patterns in financial data.
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Improved prediction accuracy by 15% compared to baseline models</li>
              <li>Implemented feature engineering techniques to enhance model performance</li>
              <li>Created interactive dashboards for visualizing model outputs</li>
            </ul>
          </div>
          <div className="bg-slate-700 rounded-lg p-6">
            <div className="h-64 bg-slate-600 rounded flex items-center justify-center">
              <p className="text-slate-400">Project visualization placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Birefringence Section Component
export const BirefringenceSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-blue-300">Birefringence Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-700 rounded-lg p-6">
            <div className="h-64 bg-slate-600 rounded flex items-center justify-center">
              <p className="text-slate-400">Birefringence pattern visualization</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Optical Materials Research</h3>
            <p className="text-slate-300 mb-4">
              Analyzed birefringence patterns in optical materials using image processing and statistical methods.
              Developed algorithms to quantify and classify different birefringence patterns.
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Implemented image segmentation techniques for pattern recognition</li>
              <li>Conducted statistical analysis to identify significant patterns</li>
              <li>Published findings in a peer-reviewed journal</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Ghana Section Component
export const GhanaSection: React.FC = () => {
  return (
    <section className="bg-slate-800">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-blue-300">Ghana Health Data Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Public Health Initiatives</h3>
            <p className="text-slate-300 mb-4">
              Analyzed health data from rural communities in Ghana to identify patterns and trends in disease prevalence.
              Collaborated with local health officials to develop targeted intervention strategies.
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Created geospatial visualizations of health metrics</li>
              <li>Identified key factors influencing health outcomes</li>
              <li>Developed predictive models for disease outbreaks</li>
            </ul>
          </div>
          <div className="bg-slate-700 rounded-lg p-6">
            <div className="h-64 bg-slate-600 rounded flex items-center justify-center">
              <p className="text-slate-400">Ghana health data visualization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Mental Health Section Component
export const MentalHealthSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-blue-300">Mental Health Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-700 rounded-lg p-6">
            <div className="h-64 bg-slate-600 rounded flex items-center justify-center">
              <p className="text-slate-400">Mental health trends visualization</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Trend Analysis in Mental Health Data</h3>
            <p className="text-slate-300 mb-4">
              Analyzed large-scale survey data to identify trends in mental health conditions across different demographics.
              Developed statistical models to understand factors influencing mental health outcomes.
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Applied clustering algorithms to identify at-risk populations</li>
              <li>Created interactive dashboards for visualizing mental health trends</li>
              <li>Presented findings at a national conference on mental health</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Okinawa Section Component
export const OkinawaSection: React.FC = () => {
  return (
    <section className="bg-slate-800">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-blue-300">Okinawa Longevity Study</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Factors Influencing Longevity</h3>
            <p className="text-slate-300 mb-4">
              Conducted statistical analysis on lifestyle and health data from Okinawa, Japan, known for its high concentration of centenarians.
              Identified key factors contributing to longevity and healthy aging.
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Applied survival analysis techniques to identify significant factors</li>
              <li>Developed multivariate models to control for confounding variables</li>
              <li>Created visualizations to communicate findings to non-technical audiences</li>
            </ul>
          </div>
          <div className="bg-slate-700 rounded-lg p-6">
            <div className="h-64 bg-slate-600 rounded flex items-center justify-center">
              <p className="text-slate-400">Longevity factors visualization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Women in Data Science Section Component
export const WomenInDataScienceSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-blue-300">Women in Data Science</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-700 rounded-lg p-6">
            <div className="h-64 bg-slate-600 rounded flex items-center justify-center">
              <p className="text-slate-400">Gender representation visualization</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Gender Representation Analysis</h3>
            <p className="text-slate-300 mb-4">
              Analyzed trends in gender representation across various STEM fields, with a focus on data science and statistics.
              Identified barriers to entry and factors influencing career progression for women in these fields.
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Conducted survey analysis to identify key challenges</li>
              <li>Developed statistical models to quantify gender gaps</li>
              <li>Created an interactive dashboard to visualize trends over time</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Masanao Section Component
export const MasanaoSection: React.FC = () => {
  return (
    <section className="bg-slate-800">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-blue-300">Masanao 679 Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Advanced Statistical Modeling</h3>
            <p className="text-slate-300 mb-4">
              Implemented advanced statistical models for analyzing complex datasets as part of the Masanao 679 research initiative.
              Developed novel methodologies for handling high-dimensional data with sparse structures.
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Applied regularization techniques to improve model performance</li>
              <li>Developed custom algorithms for feature selection</li>
              <li>Created comprehensive documentation and tutorials for the research team</li>
            </ul>
          </div>
          <div className="bg-slate-700 rounded-lg p-6">
            <div className="h-64 bg-slate-600 rounded flex items-center justify-center">
              <p className="text-slate-400">Statistical model visualization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Web Scraper Section Component
export const WebScraperSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-blue-300">Web Scraper for robots.txt Files</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-700 rounded-lg p-6">
            <div className="h-64 bg-slate-600 rounded flex items-center justify-center">
              <p className="text-slate-400">Web scraper architecture diagram</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Automated Data Collection Tool</h3>
            <p className="text-slate-300 mb-4">
              Developed a web scraper to collect and analyze robots.txt files from top websites.
              Created a database of crawling policies and conducted statistical analysis on common patterns.
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Implemented ethical scraping practices with rate limiting</li>
              <li>Developed parsing algorithms for robots.txt syntax</li>
              <li>Created visualizations to identify trends in crawling policies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

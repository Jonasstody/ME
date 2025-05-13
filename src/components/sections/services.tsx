'use client';

import React from 'react';

export const ServicesSection = () => {
  return (
    <section id="services" className="w-full max-w-5xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Services</h2>
        
      {/* Business Development */}
      <div className="mb-10">
        <h3 className="text-xl md:text-2xl font-medium mb-4">Business Development:</h3>
        <ul className="space-y-2 text-gray-800">
          <li className="flex items-start">
            <span className="mr-2">-</span>
            <span>Market research and competitor analysis</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">-</span>
            <span>Process optimization and restructuring</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">-</span>
            <span>Controlling dashboard creation</span>
          </li>
        </ul>
      </div>
      
      {/* Financial Analysis */}
      <div className="mb-10">
        <h3 className="text-xl md:text-2xl font-medium mb-4">Financial Analysis:</h3>
        <ul className="space-y-2 text-gray-800">
          <li className="flex items-start">
            <span className="mr-2">-</span>
            <span>Financial modeling and valuation</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">-</span>
            <span>Investment opportunity assessment</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">-</span>
            <span>Performance metrics improvement</span>
          </li>
        </ul>
      </div>
      
      {/* Technical Solutions */}
      <div className="mb-10">
        <h3 className="text-xl md:text-2xl font-medium mb-4">Technical Solutions:</h3>
        <ul className="space-y-2 text-gray-800">
          <li className="flex items-start">
            <span className="mr-2">-</span>
            <span>Web development and deployment</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">-</span>
            <span>Python and SQL data analysis</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">-</span>
            <span>AI integration and automation</span>
          </li>
        </ul>
      </div>
      
      {/* Project Management */}
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-medium mb-4">Project Management:</h3>
        <ul className="space-y-2 text-gray-800">
          <li className="flex items-start">
            <span className="mr-2">-</span>
            <span>Team coordination across departments</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">-</span>
            <span>International project facilitation</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">-</span>
            <span>Operational efficiency enhancement</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
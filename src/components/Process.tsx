import React from 'react';
import { FileText, CreditCard, UserCheck, Mail } from 'lucide-react';

const ProcessStep = ({ icon: Icon, title, color }) => (
  <div className={`flex items-center bg-${color}-100 p-4 rounded-lg`}>
    <div className={`bg-${color}-500 p-3 rounded-full`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <span className="ml-4 text-gray-700 font-medium">{title}</span>
  </div>
);

const Process = () => {
  const steps = [
    { icon: FileText, title: "Fill up Application Form", color: "red" },
    { icon: CreditCard, title: "Make Online Payment", color: "green" },
    { icon: UserCheck, title: "Executive will Process Application", color: "yellow" },
    { icon: Mail, title: "Get Confirm Mail", color: "blue" }
  ];

  return (
    <section className="bg-orange-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-red-100 p-4 rounded-lg flex items-center">
            <div className="bg-red-500 p-3 rounded-full">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="ml-4 text-gray-700 font-medium">Fill up Application Form</span>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg flex items-center">
            <div className="bg-green-500 p-3 rounded-full">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <span className="ml-4 text-gray-700 font-medium">Make Online Payment</span>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg flex items-center">
            <div className="bg-yellow-500 p-3 rounded-full">
              <UserCheck className="w-6 h-6 text-white" />
            </div>
            <span className="ml-4 text-gray-700 font-medium">Executive will Process Application</span>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg flex items-center">
            <div className="bg-blue-500 p-3 rounded-full">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <span className="ml-4 text-gray-700 font-medium">Get Confirm Mail</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
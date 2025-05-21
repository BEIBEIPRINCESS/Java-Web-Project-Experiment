import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { teamMembers } from '../data/teamData';
import { ChevronLeft, User } from 'lucide-react';

const MemberProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const memberId = parseInt(id || '0');
  const member = teamMembers.find(m => m.id === memberId);
  
  if (!member) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900">Team member not found</h2>
          <p className="mt-2 text-gray-600">The team member you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/team')}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Team
          </button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <Link
          to="/team"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mb-6"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Team Overview
        </Link>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/3">
              {member.imageUrl ? (
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="h-96 w-full object-cover md:h-full"
                />
              ) : (
                <div className="flex items-center justify-center h-96 md:h-full bg-gray-100">
                  <User className="h-24 w-24 text-gray-400" />
                </div>
              )}
            </div>
            
            <div className="p-6 md:w-2/3">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h1>
                  <p className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    {member.role}
                  </p>
                  
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">About</h2>
                    <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h2>
                  <p className="text-gray-700">
                    <span className="font-medium">Email:</span> {member.name.toLowerCase().replace(' ', '.')}@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MemberProfile;
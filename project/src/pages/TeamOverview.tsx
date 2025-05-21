import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { teamMembers } from '../data/teamData';
import { User } from 'lucide-react';

const TeamOverview: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">团队成员</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我们是一个充满热情的团队，每个成员都为仓库管理系统项目贡献自己的专业技能。
            通过紧密协作，我们成功完成了所有项目目标。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Link
              to={`/team/${member.id}`}
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-w-1 aspect-h-1 overflow-hidden bg-gray-200">
                {member.imageUrl ? (
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-60 object-cover object-center"
                  />
                ) : (
                  <div className="flex items-center justify-center h-60 bg-gray-100">
                    <User className="h-20 w-20 text-gray-400" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm font-medium text-blue-600">{member.role}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {member.skills.slice(0, 2).map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 2 && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                      +{member.skills.length - 2} 项技能
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">团队价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-blue-600 mb-2">协作精神</h3>
              <p className="text-gray-700">我们注重团队协作，发挥每个成员的优势，共同实现项目目标。</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-blue-600 mb-2">专业态度</h3>
              <p className="text-gray-700">以严谨的态度对待每一个细节，确保项目的高质量交付。</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-medium text-blue-600 mb-2">创新思维</h3>
              <p className="text-gray-700">勇于尝试新的解决方案，持续改进优化系统功能。</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamOverview;
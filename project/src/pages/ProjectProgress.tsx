import React from 'react';
import Layout from '../components/Layout/Layout';
import { projectMilestones } from '../data/teamData';
import { Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const ProjectProgress: React.FC = () => {
  const sortedMilestones = [...projectMilestones].sort((a, b) => 
    new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  );

  const completedMilestones = projectMilestones.filter(m => m.status === 'completed').length;
  const progressPercentage = Math.round((completedMilestones / projectMilestones.length) * 100);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'planned':
        return <AlertCircle className="h-5 w-5 text-blue-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'planned':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return '已完成';
      case 'in-progress':
        return '进行中';
      case 'planned':
        return '计划中';
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('zh-CN', options);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">项目进度</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            仓库管理系统项目已经圆满完成，下面是我们的项目里程碑和完成情况。
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">总体进度</h2>
          <div className="flex items-center mb-2">
            <div className="w-full bg-gray-200 rounded-full h-4 mr-2">
              <div 
                className="bg-blue-600 h-4 rounded-full transition-all duration-500 ease-in-out" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-700 min-w-[45px]">
              {progressPercentage}%
            </span>
          </div>
          <div className="flex justify-between text-sm text-gray-500 px-1">
            <span>开始</span>
            <span>进行中</span>
            <span>完成</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h2 className="text-xl font-semibold text-gray-900">项目时间线</h2>
          </div>
          <div className="p-6">
            <div className="relative">
              {sortedMilestones.map((milestone, index) => (
                <div key={milestone.id} className="mb-8 relative">
                  {index < sortedMilestones.length - 1 && (
                    <div className="absolute top-6 left-3 w-0.5 h-full bg-gray-200 -z-10"></div>
                  )}
                  <div className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-1 mr-4 flex items-center justify-center border-2 border-white bg-white shadow-md">
                      {getStatusIcon(milestone.status)}
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                        <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                        <div className="flex items-center mt-1 sm:mt-0">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(milestone.status)}`}>
                            {getStatusText(milestone.status)}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-2">{milestone.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>完成时间: {formatDate(milestone.dueDate)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">项目成果</h2>
          <div className="prose prose-blue max-w-none">
            <p>
              我们的仓库管理系统具有以下特点：
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>采用Java+Maven框架开发后端，确保系统稳定性</li>
              <li>使用HTML+JavaScript+CSS开发前端，提供友好的用户界面</li>
              <li>实现了完整的仓库管理功能，包括入库、出库、库存查询等</li>
              <li>系统运行稳定，已通过测试并成功部署</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectProgress;
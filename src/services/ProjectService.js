//@flow
import { Project, Idea } from '../types';
import api from './api';

const ProjectService = {
  async getProject(name: string): Project {
    name = name.trim();
    if (name) {
      const response = await api.get(`/projects?name=${name}`);
      return response.data;
    }
    return null;
  },

  async createOrUpdateIdea(idProject: string, idea: Idea): boolean {
    const response = await api.put('/projects/ideas/add', { idProject, idea });
    const { status } = response;
    return status === 200;
  },
  async removeIdea(idProject: string, idIdea: string) {
    const response = await api.put('/projects/ideas/remove', {
      idProject,
      idIdea,
    });

    const { status } = response;
    return status === 200;
  },
};

export default ProjectService;

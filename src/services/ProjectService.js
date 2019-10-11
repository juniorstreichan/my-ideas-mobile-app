//@flow
import { Project, Idea } from '../types';
import api from './api';

class ProjectService {
  async getProject(name: string): Project {
    name = name.trim();
    if (name) {
      const response = await api.get(`/projects?name=${name}`);
      return response.data;
    }
    return null;
  }

  async createIdea(idProject: string, idea: Idea): Idea {
    const response = await api.put('/ideas/add', { idProject, idea });
  }
}

export default new ProjectService();

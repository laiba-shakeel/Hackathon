import axios from 'axios';

const baseURL = 'http://192.168.100.88:5000';

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${baseURL}/login`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const register = async (name, email, password) => {
    try {
        const response = await axios.post(`${baseURL}/register`, {
            name,
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getProjects = async () => {
    try {
        const response = await axios.get(`${baseURL}/project`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getProjectById = async (id) => {
    try {
        const response = await axios.get(`${baseURL}/project/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const createProject = async (name, description) => {
    try {
        const response = await axios.post(`${baseURL}/project`, {
            name,
            description,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getTasks = async () => {
    try {
        const response = await axios.get(`${baseURL}/task`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getTaskById = async (id) => {
    try {
        const response = await axios.get(`${baseURL}/task/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const createTask = async (name, description, projectId) => {
    try {
        const response = await axios.post(`${baseURL}/task`, {
            name,
            description,
            projectId,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
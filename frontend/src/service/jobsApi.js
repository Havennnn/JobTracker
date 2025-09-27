import api from "../service/api";

export async function readJobs() {
    const response = await api.get("/jobs");
    return response.data;
}

export async function viewJob(id) {
    const response = await api.get(`/jobs/${id}`);
    return response.data;
}

export async function createJob(jobData) {
    const response = await api.post("/jobs", jobData);
    return response.data;
}

export async function updateJob(id, jobData) {
    const response = await api.put(`/jobs/${id}`, jobData);
    return response.data;
}

export async function deleteJob(id) {
    const response = await api.delete(`/jobs/${id}`);
    return response.data;
}
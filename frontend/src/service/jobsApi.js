import api from "../service/api";

export async function fetchJobs() {
    const response = await api.get("/jobs");
    return response.data;
}

export async function createJob(jobData) {
    const response = await api.post("/jobs", jobData);
    return response.data;
}

export async function updateJob(id, jobData) {
    const response = await api.update(`/jobs/${id}`, jobData);
    return response.data;
}

export async function deleteJob(id) {
    const response = await api.delete(`/jobs/${id}`);
    return response.data;
}
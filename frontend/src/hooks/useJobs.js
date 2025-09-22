import { useState, useEffect } from "react";
import { fetchJobs, createJob, updateJob, deleteJob } from "../service/jobsApi";

export default function useJobs(){
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadJobs() {
            try {
                const data = await fetchJobs();
                setJobs(data);
            } catch (err) {
                setError(err.message || "Fetch Job Error");
            } finally {
                setLoading(false);
            }
        }

        loadJobs();
    }, []);

    async function addJob(jobData) {
        try {
            const newJob = await createJob(jobData);
            setJobs((prev) => [...prev, newJob]);
        } catch (err) {
            setError(err.message || "Create Job Error");
        }   
    }

    async function editJob(id, jobData) {
        try {
            const update = await updateJob(id, jobData);
            setJobs((prev) => prev.map((job) => (job.id === id ? update : job)));
        } catch (err) {
            setError(err.message || "Update Job Error");
        }
    }

    async function removeJob(id) {
        try {
            await deleteJob(id);
            setJobs((prev) => prev.filter((job) => job.id !== id));
        } catch (err) {
            setError(err.message || "Delete Job Error")
        }
    }

    return {jobs, loading, error, addJob}

}
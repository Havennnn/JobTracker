import { useState, useEffect } from "react";
import { createJob, readJobs, updateJob, deleteJob, viewJob } from "../service/jobsApi";

export default function useJobs(){
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        async function loadJobs() {
            try {
                const data = await readJobs();
                setJobs(data);
            } catch (err) {
                setError(err.message || "Read Jobs Error");
            } finally {
                setLoading(false);
            }
        }

        loadJobs();
    }, []);

    async function scanJob(id) {
        try {
            const fetchJob = await viewJobs(id);
            selectedJob(fetchJob);
        } catch (err) {
            setError(err.message || "View Job Error");
        }
    }

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

    return {jobs, loading, error, addJob, removeJob, editJob, scanJob}

}
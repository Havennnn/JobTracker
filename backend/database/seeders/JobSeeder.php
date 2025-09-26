<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Job;

class JobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jobs = [
            [
                'company' => 'Tech Corp',
                'position' => 'Frontend Developer',
                'location' => 'Taytay',
                'link' => 'https://techcorp.com/careers/frontend-dev',
                'date' => '2024-01-15',
                'status' => 'Applied',
                'notes' => 'Great company culture, remote work available'
            ],
            [
                'company' => 'StartupXYZ',
                'position' => 'Full Stack Developer',
                'location' => 'Taytay',
                'link' => 'https://startupxyz.com/jobs',
                'date' => '2024-01-20',
                'status' => 'Interview Scheduled',
                'notes' => 'Interview on Friday at 2 PM'
            ],
            [
                'company' => 'BigTech Inc',
                'position' => 'Software Engineer',
                'location' => 'Taytay',
                'link' => 'https://bigtech.com/careers',
                'date' => '2024-01-25',
                'status' => 'Rejected',
                'notes' => 'Not enough experience with their tech stack'
            ]
        ];

        foreach ($jobs as $job) {
            Job::create($job);
        }
    }
}

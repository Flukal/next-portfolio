'use client';
import React, { useEffect, useState } from 'react';
import { fetchGitHubUserData } from '../lib/github';
import Button from './Button';
import Card from './Card';

interface GitHubRepo {
  id: string;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  topics: string[];
}

const Projects = () => {
  const [reposData, setReposData] = useState<GitHubRepo[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const username = 'flukal'; // Replace with the desired GitHub username

    const fetchData = async () => {
      const data = await fetchGitHubUserData(username);
      if (data) {
        // setUserData(data.userData);
        setReposData(data.reposData);
      } else {
        setError('Failed to fetch GitHub data');
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section
      id="projects"
      className="bg-background text-foreground py-section py-10"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl text-accent uppercase font-bold mb-8">
          Repositories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {reposData?.map((repo) => (
            <Card key={repo.id} title={repo.name} className="h-56">
              <p className="text-muted text-sm mb-auto">{repo.description}</p>
              <div className="flex items-center gap-2 mb-4">
                {repo.topics.map((topic, index) => (
                  <p
                    key={index}
                    className="bg-grayLight text-xs text-muted px-3 py-1 rounded-xl"
                  >
                    {topic}
                  </p>
                ))}
              </div>
              <Button
                label="Repository"
                href={repo.html_url}
                blank
                icon={true}
                variant="default"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
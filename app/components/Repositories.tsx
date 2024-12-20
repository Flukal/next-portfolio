'use client';
import React, { useEffect, useState } from 'react';
import { fetchGitHubUserData } from '../lib/github';
import Headline from './Headline';
import Card from './Card';
import Button from './Button';

interface GitHubRepo {
  id: string;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  topics: string[];
  created_at: string;
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
      id="repositories"
      className="bg-background text-foreground py-section py-10"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-row justify-between items-end">
          <Headline title="Repositories" visual="h3" style="text-accent" />
          <div className="mb-8">
            <Button
              label="View All"
              href="https://github.com/Flukal?tab=repositories"
              blank={true}
              variant="secondary"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {reposData?.slice(0, 6).map((repo) => (
            <Card key={repo.id} title={repo.name} className="h-56">
              <p className="text-muted font-sarala text-sm mb-8">
                {repo.description}
              </p>
              <div className="flex items-center gap-2 mb-1 mt-auto">
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
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.scss";

export type Repository = {
  name: string;
  description: string;
  html_url: string;
};

export const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  function getRepositories() {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }

  useEffect(getRepositories, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
};

import { RepositoryItem } from "./RepositoryItem";
import "../styles/repository.scss";
import { useEffect, useState } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [respositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/vinicius-xavier/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Vinicius Xavier - Junior Developer</h1>
      <h2>My repositories</h2>
      <ul>
        {respositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}

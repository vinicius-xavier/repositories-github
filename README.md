# repositories-github
## An application that shows all github repositories in real time with React.

### Project Goal
The idea of the project is to list all github repositories of the developer. 
- For this the application will use the GitHub API.
- It will return the name of the repository, the description and the link to access the repository.

> Project Status: Under Development :warning:
> The basis of the project is complete, but new features will be added in the future.

## Deploy the application with Vercel: :dash:

> https://repositories-github-vinicius-xavier.vercel.app

## How to run the application: :arrow_forward:

In the terminal, clone the project: 
``` 
git clone https://github.com/vinicius-xavier/repositories-github
```

Enter the project folder:

```
cd repositories-github
```

Install the dependencies:

```
yarn install
```

Run the application:

```
yarn dev
```

Okay, now you can access the application from the route: http://localhost:8080


## How to make the application look like you: :star:

For the application to have access to your repositories you need to change the API link.

Para isso é necessário alterar o arquivo: 
```
src/components/RepositoryList.tsx
```

In the file change the link in line 15 to your GitHub API repository link.

Change the link to:

```
https://api.github.com/users/{Your user}/repos
```



For more information about the GitHub API:
- [API GitHub](https://docs.github.com/en/rest)


Finally change the h1 of the file to your name and your position

```
<h1>{Your name} - {Your position}</h1>
````


Bye! :wave:



















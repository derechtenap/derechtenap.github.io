/*
export const GET = async () => {
  const allProjectFiles = import.meta.glob("../projekte/*.md");
  const iterableProjectFiles = Object.entries(allProjectFiles);

  const allProjects = await Promise.all(
    iterableProjectFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();

      // Remove `..` and `.md` from the path
      const projectPath = path.slice(2, -3);

      return {
        meta: metadata,
        path: projectPath,
      };
    })
  );

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });

  return {
    body: sortedProjects,
  };
};
*/

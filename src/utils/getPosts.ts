async function getPosts() {
  const postImports = import.meta.globEager(`../../content/*.md`);
  const posts = [];
  for (const postImport of Object.values(postImports)) {
    const post = await getPost(postImport);
    posts.push(post);
  }
  return posts;
}

async function getPost(postImport) {
  const content = (await postImport.default()).metadata;

  return {
    frontmatter: { ...postImport.frontmatter },
    content,
  };
}

export default getPosts;

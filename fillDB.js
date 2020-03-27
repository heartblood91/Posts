var casual = require("casual");

module.exports = () => {
  const data = { posts: [] };
  
  // Create a description for new user
  data.posts.push({
	  id: 0,
      title: "Testez-moi",
      content: "N'hésitez pas à supprimer ou créer des posts. La base de données est vidée tous les soirs ;-)",
      author: "Le Webmaster"
  })
  
  
  // Create 1000 users
  for (let i = 1; i < 25; i++) {
    data.posts.push({
      id: i,
      title: casual.title,
      content: casual.sentences((n = 50)),
      author: casual.name
    });
  }
  return data;
};

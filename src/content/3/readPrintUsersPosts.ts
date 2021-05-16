const users = require("./users.json");
const posts = require("./posts.json");

type User = {
  id: number;
  name: string;
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function printPosts(user: User) {
  posts
    .filter((post: Post) => post.userId === user.id)
    .forEach((post: Post) => console.log(`- ${post.title}`));
}

users.forEach((user) => {
  console.log('\n\n' + user.name);
  printPosts(user)
});

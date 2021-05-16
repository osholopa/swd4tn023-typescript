const users = require("./users.json");
const posts = require("./posts.json");

/**
 * @param user Käyttäjä-olio
 * @param user.id Käyttäjän id
 */

function printPosts(user) {
  posts
    .filter((post) => post.userId === user.id)
    .forEach((post) => console.log(`- ${post.title}`));
}

users.forEach((user) => {
  console.log('\n\n' + user.name);
  printPosts(user)
});

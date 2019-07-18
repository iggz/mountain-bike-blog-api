const db = require("./conn.js");

class Posts {
  constructor(id, title, author, content) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.content = content;
  }

  static async getAll() {
    try {
      const response = await db.any(`select * from posts;`);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getById(p_id) {
    try {
      const response = await db.one(`select * from posts where id = ${p_id}`);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async removeEntry(p_id) {
    try {
      const response = await db.result(`delete from posts where id = ${p_id}`);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async addEntry(title, author_id, content) {
    const query = `INSERT INTO posts (title, author_id, content) VALUES ('${title}', ${author_id}, '${content}')`;

    try {
      const response = await db.result(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async updateEntry(title, author_id, content, id) {
    console.log("for fun", content, title, author_id)
    const query = `UPDATE posts SET (title, author_id, content) = ('${title}', '${author_id}', '${content}') WHERE id = '${id}'`;

    try {
      let response = await db.result(query);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Posts;

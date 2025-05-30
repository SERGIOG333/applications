import { connect } from '../config/db/connectMysql.js';

class UserModel {  
static async create({ userName,email,password,status}) {
     try {
      let sqlQuery = "INSERT INTO user (username,email,password_hash,status_id) VALUES (?,?,?,?);";
      const [result] = await connect.query(sqlQuery,[userName,email,password,status]);
      return result.insertId;
    } catch (error) {
      return [0];
    }
  }

  static async show() {
    try {
      let sqlQuery = "SELECT * FROM `user` ORDER BY `id`";
      const [result] = await connect.query(sqlQuery);
      return result;
    } catch (error) {
      return [0];
    }
  }

  static async update(id, { userName,email,password,status }) {
    try {
      let sqlQuery = "UPDATE user SET username = ?,email= ?,password_hash =?, status_id=?, updated_at = CURRENT_TIMESTAMP WHERE id =?;";
      const [result] = await connect.query(sqlQuery, [userName,email,password,status, id]);
      if (result.affectedRows === 0) {
        return [0];
      } else {
        return result.affectedRows;
      }

    } catch (error) {
      return [0];
    }
  }

  static async delete(id) {
    try {
      let sqlQuery = "DELETE FROM user WHERE id=?";
      const [result] = await connect.query(sqlQuery, id);
      if (result.affectedRows === 0) {
        return [0];
      } else {
        return result.affectedRows
      }
    } catch (error) {
      return [0];
    }
  }

  static async findById(id) {
    try {
      let sqlQuery = 'SELECT * FROM `user` WHERE `id`= ?';
      const [result] = await connect.query(sqlQuery, id);
      return result;
    } catch (error) {
      return [0];
    }

  }
}

export default UserModel;
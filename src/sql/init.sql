-- src/sql/init.sql
CREATE DATABASE IF NOT EXISTS demo_db DEFAULT CHARACTER SET utf8mb4;

USE demo_db;

CREATE TABLE IF NOT EXISTS `user` (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL
);

-- 插入测试数据
INSERT INTO user(username,password) VALUES ('admin','123456');

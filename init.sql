DROP TABLE IF EXISTS `comments`;
DROP TABLE IF EXISTS `edits`;
DROP TABLE IF EXISTS `stories`;
DROP TABLE IF EXISTS `competitions`;
DROP TABLE IF EXISTS `rules`;
DROP TABLE IF EXISTS `users`;

CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    joinedAt DATETIME,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    score INT DEFAULT 0,
    UNIQUE KEY(username, email)
);

CREATE TABLE rules (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ownerId INT DEFAULT 0,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    createdAt DATETIME,
    isPublic BOOLEAN DEFAULT TRUE,
    data JSON,
    FOREIGN KEY (ownerId) REFERENCES users(id)
);

CREATE TABLE competitions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    creatorId INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    createdAt DATETIME,
    finishAt DATETIME,
    winnerId INT,
    rules JSON,
    FOREIGN KEY (creatorId) REFERENCES users(id),
    FOREIGN KEY (winnerId) REFERENCES users(id)
);

CREATE TABLE stories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ownerId INT NOT NULL,
    competitionId INT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(2000),
    createdAt DATETIME,
    lastEditedAt DATETIME,
    isPublic BOOLEAN DEFAULT TRUE,
    semaphore BOOLEAN DEFAULT FALSE,
    content TEXT,
    rules JSON,
    FOREIGN KEY (ownerId) REFERENCES users(id),
    FOREIGN KEY (competitionId) REFERENCES competitions(id)
);

CREATE TABLE edits (
    id INT PRIMARY KEY AUTO_INCREMENT,
    editorId INT NOT NULL,
    storyId INT NOT NULL,
    edition TEXT,
    editedAt DATETIME,
    FOREIGN KEY (editorId) REFERENCES users(id),
    FOREIGN KEY (storyId) REFERENCES stories(id)
);

CREATE TABLE comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    authorId INT NOT NULL,
    createdAt DATETIME,
    content VARCHAR(2000) NOT NULL,
    FOREIGN KEY (authorId) REFERENCES users(id)
);

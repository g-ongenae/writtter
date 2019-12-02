/**
 * TABLES
 */

DROP TABLE users;

CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50),
    joinedAt DATETIME,
    email VARCHAR(50),
    password VARCHAR(50),
    active BOOLEAN DEFAULT TRUE,
    score INT DEFAULT 0,
    UNIQUE KEY(username, email)
);

INSERT INTO users VALUES ('guillaume', '2019-12-1', 'guillaume.ongenae@gmail.com', 'example');

/*

CREATE TABLE rules (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ownerId INT DEFAULT 0,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIME,
    isPublic BOOLEAN DEFAULT TRUE,
    data JSON,
    FOREIGN KEY (ownerId) REFERENCES users(id)
);

CREATE TABLE competitions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    creatorId INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIME,
    finishAt DATETIME,
    winnerId INT,
    rules JSON, -- list of rule to validate to participate in the competition
    FOREIGN KEY (creatorId) REFERENCES users(id),
    FOREIGN KEY (winnerId) REFERENCES users(id)
);

CREATE TABLE stories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ownerId INT NOT NULL,
    competitionId INT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(2000),
    createdAt DATETIME DEFAULT CURRENT_TIME,
    lastEditedAt DATETIME DEFAULT CURRENT_TIME,
    isPublic BOOLEAN DEFAULT TRUE,
    semaphore BOOLEAN DEFAULT FALSE,
    content TEXT,
    rules JSON, -- list of rule set by the owner of the story
    FOREIGN KEY (ownerId) REFERENCES users(id),
    FOREIGN KEY (competitionId) REFERENCES competitions(id)
);

CREATE TABLE edits (
    id INT PRIMARY KEY AUTO_INCREMENT,
    editorId INT NOT NULL,
    storyId INT NOT NULL,
    edition TEXT,
    editedAt DATETIME DEFAULT CURRENT_TIME,
    FOREIGN KEY (ownerId) REFERENCES users(id),
    FOREIGN KEY (storyId) REFERENCES stories(id)
);

CREATE TABLE comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    authorId INT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIME,
    content VARCHAR(2000) NOT NULL
);

*/
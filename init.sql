DROP TABLE IF EXISTS `comments`;
DROP TABLE IF EXISTS `edits`;
DROP TABLE IF EXISTS `stories`;
DROP TABLE IF EXISTS `competitions`;
DROP TABLE IF EXISTS `rules`;
DROP TABLE IF EXISTS `users`;

CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    joinedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    score INT DEFAULT 0,
    UNIQUE KEY(username),
    UNIQUE KEY(email)
);

CREATE TABLE IF NOT EXISTS rules (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ownerId INT DEFAULT 1, -- The administrator / me
    name VARCHAR(50) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    isPublic BOOLEAN DEFAULT TRUE,
    data JSON,
    FOREIGN KEY (ownerId) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS competitions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    creatorId INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    finishAt DATETIME,
    winnerId INT,
    rules JSON,
    FOREIGN KEY (creatorId) REFERENCES users(id),
    FOREIGN KEY (winnerId) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS stories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ownerId INT NOT NULL,
    competitionId INT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(2000),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    lastEditedAt DATETIME,
    currentEditorId INT,
    semaphoreTakenAt DATETIME,
    isPublic BOOLEAN DEFAULT TRUE,
    isCommentsDisabled BOOLEAN DEFAULT FALSE,
    content TEXT,
    rules JSON,
    FOREIGN KEY (ownerId) REFERENCES users(id),
    FOREIGN KEY (currentEditorId) REFERENCES users(id),
    FOREIGN KEY (competitionId) REFERENCES competitions(id)
);

CREATE TABLE IF NOT EXISTS edits (
    id INT PRIMARY KEY AUTO_INCREMENT,
    editorId INT NOT NULL,
    storyId INT NOT NULL,
    edit TEXT,
    editedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (editorId) REFERENCES users(id),
    FOREIGN KEY (storyId) REFERENCES stories(id)
);

CREATE TABLE IF NOT EXISTS comments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    authorId INT NOT NULL,
    storyId INT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    content VARCHAR(2000) NOT NULL,
    FOREIGN KEY (authorId) REFERENCES users(id),
    FOREIGN KEY (storyId) REFERENCES stories(id)
);

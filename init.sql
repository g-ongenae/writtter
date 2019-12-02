/**
 * TABLES
 */

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    joinedAt DATETIME DEFAULT NOW(),
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    score INT DEFAULT 0,
    UNIQUE KEY(username, email)
);

CREATE TABLE rules (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ownerId INT DEFAULT 0,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    isPublic BOOLEAN DEFAULT TRUE,
    data JSON,
    FOREIGN KEY (ownerId) REFERENCES users(id)
);

CREATE TABLE competitions (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    creatorId INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    finishAt DATETIME,
    winnerId INT,
    rules JSON, -- list of rule to validate to participate in the competition
    FOREIGN KEY (creatorId) REFERENCES users(id),
    FOREIGN KEY (winnerId) REFERENCES users(id)
);

CREATE TABLE stories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ownerId INT NOT NULL,
    competitionId INT,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(2000),
    createdAt DATETIME DEFAULT NOW(),
    lastEditedAt DATETIME DEFAULT NOW(),
    isPublic BOOLEAN DEFAULT TRUE,
    semaphore BOOLEAN DEFAULT FALSE,
    content TEXT,
    rules JSON, -- list of rule set by the owner of the story
    FOREIGN KEY (ownerId) REFERENCES users(id),
    FOREIGN KEY (competitionId) REFERENCES competitions(id)
);

CREATE TABLE edits (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    editorId INT NOT NULL,
    storyId INT NOT NULL,
    edition TEXT,
    editedAt DATETIME DEFAULT NOW(),
    FOREIGN KEY (ownerId) REFERENCES users(id),
    FOREIGN KEY (storyId) REFERENCES stories(id),
);

CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    authorId INT NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    content VARCHAR(2000) NOT NULL,
)
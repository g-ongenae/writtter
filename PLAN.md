# WS

## API

### Games

- Create a game
- Start a game
- Get game
- Get game result
- Add player to a game
- Add stories to a game
- Add rules to a game
- Search game by player or rules

### Rules

- Create
- Delete
- Get
- Update
- Search

### Stories

- Create a new story
- Edit a story (lock)
- Edit a story (multiple)
- Get a story
- Get all stories
- Search for a specific story

### Accounts / Players

- Log in
- Log out
- Create account
- Delete account
- Get profile
- Search profile
- Update profile

## Model

### Rule

- Id
- Name
- Code / Data
- Description
- Examples

### Game

- Id
- Name
- Participants / Players
- Rewards
- Rules
- Stories
- StartingDate
- FinishingDate
- Results

### Player

- Id
- Password (encrypted)
- Email
- Picture
- Description
- Score
- JoinDate

### Story

- Id
- Name
- Public / Private (bool)
- Description
- Text
- CreationDate
- LastEditDate
- Authors / Players
- Rules

## Other

- Leaderboard
- Overall statistics

# Final Test

## Random Chat

지난 12주간 학습한 모든 내용(React/Redux/Node/Express/Database 등)을 기반으로 Random Chat Application을 만드는 과제입니다.

### Deadline

가장 마지막 Commit 시간을 기준으로 수요일 저녁 7시 마감입니다.

### Submission

본인만의 브랜치를 만들어 작업한 후, master 브랜치에 Merge Request를 만들어주세요. GIF 파일도 함께 추가해주세요.

### Grades

30점 이상 Pass입니다.

- (15) Feature Requirements
- (10) Consistent Code Style
- (10) Code Readability
- (10) Personal Improvements
- (5) Git Usage

### Test Result

코드 리뷰에 대한 내용은 제공해드리지 않으며, 테스트에 대한 결과는 목요일 저녁 7시까지 Slack DM으로 알려드립니다.

### Rules

- 바닐라코딩 멘토 혹은 수료생들에게는 질문을 할 수 없습니다.
- 동기들과의 토론은 자유롭게 나누어도 괜찮습니다만, 반드시 스스로 양심껏 작업해주시기 바랍니다.
- **동기들과의 토론은 "구두"로만 가능합니다.** 슬랙 등을 이용하여 코드를 주고 받거나, 서로의 코드를 보여주고 공유하는 행위는 금지됩니다.
- 어려움을 겪고 있는 사람을 도와주고 함께 이끌어 가는 것이 협업의 시작입니다. 그런 모습을 보여주시기 바랍니다.
- 테스트 기간 동안에는 모두 집중하여 작업하는 시간이니 크게 떠드는 것은 자제해주시고 서로에 대한 배려에 더욱 신경써 주시기 바랍니다.

### Tech Stack

- 프론트엔드 Boilerplate는 [Create React App](https://create-react-app.dev)을 사용하시기를 추천드립니다.
- 백엔드 Boilerplate는 [Express Generator](https://expressjs.com/en/starter/generator.html)을 사용하시기를 추천드립니다.
- 과제 제출 시에는 전체 과제 디렉토리 내에 `frontend`(React App)와 `backend`(Express App) 디렉토리를 별도로 만들어 제출해주세요.
- 프론트엔드와 백엔드는 별개의 프로젝트로 구성하여 각자 다른 도메인 혹은 포트에서 구동하도록 구성해주시기 바랍니다.

#### Minimum Tech Stack Requirements

- React
- Redux
- Node
- Express

위에 나열된 기술 스택 외에는 자유롭게 사용하셔도 괜찮습니다.

### Requirements

[랜덤 채팅 어플리케이션](https://chat42.online/)을 참고하여 작업해주세요.

![Random Chat](/random_chat.png)

#### 1. 메인 페이지

- [ ] 사용자의 이름을 입력할 수 있는 칸이 있어야 합니다.
- [ ] 사용자는 이름을 입력하고 시작 버튼을 누르면 랜덤 채팅이 시작됩니다.

#### 2. 채팅 페이지

- [ ] 현재 접속 중인 랜덤한 상대와 함께 1:1 채팅을 시작하게 됩니다.
- [ ] 연결 가능한 상대가 없을 경우, 사용자는 대기해야 합니다.
- [ ] 사용자는 텍스트만 전송할 수 있습니다. (사진, 영상 등은 전송 불가)
- [ ] 대화 상대가 텍스트를 입력 중일 경우, 표시가 나타나야 합니다.
- [ ] 사용자가 원한다면 언제든지 현재 채팅을 종료하고 다른 상대와 채팅을 시작할 수 있어야 합니다.

#### 3. 기타

- [ ] Test Code 작성하기: React Component Unit Test와 Backend API Unit Test
- [ ] 나열된 필수 사항 외에 자유롭게 추가 기능을 넣어주셔도 괜찮습니다.

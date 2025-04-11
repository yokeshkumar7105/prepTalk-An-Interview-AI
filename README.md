
# <p class="top">💻🎙️PrepTalk - An Interview AI</p>

![preptalk-logo](https://github.com/user-attachments/assets/fbefe155-9eec-46ab-9096-f4aabc065439)


*PrepTalk* is an AI-powered interview preparation platform that helps students and mentors train effectively. It provides a simulated interview experience with AI-driven feedback on responses, clarity, and confidence. Users receive personalized insights to improve their performance and enhance their skills.

Check Out the Platform⏩: https://prep-talk-an-interview-ai.vercel.app/dashboard

## 🎯TechStack

![Next.js](https://img.shields.io/badge/Next.js-4845d2?style=flat&logo=next.js&logoColor=white) &nbsp;![Gemini](https://img.shields.io/badge/Gemini-ff66c4?style=flat&logo=google-gemini&logoColor=white) &nbsp; ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)
&nbsp; ![Drizzle ORM](https://img.shields.io/badge/Drizzle%20ORM-E34F26?style=flat&logo=drizzle&logoColor=white)

## 🎯Screenshots
<img src="https://img.shields.io/badge/Login%20Page-8A2BE2?style=flat&logoColor=white" alt="Login Page" width="100">

![Login Page](https://github.com/user-attachments/assets/86116041-9688-4b5f-ad3d-d85a9daecc43)

<img src="https://img.shields.io/badge/DashBoard-8A2BE2?style=flat&logoColor=white" alt="Login Page" width="100">

![DashBoard](https://github.com/user-attachments/assets/6ee30b61-b909-4f6f-a2ad-341f312174de)

<img src="https://img.shields.io/badge/Start%20Interview-8A2BE2?style=flat&logoColor=white" alt="Login Page" width="100">

![image](https://github.com/user-attachments/assets/bbb2ca80-0439-426a-a628-2e6c0936bf8e)

<img src="https://img.shields.io/badge/Interview%20Process-8A2BE2?style=flat&logoColor=white" alt="Login Page" width="100">

![image](https://github.com/user-attachments/assets/511d865b-f50a-4081-988a-cd055d251f44)

<img src="https://img.shields.io/badge/Feedback%20Page-8A2BE2?style=flat&logoColor=white" alt="Login Page" width="100">

![image](https://github.com/user-attachments/assets/8a104a21-3da2-4bf5-aabe-23cc6e4ce946)

## 🎯Live Demo

## 🎯Installation

Follow the below steps to run the application,

**Step 1:** Run this command in your terminal to make a clone

```
gh repo clone yokeshkumar7105/prepTalk-An-Interview-AI
```
or 
Download the ZIP file

**Step 2:** Set Up your Neon Console and Drizzle ORM for database.

**Step 3:** Add your env file which contains the following,

```
1. NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
2. CLERK_SECRET_KEY
3. NEXT_PUBLIC_CLERK_SIGN_IN_URL
4. NEXT_PUBLIC_CLERK_SIGN_UP_URL
5. NEXT_PUBLIC_DRIZZLE_DB_URL
6. NEXT_PUBLIC_GEMINI_API_KEY
7. NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT
8. NEXT_PUBLIC_INFORMATION
9. NEXT_PUBLIC_QUESTION_NOTE
```


**Step 4:** Create Tables in database
```
npm run db:push
npm run db:studio
```
Tables will be created and visible in Drizzle studio.

**Step 5:** Run next js
```
npm run dev
```

## 🎯File Structure
```
├── .gitignore
├── README.md
├── app
    ├── (auth)
    │   ├── sign-in
    │   │   └── [[...sign-in]]
    │   │   │   └── page.jsx
    │   └── sign-up
    │   │   └── [[...sign-up]]
    │   │       └── page.jsx
    ├── dashboard
    │   ├── _components
    │   │   ├── AddNewInterview.jsx
    │   │   ├── Header.jsx
    │   │   ├── InterviewItemCard.jsx
    │   │   └── InterviewList.jsx
    │   ├── interview
    │   │   └── [interviewId]
    │   │   │   ├── feedback
    │   │   │       └── page.jsx
    │   │   │   ├── page.jsx
    │   │   │   └── start
    │   │   │       ├── _components
    │   │   │           ├── QuestionsSection.jsx
    │   │   │           └── RecordAnswerSection.jsx
    │   │   │       └── page.jsx
    │   ├── layout.jsx
    │   └── page.jsx
    ├── favicon.ico
    ├── globals.css
    ├── layout.js
    └── page.js
├── components.json
├── components
    └── ui
    │   ├── button.jsx
    │   ├── collapsible.jsx
    │   ├── dialog.jsx
    │   ├── input.jsx
    │   ├── sonner.jsx
    │   └── textarea.jsx
├── drizzle.config.js
├── jsconfig.json
├── lib
    └── utils.js
├── middleware.js
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
    ├── frontimg.jpeg
    ├── next.svg
    ├── prep.png
    ├── vercel.svg
    └── webcam.png
├── tailwind.config.js
├── tsconfig.json
└── utils
    ├── GeminiAIModal.js
    ├── db.js
    └── schema.js

```


<a href="#top">Wanna Go Top⏫</a>


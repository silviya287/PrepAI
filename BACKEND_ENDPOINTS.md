# PrepAI — Complete Backend Integration Guide
> ✅ Generated after reading **all 23 page files** in full.

---

## 🔌 Setup: API Utility (create this first)

Create `src/api.js`:
```js
const BASE = "http://localhost:8000";

export const token = () => localStorage.getItem("token");

export async function apiGet(path) {
  const res = await fetch(BASE + path, {
    headers: { Authorization: `Bearer ${token()}` },
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function apiPost(path, body) {
  const res = await fetch(BASE + path, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token()}` },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function apiUpload(path, formData) {
  const res = await fetch(BASE + path, {
    method: "POST",
    headers: { Authorization: `Bearer ${token()}` },
    body: formData,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
```

**CORS on backend (FastAPI):**
```python
app.add_middleware(CORSMiddleware,
  allow_origins=["http://localhost:5173"],
  allow_methods=["*"], allow_headers=["*"])
```

---

## 📄 Page-by-Page Full Audit

---

### 1. `Onboarding.jsx` → `/`
**No API needed.** Pure static landing screen. One button: "Get Started" → navigates to `/login`.

---

### 2. `Login.jsx` → `/login`
**Hardcoded:** `navigate("/dashboard")` skips login entirely.

**Wire up `handleSubmit`:**
```jsx
async function handleSubmit(e) {
  e.preventDefault();
  const data = await apiPost("/auth/login", { email: form.email, password: form.password });
  localStorage.setItem("token", data.access_token);
  navigate("/dashboard");
}
```

**API needed:**
```
POST /auth/login
Body:    { email: string, password: string }
Returns: { access_token: string, user: { id, name, email } }
```

---

### 3. `Dashboard.jsx` → `/dashboard`
**Hardcoded values to replace:**
- User name: `"Tanisha"` (line 23)
- Readiness score: `78%` (line 56)
- Skill match: `72%` (line 72)
- Percentile: `81%` (line 77)
- Top skills array: `topSkills` (lines 4–8)

**Wire up with `useEffect`:**
```jsx
const [data, setData] = useState(null);
useEffect(() => { apiGet("/dashboard/summary").then(setData); }, []);
```

**API needed:**
```
GET /dashboard/summary
Returns: {
  userName: string,
  readinessPct: number,
  skillMatchPct: number,
  percentile: number,
  topSkills: [{ name, icon, pct }]
}
```

**Buttons** (all navigation only — no API):
- 🔔 → `/notifications`
- Skill Match card → `/skills`
- Percentile card → `/progress`
- "See All" → `/skills/overview`
- QuickLinks → navigate to various routes

---

### 4. `SkillGap.jsx` → `/skills`
**Hardcoded values to replace:**
- Target role: `"AI/ML Engineer"` (line 25)
- Overall match: `72%` (line 30)
- `strong` array (lines 5–9)
- `improve` array (lines 10–13)
- `missing` array (line 14)

**API needed:**
```
GET /skills/gap
Returns: {
  targetRole: string,
  overallMatchPct: number,
  strong:  [{ name, pct }],
  improve: [{ name, pct }],
  missing: [string]
}
```

**Button:** "View Detailed Skill Graph →" → navigation only (`/skills/graph-detailed`)

---

### 5. `Recommendations.jsx` → `/roadmap`
**Hardcoded:** `items` array (lines 6–31) — 3 static recommendations.  
**Tabs:** "Courses" and "Resources" show `"coming soon"` — need real data.

**API needed:**
```
GET /recommendations?tab=Recommended|Courses|Resources
Returns: [{
  priority: "High Priority" | "Medium Priority" | "Low Priority",
  title: string,
  desc: string,
  icon: string,
  color: string,
  bg: string
}]
```

**Button:** "Start Learning" — needs to open a resource/link (currently no `onClick`)
```
POST /recommendations/start
Body: { title: string }
```

---

### 6. `ResumeAnalysis.jsx` → `/profile`
**Hardcoded:** `skills` array (line 5) — 8 static skills.

**"Choose PDF" button** — currently no `onChange`. Wire up:
```jsx
async function handleUpload(e) {
  const fd = new FormData();
  fd.append("resume", e.target.files[0]);
  const data = await apiUpload("/resume/upload", fd);
  setSkills(data.extracted_skills);
}
```

**"Analyze Again" button** — re-trigger the same upload flow.

**API needed:**
```
POST /resume/upload
Body:    multipart/form-data { resume: File (PDF ≤5MB) }
Returns: { extracted_skills: [string], nlp_accuracy: number }

GET /resume/skills
Returns: { skills: [string] }
```

**Navigation buttons** (no API):
- "View Extracted Skills (NLP) →" → `/resume/extracted-skills`
- "View Progress →" → `/progress`
- "Streaks & Badges →" → `/badges`

---

### 7. `PracticeTests.jsx` → `/practice`
**Hardcoded:** `tests` object with 3 tabs (Aptitude, Technical, Domain) — 8 static test entries.

**API needed:**
```
GET /practice/tests?tab=Aptitude|Technical|Domain
Returns: [{ name, questionCount, difficulty: "Easy"|"Medium"|"Hard", lastScore }]
```

**Navigation buttons** (no API):
- "💻 Coding Practice" → `/practice/coding`
- "🤖 AI Mock Interview" → `/practice/interview`
- "📚 Interview Question Bank" → `/interview-bank`

---

### 8. `CodingPractice.jsx` → `/practice/coding`
**Hardcoded:** `problems` array (lines 7–13) — 5 static problems with status (Solved/Attempt/Locked).

**API needed:**
```
GET /practice/coding/problems?difficulty=All|Easy|Medium|Hard
Returns: [{ name, difficulty, topic, status: "Solved"|"Attempt"|"Locked" }]

POST /practice/coding/start
Body:    { problemName: string }
Returns: { problemId, description, examples, constraints }

POST /practice/coding/submit
Body:    { problemId, code, language }
Returns: { passed: bool, testResults: [...] }
```

> ⚠️ Currently no "Start" or "Submit" button per problem — frontend needs those added too.

---

### 9. `AIInterview.jsx` → `/practice/interview`
**Hardcoded:** Question text, sample answer, score (82/100), feedback points — all static.

**The "Next Question" button** has no `onClick`. This is the most complex page to wire up.

**Full wiring needed:**
```jsx
const [session, setSession] = useState(null);
const [question, setQuestion] = useState(null);
const [feedback, setFeedback] = useState(null);

// On mount: start session
useEffect(() => {
  apiPost("/interview/start", {}).then(data => {
    setSession(data.sessionId);
    setQuestion(data.question);
  });
}, []);

// On "Next Question" click
async function handleNext() {
  const data = await apiPost("/interview/respond", { sessionId: session, answer });
  setFeedback(data.feedback);
  if (!data.done) setQuestion(data.nextQuestion);
}
```

**API needed:**
```
POST /interview/start
Returns: { sessionId: string, question: string, timestamp: string }

POST /interview/respond
Body:    { sessionId, answer }
Returns: {
  score: number,
  feedback: { label: string, points: [string] },
  suggestion: string,
  nextQuestion: string | null,
  done: bool
}
```

---

### 10. `Progress.jsx` → `/progress`
**Hardcoded:**
- `months` array (lines 4–7) — monthly progress bar data
- `sections` array (lines 9–14) — section-wise scores
- Overall progress: `78%` (line 27)

**API needed:**
```
GET /progress
Returns: {
  overallPct: number,
  monthlyHistory: [{ month: string, value: number }],
  sections: [{ name, pct }]
}
```

---

### 11. `SkillOverview.jsx` → `/skills/overview`
**Hardcoded:** `skillList` array (lines 6–13) — 6 skills with pct/label/color.

**API needed:**
```
GET /skills/overview
Returns: [{
  name: string,
  icon: string,
  pct: number,
  label: "Excellent"|"Good"|"Needs Improvement"|"Poor",
  color: string
}]
```

---

### 12. `SkillGraph.jsx` → `/skills/graph`
**Hardcoded:** `axes` array (lines 4–11) — radar chart data with `you` vs `avg` values.  
The radar chart is drawn in SVG directly from this data.

**API needed:**
```
GET /skills/graph
Returns: {
  axes: [{ label, you: number, avg: number }],
  overallMatchPct: number,
  targetRole: string
}
```

---

### 13. `SkillGraphDetailed.jsx` → `/skills/graph-detailed`
**Hardcoded:** `nodes` array (lines 4–11) — skill nodes with `x,y` positions and `pct`.

**API needed:**
```
GET /skills/graph/detailed
Returns: {
  nodes: [{ label, pct, x, y }]
}
```
> Note: `x,y` positions can be fixed on backend or computed by frontend. Recommend frontend handles layout.

---

### 14. `ExtractedSkills.jsx` → `/resume/extracted-skills`
**Hardcoded:**
- `found` array (line 5) — 8 skills found in resume
- `missing` array (line 6) — 5 missing skills
- NLP accuracy: `92%` (line 41)

**API needed:**
```
GET /resume/extracted-skills
Returns: {
  found:   [string],
  missing: [string],
  nlpAccuracy: number
}
```

**Button:** "View Matching Roles" → `/jobs` (navigation only)

---

### 15. `JobRoleMatching.jsx` → `/jobs`
**Hardcoded:** `roles` array (lines 4–9) — 4 static job role matches with percentages.

**API needed:**
```
GET /jobs/matches
Returns: [{
  name: string,
  matchPct: number,
  label: "Excellent Match"|"Very Good Match"|"Good Match",
  icon: string,
  color: string
}]
```

**"View Details" button** — currently no `onClick`. Needs:
```
GET /jobs/matches/:roleId/details
Returns: { requiredSkills, gapSkills, openings, avgSalary }
```

---

### 16. `ExplainableScore.jsx` → `/skills/explainable-score`
**Hardcoded:**
- Skill label: `"DSA"` (line 19)
- Overall score: `85%` (line 21)
- `breakdown` array (lines 4–10) — 5 weighted components

**API needed:**
```
GET /skills/score/explain?skill=DSA
Returns: {
  skill: string,
  overallScore: number,
  grade: "Excellent"|"Good"|"Needs Improvement",
  breakdown: [{ name, pct, weight }]
}
```

**"Learn More" button** — needs link or modal content:
```
GET /skills/score/methodology
```

---

### 17. `PersonalizedRoadmap.jsx` → `/roadmap/full`
**Hardcoded:** `weeks` array (lines 4–10) — 5 static weeks with status.

**API needed:**
```
GET /roadmap
Returns: {
  weeks: [{
    title: string,
    desc: string,
    status: "done"|"active"|"upcoming"
  }]
}
```

**"View Full Roadmap" button** — currently no `onClick`. Could:
- Expand to show tasks per week
- Navigate to a detailed view

```
GET /roadmap/week/:weekNumber
Returns: { tasks: [{ name, done, resources: [...] }] }
```

---

### 18. `DailyChallenge.jsx` → `/challenge`
**Hardcoded:** `tasks` array (lines 4–9) — 4 daily tasks with `done` status.

**API needed:**
```
GET /challenge/today
Returns: {
  tasks: [{ name, sub, done: bool }]
}

POST /challenge/complete
Body:    { taskName: string }
Returns: { success: bool, newStreak: number }
```

**"Start Remaining" button** — needs navigation or task launch logic.

---

### 19. `SmartNotifications.jsx` → `/notifications`
**Hardcoded:** `notifs` array (lines 4–9) — 4 static notifications.

**API needed:**
```
GET /notifications
Returns: [{
  icon: string,
  text: string,
  time: string,
  unread: bool
}]

POST /notifications/mark-read
Body: { ids: [number] }

GET /notifications/all   ← for "View All" button
```

---

### 20. `CompanyPreparation.jsx` → `/company-prep`
**Hardcoded:**
- `companies` list (line 5) — 5 companies
- `requiredSkills` (line 6) — static for any company selected
- `recommendedTests` (line 7) — static for any company selected

**The dropdown changes company** but data doesn't change — needs API:
```jsx
useEffect(() => {
  apiGet(`/company-prep/${company}`).then(setCompanyData);
}, [company]);
```

**API needed:**
```
GET /company-prep/companies
Returns: [string]  ← list of available companies

GET /company-prep/:company
Returns: {
  requiredSkills: [string],
  recommendedTests: [string],
  avgPackage: string,
  hiringPattern: string
}
```

**"View Preparation Plan" button:**
```
GET /company-prep/:company/plan
Returns: { weeks: [...] }
```

---

### 21. `StreaksBadges.jsx` → `/badges`
**Hardcoded:**
- Streak: `7 Days` (line 20)
- `badges` array (lines 4–10) — 5 badges with earned status

**API needed:**
```
GET /user/badges
Returns: {
  currentStreak: number,
  longestStreak: number,
  badges: [{ name, icon, earned: bool, earnedDate?: string }]
}

GET /user/badges/all   ← for "View All Badges" button
```

---

### 22. `LearningResources.jsx` → `/resources`
**Hardcoded:** `resources` array (lines 7–12) — 4 static resources.  
**"Bookmarks" tab** shows nothing (no data).

**API needed:**
```
GET /resources?tab=for-you|bookmarks
Returns: [{
  title: string,
  meta: string,
  icon: string,
  url: string
}]

POST /resources/bookmark
Body:    { resourceId: string }
Returns: { success: bool }
```

**"View All Resources" button:**
```
GET /resources/all?page=1
```

---

### 23. `InterviewQuestionBank.jsx` → `/interview-bank`
**Hardcoded:** `banks` object (lines 7–22) — Technical (4 categories), HR (2), Project (2).

**API needed:**
```
GET /interview/questions?category=Technical|HR|Project
Returns: [{ name, count: number }]

GET /interview/questions/:category/:bank
Returns: [{ id, question, difficulty, hint? }]
```

**"Practice Now" button** — needs to start a practice session:
```
POST /interview/practice/start
Body:    { category, bank }
Returns: { sessionId, firstQuestion }
```

---

## 📊 Complete API Endpoint Summary

| # | Method | Endpoint | Used In |
|---|--------|----------|---------|
| 1 | POST | `/auth/login` | Login |
| 2 | GET | `/dashboard/summary` | Dashboard |
| 3 | GET | `/skills/gap` | SkillGap |
| 4 | GET | `/skills/overview` | SkillOverview |
| 5 | GET | `/skills/graph` | SkillGraph |
| 6 | GET | `/skills/graph/detailed` | SkillGraphDetailed |
| 7 | GET | `/skills/score/explain` | ExplainableScore |
| 8 | GET | `/skills/score/methodology` | ExplainableScore |
| 9 | POST | `/resume/upload` | ResumeAnalysis |
| 10 | GET | `/resume/skills` | ResumeAnalysis |
| 11 | GET | `/resume/extracted-skills` | ExtractedSkills |
| 12 | GET | `/practice/tests` | PracticeTests |
| 13 | GET | `/practice/coding/problems` | CodingPractice |
| 14 | POST | `/practice/coding/start` | CodingPractice |
| 15 | POST | `/practice/coding/submit` | CodingPractice |
| 16 | POST | `/interview/start` | AIInterview |
| 17 | POST | `/interview/respond` | AIInterview |
| 18 | GET | `/interview/questions` | InterviewQuestionBank |
| 19 | POST | `/interview/practice/start` | InterviewQuestionBank |
| 20 | GET | `/progress` | Progress |
| 21 | GET | `/recommendations` | Recommendations |
| 22 | POST | `/recommendations/start` | Recommendations |
| 23 | GET | `/roadmap` | PersonalizedRoadmap |
| 24 | GET | `/roadmap/week/:num` | PersonalizedRoadmap |
| 25 | GET | `/jobs/matches` | JobRoleMatching |
| 26 | GET | `/jobs/matches/:id/details` | JobRoleMatching |
| 27 | GET | `/challenge/today` | DailyChallenge |
| 28 | POST | `/challenge/complete` | DailyChallenge |
| 29 | GET | `/notifications` | SmartNotifications |
| 30 | POST | `/notifications/mark-read` | SmartNotifications |
| 31 | GET | `/company-prep/companies` | CompanyPreparation |
| 32 | GET | `/company-prep/:company` | CompanyPreparation |
| 33 | GET | `/company-prep/:company/plan` | CompanyPreparation |
| 34 | GET | `/user/badges` | StreaksBadges |
| 35 | GET | `/resources` | LearningResources |
| 36 | POST | `/resources/bookmark` | LearningResources |

**Total: 36 API endpoints** (previous guide said ~21 — was incomplete)

---

## ⚠️ Pages Where Frontend Also Needs Fixing

These pages have **buttons with no onClick** — the frontend dev needs to add them too:

| Page | Button | What needs adding |
|------|--------|-------------------|
| CodingPractice | Per-problem "Start" | Click handler + API call |
| JobRoleMatching | "View Details" | onClick + modal/route |
| AIInterview | "Next Question" | onClick wired to API |
| DailyChallenge | Checkboxes | onClick to mark task done |
| PersonalizedRoadmap | "View Full Roadmap" | onClick or expand logic |
| CompanyPreparation | "View Preparation Plan" | onClick + API call |
| LearningResources | Each resource card | Clickable link to URL |
| InterviewQuestionBank | Per-bank row | onClick to open questions |

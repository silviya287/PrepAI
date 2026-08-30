import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SkillGap from "./pages/SkillGap";
import Recommendations from "./pages/Recommendations";
import ResumeAnalysis from "./pages/ResumeAnalysis";
import PracticeTests from "./pages/PracticeTests";
import CodingPractice from "./pages/CodingPractice";
import AIInterview from "./pages/AIInterview";
import Progress from "./pages/Progress";
import SkillOverview from "./pages/SkillOverview";
import SkillGraph from "./pages/SkillGraph";
import ExtractedSkills from "./pages/ExtractedSkills";
import JobRoleMatching from "./pages/JobRoleMatching";
import ExplainableScore from "./pages/ExplainableScore";
import PersonalizedRoadmap from "./pages/PersonalizedRoadmap";
import DailyChallenge from "./pages/DailyChallenge";
import SmartNotifications from "./pages/SmartNotifications";
import CompanyPreparation from "./pages/CompanyPreparation";
import StreaksBadges from "./pages/StreaksBadges";
import LearningResources from "./pages/LearningResources";
import InterviewQuestionBank from "./pages/InterviewQuestionBank";
import SkillGraphDetailed from "./pages/SkillGraphDetailed";

export default function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/skills" element={<SkillGap />} />
          <Route path="/roadmap" element={<Recommendations />} />
          <Route path="/profile" element={<ResumeAnalysis />} />
          <Route path="/practice" element={<PracticeTests />} />
          <Route path="/practice/coding" element={<CodingPractice />} />
          <Route path="/practice/interview" element={<AIInterview />} />
          <Route path="/progress" element={<Progress />} />

          <Route path="/skills/overview" element={<SkillOverview />} />
          <Route path="/skills/graph" element={<SkillGraph />} />
          <Route path="/skills/graph-detailed" element={<SkillGraphDetailed />} />
          <Route path="/resume/extracted-skills" element={<ExtractedSkills />} />
          <Route path="/jobs" element={<JobRoleMatching />} />
          <Route path="/skills/explainable-score" element={<ExplainableScore />} />
          <Route path="/roadmap/full" element={<PersonalizedRoadmap />} />
          <Route path="/challenge" element={<DailyChallenge />} />
          <Route path="/notifications" element={<SmartNotifications />} />
          <Route path="/company-prep" element={<CompanyPreparation />} />
          <Route path="/badges" element={<StreaksBadges />} />
          <Route path="/resources" element={<LearningResources />} />
          <Route path="/interview-bank" element={<InterviewQuestionBank />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

from skill_gap import analyze_skill_gap


student_id = 101
target_role = "Software Developer"

current_skills = {
    "Python": 80,
    "SQL": 60,
    "React": 40
}

required_skills = {
    "Python": 80,
    "DSA": 90,
    "DBMS": 75,
    "SQL": 70,
    "Git": 60
}


result = analyze_skill_gap(
    student_id,
    target_role,
    current_skills,
    required_skills
)

print(result)
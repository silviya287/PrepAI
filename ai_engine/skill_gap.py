def normalize_skills(skills):
    """
    Normalize skill names so comparisons are case-insensitive.
    Example: python, Python, PYTHON -> python
    """
    return {
        skill.strip().lower(): level
        for skill, level in skills.items()
    }


def analyze_skill_gap(trainee_id, target_role, current_skills, required_skills):
    """
    Compare a trainee's current competency levels with the
    competency levels required for a target role.
    """

    current_skills = normalize_skills(current_skills)
    required_skills = normalize_skills(required_skills)

    matched_skills = []
    weak_skills = []

    total_match = 0
    total_required = 0

    for skill, required_level in required_skills.items():

        current_level = current_skills.get(skill, 0)

        match = min(current_level, required_level)

        total_match += match
        total_required += required_level

        gap = max(required_level - current_level, 0)

        if current_level >= required_level:
            matched_skills.append(skill.title())
        else:
            weak_skills.append({
                "skill": skill.title(),
                "current_level": current_level,
                "required_level": required_level,
                "gap": gap
            })

    overall_skill_match = 0

    if total_required > 0:
        overall_skill_match = round(
            (total_match / total_required) * 100,
            2
        )

    return {
        "trainee_id": trainee_id,
        "target_role": target_role,
        "matched_skills": matched_skills,
        "weak_skills": weak_skills,
        "overall_skill_match": overall_skill_match
    }
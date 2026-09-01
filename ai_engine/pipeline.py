from .skill_gap import analyze_skill_gap
from .outcome_analysis import analyze_outcome
from .impact_analysis import analyze_impact
from .recommendations import generate_recommendations


def analyze_trainee(
    trainee_id,
    target_role,
    current_skills,
    required_skills,
    employment_status,
    employment_before,
    employment_after,
    income_before=0,
    income_after=0,
    months_to_employment=None,
    retained_employment=False
):
    """
    Run the complete AI analysis pipeline for a trainee.

    The pipeline combines:
    1. Skill gap analysis
    2. Employment outcome analysis
    3. Training impact analysis
    4. Personalized recommendations
    """

    # Step 1: Analyze skill gap
    skill_gap = analyze_skill_gap(
        trainee_id,
        target_role,
        current_skills,
        required_skills
    )

    # Step 2: Analyze employment outcome
    outcome = analyze_outcome(
        trainee_id,
        employment_status,
        months_to_employment,
        income_after,
        retained_employment
    )

    # Step 3: Analyze training impact
    impact = analyze_impact(
        trainee_id,
        employment_before,
        employment_after,
        income_before,
        income_after,
        retained_employment
    )

    # Step 4: Generate recommendations
    recommendations = generate_recommendations(
        skill_gap["weak_skills"],
        outcome["employment_status"],
        impact["impact_category"]
    )

    # Final combined result
    return {
        "trainee_id": trainee_id,
        "target_role": target_role,
        "skill_gap": skill_gap,
        "outcome": outcome,
        "impact": impact,
        "recommendations": recommendations
    }
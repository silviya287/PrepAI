def generate_recommendations(
    skill_gaps,
    employment_status,
    impact_category
):
    """
    Generate simple, explainable recommendations for a trainee
    based on skill gaps, employment status, and skilling impact.
    """

    employment_status = employment_status.strip().lower()
    impact_category = impact_category.strip().lower()

    recommendations = []

    # Skill-gap based recommendations
    for gap in skill_gaps:
        if gap.get("gap", 0) > 0:
            recommendations.append(
                f"Improve {gap['skill']} through targeted training."
            )

    # Employment-based recommendations
    if employment_status == "unemployed":
        recommendations.append(
            "Consider additional job-oriented training and employment support."
        )

    elif employment_status == "self_employed":
        recommendations.append(
            "Consider entrepreneurship and business development support."
        )

    elif employment_status == "apprentice":
        recommendations.append(
            "Continue practical training and monitor transition to employment."
        )

    # Impact-based recommendations
    if impact_category == "negative":
        recommendations.append(
            "Review the training intervention and provide additional support."
        )

    elif impact_category == "low":
        recommendations.append(
            "Consider remedial training and closer follow-up."
        )

    elif impact_category == "moderate":
        recommendations.append(
            "Continue skill development and monitor employment progression."
        )

    elif impact_category == "positive":
        recommendations.append(
            "Continue monitoring the trainee's employment and skill progression."
        )

    return {
        "recommendations": recommendations,
        "recommendation_count": len(recommendations)
    }
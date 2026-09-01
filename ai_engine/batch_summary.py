def summarize_batch(results):
    """
    Generate summary statistics from multiple trainee analysis results.

    The function summarizes skill performance, employment outcomes,
    and training impact across the entire batch.
    """

    total_trainees = len(results)

    if total_trainees == 0:
        return {
            "total_trainees": 0,
            "employed_count": 0,
            "unemployed_count": 0,
            "self_employed_count": 0,
            "average_skill_match": 0,
            "employment_improvement_rate": 0,
            "positive_impact_count": 0,
            "moderate_impact_count": 0,
            "negative_impact_count": 0
        }

    employed_count = 0
    unemployed_count = 0
    self_employed_count = 0

    total_skill_match = 0
    employment_improvements = 0

    positive_impact_count = 0
    moderate_impact_count = 0
    negative_impact_count = 0

    for result in results:
        outcome = result["outcome"]
        skill_gap = result["skill_gap"]
        impact = result["impact"]

        employment_status = outcome["employment_status"]

        if employment_status == "employed":
            employed_count += 1

        elif employment_status == "unemployed":
            unemployed_count += 1

        elif employment_status == "self_employed":
            self_employed_count += 1

        total_skill_match += skill_gap["overall_skill_match"]

        if impact["employment_improved"]:
            employment_improvements += 1

        impact_category = impact["impact_category"]

        if impact_category == "positive":
            positive_impact_count += 1

        elif impact_category == "moderate":
            moderate_impact_count += 1

        elif impact_category == "negative":
            negative_impact_count += 1

    average_skill_match = round(
        total_skill_match / total_trainees,
        2
    )

    employment_improvement_rate = round(
        (employment_improvements / total_trainees) * 100,
        2
    )

    return {
        "total_trainees": total_trainees,
        "employed_count": employed_count,
        "unemployed_count": unemployed_count,
        "self_employed_count": self_employed_count,
        "average_skill_match": average_skill_match,
        "employment_improvement_rate": employment_improvement_rate,
        "positive_impact_count": positive_impact_count,
        "moderate_impact_count": moderate_impact_count,
        "negative_impact_count": negative_impact_count
    }
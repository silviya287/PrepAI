def analyze_impact(
    trainee_id,
    employment_before,
    employment_after,
    income_before=0,
    income_after=0,
    retained_employment=False
):
    """
    Analyze the impact of a skilling initiative on a trainee.

    The analysis compares employment and income before and after
    the training intervention.
    """

    employment_before = employment_before.strip().lower()
    employment_after = employment_after.strip().lower()

    employed_statuses = {
        "employed",
        "self_employed"
    }

    was_employed = employment_before in employed_statuses
    is_employed = employment_after in employed_statuses

    employment_improved = not was_employed and is_employed

    income_change = income_after - income_before

    income_change_percentage = 0

    if income_before > 0:
        income_change_percentage = round(
            (income_change / income_before) * 100,
            2
        )

    if employment_improved and income_change > 0:
        impact_score = 100
        impact_category = "positive"

    elif is_employed and (income_change > 0 or retained_employment):
        impact_score = 75
        impact_category = "moderate"

    elif is_employed:
        impact_score = 50
        impact_category = "low"

    else:
        impact_score = 0
        impact_category = "negative"

    return {
        "trainee_id": trainee_id,
        "employment_before": employment_before,
        "employment_after": employment_after,
        "employment_improved": employment_improved,
        "income_before": income_before,
        "income_after": income_after,
        "income_change": income_change,
        "income_change_percentage": income_change_percentage,
        "retained_employment": retained_employment,
        "impact_score": impact_score,
        "impact_category": impact_category
    }
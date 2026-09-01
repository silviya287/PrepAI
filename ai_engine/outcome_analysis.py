def analyze_outcome(
    trainee_id,
    employment_status,
    months_to_employment=None,
    monthly_income=None,
    retained_employment=None
):
    """
    Analyze a trainee's employment outcome after a skilling program.

    Employment status can be:
    employed, unemployed, self_employed, apprentice
    """

    employment_status = employment_status.strip().lower()

    valid_statuses = {
        "employed",
        "unemployed",
        "self_employed",
        "apprentice"
    }

    if employment_status not in valid_statuses:
        raise ValueError(
            "Invalid employment status. "
            "Use employed, unemployed, self_employed, or apprentice."
        )

    outcome = {
        "trainee_id": trainee_id,
        "employment_status": employment_status,
        "months_to_employment": months_to_employment,
        "monthly_income": monthly_income,
        "retained_employment": retained_employment
    }

    if employment_status == "employed":
        outcome["outcome_category"] = "positive"

    elif employment_status == "self_employed":
        outcome["outcome_category"] = "positive"

    elif employment_status == "apprentice":
        outcome["outcome_category"] = "developing"

    else:
        outcome["outcome_category"] = "needs_support"

    return outcome
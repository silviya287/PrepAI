from .pipeline import analyze_trainee


def analyze_batch(trainees):
    """
    Analyze multiple trainees using the complete AI pipeline.

    Each trainee must contain the inputs required by analyze_trainee().
    Returns one analysis result for every trainee.
    """

    results = []

    for trainee in trainees:
        result = analyze_trainee(
            trainee_id=trainee["trainee_id"],
            target_role=trainee["target_role"],
            current_skills=trainee["current_skills"],
            required_skills=trainee["required_skills"],
            employment_status=trainee["employment_status"],
            employment_before=trainee["employment_before"],
            employment_after=trainee["employment_after"],
            income_before=trainee.get("income_before", 0),
            income_after=trainee.get("income_after", 0),
            months_to_employment=trainee.get("months_to_employment"),
            retained_employment=trainee.get("retained_employment", False)
        )

        results.append(result)

    return results
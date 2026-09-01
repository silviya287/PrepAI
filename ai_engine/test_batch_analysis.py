from ai_engine.batch_analysis import analyze_batch


def test_analyze_batch():
    trainees = [
        {
            "trainee_id": "T001",
            "target_role": "Data Analyst",
            "current_skills": {"Python": 60, "SQL": 40},
            "required_skills": {"Python": 80, "SQL": 80},
            "employment_status": "employed",
            "employment_before": "unemployed",
            "employment_after": "employed",
            "income_before": 0,
            "income_after": 25000,
            "months_to_employment": 3,
            "retained_employment": True
        },
        {
            "trainee_id": "T002",
            "target_role": "Python Developer",
            "current_skills": {"Python": 85, "Git": 70},
            "required_skills": {"Python": 80, "Git": 80},
            "employment_status": "unemployed",
            "employment_before": "unemployed",
            "employment_after": "unemployed",
            "income_before": 0,
            "income_after": 0,
            "retained_employment": False
        }
    ]

    results = analyze_batch(trainees)

    assert len(results) == 2

    assert results[0]["trainee_id"] == "T001"
    assert results[0]["impact"]["impact_category"] == "positive"

    assert results[1]["trainee_id"] == "T002"
    assert results[1]["impact"]["impact_category"] == "negative"
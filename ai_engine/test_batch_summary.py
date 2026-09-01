from ai_engine.batch_analysis import analyze_batch
from ai_engine.batch_summary import summarize_batch


def test_summarize_batch():
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
            "months_to_employment": None,
            "retained_employment": False
        },
        {
            "trainee_id": "T003",
            "target_role": "Web Developer",
            "current_skills": {"HTML": 90, "CSS": 80},
            "required_skills": {"HTML": 80, "CSS": 80, "JavaScript": 70},
            "employment_status": "self_employed",
            "employment_before": "employed",
            "employment_after": "self_employed",
            "income_before": 18000,
            "income_after": 30000,
            "months_to_employment": 1,
            "retained_employment": True
        }
    ]

    results = analyze_batch(trainees)
    summary = summarize_batch(results)

    assert summary["total_trainees"] == 3
    assert summary["employed_count"] == 1
    assert summary["unemployed_count"] == 1
    assert summary["self_employed_count"] == 1

    assert summary["average_skill_match"] == 75.27
    assert summary["employment_improvement_rate"] == 33.33

    assert summary["positive_impact_count"] == 1
    assert summary["moderate_impact_count"] == 1
    assert summary["negative_impact_count"] == 1
from ai_engine.pipeline import analyze_trainee


def test_analyze_trainee_pipeline():
    result = analyze_trainee(
        trainee_id="T001",
        target_role="Data Analyst",
        current_skills={
            "Python": 60,
            "SQL": 40
        },
        required_skills={
            "Python": 80,
            "SQL": 80
        },
        employment_status="employed",
        employment_before="unemployed",
        employment_after="employed",
        income_before=0,
        income_after=25000,
        months_to_employment=3,
        retained_employment=True
    )

    assert result["trainee_id"] == "T001"
    assert result["target_role"] == "Data Analyst"

    assert result["skill_gap"]["overall_skill_match"] == 62.5
    assert len(result["skill_gap"]["weak_skills"]) == 2

    assert result["outcome"]["outcome_category"] == "positive"

    assert result["impact"]["employment_improved"] is True
    assert result["impact"]["impact_score"] == 100
    assert result["impact"]["impact_category"] == "positive"

    assert result["recommendations"]["recommendation_count"] == 3
from ai_engine.recommendations import generate_recommendations


def test_unemployed_with_skill_gaps():
    result = generate_recommendations(
        [
            {"skill": "SQL", "gap": 30},
            {"skill": "Python", "gap": 10}
        ],
        "unemployed",
        "negative"
    )

    assert result["recommendation_count"] == 4
    assert "Improve SQL through targeted training." in result["recommendations"]
    assert "Improve Python through targeted training." in result["recommendations"]


def test_self_employed():
    result = generate_recommendations(
        [],
        "self_employed",
        "positive"
    )

    assert result["recommendation_count"] == 2
    assert any(
        "entrepreneurship" in recommendation
        for recommendation in result["recommendations"]
    )


def test_apprentice():
    result = generate_recommendations(
        [],
        "apprentice",
        "moderate"
    )

    assert result["recommendation_count"] == 2


def test_low_impact():
    result = generate_recommendations(
        [],
        "employed",
        "low"
    )

    assert result["recommendation_count"] == 1
    assert "remedial training" in result["recommendations"][0]


def test_no_skill_gap_positive_outcome():
    result = generate_recommendations(
        [],
        "employed",
        "positive"
    )

    assert result["recommendation_count"] == 1
    assert result["recommendations"][0] == (
        "Continue monitoring the trainee's employment and skill progression."
    )
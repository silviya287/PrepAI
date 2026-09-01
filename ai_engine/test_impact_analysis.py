from ai_engine.impact_analysis import analyze_impact


def test_positive_impact():
    result = analyze_impact(
        "T001",
        "unemployed",
        "employed",
        0,
        25000,
        True
    )

    assert result["employment_improved"] is True
    assert result["impact_score"] == 100
    assert result["impact_category"] == "positive"


def test_moderate_impact():
    result = analyze_impact(
        "T002",
        "employed",
        "employed",
        20000,
        25000,
        True
    )

    assert result["income_change"] == 5000
    assert result["income_change_percentage"] == 25.0
    assert result["impact_score"] == 75
    assert result["impact_category"] == "moderate"


def test_low_impact():
    result = analyze_impact(
        "T003",
        "employed",
        "employed",
        20000,
        20000,
        False
    )

    assert result["income_change"] == 0
    assert result["impact_score"] == 50
    assert result["impact_category"] == "low"


def test_negative_impact():
    result = analyze_impact(
        "T004",
        "unemployed",
        "unemployed",
        0,
        0,
        False
    )

    assert result["employment_improved"] is False
    assert result["impact_score"] == 0
    assert result["impact_category"] == "negative"


def test_self_employment():
    result = analyze_impact(
        "T005",
        "unemployed",
        "self_employed",
        0,
        18000,
        True
    )

    assert result["employment_improved"] is True
    assert result["impact_category"] == "positive"
from ai_engine.outcome_analysis import analyze_outcome


def test_employed_outcome():
    result = analyze_outcome(
        "T001",
        "employed",
        3,
        25000,
        True
    )

    assert result["employment_status"] == "employed"
    assert result["outcome_category"] == "positive"
    assert result["months_to_employment"] == 3
    assert result["monthly_income"] == 25000
    assert result["retained_employment"] is True


def test_self_employed_outcome():
    result = analyze_outcome(
        "T002",
        "self_employed"
    )

    assert result["outcome_category"] == "positive"


def test_apprentice_outcome():
    result = analyze_outcome(
        "T003",
        "apprentice"
    )

    assert result["outcome_category"] == "developing"


def test_unemployed_outcome():
    result = analyze_outcome(
        "T004",
        "unemployed"
    )

    assert result["outcome_category"] == "needs_support"


def test_invalid_status():
    try:
        analyze_outcome("T005", "invalid_status")
        assert False
    except ValueError:
        assert True
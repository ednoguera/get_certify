from extract_csv import (
    read_file,
    json_generator,
    json_reader,
    json_location,
    file_location
)
import json


def test_if_score_greater_thant_0():
    given = False

    with open(json_location, 'r') as file:
        jsonfile = json.loads(file.read())

        for row in jsonfile:
            if row["score"] == "0%":
                given = True

    expected = False

    assert given == expected

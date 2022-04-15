from pprint import pprint
import inquirer
import json
import sys

file = open(sys.argv[1])
questions = json.load(file)

answers = {}

for questionsID in questions:
    question = questions[questionsID]

    questionsPrompt = [
        inquirer.List(
            "correct",
            message=questionsID+ ": " + question["question"],
            choices=[question["answers"][0], question["answers"][1], question["answers"][2]],
        ),
    ]

    answer = inquirer.prompt(questionsPrompt)
    answers[questionsID] = question["answers"].index(answer["correct"]) 

with open("answers_" + sys.argv[1], 'w') as f:
    json.dump(answers, f)


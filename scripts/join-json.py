import json
import glob
import collections

files = [f for f in glob.glob("./*.json")]
filesData = {}
for f in files:
    filesData[f] = json.load(open(f))

questions = {}

for data in filesData:
    if "questions" in data:
        for question in filesData[data]:
            questions[question] = filesData[data][question]

for data in filesData:
    if "answers" in data:
        for answer in filesData[data]:
            questions[answer]["correct"] = filesData[data][answer]

questions = collections.OrderedDict(sorted(questions.items()))

with open("./questions.json", 'w') as f:
    json.dump(questions, f)
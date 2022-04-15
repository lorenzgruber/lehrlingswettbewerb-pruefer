import pdfplumber
import re
import json
import sys

firstPage = int(sys.argv[1])
lastPage = int(sys.argv[2])

def readPage(page):
    with pdfplumber.open("./fragenkatalog.pdf") as pdf:
        pageText = pdf.pages[page].extract_text()

        questionIDs = re.findall("[A-Z]\d{2}.", pageText)
        questions = re.split("[A-Z]\d{2}.", pageText)
        del questions[0]

        for i in range(len(questionIDs)):
            question = re.split("\so\s", questions[i])
            for j in range(len(question)):
                question[j] = question[j].replace("\n", "")
                question[j] = re.sub("^\s*|[ \f\t\v]+$","", question[j])
                question[j] = re.sub("[ ]{2,}"," ", question[j])
                question[j] = re.sub("(?<=\d)o","°", question[j])
                question[j] = re.sub("\s(?=%)","", question[j])

            if len(question) == 4:
                result[questionIDs[i].replace(".", "")] = {
                    "question": question[0],
                    "answers": [
                        question[1],
                        question[2],
                        question[3],
                    ]
                }


result = {}

for i in range(firstPage-1, lastPage+1, 1):
    readPage(i)

with open(sys.argv[3], 'w') as f:
    json.dump(result, f)
#/usr/bin/python3

wordList = open('../src/assets/words-list.txt', 'r')
lines = wordList.readlines()
wordList.close()
json = '{"0":"brandon"'
count = 1
for line in lines:
  json+=', "' + str(count) + '": "' + line.strip() + '"'
  count+=1
json += '}'

jsonFile = open('../src/assets/words-list.json', 'w')
jsonFile.write(json)
jsonFile.close


import requests, re
algebra = re.compile("algebra",re.IGNORECASE)
sitename = re.compile("Website:</strong> <a href=\".*>")
stripAgain = re.compile("http.*</a>")



def getPercentage(urllist):
	count=0
	count = float(count)
	for url in urllist:
		if (hastheAlgebra(requests.get(url,timeout=1).text)):
			count+=1
	return "{} percent of the sites had the word algebra!".format(count/float(len(urllist)))

def hastheAlgebra(text):
	match = algebra.search(text)
	if match:
		return True
	return False

def getmathSites():
	mathSites = []
	someList = sitename.findall(requests.get("https://mathematics.stanford.edu/people/graduate-students/",timeout=4).text)
	for i in range(0,len(someList)-1):
		match = stripAgain.search(sitename.findall(requests.get("https://mathematics.stanford.edu/people/graduate-students/",timeout=4).text)[i])
		if match:
			mathSites.append(match.group(0).split("\"")[0])
	return mathSites

print(getmathSites())
print(len(getmathSites()))
print(getPercentage(getmathSites()))


"""
print(sitename.findall(requests.get("https://mathematics.stanford.edu/people/graduate-students/",timeout=4).text)[0])
print("one")
print(sitename.findall(requests.get("https://mathematics.stanford.edu/people/graduate-students/",timeout=4).text)[1])
print("two")
print(sitename.findall(requests.get("https://mathematics.stanford.edu/people/graduate-students/",timeout=4).text)[2])
print("three")


match = stripAgain.search(sitename.findall(requests.get("https://mathematics.stanford.edu/people/graduate-students/",timeout=4).text)[0])

if match:
	print("found it!")
	print(match.group(0).split("\"")[0])

"""

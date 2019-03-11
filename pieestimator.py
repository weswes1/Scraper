import math
# s_1 := x_1^2 = 2
s = 2.0
# pi_i = 2^i sqrt(s_i)

# Loop invariant is s = s_{i-1} at entry
for i in range(1,10):
	s = s/(2*(1+math.sqrt(1-s/4)))
	# Check the value of pi at each iteration of the loop
	print("The current estimate of pi is {}".format(2*math.pow(2,i)*math.sqrt(s)))

	
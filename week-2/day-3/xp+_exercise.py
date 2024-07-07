student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

student_averages = {}

for student, grades in student_grades.items():
    average = sum(grades) / len(grades)
    student_averages[student] = average

print(student_averages)

student_letter_grades = {}
    
for student, average in student_averages.items():
    if average > 89:
        student_letter_grades[student] = "A"
    if 80 <= average <= 89:
        student_letter_grades[student] = "B"
    if 70 <= average <= 79:
        student_letter_grades[student] = "C"
    if 60 <= average <= 69:
        student_letter_grades[student] = "D"
    if average < 60:
        student_letter_grades[student] = "F"

print(student_letter_grades)
    
class_average = sum(student_averages.values()) / len(student_averages)
print(class_average)

for student, average in student_averages.items():
    for student, letter in student_letter_grades.items():
        print(f'{student} {average} {letter}')   
    break 
